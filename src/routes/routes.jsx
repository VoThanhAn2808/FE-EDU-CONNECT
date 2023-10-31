import DefaultLayout from '../components/Layout/DefaultLayout/DefaultLayout';
import LoginLayout from '../components/Layout/LoginLayout/LoginLayout';
import ChangePassword from '../pages/ChangePassword/ChangePassword';
import ForgotPassword from '../pages/ForgotPassword/ForgotPassword';
import Introduce from '../pages/Introduce/Introduce';
import Home from "../pages/Client/Home/Home"
import LoginPage from '../pages/Login/LoginPage';
import ProfileStaff from '../pages/Profile/ProfileStaff/ProfilePage';
import ProfileStudent from '../pages/Profile/ProfileStudent/ProfileStudent';
import ProfileTeacher from '../pages/Profile/ProfileTeacher/ProfileTeacher';
import SignUp from "../pages/SignUp/SignUpPage";
import BookTutorPage from "../pages/BookTutor/BookTutorPage";
// import Course10 from "../pages/Client/Course/Course10"
import SubjectPage from "../pages/ListSubject/SubjectPage";
import PhysicsExperiment from "../pages/PhysicsExperiment/PhysicsExperiment";
import ListTutor from '../pages/ListTutor/ListTutorPage';

const publicRoute = [
  { path: '/', component: Home, layout: DefaultLayout },
  { path: '/introduce', component: Introduce, layout: DefaultLayout },
  { path: '/login', component: LoginPage, layout: LoginLayout },
  { path: '/signup', component: SignUp, layout: LoginLayout },
  { path: '/forgotpass', component: ForgotPassword, layout: LoginLayout },
  { path: '/changepass', component: ChangePassword, layout: LoginLayout },
  { path: '/profile-staff', component: ProfileStaff, layout: DefaultLayout },
  { path: '/profile-student', component: ProfileStudent, layout: DefaultLayout },
  { path: '/profile-teacher', component: ProfileTeacher, layout: DefaultLayout },
  {path: '/booktutor', component: BookTutorPage, layout: DefaultLayout},
  { path: '/subject', component: SubjectPage, layout: DefaultLayout},
  { path: '/physics' ,component: PhysicsExperiment, layout: DefaultLayout},
  { path: '/listtutor', component: ListTutor, layout: DefaultLayout},
];
const privateRoute = [];

export { publicRoute, privateRoute };
