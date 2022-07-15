import service from '@/utils/request'

// @Tags SysRoomCosts
// @Summary 创建SysRoomCosts
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body model.SysRoomCosts true "创建SysRoomCosts"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"获取成功"}"
// @Router /sysRoomCosts/createSysRoomCosts [post]
export const createSysRoomCosts = (data) => {
  return service({
    url: '/sysRoomCosts/createSysRoomCosts',
    method: 'post',
    data
  })
}

// @Tags SysRoomCosts
// @Summary 删除SysRoomCosts
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body model.SysRoomCosts true "删除SysRoomCosts"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"删除成功"}"
// @Router /sysRoomCosts/deleteSysRoomCosts [delete]
export const deleteSysRoomCosts = (data) => {
  return service({
    url: '/sysRoomCosts/deleteSysRoomCosts',
    method: 'delete',
    data
  })
}

// @Tags SysRoomCosts
// @Summary 删除SysRoomCosts
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body request.IdsReq true "批量删除SysRoomCosts"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"删除成功"}"
// @Router /sysRoomCosts/deleteSysRoomCosts [delete]
export const deleteSysRoomCostsByIds = (data) => {
  return service({
    url: '/sysRoomCosts/deleteSysRoomCostsByIds',
    method: 'delete',
    data
  })
}

// @Tags SysRoomCosts
// @Summary 更新SysRoomCosts
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body model.SysRoomCosts true "更新SysRoomCosts"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"更新成功"}"
// @Router /sysRoomCosts/updateSysRoomCosts [put]
export const updateSysRoomCosts = (data) => {
  return service({
    url: '/sysRoomCosts/updateSysRoomCosts',
    method: 'put',
    data
  })
}

// @Tags SysRoomCosts
// @Summary 用id查询SysRoomCosts
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data query model.SysRoomCosts true "用id查询SysRoomCosts"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"查询成功"}"
// @Router /sysRoomCosts/findSysRoomCosts [get]
export const findSysRoomCosts = (params) => {
  return service({
    url: '/sysRoomCosts/findSysRoomCosts',
    method: 'get',
    params
  })
}

// @Tags SysRoomCosts
// @Summary 分页获取SysRoomCosts列表
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data query request.PageInfo true "分页获取SysRoomCosts列表"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"获取成功"}"
// @Router /sysRoomCosts/getSysRoomCostsList [get]
export const getSysRoomCostsList = (params) => {
  return service({
    url: '/sysRoomCosts/getSysRoomCostsList',
    method: 'get',
    params
  })
}
