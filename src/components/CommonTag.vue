<template>
    <div class="tags">
        <el-tag
            v-for="tag in tags"
            :key="tag.name"
            closable
            type="info"
            @click="changeTag(tag)"
            @close="deleteTag(tag, tags)"
            :effect="(tag.path === $route.path || (tag.path ==='/' && $route.path ==='/home')) ? 'dark' : 'plain'"
        >
            {{tag.label}}
        </el-tag>
    </div>
</template>

<script>
import { mapState }from'vuex'
export default{
    data(){
        return {
        }
    },
    methods:{
        changeTag(value){
            console.log(value, "changeTag");
            if(this.$route.path !== value.path && !(this.$route.path === '/home' && value.path === '/' )){
                this.$router.push(value.path);
            }
        },
        deleteTag(value, tags){
            console.log(value, "deleteTag");
            this.$store.commit('deleteTag', value);
            const last_tag = tags[tags.length-1];
            // 当路由不是最后一个tab的路由时，才跳转
            console.log(last_tag, "last_tag");
            console.log(this.$route, "route");
            if(this.$route.path !== last_tag.path && !(this.$route.path === '/home' && last_tag.path === '/' )){
                
                this.$router.push(last_tag.path);
            }
            
        }
    },
    computed: {
        ...mapState({
            tags: state => state.tab.tabList
        })
    }

}
</script>