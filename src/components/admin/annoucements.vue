<template>
  <div>
    <p>Annoucements</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      messageWhenNoItems: "There are not items",
      dataTimeline: [
        {
          from: new Date(2018, 7),
          title: "Name",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius earum architecto dolor, vitae magnam voluptate accusantium assumenda numquam error mollitia, officia facere consequuntur reprehenderit cum voluptates, ea tempore beatae unde."
        },
        {
          from: new Date(2016, 1),
          title: "Name",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius earum architecto dolor, vitae magnam voluptate accusantium assumenda numquam error mollitia, officia facere consequuntur reprehenderit cum voluptates, ea tempore beatae unde."
        },
        {
          from: new Date(2016, 6),
          title: "Name",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius earum architecto dolor, vitae magnam voluptate accusantium assumenda numquam error mollitia, officia facere consequuntur reprehenderit cum voluptates, ea tempore beatae unde."
        },
        {
          from: new Date(2012, 1),
          title: "Name",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius earum architecto dolor, vitae magnam voluptate accusantium assumenda numquam error mollitia, officia facere consequuntur reprehenderit cum voluptates, ea tempore beatae unde."
        }
      ]
    };
  }
};
</script>

<style scoped>
</style>