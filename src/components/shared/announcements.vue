<template>
    <div>
        <p id="first-paragraph">Annoucements</p>
        <ul class="list-disc">
            <li>Materials update for CSC 309 <i class="fa fa-file-pdf"></i> <i class="fa fa-file-pdf"></i></li>
            <li>Assignment Deadline for CSC 208 is on <b>TUES, 23rd Aug 2019</b></li>
            <li>Assignment Deadline for CSC 208 is on <b>TUES, 23rd Aug 2019</b></li>
            <li>Assignment Deadline for CSC 208 is on <b>TUES, 23rd Aug 2019</b></li>
        </ul>

        <div id="container">
            <h2 class="text-center">Announcement</h2>
            <h3 class="text-center"><u><a href="#">Create New Announcement</a></u></h3>
            <p class="text-center"><i class="fa fa-plus"></i></p>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
    #first-paragraph {
        padding-top: 50px;
    }
    ul {
        padding-top: 30px;
    }
    ul li {
        padding-top: 30px;
    }
    #container {
        margin-top: 60px;
        border: 2px solid lightgray;
        height: 200px;
        padding: 0 0 0 0;
        border-radius: 10px;

    }
    #container h2 {
        padding-top: 15%;
    }
    #container p {
        font-size: 4rem;
    }
</style>
