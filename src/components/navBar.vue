<template>
<div id="navBar">
    <el-menu default-active="2" class="el-menu-vertical-demo" theme="light" :router=true>
    <template slot="title"></template> 
    <div v-for="item in menuData">
    <el-menu-item :index="item.url">{{item.text}}</el-menu-item>
    </div>


    </el-menu>
</div>
</template>
<script>
export default {
    created(){
        var url = this.HOST + "/menu"
        this.$http.get(url).then(response=>{
            this.menuData = response.data
        }).catch(error=>{
            alert("failed")
        })
    },
    methods: {
        //Default methods for the navBar
        //TODO remove them and add $http function to require the menu from server
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        }
    },
    //TODO include a update property here for update the menu when the data was updated
    data: function() {
        return {
            //menu data for showing in the nav bar
            //TODO should be linked to the navBar content after the update methods was built
            naiveMenu: '',
            menuData:[],
            secondClassMenu: [],
            thirdClassMenu:[],

            //determine the menu type
            menuController: false
        }
    },
}
</script>
