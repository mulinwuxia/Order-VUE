import http from '../utils/request'

//请求用户管理数据
export const getUserData = () => {
    //返回一个promise
    return http.get('/admin/page?pageNum=1&pageSize=1&username=');
}