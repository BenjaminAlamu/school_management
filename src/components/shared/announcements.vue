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
    <p class="my-link text-sm my-4 hover:underline cursor-pointer">Create an announcement</p>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      announcements: {},
      messageWhenNoItems: "There are not items"
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
}
</style>