<template>
  <div class="login-page">
    <!-- <p>Login Page</p> -->
    <div class="login-left">
      <img class="signup-img" src="../../assets/auth2.png" alt="Img" />
    </div>
    <div class="login-right">
      <div class="signin-text">Sign In</div>
      <div class="choose-role">
        <div class="im-text">I'm a</div>
        <div class="roles">
          <input class="role-input" type="radio" v-model="role" value="student" /> Student
        </div>
        <div class="roles">
          <input type="radio" v-model="role" value="lecturer" /> Lecturer
        </div>
        <div class="roles">
          <input type="radio" v-model="role" value="admin" /> Admin
        </div>
      </div>
      <div>
        <form>
          <div class="fields">
            <!-- <input class="text-input appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="email" v-model="form.email" placeholder="e.g" aria-label="Email"> -->
            <input class="text-input" v-model="form.email" placeholder="Email" />
          </div>
          <div class="fields">
            <input
              class="text-input"
              type="Password"
              v-model="form.password"
              placeholder="Password"
            />
          </div>
          <vue-element-loading v-if="loading" :active="loading" :is-full-screen="true" />
          <div class="signup-link text-xs text-center">
            <a href="http://localhost:8080/#/auth/register">Don't have an account? Sign Up as Admin!</a>
          </div>
          <div class="login-btn">
            <button type="submit" @click.prevent="loginAction">Sign In</button>
            <!-- <input type="submit" @click.prevent="loginAction" /> -->
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      role: "student",
      loading: false,
      form: {
        email: "",
        password: ""
      },
      error: {},
      response: {},
      result: {}
    };
  },
  // computed: {
  //     login: function() {
  //         this.loginAction();
  //         console.log(this.result)
  //     }
  // },
  methods: {
    loginAction: async function() {
      const self = this;
      self.loading = true;
      let roleLogin;
      switch (this.role) {
        case "lecturer":
          roleLogin = "lecturerLogin";
          break;
        case "admin":
          roleLogin = "adminLogin";
          break;
        default:
          roleLogin = "studentLogin";
      }

      axios
        .post(
          `https://schoolmanagement502.herokuapp.com/api/v1/admin/${roleLogin}`,
          this.form
        )
        .then(response => {
          console.log(response.data);
          this.response = response;
          self.loading = false;
          self.success = true;
          this.$swal("Success!", "Login successfully!", "success");
          switch (this.role) {
            case "lecturer":
              this.form = {};
              localStorage.setItem("502_user", JSON.stringify(response.data.admin));
              this.$router.push("/");
              break;
            case "admin":
              this.form = {};
              localStorage.setItem("502_user", JSON.stringify(response.data.admin));
              this.$router.push("/admin");
              break;
            default:
              this.form = {};
              localStorage.setItem("502_user", JSON.stringify(response.data.admin));
              this.$router.push("/");
          }
          
        })
        .catch(error => {
          self.loading = false;
          self.error = true;
          this.error = error;
          self.$swal("Error!", "Invalid Credentials", "error");
        });
    }
  }
};
</script>

<style lang="scss" scoped>
div {
  font-family: "Poppins";
}
.login-page {
  display: flex;
  justify-content: space-around;
  height: 100vh;
  align-items: center;
}
.login-left {
  // width: 33%;
  // height: 80%;
  // background-color: rgb(195, 196, 198);
  // border-radius: 5px;
}
.signup-img {
  width: 550px;
  height: 550px;
}
.login-right {
  width: 33%;
  height: 80%;
  background: linear-gradient(231.97deg, #0089ff 0.84%, #063ed8 100%);
  border-radius: 15px;
  color: #ffffff;
  padding: 50px 50px 50px 50px;
}
.signin-text {
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  line-height: 39px;
  color: #ffffff;
  text-align: left;
  margin-bottom: 40px;
}
.choose-role {
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
}
.im-text {
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  color: #ffffff;
  opacity: 0.43;
}
.roles {
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 14px;
  color: #ffffff;
  margin-top: 8px;
}
.role-input {
  // background: #FFFFFF;
  // color: white;
}
.fields {
  height: 50px;
  width: 80%;
  margin-top: 5px;
}
.text-input {
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 1px solid #03a8f45e;
  padding: 5px 15px;
  outline: none;
  appearance: none;
  color: black;
}

.signup-link {
  margin: 5px;
}
.login-btn {
  button {
    margin-top: 20px;
    width: 120px;
    height: 40px;
    background-color: #336cce;
    border-radius: 5px;
  }
}
</style>