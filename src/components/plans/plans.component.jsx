
import React, { useEffect, useState } from "react";
import "../plans/_plans.styles.scss";

//redux
import { useSelector } from "react-redux";
import { user_Selector } from "../../features/userSlice";

//firebase
import db from "../../firebase";

//STRIPE
import {loadStripe} from "@stripe/stripe-js";




const Plan = () => {


    const user = useSelector(user_Selector);
    const [products, setProducts] = useState([]);

    useEffect(() => {

            db.collection("products")
            .where('active', '==', true)
            .get()
            .then((querySnapshot) => {

                const products = {};
                querySnapshot.forEach(async (productDoc) => {

                    products[productDoc.id] = productDoc.data();
                    const priceSnap = await productDoc.ref.collection("prices").get();
                    priceSnap.docs.forEach(price => {

                        products[productDoc.id].prices = {

                            priceId : price.id,
                            priceData: price.data(),
                        }
                    });

                });

                setProducts(products);
            }); 


    }, []);


    const loadCheckout = async (priceId) => {

        const docRef = await db.collection("customers")
        .doc(user.uid)
        .collection("checkout_sessions")
        .add({

            price: priceId,
            success_url: window.location.origin,
            cancel_url: window.location.origin,

        });

        docRef.onSnapshot(async (snap) => {

            const {error, sessionId} = snap.data();

            if (error) {

                //show error to your customers
                //inspect your function logs in firebase
                alert(`An Error has ocurred: ${error.message}`)
            }

            if(sessionId) {

                //if we have a session, then redirect to stripe
                //initiate stripe

                const stripe = await loadStripe("pk_test_51JGjNmBGz2gPw3QtHHYS36cSFLiorNZEmb1aEnTpEJ7dXrgsWX1dFCSXVB7079VpqXhfOUn3BpEQpB5R5scuYnrc00yfdFXAA8");

                stripe.redirectToCheckout({sessionId});
            }
        })

    }

    return(

        <div className="planScreen">

            {Object.entries(products).map(([productId, productData]) => {

                return(

                    <div className="planSection">

                        <div className="planInfo">
                           <h5> {productData.name} </h5>
                           <h6> {productData.description} </h6>
                        </div>

                        <button onClick={() => loadCheckout(productData.prices.priceId)}>Subscribe</button>
                    </div>

                );
            })}

        </div>
    )
}

export default Plan;