<template>
    <div id="container">
        <p id="first-paragraph">CSC 502</p>
        <p id="second-paragraph"> New Assignment</p>


            <form class="bg-white rounded px-8 pt-6 pb-8 mb-4">
                <div class="mb-4">
                    <label class="block text-gray-700 text-sm  mb-2" for="title">
                        Title
                    </label>
                    <input class="appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="title" type="text" placeholder="Username">
                </div>
                <div class="mb-4">
                    <label class="block text-gray-700 text-sm mb-2" for="duedate">
                        Due Date
                    </label>
                    <input class="appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="duedate" type="text" placeholder="Username">
                </div>
                <div class="w-full">
                <label class="block text-gray-700 text-sm mb-2" for="assignmnetquestion">
                    Assignmnets Question
                </label>
                <textarea class="resize-none border rounded focus:outline-none focus:shadow-outline py-2 px-3" id="assignmnetquestion" type="text" placeholder="Assignmnent Question">

                </textarea>
                </div>
                <div class="flex items-center justify-between">
                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                        Add New Assignment
                    </button>
                </div>
            </form>
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
    textarea {
        width: 60%;
        height: 150px;
    }
</style>
