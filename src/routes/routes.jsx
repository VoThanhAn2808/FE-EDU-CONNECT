import DefaultLayout from '../components/Layout/DefaultLayout/DefaultLayout';
import LoginLayout from '../components/Layout/LoginLayout/LoginLayout';
import ChangePassword from "../pages/Logins/ChangePassword/ChangePassword"
import ForgotPassword from '../pages/Logins/ForgotPassword/ForgotPassword';
import Home from "../pages/Guest/Home/Home"
import LoginPage from '../pages//Logins/Login/LoginPage';
import ProfileStaff from '../pages/Profile/ProfileStaff/ProfilePage';
import ProfileStudent from '../pages/Profile/ProfileStudent/ProfileStudent';
import ProfileTeacher from '../pages/Profile/ProfileTeacher/ProfileTeacher';
import SignUp from "../pages/Logins/SignUp/SignUpPage";
import BookTutorPage from "../pages/BookTutor/BookTutorPage";
// import Course10 from "../pages/Client/Course/Course10"

const publicRoute = [
  { path: '/', component: Home, layout: DefaultLayout },
  { path: '/login', component: LoginPage, layout: LoginLayout },
  { path: '/signup', component: SignUp, layout: LoginLayout },
  { path: '/forgotpass', component: ForgotPassword, layout: LoginLayout },
  { path: '/changepass', component: ChangePassword, layout: LoginLayout },
  { path: '/profile-staff', component: ProfileStaff, layout: DefaultLayout },
  { path: '/profile-student', component: ProfileStudent, layout: DefaultLayout },
  { path: '/profile-teacher', component: ProfileTeacher, layout: DefaultLayout },
  {path: '/booktutor', component: BookTutorPage, layout: DefaultLayout},
];
const privateRoute = [];

export { publicRoute, privateRoute };
