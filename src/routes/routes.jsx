import DefaultLayout from '../components/Layout/DefaultLayout/DefaultLayout';
import LoginLayout from '../components/Layout/LoginLayout/LoginLayout';
import LayoutStudent from "../components/Layout/LayoutStudent/LayoutStudent";
import LayoutStaff from "../components/Layout/LayoutStaff/LayoutStaff";
import LayoutTutor from '../components/Layout/LayoutTutor/LayoutTutor';
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
import SubjectPage from "../pages/Guest/ListSubject/SubjectPage";
import PhysicsExperiment from "../pages/PhysicsExperiment/PhysicsExperiment";
import ListTutor from '../pages/ListTutor/ListTutorPage';
import TeacherProgramList from '../pages/Student/TeacherProgramList/TeacherProgramList';
import BookTime from '../pages/Student/BookTime/BookTimePage';
import ThankYou from '../pages/Student/ThankYou/ThankYouPage';
import DemoPage from '../pages/Demo/DemoPage';
import TutorManagement from '../pages/Staff/TutorManagement';
import StudentManagement from '../pages/Staff/StudentManagement';
import TryLearningManagement from "../pages/Staff/TryLearningManagement";
import CourseManagement from "../pages/Staff/CourseManagement";
import CalendarStudent from "../pages/Student/CalendarStudent/CalendarStudent";
import ExerciseListPage from '../pages/Tutor/ExerciseList/ExercisePage';
import CalendarTutor from '../pages/Tutor/CalendarTutor/CalendarTutor';
import StudentGrade from "../pages/Student/StudentGrade/StudentGrade";
import HomeTutor from '../pages/Tutor/HomeTutor/HomeTutor';
import Feedback from '../pages/Student/FeedBack/FeedBackPage';
import ManagerStudent from '../pages/Tutor/ManagerStudent/ManagerStudentPage';
import FeedbackTutor from '../pages/Tutor/Feedback/Feedback';

const publicRoute = [
  { path: '/', component: Home, layout: DefaultLayout},
  { path: '/subject', component: SubjectPage, layout: DefaultLayout},
  { path: '/listtutor/:id', component: ListTutor, layout: DefaultLayout},
  { path: '/physics' ,component: PhysicsExperiment, layout: DefaultLayout},
  { path: '/profile-staff', component: ProfileStaff, layout: DefaultLayout},
  { path: '/profile-teacher', component: ProfileTeacher, layout: DefaultLayout},
  { path: '/booktutor/:tutorid/:classcourseid', component: BookTutorPage, layout: DefaultLayout},
  { path: '/signup', component: SignUp, layout: LoginLayout},
  { path: '/login', component: LoginPage, layout: LoginLayout},
  { path: '/booktime', component: BookTime, layout: LoginLayout},
  { path: '/thankyou', component: ThankYou, layout: LoginLayout},
  { path: '/forgotpass', component: ForgotPassword, layout: LoginLayout},
  { path: '/changepass', component: ChangePassword, layout: LoginLayout},
];
const privateRoute = [
  { path: '/demo', component : DemoPage, layout: LayoutStudent},
  { path: '/homestudent', component: HomeStudent, layout: LayoutStudent},
  { path: '/studentgrade', component : StudentGrade, layout : LayoutStudent},
  { path: '/profile-student', component: ProfileStudent, layout: LayoutStudent},
  { path: '/calendarstudent', component: CalendarStudent, layout: LayoutStudent},
  { path: '/teacherprogramlist', component: TeacherProgramList, layout: LayoutStudent},
  { path: '/exerciselist', component : ExerciseListPage, layout : LayoutStaff},
  { path: '/managerstudent', component : ManagerStudent, layout : LayoutStaff},
  { path: '/tutormanagement', component: TutorManagement, layout: LayoutStaff},
  { path: '/coursemanagement', component: CourseManagement, layout: LayoutStaff},
  { path: '/studentmanagement', component: StudentManagement, layout: LayoutStaff},
  { path: '/trylearningmanagement', component: TryLearningManagement, layout: LayoutStaff},
  { path: '/feedback', component : Feedback, layout : LoginLayout},
  { path: '/hometutor', component : HomeTutor, layout : LayoutTutor},
  { path: '/calendartutor', component : CalendarTutor, layout : LayoutTutor},
  { path: '/feedbacktutor', component : FeedbackTutor, layout : LayoutTutor},
];

export { publicRoute, privateRoute };