<template>
    <div id="app">
        <nav class="navbar navbar-inverse nav-fixed navbar-fixed-top">
            <div class="container">
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle collapsed">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <router-link class="navbar-brand" to="/">自动化测试管理系统</router-link>
                    <!--            <a href="/" class="navbar-brand">用户管理系统</a>-->
                </div>
                <div  class="navbar-collapse navbar-inverse collapse" style="">
                    <ul class="nav navbar-nav">
                        <li>
                            <router-link to="/">主页</router-link>
                        </li>
                        <li class="nav navbar-nav dropdown">
                                <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                                    平台缺陷管理
                                    <b class="caret"></b>
                                </a>
                                <ul class="dropdown-menu">
                                    <li><router-link to="/scriptest">脚本Test记录</router-link></li>
                                    <li><router-link to="/scriptbug">关键字Bug记录</router-link></li>
                                </ul>
                        </li>
                        <li> <router-link to="/about">关于我们</router-link></li>
                    </ul>
                    <!-- Single button -->



                    <ul class="nav navbar-nav navbar-right" style="padding-right: 10px">
                        <li>
                            <router-link to="/login">登录</router-link>
                        </li>
                        <li>
                            <router-link to="/login">注册</router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: 'app',
        components: {
        }
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        /*text-align: center;*/
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
