<template>
  <div class="mx-12">
    <div class="flex flex-wrap justify-between items-center">
      <span class>Students</span>
      <router-link
        to="/admin/add/student"
        class="ml-4 add-btn text-white p-2 rounded cursor-pointer"
      >Add Student</router-link>
    </div>
    <hr class="mt-2 mr-2" />
    <table class="table-auto w-full">
      <thead class>
        <tr>
          <th class="px-4 py-2">Name</th>
          <th class="px-4 py-2">Matric</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(student, index) in students"
          :key="index"
          :class="{'bg-gray-100': index % 2 !== 0}"
        >
          <td class="border px-4 py-2">{{student.name}}</td>
          <td class="border px-4 py-2">{{student.matric}}</td>
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
      students: {}
    };
  },
  mounted() {
    this.getStudents();
  },
  methods: {
    getStudents() {
      axios
        .get(
          `https://schoolmanagement502.herokuapp.com/api/v1/student/students`
        )
        .then(response => {
          console.log(response.data);
          this.students = response.data.students;
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