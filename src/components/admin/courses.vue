<template>
  <div class="mx-12">
    <div class="flex flex-wrap justify-between items-center">
      <span class>Courses</span>
      <router-link
        to="/admin/add/course"
        class="ml-4 add-btn text-white p-2 rounded cursor-pointer"
      >Add Course</router-link>
    </div>
    <hr class="mt-2 mr-2" />
    <table class="table-auto w-full">
      <thead class>
        <tr>
          <th class="text-left px-4 py-2">Course Name</th>
          <th class="px-4 py-2">Course Code</th>
          <th class="px-4 py-2">Course Units</th>
          <th class="px-4 py-2">Number of Students</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(course, index) in courses"
          :key="index"
          :class="{'bg-gray-100': index % 2 !== 0}"
        >
          <td class="border px-4 py-2">{{course.title}}</td>
          <td class="border px-4 py-2">{{course.code}}</td>
          <td class="border px-4 py-2">{{course.units}}</td>
          <td class="border px-4 py-2">{{course.students.length}}</td>
        </tr>
      </tbody>
    </table>
    <p></p>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      courses: []
    };
  },
  mounted() {
    this.getCourses();
  },
  methods: {
    getCourses() {
      axios
        .get(`https://schoolmanagement502.herokuapp.com/api/v1/course`)
        .then(response => {
          console.log(response.data);
          this.courses = response.data.course;
          self.loading = false;
          self.success = true;
        })
        .catch(error => {
          self.loading = false;
          self.error = true;
          this.error = error;
          self.$swal("Error!", "An error occured", "error");
        });
    }
  }
};
</script>

<style scoped>
</style>