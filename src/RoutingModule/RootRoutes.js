import React from 'react'
import {Route,Routes,BrowserRouter as Router} from 'react-router-dom'
import About from '../Components/About/About'
import Home from '../Components/Home/Home'
import Contact from '../Components/Contact/Contact'
import Feedback from '../Components/Feedback/Feedback'
import Pnf from '../Components/Pnf/Pnf'
import Header from '../Layout/Header'
import T_Cat from '../Topics/T_Cat/T_Cat'
import T_SubCat from '../Topics/T_SubCat/T_SubCat'
import Register from '../Authentication/Registration/Register'
import Login from '../Authentication/Login/Login'
import T_Details from '../Topics/T_Details/T_Details'
import P_Details from '../Product/P_Details/P_Details'
import S_Catagory from '../Product/S_Catagory/S_Catagory'
import P_Catagory from '../Product/P_Catagory/P_Catagory'
import Profile from '../Authentication/Profile'
import Protected from './Protected'
import UnAuth from '../Authentication/UnAuth'


export const RootRoutes = () => {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="" element={<Home />} /> {/*Default path setup*/}
                <Route element={<Protected/> }  >
                <Route path="about_page" element={<About />} />
                <Route path="contact_page/:name" element={<Contact />} />
                <Route path="feedback_page" element={<Feedback />} />
                <Route path="p_catagory" element={<P_Catagory />} />
                </Route>

                <Route path="sub_cat/:pcat" element={<S_Catagory />} />
                <Route path="pDetails/:id" element={<P_Details />} />
                
                <Route path="topics" element={<T_Cat/>}/>
                <Route path="subcat/:tid" element={<T_SubCat />} />
                <Route path="details/:tid/:sid" element={<T_Details/>}/>
               
                
                <Route path="register_page" element={<Register />} />
                <Route path="login_page" element={<Login/>}/>
                <Route path="profile_page" element={<Profile/>}/>
                <Route path="unauth_page" element={<UnAuth/>}/>

                <Route path="*" element={<Pnf />} />
            </Routes>
        </Router>
    )
}

export default RootRoutes