<template>
  <div class="bugs">
    <div class="container">
        <h1 class="page-header">
            Bug记录
            <div class="nav navbar-nav navbar-right" style="padding-right: 20px">
                    <router-link to="/scriptbug/add" class="btn btn-primary">添加记录</router-link>
            </div>
        </h1>
        <alert v-if="alert" v-bind:message="alert"></alert>
        <table class="table table-striped table-hover">
            <thead>
            <tr>
                <th>bug主题</th>
                <th>日期</th>
                <th>类型</th>
                <th>提交者</th>
                <th>状态</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="bug in bugs">
                <td>{{bug.title}}</td>
                <td>{{bug.date}}</td>
                <td>{{bug.type}}</td>
                <td>{{bug.owener}}</td>
                <td>{{bug.status}}</td>
            </tr>
            </tbody>
        </table>
    </div>
  </div>
</template>

<script>
    import alert from "@/components/alert";
export default {
  name: 'bugs',

    data(){
      return{
          bugs:[],
          alert:'1'
      }
    },
    methods:{
      fetchBugInfo(){
      //    从后端接口拉取bug信息
      }
    },
    created() {
      this.fetchBugInfo()
    },
    components:{
        alert
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
