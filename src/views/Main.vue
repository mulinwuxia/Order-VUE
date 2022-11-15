<template>
    <div>
        <el-container v-on:click="activeItemRef">
            <el-aside width="auto">
                <common-aside/>
            </el-aside>
            <el-container>
                <el-header>
                    <common-header/>
                </el-header>
                <el-main>
                    <common-tag/>
                    <!-- 路由出口 -->
                    <!-- 路由匹配到的组件将渲染在这里 -->
                    <router-view></router-view>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>
import CommonAside from '../components/CommonAside.vue'
import CommonHeader from '../components/CommonHeader.vue'
import CommonTag from '../components/CommonTag.vue'

export default{
    data(){
        return {}
    },
    methods:{
        activeItemRef(){
            console.log(this.$refs.activeItem, 'activeItem');
        }

    },
    components: {
        CommonAside, CommonHeader, CommonTag
    }
}

</script>