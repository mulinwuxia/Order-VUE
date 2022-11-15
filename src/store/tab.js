export default {
    state: {
        isCollapse: false, //控制菜单的展开
        tabList: [
            {
                path: '/',
                name: 'home',
                label: '首页',
                icon: 'icon-shouye',
                url: 'Home/Home'
            },
        ] //面包屑
    },
    mutations: {
        // 修改菜单展开收起的方法
        collapseMenu(state){
            state.isCollapse = !state.isCollapse
        },
        // 修改面包屑
        selectMenu(state, value){
            // 判断是否为首页，为首页则不加, 并且不存在
            if (value.name !== 'home'){
                const index = state.tabList.findIndex(item => item.name === value.name);
                // 如果不存在，就添加
                if(index === -1){
                    state.tabList.push(value);
                }
            }

        },
        // 关闭Tag
        deleteTag(state, value){
            //判断是否为首页，为首页则不删除
            if (value.name !== 'home'){
                const index = state.tabList.findIndex(item => item.name === value.name);
                // 如果存在，就删除
                if(index !== -1){
                    state.tabList.splice(index, 1);
                }
            }
        }

    }
}