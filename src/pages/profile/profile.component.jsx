

import React from "react";
import "../profile/_profile.styles.scss";

//Components
import NavBar from "../../components/navbar/navbar.component";
import Plan from "../../components/plans/plans.component";

//firebase
import { auth } from "../../firebase";

//redux
import { user_Selector } from "../../features/userSlice";
import { useSelector } from "react-redux";


const ProfileScreen = () => {

   
    const user = useSelector(user_Selector);


    return(

        <div className="profileScreen">

                <NavBar/>

                <div className="profileScreen_body">
                    <h1>Edit Profile</h1>

                    <div className="profileScreen_info">

                        <img src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png" alt="" />

                        <div className="profileScreen_details">

                            <h2>{user.email}</h2>

                            <div className="profileScreen_plans">

                                <h3>Plans</h3>

                                <Plan/>

                                <button onClick={() => auth.signOut()} 
                                className="profileScreen_signOut">Sign Out</button>
                            </div>

                        </div>
                    </div>
                </div>

        </div>
    )
}

export default ProfileScreen;