import Vue from "vue";
import Router from "vue-router";

import Login from "./views/shared/Login.vue";
import Register from "./views/shared/Signup.vue";
import Home from "./views/shared/home.vue";

//Student Routes
import Student from "./views/student/student.vue";
import StudentCourses from "./components/student/courses.vue";

//Lecturer Routes
import Lecturer from "./views/lecturer/lecturer.vue";
import LecturerCourses from "./components/lecturers/courses.vue";
import LecturerAssignements from "./components/lecturers/assignments.vue";
import LecturerNewAssignment from "./components/lecturers/newassignment.vue";
import LecturerSummary from "./components/lecturers/summary.vue";
import LecturerSingleCourse from "./components/lecturers/singlecourse.vue";


Vue.use(Router);

export default new Router({
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/auth/login",
      name: "Login",
      component: Login
    },
    {
      path: "/auth/register",
      name: "Register",
      component: Register
    },
    {
      path: "/student",
      name: "Student",
      component: Student,
      children: [
        {
          path: "",
          component: StudentCourses,
          name: "courses"
        }
      ]
    },
    {
        path: "/lecturer",
        name: "Lecturer",
        component: Lecturer,
        children: [
          {
            path: "",
            component: LecturerSummary,
            name: "lec-summary"
          },
          {
            path: "/lecturer/courses",
            component: LecturerCourses,
            name: "lec-courses"
          },
          {
            path: "/lecturer/course/:id",
            component: LecturerSingleCourse,
            name: "lec-single_course"
          },
          {
            path: "/lecturer/assignments",
            component: LecturerAssignements,
            name: "lec-assignment"
          },
          {
            path: "/lecturer/new/assignment",
            component: LecturerNewAssignment,
            name: "lec-new_assignment"
          }
        ]
      }
  ]
});
