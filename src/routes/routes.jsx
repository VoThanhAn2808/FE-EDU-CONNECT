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
<<<<<<< HEAD
import ViewInfomationPage from '../pages/Tutor/ViewInfomation/ViewInfomationPage';
=======
import SubmitExercise from '../pages/Student/ExerciseHistory/SubmitExercise';
import ListTutorST from '../pages/Student/ListTutor/ListTutorStPage';
import BookTutorSTPage from '../pages/Student/BookTutor/BookTutorSTPage';
import CalendarTutorSelect from '../pages/Tutor/CalendarTutorSelect/CalendarTutorSelect';
import HomeWorkTutor from '../pages/Tutor/HomeWorkTutor/HomeWorkTutor';
import HomeWorkTutorList from '../pages/Tutor/HomeWorkTutorList/HomeWorkTutorList';
import ProfileStudents from '../pages/Student/Profile/ProfileStudents';
>>>>>>> develop

const publicRoute = [
  { path: '/', component: Home, layout: DefaultLayout, allowedRoles: ["default"]},
  { path: '/subject', component: SubjectPage, layout: DefaultLayout, allowedRoles: ["default"]},
  { path: '/listtutor/:id', component: ListTutor, layout: DefaultLayout, allowedRoles: ["default"]},
  { path: '/booktutor/:tutorid/:classcourseid', component: BookTutorPage, layout: DefaultLayout, allowedRoles: ["default"]},
  { path: '/signup', component: SignUp, layout: LoginLayout},
  { path: '/login', component: LoginPage, layout: LoginLayout},
  { path: '/forgotpass', component: ForgotPassword, layout: LoginLayout},
  { path: '/changepass', component: ChangePassword, layout: LoginLayout},
<<<<<<< HEAD
  { path: '/physics' ,component: PhysicsExperiment, layout: DefaultLayout},
  { path: '/booktime', component: BookTime, layout: LoginLayout},
  { path: '/thankyou', component: ThankYou, layout: LoginLayout},
  { path: '/demo', component : DemoPage, layout: LayoutStudent},
  { path: '/profile-staff', component: ProfileStaff, layout: DefaultLayout},
  { path: '/profile-student', component: ProfileStudent, layout: DefaultLayout},
  { path: '/profile-teacher', component: ProfileTeacher, layout: DefaultLayout},
  { path: '/tutormanagement', component: TutorManagement, layout: LayoutStaff},
  { path: '/studentmanagement', component: StudentManagement, layout: LayoutStaff},
  { path: '/teacherprogramlist', component: TeacherProgramList, layout: LayoutStudent},
  { path: '/calendarstudent', component: CalendarStudent, layout: LayoutStudent},
  { path: '/coursemanagement', component: CourseManagement, layout: LayoutStaff},
  { path: '/trylearningmanagement', component: TryLearningManagement, layout: LayoutStaff},
  { path: '/exerciselist', component : ExerciseListPage, layout : LayoutStaff},
  { path: '/calendartutor', component : CalendarTutor, layout : LayoutTutor},
  { path: '/studentgrade', component : StudentGrade, layout : LayoutStudent},
  { path: '/hometutor', component : HomeTutor, layout : LayoutTutor},
  { path: '/feedback', component : Feedback, layout : LoginLayout},
  { path: '/managerstudent', component : ManagerStudent, layout : LayoutStaff},
  { path: '/feedbacktutor', component : FeedbackTutor, layout : LayoutTutor},
  {path: '/viewinfomationpage', component : ViewInfomationPage, layout: LayoutStudent}
=======
>>>>>>> develop
];
const privateRoute = [
  { path: '/demo', component : DemoPage, layout: LayoutStudent, allowedRoles: ["student"]},
  { path: '/listtutorst/:id', component: ListTutorST, layout: LayoutStudent, allowedRoles: ["student"]},
  { path: '/homestudent', component: HomeStudent, layout: LayoutStudent, allowedRoles: ["student"]},
  { path: '/booktutorst/:tutorid/:classcourseid', component: BookTutorSTPage, layout: LayoutStudent, allowedRoles: ["student"]},
  { path: '/studentgrade/:bookid', component: StudentGrade, layout: LayoutStudent, allowedRoles: ["student"] },
  { path: '/profile-student', component: ProfileStudent, layout: LayoutStudent, allowedRoles: ["student"]},
  { path: '/profilestudent', component: ProfileStudents, layout: LoginLayout, allowedRoles: ["student"]},
  { path: '/calendarstudent', component: CalendarStudent, layout: LayoutStudent, allowedRoles: ["student"]},
  { path: '/teacherprogramlist/:bookid', component: TeacherProgramList, layout: LayoutStudent, allowedRoles: ["student"] },
  { path: '/feedback', component : Feedback, layout : LoginLayout, allowedRoles: ["student"]},
  { path: '/booktime/:tutorId', component: BookTime, layout: LoginLayout, allowedRoles: ["student"] },
  { path: '/thankyou', component: ThankYou, layout: LoginLayout, allowedRoles: ["student"]},
  { path: '/submitExercise/:bookid', component: SubmitExercise, layout: LayoutStudent , allowedRoles: ["student"]},
  { path: '/hometutor', component : HomeTutor, layout : LayoutTutor, allowedRoles: ["tutor"]},
  { path: '/calendartutor', component : CalendarTutor, layout : LayoutTutor, allowedRoles: ["tutor"]},
  { path: '/homeworktutorlist', component : HomeWorkTutorList, layout : LayoutTutor, allowedRoles: ["tutor"]},
  { path: '/calendartutorselect', component : CalendarTutorSelect, layout : LayoutTutor, allowedRoles: ["tutor"]},
  { path: '/feedbacktutor', component : FeedbackTutor, layout : LayoutTutor, allowedRoles: ["tutor"]},
  { path: '/exerciselist', component : ExerciseListPage, layout : LayoutTutor, allowedRoles: ["tutor"]},
  { path: '/profile-teacher', component: ProfileTeacher, layout: LayoutTutor, allowedRoles: ["tutor"]},
  { path: '/homeworktutor', component : HomeWorkTutor, layout : LayoutTutor, allowedRoles: ["tutor"]},
  { path: '/managerstudent', component : ManagerStudent, layout : LayoutTutor, allowedRoles: ["tutor"]},
  { path: '/tutormanagement', component: TutorManagement, layout: LayoutStaff, allowedRoles: ["staff"]},
  { path: '/coursemanagement', component: CourseManagement, layout: LayoutStaff, allowedRoles: ["staff"]},
  { path: '/studentmanagement', component: StudentManagement, layout: LayoutStaff, allowedRoles: ["staff"]},
  { path: '/profile-staff', component: ProfileStaff, layout: LayoutStaff, allowedRoles: ["staff"]},
  { path: '/trylearningmanagement', component: TryLearningManagement, layout: LayoutStaff, allowedRoles: ["staff"]},
];

export { publicRoute, privateRoute };
