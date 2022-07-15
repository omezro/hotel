<template>
  <div>
    <div class="gva-search-box">
      <el-form ref="searchForm" :inline="true" :model="searchInfo">
        <el-form-item label="酒店名称">
          <el-input v-model="searchInfo.name" placeholder="酒店名称" />
        </el-form-item>
        <el-form-item label="经理电话">
          <el-input v-model="searchInfo.phone" placeholder="经理电话" />
        </el-form-item>
        <el-form-item label="签约人">
          <el-input v-model="searchInfo.signatory" placeholder="签约人" />
        </el-form-item>
        <el-form-item>
          <el-button size="small" type="primary" icon="search" @click="onSubmit">查询</el-button>
          <el-button size="small" icon="refresh" @click="onReset">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="gva-table-box">
      <div class="gva-btn-list">
        <el-button size="small" type="primary" icon="plus" @click="openDialog">新增</el-button>
        <el-popover v-model:visible="deleteVisible" placement="top" width="160">
          <p>确定要删除吗？</p>
          <div style="text-align: right; margin-top: 8px;">
            <el-button size="small" type="text" @click="deleteVisible = false">取消</el-button>
            <el-button size="small" type="primary" @click="onDelete">确定</el-button>
          </div>
          <template #reference>
            <el-button icon="delete" size="small" :disabled="!hotels.length" style="margin-left: 10px;" @click="deleteVisible = true">删除</el-button>
          </template>
        </el-popover>
      </div>
      <el-table
        ref="multipleTable"
        :data="tableData"
        style="width: 100%"
        tooltip-effect="dark"
        row-key="ID"
        @sort-change="sortChange"
        @selection-change="handleSelectionChange"
      >
        <el-table-column type="selection" width="55" />
        <el-table-column align="left" label="id" min-width="60" prop="ID" />
        <el-table-column label="酒店名称" prop="name" width="180" />
        <el-table-column label="签约人" prop="signatory" width="120" />
        <el-table-column label="上架平台" prop="platform" width="120" />
        <el-table-column label="酒店经理姓名" prop="manager" width="120" />
        <el-table-column label="电话" prop="phone" width="120" />
        <el-table-column label="按钮组" min-width="160">
          <template #default="scope">
            <el-button
              icon="document"
              size="small"
              type="text"
              @click="toDetails(scope.row)"
            >详情</el-button>
            <el-button
              icon="edit"
              size="small"
              type="text"
              @click="updateHotelById(scope.row)"
            >编辑</el-button>
            <el-button
              icon="delete"
              size="small"
              type="text"
              @click="deleteHotelById(scope.row)"
            >删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <div class="gva-pagination">
        <el-pagination
          :current-page="page"
          :page-size="pageSize"
          :page-sizes="[10, 30, 50, 100]"
          :total="total"
          layout="total, sizes, prev, pager, next, jumper"
          @current-change="handleCurrentChange"
          @size-change="handleSizeChange"
        />
      </div>
    </div>
    <el-dialog v-model="dialogFormVisible" :before-close="closeDialog" title="新增酒店">
      <el-form
        ref="formData"
        :model="form"
        :rules="rules"
        size="medium"
        label-width="100px"
        label-position="left"
      >
        <el-form-item label="酒店名称" prop="name">
          <el-input
            v-model="form.name"
            placeholder="请输入酒店名"
            :maxlength="20"
            show-word-limit
            clearable
            style="width:85%"
          />
        </el-form-item>
        <el-form-item label="登陆平台" prop="platform">
          <div style="margin: 15px 0;" />
          <el-checkbox-group v-model="form.platform" @change="handleCheckedPlatformChange">
            <el-checkbox
              v-for="platform in platformOptions"
              :key="platform"
              :label="platform"
            >{{ platform }}</el-checkbox>
          </el-checkbox-group>
        </el-form-item>
        <el-form-item label="经理姓名" prop="manager">
          <el-input
            v-model="form.manager"
            placeholder="请输入经理姓名"
            clearable
            style="width:85%"
          />
        </el-form-item>
        <el-form-item label="结算方式" prop="settlementType">
          <el-input
            v-model="form.settlementType"
            placeholder="请输入结算方式"
            clearable
            style="width:85%"
          />
        </el-form-item>
        <el-form-item label="转款账户" prop="transferAccount">
          <el-input
            v-model="form.transferAccount"
            placeholder="请输入转款账户"
            clearable
            style="width:85%"
          />
        </el-form-item>
        <el-form-item label="签约人" prop="signatory">
          <el-input
            v-model="form.signatory"
            placeholder="请输入签约人"
            clearable
            style="width:85%"
          />
        </el-form-item>
        <el-form-item label="催单电话" prop="phone">
          <el-input
            v-model="form.phone"
            placeholder="请输入催单电话"
            clearable
            style="width:85%"
          />
        </el-form-item>
        <el-form-item label="备注" prop="mark">
          <el-input
            v-model="form.mark"
            placeholder="请输入备注"
            clearable
            style="width:85%"
          />
        </el-form-item>
<!--        <el-form-item
          v-for="(room, index) in form.rooms"
          :key="room.key"
          :label="'房型' + (index+1)"
          :prop="'rooms.' + index + '.name'"
          :rules="{
            required: true, message: '请输入房型', trigger: 'blur'
          }"
          placeholder="请输入房型"
        >
          <el-input v-model="room.name" style="width:30%" />
          <el-radio-group v-model="room.food" style="width:37%;margin-left: 20px">
            <el-radio-button :label="1">无早</el-radio-button>
            <el-radio-button :label="2">单早</el-radio-button>
            <el-radio-button :label="3">双早</el-radio-button>
            <el-radio-button :label="4">套餐</el-radio-button>
          </el-radio-group>
          <el-button v-if="dialogFormFoot" style="width:15%" type="danger" plain @click.prevent="removeRoom(room)">删除</el-button>
        </el-form-item>-->
      </el-form>
      <template #footer>
        <div v-if="dialogFormFoot" class="dialog-footer">
          <el-button @click="closeDialog">取 消</el-button>
<!--          <el-button type="primary" plain @click="addRoom">新增房型</el-button>-->
          <el-button type="primary" @click="enterDialog">确 定</el-button>
        </div>
      </template>
    </el-dialog>
  </div>
</template>

<script setup>
import {
  createSysHotels,
  deleteSysHotels,
  deleteSysHotelsByIds,
  updateSysHotels,
  findSysHotels,
  getSysHotelsList,
} from '@/api/sysHotels'

import { ref } from 'vue'
import { ElMessage } from 'element-plus'
import { toSQLLine } from '@/utils/stringFun'
import { useRouter } from 'vue-router'

const router = useRouter()

const hotels = ref([])
const formData = ref(null)
const form = ref({
  name: '',
  platform: [],
  manager: '',
  settlementType: '',
  transferAccount: '',
  signatory: '',
  phone: '',
  mark: '',
  /* rooms: [{
    name: '',
    food: 1
  }] */
})
const initForm = () => {
  formData.value.resetFields()
  form.value = {
    name: '',
    platform: [],
    manager: '',
    settlementType: '',
    transferAccount: '',
    signatory: '',
    phone: '',
    mark: '',
   /*  rooms: [{
      name: '',
      food: 1
    }] */
  }
}
const rules = ref({
  name: [{
    required: true,
    message: '请输入酒店名称',
    trigger: 'blur'
  }],
  platform: [{
    required: true,
    message: '请选择登陆平台',
    trigger: 'blur'
  }],
  manager: [{
    required: true,
    message: '请输入经理姓名',
    trigger: 'blur'
  }],
  settlementType: [{
    required: true,
    message: '请输入结算方式',
    trigger: 'blur'
  }],
  transferAccount: [{
    required: true,
    message: '请输入转款账户',
    trigger: 'blur'
  }],
  signatory: [{
    required: true,
    message: '请输入签约人',
    trigger: 'blur'
  }],
  phone: [{
    required: true,
    message: '请输入催单电话',
    trigger: 'blur'
  }, {
    pattern: /^1[3456789]\d{9}$/,
    message: '手机号码有误',
    trigger: 'blur'
  }],
  /* room: [{
    required: true,
    message: '请输入房型',
    trigger: 'blur'
  }], */
})
const platformOptions = ref(['携程', '飞猪', '美团'])

const handleCheckedPlatformChange = (value) => {
  console.log(value)
}

/* const platformFormat = (row, column) => {
  const pl = ['未知', '携程', '飞猪', '美团']
  if (row.platform > 3) {
    return '未知'
  }
  return pl[row.platform]
} */

const page = ref(1)
const total = ref(0)
const pageSize = ref(10)
const tableData = ref([])
const searchInfo = ref({})
const dialogFormFoot = ref(false)

const onReset = () => {
  searchInfo.value = {}
  getTableData()
}

const onSubmit = () => {
  page.value = 1
  pageSize.value = 10
  getTableData()
}

// 分页
const handleSizeChange = (val) => {
  pageSize.value = val
  getTableData()
}

const handleCurrentChange = (val) => {
  page.value = val
  getTableData()
}

// 查询
const getTableData = async() => {
  const hotels = await getSysHotelsList({ page: page.value, pageSize: pageSize.value, ...searchInfo.value })
  if (hotels.code === 0) {
    tableData.value = hotels.data.list
    total.value = hotels.data.total
    page.value = hotels.data.page
    pageSize.value = hotels.data.pageSize
  }
}

getTableData()

const dialogFormVisible = ref(false)
const type = ref('')
const updateHotelById = async(row) => {
  const res = await findSysHotels({ ID: row.ID })
  type.value = 'update'
  if (res.code === 0) {
    form.value = res.data.resysHotels
    dialogFormVisible.value = true
    dialogFormFoot.value = true
  }
}
const toDetails = async(row) => {
  router.push({
    name: 'hotelRoomCost',
    params: {
      id: row.ID,
    },
  })
  /* const res = await findSysHotels({ ID: row.ID })
  type.value = 'show'
  if (res.code === 0) {
    form.value = res.data.resysHotels
    dialogFormVisible.value = true
    dialogFormFoot.value = false
  } */
}
const closeDialog = () => {
  initForm()
  dialogFormVisible.value = false
}
const deleteHotelById = async(row) => {
  row.visible = false
  const res = await deleteSysHotels({ ID: row.ID })
  if (res.code === 0) {
    ElMessage({
      type: 'success',
      message: '删除成功'
    })
    if (tableData.value.length === 1 && page.value > 1) {
      page.value--
    }
    getTableData()
  }
}

// 排序
const sortChange = ({ prop, order }) => {
  if (prop) {
    if (prop === 'ID') {
      prop = 'id'
    }
    searchInfo.value.orderKey = toSQLLine(prop)
    searchInfo.value.desc = order === 'descending'
  }
  getTableData()
}

// 批量操作
const handleSelectionChange = (val) => {
  hotels.value = val
}
const deleteVisible = ref(false)
const onDelete = async() => {
  const ids = hotels.value.map(item => item.ID)
  const res = await deleteSysHotelsByIds({ ids })
  if (res.code === 0) {
    ElMessage({
      type: 'success',
      message: res.msg
    })
    if (tableData.value.length === ids.length && page.value > 1) {
      page.value--
    }
    deleteVisible.value = false
    getTableData()
  }
}
const enterDialog = async() => {
  formData.value.validate(async valid => {
    if (valid) {
      let res
      switch (type.value) {
        case 'create':
          res = await createSysHotels(form.value)
          break
        case 'update':
          res = await updateSysHotels(form.value)
          break
        default:
          res = await createSysHotels(form.value)
          break
      }

      if (res.code === 0) {
        closeDialog()
        getTableData()
      }
    }
  })
}
/* const removeRoom = (item) => {
  const index = form.value.rooms.indexOf(item)
  if (index === 0) {
    ElMessage({
      type: 'error',
      message: '最少需要输入一个房型'
    })
  } else {
    form.value.rooms.splice(index, 1)
  }
}
const addRoom = () => {
  form.value.rooms.push({
    name: '',
    food: 1
  })
} */
const openDialog = () => {
  type.value = 'create'
  dialogFormVisible.value = true
  dialogFormFoot.value = true
}

</script>

<script>

export default {
  name: 'HotelList'
}
</script>

<style>
</style>
