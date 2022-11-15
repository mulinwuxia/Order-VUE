<template>
    <el-menu 
        :default-active="$route.path.replace('/', '')" 
        class="el-menu-vertical" 
        @open="handleOpen" 
        @close="handleClose" 
        :collapse="isCollapse"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#fff"
    >
        <h3>{{ !isCollapse ? `订餐后台管理系统` : `后台` }}</h3>
        <el-menu-item @click="clickMenu(item)" v-for="item in noChildren" :key="item.name" :index="item.name" ref="activeItem">
            <i :class="`iconfont ${item.icon}`"></i>
            <span slot="title">{{ item.label }}</span>
        </el-menu-item>
        <el-submenu v-for="item in hasChildren" :key="item.name" :index="item.name">
            <template slot="title">
                <i :class="`iconfont ${item.icon}`"></i>
                <span slot="title">{{ item.label }}</span>
            </template>
            <el-menu-item-group>
                <el-menu-item @click="clickMenu(child)" v-for="child in item.children" :key="child.name" :index="child.name" ref="activeItem">
                    <i :class="`iconfont ${child.icon}`"></i>
                    {{ child.label }}
                </el-menu-item>
            </el-menu-item-group>
        </el-submenu>
        
    </el-menu>

  
</template>

<style lang="less" scoped>
  .el-menu-vertical:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
  .el-menu {
    height: 100vh;
    border-right: none;
    h3{
        color: #fff;
        text-align: center;
        line-height: 48px;
        font-size: 16px;
        font-weight: 600;
    }
    
  }
  .el-submenu {
    &.is-active {
      .el-submenu__title i{
        color: #fff;
      }
    }
    
  }
</style>

<script>
import { node } from 'is2';

  export default {
    data() {
      return {
        meueDatas:[
            {
                path: '/',
                name: 'home',
                label: '首页',
                icon: 'icon-shouye',
                url: 'Home/Home'
            },
            {
                path: '/user',
                name: 'user',
                label: '用户管理',
                icon: 'icon-yonghuguanli',
                url: 'User/User'
            },
            {
                label: '菜单管理',
                name: 'menu',
                icon: 'icon-caidan',
                children: [
                    {
                        path: '/breakfast',
                        name: 'breakfast',
                        label: '早餐',
                        icon: 'icon-zaocan',
                        url: '/menu/breakfast'
                    },
                    {
                        path: '/lunch',
                        name: 'lunch',
                        label: '午餐',
                        icon: 'icon-wucan',
                        url: '/menu/lunch'
                    },
                    {
                        path: '/dinner',
                        name: 'dinner',
                        label: '晚餐',
                        icon: 'icon-wancan',
                        url: '/menu/dinner'
                    },
                ],
                
            },
        ],
      };
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      //点击菜单
      clickMenu(item) {
        
        console.log(item);
        // 当页面的router与跳转router不一致时，才跳转
        if(this.$route.path !== item.path && !(this.$route.path === '/home' && item.path === '/' )){
            this.$router.push(item.path);
            console.log(item.path, "path")           
        }
        this.$store.commit('selectMenu', item);        
      },
            
    },
    computed: {
        //没有子菜单
        noChildren() {
            return this.meueDatas.filter(item => !item.children)
        },
        //有子菜单
        hasChildren() {
            return this.meueDatas.filter(item => item.children)
        },
        isCollapse() {
          return this.$store.state.tab.isCollapse
        },
        
    },
    mounted(){
      
    }
  }
</script>