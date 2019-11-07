<template>
  <div>
    <p>New Course</p>
    <hr />
    <div class="add-course">
      <form>
        <div class="fields">
          <label>Course Name</label>
          <input type="text" placeholder="e.g Principles of Programming" v-model="form.title" />
        </div>
        <div class="fields">
          <label>Course Code</label>
          <input type="text" placeholder="CSC 502" v-model="form.code" />
        </div>
        <div class="fields">
          <label>Units</label>
          <select v-model="form.units">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
          </select>
          {{form.units}}
        </div>
        <div class="fields">
          <label>Lecturer</label>
          <select v-model="lecturer">
            <option v-for="(lec, index) in lecs" :value="lec._id" :key="index">{{lec.name}}</option>
          </select>
          {{lecturer}}
        </div>
        <div class="add-btn">
          <button type="submit" @click.prevent="addCourse">Add Course</button>
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
      addCourseResult: {},
      assignLecturerResult: {},
      lecs: {},
      lecturer: null,
      form: {
        title: "",
        code: "",
        units: 3
      }
    };
  },
  mounted() {
    this.callLecturers();
  },
  methods: {
    callLecturers: async function() {
      const res = await axios.get(
        "https://schoolmanagement502.herokuapp.com/api/v1/lecturer/lecturers",

        {
          headers: {
            "Content-Type": "application/json"
          }
        }
      );
      // console.log(res)
      this.lecs = res.data.lecturers; //.map(i=>i.name);
      // this.lecs = 'aa';
    },
    addCourse: async function() {
      // console.log(res)
      let data = { ...this.form };
      const res = await axios.post(
        "https://schoolmanagement502.herokuapp.com/api/v1/admin/addCourse",
        data,
        {
          headers: {
            "Content-Type": "application/json"
          }
        }
      );

      this.addCourseResult = res.data;
      // this.assignLecturer(res.data);
      console.log(this.addCourseResult);
    },
    assignLecturer: async function(course) {
      // console.log(res)
      // let lecturer = this.lecs.find(i=>i.name=this.form.lecturer)
      const res = await axios.post(
        "https://schoolmanagement502.herokuapp.com/api/v1/admin/assignLecturer",
        {
          courseId: course._id,
          lecturerId: this.lecturer
        },
        {
          headers: {
            "Content-Type": "application/json"
          }
        }
      );

      this.assignLecturerResult = res.data;
      console.log(this.assignLecturerResult);
    }
  }
};
</script>

<style lang="scss" scoped>
p {
  margin-left: 2.5rem;
}
.add-course {
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

    select {
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