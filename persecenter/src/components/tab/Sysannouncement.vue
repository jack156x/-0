<template>
<!-- 系统公告 -->
    <div>
        <div class="rgeechar">
                <div class="history btnalign">
                     <el-date-picker
                                v-model="inputDateValue"
                                type="datetimerange"
                                range-separator="~"
                                start-placeholder="开始日期"
                                end-placeholder="结束日期"
                                :picker-options="pickerOptions">
                        </el-date-picker>
                </div>
            </div>
           <div class="search-list-container">
                <div class="chart-table info-notice">
                    <table border="0" cellpadding="0" cellspacing="0" class="table">
                        <tbody>
                            <tr>
                                <td class="no-content_wrap" style="border-bottom: 0px;">
                                    <div>
                                        <i class="el-icon-warning"></i> 暂无内容!</div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                 <div class="row bdtop3">
                     <Pagination :total="total" :page.sync="page" :limit.sync="limit" @pagination="getpagelist"/>
                 </div>
            </div>
    </div>
</template>

<script>
import Pagination from '@/components/Pagination'
import { pageList } from '@/services/getData'
import {quickChooseTime} from '../../config/QuickChooseTime'
    export default {
        name:'sysannouncement',
        data() {
            return {
                total:0,     /*数据总条数*/
                page: 1,    /*默认显示第1页*/
                limit: 10,  /*限制显示的条数*/
                 pickerOptions: {
                    disabledDate(time) {
                        // return time.getTime() < Date.now();
                    },
                    shortcuts: quickChooseTime
                    },
                inputDateValue:[new Date(new Date().getTime()), new Date(new Date().getTime())]
            }
        },
        components: {
		   Pagination,
        },
        methods:{
            getpagelist(){
                var start = (this.page - 1) * this.limit;
                var end   = this.page * this.limit;
                pageList().then(res =>{
                    console.log(res)
                })
            }
        }
    }
</script>

<style scoped>
 .rgeechar {
    margin-left: 20px;
    margin-top: 23px;
    }
    .btnalign {
        text-align: left;
        margin-top: 10px;
    }
    .history {
        border: 1px solid #d3d8dc;
        background: #f7f8f9;
        border-radius: 4px;
        padding: 10px 20px;
        margin-right: 20px;
        line-height: 30px;
    }
    .btnalign.btnalign:before, .btnalign.btnalign:after {
        display: table;
        content: " ";
    }
    .daterangepickers {
    position: relative;
    display: inline-block;
    width: 100%;
}
.btnalign.btnalign button.btn {
    margin: 0;
    margin-left: 5px;
    padding: 5px 10px!important;
}

button.daterangepickers {
    width: auto;
}
.btnalign button {
    vertical-align: middle;
    margin-top: 3px;
}
.daterangepickers {
    position: relative;
    display: inline-block;
    width: 100%;
}

.btnalign.btnalign input.form-control {
    margin: 0;
    border: 1px solid #ddd;
}
.form-control {
    padding: 5px 12px;
}

.btn {
    display: inline-block;
    margin-bottom: 0;
    padding: 5px 12px;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.42857143;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    -ms-touch-action: manipulation;
    touch-action: manipulation;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    background-image: none;
    border-radius: 4px;
    background-color: #fff;
    border: 1px solid #d3d8dc;
    color: #666;
}
.btnalign.btnalign button.btn {
    margin: 0;
    margin-left: 5px;
    padding: 5px 10px!important;
}
.btnalign button {
    vertical-align: middle;
    margin-top: 3px;
}
.btn-big {
    border-radius: 3px;
    text-align: center;
    font-family: "Microsoft YaHei";
}

.chart-table {
    margin-left: 20px;
    margin-top: 20px;
    border: 1px solid #d3d8dc;
    border-radius: 4px;
    margin-right: 20px;
    overflow-x: auto;
}
.chart-table .table {
    border: 0;
    border-radius: 4px;
    width: 100%;
}

.table {
    border: 1px solid #d3d3d3;
    border-radius: 4px;
}
.chart-table .table tr {
    border-bottom: 0;
}
.table tr {
    border-bottom: 1px solid #ececec;
}
.chart-table tr:last-child td {
    border-bottom: 0;
}
.chart-table .table td {
    border-bottom: 1px solid #ededed;
    border-right: 0;
    height: auto;
    line-height: normal;
    padding-left: 15px;
    padding-top: 10px;
}
table>tbody>tr>td.no-content_wrap {
    text-align: center;
    padding: 50px 0!important;
    border-bottom: 0;
}
.chart-table td {
    border-bottom: 1px solid #ededed;
    text-align: left;
    padding: 10px 0 8px 15px;
    white-space: nowrap;
}
.table td {
    border-bottom: 1px solid #ececec;
    border-right: 1px solid #ececec;
    height: 40px;
    line-height: 40px;
    padding-left: 30px;
}
.tabmenu.tabmenu-2 {
    border: 0;
    margin-left: 20px;
    height: auto;
}
.chart-table {
    margin-left: 20px;
    margin-top: 20px;
    border: 1px solid #d3d8dc;
    border-radius: 4px;
    margin-right: 20px;
    overflow-x: auto;
}
.chart-table .table {
    border: 0;
    border-radius: 4px;
}
table tr td .pagination-total{
    margin: 0;
    border: 0;
    border-bottom: 1px solid #d3d8dc;
    padding: 10px 10px 10px 15px;
    background: #f7f8f9;
    border-radius: 4px;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
}
.alldelete {
    width: 260px;
    display: inline-block;
}
.alldelete input {
    vertical-align: middle;
    margin-right: 5px;
}
.bdtop3 {
    margin: 20px;
    border: 1px solid #d3d8dc;
    padding: 10px;
    background: #f7f8f9;
    border-radius: 4px;
}
</style>