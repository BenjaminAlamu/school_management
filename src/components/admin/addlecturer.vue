<template>
  <div class="mx-12">
    <div class="flex flex-wrap justify-between items-center">
      <span class>Add Lecturer</span>
      <router-link
        to="/admin/add/lecturer"
        class="ml-4 add-btn text-white p-2 rounded cursor-pointer"
      >Add Lecturer</router-link>
    </div>
    <hr class="mt-2 mr-2" />
    <div class="add-lecturer">
      <form>
        <div class="fields">
          <label>Name</label>
          <input type="text" placeholder="Prof Osofisan" v-model="form.name" />
        </div>
        <div class="fields">
          <label>Email</label>
          <input type="text" placeholder="profosofisan@gmail.com" v-model="form.email" />
        </div>
        <div class="fields">
          <label>Password</label>
          <input type="password" v-model="form.password" />
        </div>
        <div class="fields">
          <label>Re-enter Password</label>
          <input type="password" v-model="checkPassword" />
        </div>
        <div v-if="showMsg" class="password-error">Password does not match</div>
        <vue-element-loading v-if="loading" :active="loading" :is-full-screen="true" />
        <div class="add-btn">
          <button type="submit" @click.prevent="addLecturer">Add lecturer</button>
          <!-- <input type="submit" @click.prevent="loginAction" /> -->
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      checkPassword: "",
      showMsg: false,
      result: {},
      loading: false,
      form: {
        name: "",
        email: "",
        passsword: ""
      }
    };
  },
  methods: {
    addLecturer: async function() {
      // console.log(res)
      if (
        this.checkPassword === this.form.password &&
        this.form.password !== ""
      ) {
        this.showMsg = false;
        this.loading = true;
        const res = await axios.post(
          "https://schoolmanagement502.herokuapp.com/api/v1/admin/registerLecturer",
          this.form,
          {
            headers: {
              "Content-Type": "application/json"
            }
          }
        );

        this.result = res;
        this.$router.push("/admin/lecturers");
        this.$swal("Success!", "Added successfully!", "success");
        this.loading = false;
      } else {
        this.showMsg = true;
        this.$swal("Error!", "An error occured!", "error");
        this.loading = false;
      }
      // console.log(res)
    }
  }
};
</script>

<style lang="scss" scoped>
p {
  margin-left: 2.5rem;
}
.add-lecturer {
  width: 265px;
  margin-left: 2.5rem;
  margin-top: 2.5rem;
  height: 500px;
  // form{
  //     height: auto;
  //     display: flex;
  //     flex-direction: column;
  //     justify-content: space-between;
  // }

  .fields {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-top: 15px;

    input {
      width: 262px;
      height: 40px;
      border: 1px solid #4c52bc;
      box-sizing: border-box;
      border-radius: 7px;

      font-family: Century Gothic;
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 17px;
      letter-spacing: 0.2px;

      color: rgba(0, 0, 0, 0.43);
      padding: 5px;
    }
  }
  .password-error {
    color: red;
  }
  .add-btn {
    margin-top: 50px;
    display: flex;
    justify-content: center;
    button {
      width: 162.5px;
      height: 39px;

      background: #4c52bc;
      border-radius: 30px;

      font-family: Century Gothic;
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 17px;
      /* identical to box height */

      text-align: center;
      letter-spacing: 0.142857px;

      color: #ffffff;
    }
  }
}
</style>