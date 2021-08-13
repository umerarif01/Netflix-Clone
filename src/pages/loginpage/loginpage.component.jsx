
import React, { useState } from "react";
import "../loginpage/_loginpage.styles.scss";


//COMPONENTS
import SignInScreen from "../../components/signinscreen/signIn.component";



const LoginPage = () => {


    const [signIn, setSignIn] = useState(false);

    return (

        <div className="loginPage">

            <div className="loginPage_background">

                <img className="loginPage_logo" src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="" />


                <button onClick={() => setSignIn(true)} className="signIn">Sign In</button>

                

                <div className="loginPage_gradient">

                    {signIn ? (<SignInScreen/>) : (

                    <div className="loginPage_body">

                        <div className="getStarted">

                            <h1>Unlimited Movies, TV shows and much more</h1>
                            <h2>Watch Anywhere, Cancel  any time</h2>
                            <h3>Ready to start? Enter your email to create or to start your membership.</h3>

                            <div className="loginPage_input">

                            <form>
                                <input type="email" placeholder="Email Address" />
                                <button onClick={() => setSignIn(true)} className="getStarted_btn">GET STARTED</button>
                            </form>

                            </div>

                        </div>

                    </div>



                    )}

                    
                     
                </div>

                
            </div>

          
        </div>
    )

}

export default LoginPage;