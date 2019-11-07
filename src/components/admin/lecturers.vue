<template>
  <div class="mx-12">
    <div class="flex flex-wrap justify-between items-center">
      <span class>Lecturers</span>
      <router-link
        to="/admin/add/lecturer"
        class="ml-4 add-btn text-white p-2 rounded cursor-pointer"
      >Add Lecturer</router-link>
    </div>
    <hr class="mt-2 mr-2" />
    <table class="table-auto w-full">
      <thead class>
        <tr>
          <th class="text-left px-4 py-2">Name</th>
          <th class="px-4 py-2">Email</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(lecturer, index) in lecturers"
          :key="index"
          :class="{'bg-gray-100': index % 2 !== 0}"
        >
          <td class="border px-4 py-2">{{lecturer.name}}</td>
          <td class="border px-4 py-2">{{lecturer.email}}</td>
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
      lecturers: []
    };
  },
  mounted() {
    this.getLecturers();
  },
  methods: {
    getLecturers() {
      axios
        .get(`https://schoolmanagement502.herokuapp.com/api/v1/lecturer/lecturers`)
        .then(response => {
          console.log(response.data);
          this.lecturers = response.data.lecturers;
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