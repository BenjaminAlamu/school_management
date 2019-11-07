import Vue from "vue";
import Router from "vue-router";

import Login from "./views/shared/Login.vue";
import Register from "./views/shared/Signup.vue";
import Home from "./views/shared/home.vue";

//Admin Routes
import Admin from "./views/admin/admin.vue";
import AdminAddCourse from "./components/admin/addcourse.vue";
import AdminCourses from "./components/admin/courses.vue";
import AdminAddLecturer from "./components/admin/addlecturer.vue";
import AdminAddStudent from "./components/admin/addstudent.vue";
import AdminLecturers from "./components/admin/lecturers.vue";
import AdminStudents from "./components/admin/students.vue";
import AdminSummary from "./components/admin/summary.vue";
import AdminAnnoucements from "./components/admin/annoucements.vue";
import AdminAddAnnouncement from "./components/admin/addannoucements.vue";

//Student Routes
import Student from "./views/student/student.vue";
import StudentCourses from "./components/student/courses.vue";
import StudentSummary from "./components/student/summary.vue";
import StudentCourseRegistration from "./components/student/courseregistration.vue";

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
          component: StudentSummary,
          name: "student_summary"
        },
        {
          path: "/student/courses",
          component: StudentCourses,
          name: "student_courses"
        },
        {
          path: "/student/course/registration",
          component: StudentCourseRegistration,
          name: "student_registration"
        }
      ]
    },
    {
        path: "/admin",
        name: "Admin",
        component: Admin,
        children: [
          {
            path: "",
            component: AdminSummary,
            name: "/admin_summary"
          },
          {
            path: "/admin/courses",
            component: AdminCourses,
            name: "admin_courses"
          },
          {
            path: "/admin/lecturers",
            component: AdminLecturers,
            name: "admin_lecturers"
          },
          {
            path: "/admin/students",
            component: AdminStudents,
            name: "admin_student"
          },
          {
            path: "/admin/add/course",
            component: AdminAddCourse,
            name: "admin_student"
          },
          {
            path: "/admin/add/student",
            component: AdminAddStudent,
            name: "admin_add_student"
          },
          {
            path: "/admin/add/lecturer",
            component: AdminAddLecturer,
            name: "admin_add_lecturer"
          },
          {
            path: "/admin/add/announcement",
            component: AdminAddAnnouncement,
            name: "admin_add_announcement"
          },
          {
            path: "/admin/annoucements",
            component: AdminAnnoucements,
            name: "admin_annoucements"
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
