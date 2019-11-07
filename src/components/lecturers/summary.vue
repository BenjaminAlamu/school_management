<template>
    <div id="container">
        <p id="first-paragraph">Dashboard</p>

        <div class="flex flex-row">
            <div id="flexxwidth">
                <i class="fa fa-folder"></i>
                <h2>Courses</h2>
                <p>Taking 4 courses</p>
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">View Courses</button>
            </div>
            <div id="flexxwidth second-col">
                <i class="fa fa-folder"></i>
                <h2>Assignments</h2>
                <p>20 Courses</p>
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">View Courses</button>
            </div>
        </div>

        <div id="container-2">
            <h2>Recent Activities <span id="float-icon">View all <i class="fa fa-chevron-right"></i></span></h2>
            <ul id="list">
                <li><h3><i class="fa fa-folder-open"></i> Dr. Akinjobi Uploaded CSC 2018 Assignments <span id="download">Download Only <span id="date">01/09/2019</span></span></h3></li>
                <li><h3><i class="fa fa-folder-open"></i> Dr. Akinjobi Uploaded CSC 2018 Assignments <span id="download">Download Only <span id="download">01/09/2019</span></span></h3></li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
    #container {
        padding: 50px;
    }
    #first-paragraph{
         padding-bottom: 30px;
    }
    #second-col {
        padding-left: 30px;
    }
    #flexxwidth {
        width: 250px;
    }
    #container-2 {
        width: 85%;
        padding-top: 50px;
    }
    #download {
        padding-left: 50px;
    }
    #date {
        padding-left: 50px;
    }
    #float-icon {
        float: right;
    }
    #list {
        padding-top: 25px;
    }
    #list li {
        padding-top: 20px;
    }
</style>
