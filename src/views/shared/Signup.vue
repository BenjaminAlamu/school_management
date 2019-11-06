<template>
    <div class="signup-page">
        <div class="signup-left">
            <img class="signup-img" src="../../assets/auth2.png" alt="Img" />
        </div>
        <div class="signup-right">            
            <div class="signin-text">
                Sign In
            </div>
            

            <div>
                <form>
                    <div class="fields">
                        <input class="text-input" type="text" v-model="form.name" placeholder="Name" />
                    </div>
                    <div class="fields">
                        <input class="text-input" type="text" v-model="form.email" placeholder="Email" />
                    </div>
                    <div class="fields">
                        <input class="text-input" type="password" v-model="form.password" placeholder="Password" />
                    </div>
                    <div class="signup-link">
                        <a href="http://localhost:8080/#/auth/login"> Alerady have an account? Sign In!</a>
                    </div>
                    <div class="signup-btn">
                        <button type="submit" @click.prevent="signupAction">
                            Sign up
                        </button>
                        <!-- <input type="submit" @click.prevent="signupAction" /> -->
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
                form: {
                    name: '',
                    email: '',
                    password: '',
                    role: 'student',
                },
                result:{}
            }
        },
        // computed: {
        //     signup: function() {
        //         this.signupAction();
        //         console.log(this.result)
        //     }
        // },
        methods: {
            signupAction: async function() {
                const res = await axios.post(
                    "http://localhost:5050/api/v1/user/register",
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
    .signup-page{
        display: flex;
        justify-content: space-around;
        height: 100vh;
        align-items: center;
    }
    .signup-left{
        // width: 33%;
        // height: 80%;
        // background-color: rgb(195, 196, 198);
        // border-radius: 5px;
    }
    .signup-img{
        width: 550px;
        height: 550px;
    }
    .signup-right{
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
    .signup-btn{
        button{
            margin-top: 60px;
            width: 150px;
            height: 30px;
            background-color: #336CCE;
            border-radius: 5px;
        }
    }
</style>