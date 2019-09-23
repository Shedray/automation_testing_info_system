<template>
    <div class="add container">
        <h1 class="page-header">
            添加bug记录
        </h1>
        <form action="" v-on:submit="addBugInfo">
            <div class="well">
                <h4>Bug信息</h4>
                <div class="form-group">
                    <label for="">主题</label>
                    <input type="text" class="form-control" placeholder="title" v-model="bug.title">
                </div>
                <div class="form-group">
                    <label for="">日期</label>
<!--                    <div class="date input-group" id="datetimepicker1">-->
<!--                        <input type='text' class="form-control" />-->
<!--                        <span class="input-group-addon">-->
<!--                            <span class="glyphicon glyphicon-calendar"></span>-->
<!--                        </span>-->
<!--                    </div>-->
                    <input type="text" class="form-control" placeholder="date" v-model="bug.date">
                </div>
                <div class="form-group">
                    <label for="">类型</label>
                    <input type="text" class="form-control" placeholder="type" v-model="bug.type">
                </div>
                <div class="form-group">
                    <label for="">提交者</label>
                    <input type="text" class="form-control" placeholder="owner" v-model="bug.owner">
                </div>
                <div class="form-group">
                    <label for="">状态</label>
                    <input type="text" class="form-control" placeholder="status" v-model="bug.status">
                </div>
                <div class="form-group">
                    <label for="">Bug简介</label>
                    <textarea rows="10" class="form-control" v-model="bug.profile">

                    </textarea>
<!--                    <textarea type="text" class="form-control" placeholder="status" v-model="bug.status">-->
                </div>
                <button class="btn btn-primary">添加</button>
            </div>
        </form>
    </div>
</template>

<script>
    // import $ from 'jquery'
    export default {
        name: "add",
        data(){
            return{
                bug:{}
            }
        },
        methods:{
            addBugInfo(e){
                if(!this.bug.title||!this.bug.date||!this.bug.type||!this.bug.owner||!this.bug.status){
                    console.log("请填写有效bug信息！")
                    e.preventDefault()
                }else {
                    //向数据库提交数据
                    console.log(this.bug)
                }
                e.preventDefault()
            }
        },
        created(){

        },
        updated(){

        }
    }
</script>

<style scoped>

</style>
