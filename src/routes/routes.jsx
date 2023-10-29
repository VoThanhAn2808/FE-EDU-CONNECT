import DefaultLayout from "../components/Layout/DefaultLayout/DefaultLayout";
import LayoutStudent from "../components/Layout/LayoutStudent/LayoutStudent";
import LoginLayout from "../components/Layout/LoginLayout/LoginLayout";
import ChangePassword from "../pages/ChangePassword/ChangePassword";
import ForgotPassword from "../pages/ForgotPassword/ForgotPassword";
import Home from "../pages/Client/Home/Home";
import Introduce from "../pages/Introduce/Introduce";
import LoginPage from "../pages/Login/LoginPage";
import ProfilePage from "../pages/Profile/ProfilePage";
import BookTutorPage from "../pages/BookTutor/BookTutorPage";
import SignUp from "../pages/SignUp/SignUp";
import Course10 from "../pages/Client/Course/Course10";

const publicRoute = [
    {path: '/home', component: Home, layout: DefaultLayout},
    {path: '/introduce', component: Introduce, layout: LayoutStudent},
    {path: '/login', component: LoginPage, layout: LoginLayout},
    {path: '/signup', component: SignUp, layout: LoginLayout},
    {path: '/forgotpass', component: ForgotPassword, layout: LoginLayout},
    {path: '/changepass', component: ChangePassword, layout: LoginLayout},
    {path: '/profile', component: ProfilePage, layout: DefaultLayout },
    {path: '/class10', component: Course10, layout: DefaultLayout },
    {path: '/booktutor', component: BookTutorPage, layout: DefaultLayout},

];
const privateRoute = [
];

export {publicRoute, privateRoute};
