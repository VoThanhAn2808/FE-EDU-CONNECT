import DefaultLayout from '../components/Layout/DefaultLayout/DefaultLayout';
import LoginLayout from '../components/Layout/LoginLayout/LoginLayout';
import LayoutStudent from "../components/Layout/LayoutStudent/LayoutStudent";
import LayoutStaff from "../components/Layout/LayoutStaff/LayoutStaff";
import ChangePassword from "../pages/Logins/ChangePassword/ChangePassword"
import ForgotPassword from '../pages/Logins/ForgotPassword/ForgotPassword';
import Home from "../pages/Guest/Home/Home";
import HomeStudent from "../pages/Student/Home/HomeStudent";
import LoginPage from '../pages//Logins/Login/LoginPage';
import ProfileStaff from '../pages/Profile/ProfileStaff/ProfilePage';
import ProfileStudent from '../pages/Profile/ProfileStudent/ProfileStudent';
import ProfileTeacher from '../pages/Profile/ProfileTeacher/ProfileTeacher';
import SignUp from "../pages/Logins/SignUp/SignUpPage";
import BookTutorPage from "../pages/BookTutor/BookTutorPage";
import SubjectPage from "../pages/ListSubject/SubjectPage";
import PhysicsExperiment from "../pages/PhysicsExperiment/PhysicsExperiment";
import ListTutor from '../pages/ListTutor/ListTutorPage';
import TeacherProgramList from '../pages/Student/TeacherProgramList/TeacherProgramList';
import TutorManagement from '../pages/Staff/TutorManagement';
import StudentManagement from '../pages/Staff/StudentManagement';
import TryLearningManagement from "../pages/Staff/TryLearningManagement";

const publicRoute = [
  { path: '/', component: Home, layout: DefaultLayout},
  { path: '/signup', component: SignUp, layout: LoginLayout},
  { path: '/login', component: LoginPage, layout: LoginLayout},
  { path: '/subject', component: SubjectPage, layout: DefaultLayout},
  { path: '/listtutor', component: ListTutor, layout: DefaultLayout},
  { path: '/booktutor', component: BookTutorPage, layout: DefaultLayout},
  { path: '/homestudent', component: HomeStudent, layout: LayoutStudent},
  { path: '/forgotpass', component: ForgotPassword, layout: LoginLayout},
  { path: '/changepass', component: ChangePassword, layout: LoginLayout},
  { path: '/physics' ,component: PhysicsExperiment, layout: DefaultLayout},
  { path: '/profile-staff', component: ProfileStaff, layout: DefaultLayout},
  { path: '/profile-student', component: ProfileStudent, layout: DefaultLayout},
  { path: '/profile-teacher', component: ProfileTeacher, layout: DefaultLayout},
  { path: '/tutormanagement', component: TutorManagement, layout: LayoutStaff},
  { path: '/studentmanagement', component: StudentManagement, layout: LayoutStaff},
  { path: '/teacherprogramlist', component: TeacherProgramList, layout: LayoutStudent},
  { path: '/trylearningmanagement', component: TryLearningManagement, layout: LayoutStaff},

];
const privateRoute = [];

export { publicRoute, privateRoute };
