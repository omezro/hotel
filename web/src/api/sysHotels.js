import service from '@/utils/request'

// @Tags SysHotels
// @Summary 创建SysHotels
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body model.SysHotels true "创建SysHotels"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"获取成功"}"
// @Router /sysHotels/createSysHotels [post]
export const createSysHotels = (data) => {
  return service({
    url: '/sysHotels/createSysHotels',
    method: 'post',
    data
  })
}

// @Tags SysHotels
// @Summary 删除SysHotels
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body model.SysHotels true "删除SysHotels"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"删除成功"}"
// @Router /sysHotels/deleteSysHotels [delete]
export const deleteSysHotels = (data) => {
  return service({
    url: '/sysHotels/deleteSysHotels',
    method: 'delete',
    data
  })
}

// @Tags SysHotels
// @Summary 删除SysHotels
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body request.IdsReq true "批量删除SysHotels"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"删除成功"}"
// @Router /sysHotels/deleteSysHotels [delete]
export const deleteSysHotelsByIds = (data) => {
  return service({
    url: '/sysHotels/deleteSysHotelsByIds',
    method: 'delete',
    data
  })
}

// @Tags SysHotels
// @Summary 更新SysHotels
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body model.SysHotels true "更新SysHotels"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"更新成功"}"
// @Router /sysHotels/updateSysHotels [put]
export const updateSysHotels = (data) => {
  return service({
    url: '/sysHotels/updateSysHotels',
    method: 'put',
    data
  })
}

// @Tags SysHotels
// @Summary 用id查询SysHotels
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data query model.SysHotels true "用id查询SysHotels"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"查询成功"}"
// @Router /sysHotels/findSysHotels [get]
export const findSysHotels = (params) => {
  return service({
    url: '/sysHotels/findSysHotels',
    method: 'get',
    params
  })
}

// @Tags SysHotels
// @Summary 分页获取SysHotels列表
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data query request.PageInfo true "分页获取SysHotels列表"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"获取成功"}"
// @Router /sysHotels/getSysHotelsList [get]
export const getSysHotelsList = (params) => {
  return service({
    url: '/sysHotels/getSysHotelsList',
    method: 'get',
    params
  })
}
