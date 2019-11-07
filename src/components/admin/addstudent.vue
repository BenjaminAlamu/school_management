<template>
  <div class="mx-12">
    <div class="flex flex-wrap justify-between items-center">
      <span class>Students</span>
      <router-link
        to="/admin/add/student"
        class="invisible ml-4 add-btn text-white p-2 rounded cursor-pointer"
      >Add Student</router-link>
    </div>
        <hr class="mt-2 mr-2" />
    <div class="add-student">
      <form>
        <div class="fields">
          <label>Name</label>
          <input type="text" placeholder="John Doe" v-model="form.name" />
        </div>
        <div class="fields">
          <label>Email</label>
          <input type="text" placeholder="johndoegmail.com" v-model="form.email" />
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
        <div class="add-btn">
          <button type="submit" @click.prevent="addStudent">Add Student</button>
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
      form: {
        name: "",
        email: "",
        passsword: ""
      }
    };
  },
  methods: {
    addStudent: async function() {
      // console.log(res)
      if (
        this.checkPassword === this.form.password &&
        this.form.password !== ""
      ) {
        this.showMsg = false;
        const res = await axios.post(
          "https://schoolmanagement502.herokuapp.com/api/v1/admin/registerStudent",
          this.form,
          {
            headers: {
              "Content-Type": "application/json"
            }
          }
        );

        this.result = res;
      } else {
        this.showMsg = true;
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
.add-student {
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