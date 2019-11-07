<template>
  <div class="my-4 mx-12">
    <p class>Announcements</p>
    <hr class="mt-2 mr-4" />
    <br />
    <div class="my-annoucements">
      <div v-for="(announcement, index) in announcements" :key="index" class="timeline-item">
        <h1 class="text-lg">{{announcement.title}}</h1>
        <p class="text-xs">{{announcement.details}}</p>
      </div>
    </div>
    <p
      @click.prevent="$refs.add_new.open('add_new')"
      class="my-link text-sm my-4 hover:underline cursor-pointer"
    >Create an announcement</p>

    <sweet-modal ref="add_new">
      <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full px-3 mt-4">
          <label
            class="block tracking-wide text-gray-700 text-left text-xs font-bold mb-2"
            for="title"
          >Annoucement Title</label>
          <input
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="title"
            type="text"
            v-model="form.title"
            placeholder="e.g Upcoming Test"
          />
        </div>
        <div class="w-full px-3 mt-4">
          <label
            class="block tracking-wide text-gray-700 text-left text-xs font-bold mb-2"
            for="details"
          >Annoucement Details</label>
          <input
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="details"
            type="text"
            v-model="form.details"
            placeholder="e.g There would be CSCC 502 test next week"
          />
        </div>
        <vue-element-loading v-if="loading" :active="loading" :is-full-screen="true" />
        <button @click="addAnnoucement" class=" my-4 ml-4 add-btn text-white font-bold py-2 px-4 rounded">Add Annoucement</button>
      </div>
    </sweet-modal>
  </div>
</template>

<script>
import axios from "axios";
import { SweetModal } from "sweet-modal-vue";
export default {
  components: {
    SweetModal
  },
  data() {
    return {
      announcements: {},
      messageWhenNoItems: "There are not items",
      form: {},
      user: {},
      loading: false
    };
  },
  mounted() {
    this.getAnnouncements();
  },
  methods: {
    getAnnouncements() {
      axios
        .get(
          `https://schoolmanagement502.herokuapp.com/api/v1/announcement/getGeneralAnnouncement`
        )
        .then(response => {
          console.log(response.data);
          this.announcements = response.data.announcement;
          self.loading = false;
          self.success = true;
        })
        .catch(error => {
          self.loading = false;
          self.error = true;
          this.error = error;
          self.$swal("Error!", "An error occured", "error");
        });
    },
    addAnnoucement() {
        const self = this;
        this.loading = true;
        this.user = JSON.parse(localStorage.getItem("502_user"));
        this.form.createdBy = this.user._id
      axios
        .post(
          `https://schoolmanagement502.herokuapp.com/api/v1/admin/createAnnoucement`,
          this.form
        )
        .then(response => {
          console.log(response.data);
          this.response = response;
          self.loading = false;
          self.success = true;
          self.getAnnouncements();
          self.form = {}
          this.$swal("Success!", "Added successfully!", "success");
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
// ----------------  THE BASICS

@import url("https://fonts.googleapis.com/css?family=Oswald|Roboto:400,700");

body {
  font-size: 14px;
  line-height: 1.5;
}

.my-link {
  color: #4c52bc;
}

.my-annoucements {
  max-height: 60vh;
  overflow: auto;
}


// ----------------  THE FONTS

.container {
  max-width: 1024px;
  width: 90%;
  margin: 0 auto;
}

$border-color: rgba(black, 0.3);

.timeline-item {
  padding: 1em;
  position: relative;
  color: rgba(black, 0.7);
  border-left: 2px solid $border-color;

  p {
    font-size: 1rem;
  }

  &::before {
    content: attr(date-is);
    position: absolute;
    left: 2em;
    font-weight: bold;
    top: 1em;
    display: block;
    font-weight: 700;
    font-size: 0.785rem;
  }

  &::after {
    width: 10px;
    height: 10px;
    display: block;
    top: 1em;
    position: absolute;
    left: -7px;
    border-radius: 10px;
    content: "";
    border: 2px solid $border-color;
    background: white;
  }

  &:last-child {
    border-image: linear-gradient(
        to bottom,
        $border-color 60%,
        rgba($border-color, 0)
      )
      1 100%;
  }

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
}
</style>