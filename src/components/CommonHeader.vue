<template>
    <div class="header-container">
        <div class="l-content">
            <el-button style="margin-right: 20px;" @click="handleMenu" type="info" icon="el-icon-menu" size="small" plain></el-button>
            <!-- 面包屑 -->
            <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item v-for="item in tags" :key="item.path" :to="{ path: item.path }">
                    {{ item.label }}
                </el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="r-content">
            <el-dropdown>
                <span class="el-dropdown-link">
                    <img src="../assets/images/user.png">
                </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>个人中心</el-dropdown-item>
                    <el-dropdown-item>退出登录</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
    </div>
</template>

<script>
import { path } from 'selenium-server';
import { mapState }from'vuex'

export default{
    data(){
        return {
            
        }
    },
    methods:{
        handleMenu() {
            this.$store.commit('collapseMenu');
        },        
    },
    computed: {
        ...mapState({
            tags: state => state.tab.tabList
        })
    },
    
}
</script>

<style lang="less" scoped>
   
    .header-container {
        height: 60px;
        background-color: #333;
        padding: 0 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .header-container .l-content{
        display: flex;
        align-items: center;
        /deep/.el-breadcrumb__item {
            
            .el-breadcrumb__inner {                
                &.is-link{
                    font-weight: normal;
                    color: #fff;
                }

            }
            :last-child {
                font-weight: normal;
            }
        }
    }
    .header-container .r-content img{
        width: 40px;
        height: 40px;
        border-radius: 50%;
        border: solid #fff 1.5px;
    }
</style>