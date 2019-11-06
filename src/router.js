import Vue from 'vue';
import Router from 'vue-router';

import Login from './views/shared/Login.vue';
import Register from './views/shared/Signup.vue';
import Home from './views/shared/home.vue'
import Student from './views/student/student.vue'
// import Staff from './components/school/staff.vue'
// import AddStaff from './components/school/addStaff.vue'
// import Student from './components/school/student.vue'
// import AddStudent from './components/school/addStudent.vue'
// import StaffContainer from './views/staff/staff.vue'
// import Staff_Student from './components/staff/student'
// import StudentReport from './components/staff/reports'
// import SingleStudentReport from './components/staff/student-report'
// import Password from './components/shared/password'
// import Company from './views/company/company.vue'
// import StudentApplications from './components/company/applications.vue'
// import CompanyStudents from './components/company/student.vue'
// import CompanyStudentReport from './components/company/reports'
// import CompanySingleStudentReport from './components/company/student-report'
// import StudentHome from "./views/student/student"
// import MyApplications from './components/student/applications'
// import MyReports from './components/student/reports'
// import Terminate from './components/student/terminate'
// import NewReport from './components/student/create-report'

Vue.use(Router);

export default new Router({
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/auth/login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/auth/register',
      name: 'Register',
      component: Register,
    },
    {
        path: '/student',
        name: 'Student',
        component: Student,
      },
    // {
    //   path: '/school',
    //   name: 'School',
    //   component: School,
    //   children: [{
    //     path: '',
    //     component: Staff,
    //     name: "school"
    //   },
    //   {
    //     path: '/school/staff',
    //     component: Staff,
    //     name: "school"
    //   },
    //   {
    //     path: '/school/staff/add',
    //     component: AddStaff,
    //     name: "add-staff"
    //   },
    //   {
    //     path: '/school/students',
    //     component: Student,
    //     name: "student"
    //   },
    //   {
    //     path: '/school/students/add',
    //     component: AddStudent,
    //     name: "add-student"
    //   },
    //   {
    //     path: '/school/change-password',
    //     component: Password,
    //     name: "change-password"
    //   }
    //   ]
    // }
  ],
});