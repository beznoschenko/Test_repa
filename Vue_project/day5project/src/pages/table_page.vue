<template>
<data-table :querydata="this.postData"></data-table>
</template>

<script>
import DataTable from '../components/table_with_data.vue'
export default {
    name: "TabelPage",
    components:{
        DataTable
    },
    data(){
        return{
            postData: []

        }
    },
    async mounted(){
        let body={}
        
      const data=  await this.axios.get('https://jsonplaceholder.typicode.com/todos/0/posts');
      this.postData = data.data

    }

}
</script>

<style>

</style>