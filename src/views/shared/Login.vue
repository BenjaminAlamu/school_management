<template>
    <div class="login-page">
        <!-- <p>Login Page</p> -->
        <div class="login-left">
            <img class="signup-img" src="../../assets/auth2.png" alt="Img" />
        </div>
        <div class="login-right">            
            <div class="signin-text">
                Sign In
            </div>
            <div class="choose-role">
                <div class="im-text">
                    I'm
                </div>
                <div class="roles">
                    <input class="role-input" type="radio" v-model="role" value="student"> Student
                </div>
                <div class="roles">
                    <input type="radio" v-model="role" value="lecturer"> Lecturer
                </div>
                <div class="roles">
                    <input type="radio" v-model="role" value="admin"> Admin
                </div>
            </div>
            <div>
                <form>
                    <div class="fields">
                        <input class="text-input" type="text" v-model="form.email" placeholder="Email" />
                    </div>
                    <div class="fields">
                        <input class="text-input" type="Password" v-model="form.password" placeholder="Password" />
                    </div>
                    <div class="signup-link">
                        <a href="http://localhost:8080/#/auth/register"> Don't have an account? Sign Up as Admin!</a>
                    </div>
                    <div class="login-btn">
                        <button type="submit" @click.prevent="loginAction">
                            Sign In
                        </button>
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
            return{
                role: 'student',
                form: {
                    email: '',
                    password: '',
                },
                result:{}
            }
        },
        // computed: {
        //     login: function() {
        //         this.loginAction();
        //         console.log(this.result)
        //     }
        // },
        methods: {
            loginAction: async function() {
                // console.log(res)
                let roleLogin;
                switch (this.role){
                    case "lecturer":
                        roleLogin='lecturerLogin';
                        break;
                    case "admin":
                        roleLogin='adminLogin'
                        break;
                    default:
                        roleLogin='studentLogin'
                }
                const res = await axios.post(
                    `http://localhost:5050/api/v1/${this.role}/${roleLogin}`,
                    this.form, 
                    {
                        headers:{
                            "Content-Type": 'application/json'
                        }
                    }
                );

                this.result = res;
                // console.log(res)
            }
        }
    }
</script>

<style lang="scss" scoped>
    .login-page{
        display: flex;
        justify-content: space-around;
        height: 100vh;
        align-items: center;
    }
    .login-left{
        // width: 33%;
        // height: 80%;
        // background-color: rgb(195, 196, 198);
        // border-radius: 5px;
    }
    .signup-img{
        width: 550px;
        height: 550px;
    }
    .login-right{
        width: 33%;
        height: 80%;
        background: linear-gradient(231.97deg, #0089FF 0.84%, #063ED8 100%);
        border-radius: 15px;
        color: #FFFFFF;
        padding: 50px 50px 50px 50px;  
    }
    .signin-text{
        font-family: Century Gothic;
        font-style: normal;
        font-weight: bold;
        font-size: 32px;
        line-height: 39px;

        color: #FFFFFF;
        text-align: left;
        margin-bottom: 50px;
    }
    .choose-role{
        display: flex;
        justify-content: space-between;
        width: 70%;
        margin-bottom: 70px;
    }
    .im-text{
        font-family: Century Gothic;
        font-style: normal;
        font-weight: normal;
        font-size: 20px;
        line-height: 25px;
        /* identical to box height */


        color: #FFFFFF;

        opacity: 0.43;
    }
    .roles{
        font-family: Century Gothic;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 20px;
        /* identical to box height */


        color: #FFFFFF;
        margin-top: 3px;
    }
    .role-input{
        // background: #FFFFFF;
        // color: white;
    }
    .fields{
        height: 50px;
        width: 80%;
        margin-top: 20px;
    }
    .text-input{
        border-bottom: 1px solid #FFFFFF;
        background-color: transparent;
        width: 100%;
        height: 40px;

        font-family: Century Gothic;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 20px;
        /* identical to box height */


        color: #FFFFFF;
    }

    .signup-link{
        margin-top: 40px;
    }
    .login-btn{
        button{
            margin-top: 60px;
            width: 150px;
            height: 30px;
            background-color: #336CCE;
            border-radius: 5px;
        }
    }
</style>