<template>
  <div>
    <div class="gva-form-box">
      <el-form :model="formData" label-position="right" label-width="80px">
        <el-form-item label="酒店名称:">
          <el-input v-model="formData.name" clearable placeholder="请输入" />
        </el-form-item>
        <el-form-item label="登陆平台:1-携程,2-飞猪,3-美团:">
          <el-switch v-model="formData.platform" active-color="#13ce66" inactive-color="#ff4949" active-text="是" inactive-text="否" clearable />
        </el-form-item>
        <el-form-item label="酒店经理姓名:">
          <el-input v-model="formData.manager" clearable placeholder="请输入" />
        </el-form-item>
        <el-form-item label="结算方式:">
          <el-input v-model="formData.settlementType" clearable placeholder="请输入" />
        </el-form-item>
        <el-form-item label="转账账户:">
          <el-input v-model="formData.transferAccount" clearable placeholder="请输入" />
        </el-form-item>
        <el-form-item label="签约人:">
          <el-input v-model="formData.signatory" clearable placeholder="请输入" />
        </el-form-item>
        <el-form-item label="催单电话:">
          <el-input v-model.number="formData.phone" clearable placeholder="请输入" />
        </el-form-item>
        <el-form-item label="备注:">
          <el-input v-model="formData.mark" clearable placeholder="请输入" />
        </el-form-item>
        <el-form-item label="房型ID:">
          <el-input v-model.number="formData.roomId" clearable placeholder="请输入" />
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
  name: 'SysHotels'
}
</script>

<script setup>
import {
  createSysHotels,
  updateSysHotels,
  findSysHotels
} from '@/api/sysHotels'

// 自动获取字典
import { useRoute, useRouter } from 'vue-router'
import { ElMessage } from 'element-plus'
import { ref } from 'vue'
const route = useRoute()
const router = useRouter()
const type = ref('')
const formData = ref({
  name: '',
  platform: false,
  manager: '',
  settlementType: '',
  transferAccount: '',
  signatory: '',
  phone: 0,
  mark: '',
  roomId: 0,
})

// 初始化方法
const init = async() => { // 建议通过url传参获取目标数据ID 调用 find方法进行查询数据操作 从而决定本页面是create还是update 以下为id作为url参数示例
  if (route.query.id) {
    const res = await findSysHotels({ ID: route.query.id })
    if (res.code === 0) {
      formData.value = res.data.resysHotels
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
      res = await createSysHotels(formData.value)
      break
    case 'update':
      res = await updateSysHotels(formData.value)
      break
    default:
      res = await createSysHotels(formData.value)
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
