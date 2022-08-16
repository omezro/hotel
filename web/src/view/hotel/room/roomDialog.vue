<template>
  <div>
    <div class="gva-form-box">
      <el-form :model="formData" :rules="rules" label-position="right" label-width="80px">
        <el-form-item label="酒店ID:">
          <el-input v-model.number="formData.hotelId" clearable placeholder="请输入" />
        </el-form-item>
        <el-form-item label="房型名称:">
          <el-input v-model="formData.name" clearable placeholder="请输入" />
        </el-form-item>
        <el-form-item label="无早价格:">
          <el-input v-model.number="formData.noBreakfast" clearable placeholder="请输入" />
        </el-form-item>
        <el-form-item label="单早价格:">
          <el-input v-model.number="formData.singleBreakfast" clearable placeholder="请输入" />
        </el-form-item>
        <el-form-item label="双早价格:">
          <el-input v-model.number="formData.doubleBreakfast" clearable placeholder="请输入" />
        </el-form-item>
        <el-form-item label="套餐价格:">
          <el-input v-model.number="formData.setMeal" clearable placeholder="请输入" />
        </el-form-item>
        <el-form-item>
          <el-button size="mini" type="primary" @click="save">保存</el-button>
          <el-button size="mini" type="primary" @click="back">返回</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SysRoomCosts'
}
</script>

<script setup>
import {
  createSysRoomCosts,
  updateSysRoomCosts,
  findSysRoomCosts
} from '@/api/sysRoomCosts'

// 自动获取字典
import { useRoute, useRouter } from 'vue-router'
import { ElMessage } from 'element-plus'
import { ref } from 'vue'
const route = useRoute()
const router = useRouter()
const type = ref('')
const formData = ref({
  hotelId: 0,
  name: '',
  noBreakfast: 0,
  singleBreakfast: 0,
  doubleBreakfast: 0,
  setMeal: 0,
  mark: '',
})

const rules = ref({
  name: [{
    required: true,
    message: '请输入房型名称',
    trigger: 'blur'
  }],
  noBreakfast: [{
    required: true,
    message: '请输入无早价格',
    trigger: 'blur'
  }],
  singleBreakfast: [{
    required: true,
    message: '请输入单早价格',
    trigger: 'blur'
  }],
  doubleBreakfast: [{
    required: true,
    message: '请输入双早价格',
    trigger: 'blur'
  }],
  setMeal: [{
    required: true,
    message: '请输入套餐价格',
    trigger: 'blur'
  }],
})

// 初始化方法
const init = async() => {
  // 建议通过url传参获取目标数据ID 调用 find方法进行查询数据操作 从而决定本页面是create还是update 以下为id作为url参数示例
  if (route.query.id) {
    const res = await findSysRoomCosts({ ID: route.query.id })
    if (res.code === 0) {
      formData.value = res.data.resysRoomCosts
      type.value = 'update'
    }
  } else {
    type.value = 'create'
  }
}

init()
// 保存按钮
const save = async() => {
  let res
  switch (type.value) {
    case 'create':
      res = await createSysRoomCosts(formData.value)
      break
    case 'update':
      res = await updateSysRoomCosts(formData.value)
      break
    default:
      res = await createSysRoomCosts(formData.value)
      break
  }
  if (res.code === 0) {
    ElMessage({
      type: 'success',
      message: '创建/更改成功'
    })
  }
}

// 返回按钮
const back = () => {
  router.go(-1)
}

</script>

<style>
</style>
