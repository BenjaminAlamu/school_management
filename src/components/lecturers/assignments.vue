<template>
    <div id="container">
        <p id="first-paragraph">Assignments <span id="new-assignment"><button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">New Assignment</button></span></p>
        <table class="table-auto">
            <tbody>
            <tr>
                <td class="px-4 py-2"><i class="fa fa-folder"></i><b>Lecture 1 Assignment </b></td>
                <td class="px-4 py-2">Given: 01/09/2019</td>
                <td class="px-4 py-2">Due: 01/09/2019</td>
            </tr>
            <tr class="bg-gray-100">
                <td class="px-4 py-2"><i class="fa fa-folder"></i><b>Lecture 2 Assignment </b></td>
                <td class="px-4 py-2">Given: 01/09/2019</td>
                <td class="px-4 py-2">Due: 01/09/2019</td>
            </tr>
            </tbody>
        </table>
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
    table {
        width: 100%;
    }
    #new-assignment{
        float: right;
    }
</style>
