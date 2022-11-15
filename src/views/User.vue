<template>
    <div class="user-manage">
        <div class="content-header">
            <div class="user-add">
                <el-button type="primary" @click="dialogVisible = true">
                    <i class="iconfont icon-xinzengyonghu"></i>
                    新增
                </el-button>
                <el-dialog
                    title="新增用户"
                    :visible.sync="dialogVisible"
                    width="30%"
                    :before-close="handleClose">

                    <!-- 新增用户Form -->
                    <el-form ref="form" :rules="rules" :model="form" label-width="100px">
                            <el-form-item label="名称" prop="name">
                                <el-input placeholder="请输入名称" v-model="form.name"></el-input>
                            </el-form-item>
                            <el-form-item label="电话" prop="phone">
                                <el-input placeholder="请输入电话" v-model="form.phone"></el-input>
                            </el-form-item>
                            <el-form-item label="密码" prop="password">
                                <el-input placeholder="请输入密码" v-model="form.password" show-password></el-input>
                            </el-form-item>
                            
                    </el-form>

                    <span slot="footer" class="dialog-footer">
                        <el-button @click="cancel">取 消</el-button>
                        <el-button type="primary" @click="submit">确 定</el-button>
                    </span>
                </el-dialog>
            </div>  
            <div class="user-search">
                <el-input placeholder="请输入内容">
                    <el-button slot="append" icon="el-icon-search"></el-button>
                </el-input>
            </div>
            
        </div>
        
        <div class="content-middle">
            <el-table
                ref="multipleTable"
                :data="tableData"
                tooltip-effect="dark"
                style="width: 100%"
                @selection-change="handleSelectionChange">
                <el-table-column
                    type="selection"
                    width="55">
                </el-table-column>
                <el-table-column
                    prop="name"
                    label="姓名"
                    width="120">
                <template slot-scope="scope">{{ scope.row.date }}</template>
                </el-table-column>
                <el-table-column
                    prop="phone"
                    label="电话"
                    width="150">
                </el-table-column>
                <el-table-column
                    prop="password"
                    label="密码"
                    width="200">
                </el-table-column>
                <el-table-column label="操作">
                    <template slot-scope="scope">
                        <el-button
                        size="mini"
                        @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                        <el-button
                        size="mini"
                        type="danger"
                        @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>
       
        <div class="content-footer">
            <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page="pageNum"
                :page-sizes="[5, 10, 15, 20]"
                :page-size="pageSize"
                layout="total, sizes, prev, pager, next, jumper"
                :total="total">
            </el-pagination>
        </div>
        
    </div>
</template>

<script>
import { valid } from 'semver';
import { getUserData } from '../api/user';

export default{
    data(){
        return {
            dialogVisible: false,
            form: {
                name: '',
                phone: '',
                password: '',
            },
            rules: {
                name: [
                    { required: true, message: '请输入名称', trigger: 'blur' },
                    { min: 3, message: '长度在 3 到 5 个字符', trigger: 'blur' }
                ],
                phone: [
                    { required: true, message: '请输入电话', trigger: 'blur' },
                    { required: true, pattern: /^((0\d{2,3}-\d{7,8})|(1[34578]\d{9}))$/, message: '格式不正确', trigger: 'blur' }
                ],
                password: [
                    { required: true, message: '请输入密码', trigger: 'blur' },
                ],
                
            },
            tableData: [
            {
                date: '2016-05-04',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1517 弄'
            }, {
                date: '2016-05-01',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1519 弄'
            }, 
            ],
            total: 0,
            pageNum: 1,
            pageSize: 10,

        }
    },
    methods: {
      //关闭dialog弹窗时，清空form表单
      handleClose() {
        this.$refs.form.resetFields();
        this.dialogVisible = false;
      },
      //点击取消时，清空form表单
      cancel(){
        this.handleClose();
        
      },
      //点击确认，新增用户
      submit(){
        this.$refs.form.validate((valid) => {
            if(valid){
                //对表单进行处理
                console.log(this.$refs.form, 'form');
                

                //对表单进行清空
                this.$refs.form.resetFields();
                //关闭dialog
                this.dialogVisible = false;
            }
        })
      },
      handleEdit() {

      },
      handleDelete() {

      },


    },
    mounted() {
        getUserData().then((data) => {
            console.log(data, 'data');
        })
    }
}
</script>

<style lang="less" scoped>
    .user-manage {
        margin-top: 20px;
    }
    .el-button--primary{
        background-color: #35495e;
        border-color: #35495e;
    }
    .el-button--primary:hover{
        background-color: #b2b7bd;
        border-color: #b2b7bd;
    }
    .user-manage .content-header {
        display: flex;
        justify-content: space-between;
        margin-bottom: 10px;
    }

    .user-manage .content-middle {
        margin-bottom: 20px;
    }

</style>