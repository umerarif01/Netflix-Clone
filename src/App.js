import React,{useEffect} from 'react';
import './styles/app.css';

//react router dom
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

//FIREBASE
import { auth } from './firebase';
// import db from './firebase';

//PAGES
import LoginPage from './pages/loginpage/loginpage.component';
import HomeScreen from './pages/homescreen/homescreen.component';
import ProfileScreen from "./pages/profile/profile.component";

//COMPONENTS



//REDUX
import {useDispatch} from "react-redux";
import {logout, user_Selector} from "./features/userSlice";
import {login} from "./features/userSlice";
import { useSelector } from 'react-redux';



function App() {

 const user = useSelector(user_Selector);

  const dispatch = useDispatch();

  useEffect(() => {

    const unsubscribe = auth.onAuthStateChanged(
      
      (userAuth) => {

      if(userAuth){

        //we are logged in
        dispatch(
            
            login({

              uid: userAuth.uid,
              email: userAuth.email,

            })
          
        );
      
      }else{

        //we are logged out
        dispatch(logout());
      }

    })

    return unsubscribe;
    
  }, [dispatch]);

 

  return (

    <div className="app">

           <Router>

             {!user ? (<LoginPage/>) : (

              <Switch>

              <Route path="/profile">
                  <ProfileScreen/>
              </Route>

              <Route exact path="/">
                  <HomeScreen/>
              </Route>
              </Switch>


             )}

              

           </Router>
     
    </div>
  );
}

export default App;
