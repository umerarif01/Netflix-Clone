

import React,{useRef} from "react";
import "../signinscreen/_signIn.styles.scss";

//FIREBASE
import { auth } from "../../firebase";

//animation
// import FlipMove from "react-flip-move";

const SignInScreen = () => {

    const emailRef = useRef(null);
    const passwordRef = useRef(null);


    //register function
    const register = (e) => {

        e.preventDefault();

        auth.createUserWithEmailAndPassword(

            emailRef.current.value,
            passwordRef.current.value,

        ).then((authUser) => {

            console.log(authUser);

        }).catch((error) => {
            
            alert(error.message);
        });
    };


    //sign in function
    const signIn = (e) => {

        e.preventDefault();

        auth.signInWithEmailAndPassword(

            emailRef.current.value,
            passwordRef.current.value,

        ).then((authUser) => {

            console.log(authUser);
        }).catch((error) => {

            alert(error.message);
        });

    };

    return(

       

            <div className="signIn_screen">

                <form>

                    <h1>Sign In</h1>
                    <input ref={emailRef} type="email" placeholder="Email" />
                    <input ref={passwordRef} type="password" placeholder="Password" />
                    <button onClick={signIn} type="submit">Sign In</button>

                </form>

                <h4>
                    <span className="signUp_gray">New to Netflix? </span> 
                    <span onClick={register} className="signUp_now"> Sign up Now.</span> 
                   
                </h4>

            </div>

        

           
        
    )
}

export default SignInScreen;