import service from '@/utils/request'

// @Tags SysHotelRooms
// @Summary 创建SysHotelRooms
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body model.SysHotelRooms true "创建SysHotelRooms"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"获取成功"}"
// @Router /sysHotelRooms/createSysHotelRooms [post]
export const createSysHotelRooms = (data) => {
  return service({
    url: '/sysHotelRooms/createSysHotelRooms',
    method: 'post',
    data
  })
}

// @Tags SysHotelRooms
// @Summary 删除SysHotelRooms
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body model.SysHotelRooms true "删除SysHotelRooms"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"删除成功"}"
// @Router /sysHotelRooms/deleteSysHotelRooms [delete]
export const deleteSysHotelRooms = (data) => {
  return service({
    url: '/sysHotelRooms/deleteSysHotelRooms',
    method: 'delete',
    data
  })
}

// @Tags SysHotelRooms
// @Summary 删除SysHotelRooms
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body request.IdsReq true "批量删除SysHotelRooms"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"删除成功"}"
// @Router /sysHotelRooms/deleteSysHotelRooms [delete]
export const deleteSysHotelRoomsByIds = (data) => {
  return service({
    url: '/sysHotelRooms/deleteSysHotelRoomsByIds',
    method: 'delete',
    data
  })
}

// @Tags SysHotelRooms
// @Summary 更新SysHotelRooms
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body model.SysHotelRooms true "更新SysHotelRooms"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"更新成功"}"
// @Router /sysHotelRooms/updateSysHotelRooms [put]
export const updateSysHotelRooms = (data) => {
  return service({
    url: '/sysHotelRooms/updateSysHotelRooms',
    method: 'put',
    data
  })
}

// @Tags SysHotelRooms
// @Summary 用id查询SysHotelRooms
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data query model.SysHotelRooms true "用id查询SysHotelRooms"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"查询成功"}"
// @Router /sysHotelRooms/findSysHotelRooms [get]
export const findSysHotelRooms = (params) => {
  return service({
    url: '/sysHotelRooms/findSysHotelRooms',
    method: 'get',
    params
  })
}

// @Tags SysHotelRooms
// @Summary 分页获取SysHotelRooms列表
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data query request.PageInfo true "分页获取SysHotelRooms列表"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"获取成功"}"
// @Router /sysHotelRooms/getSysHotelRoomsList [get]
export const getSysHotelRoomsList = (params) => {
  return service({
    url: '/sysHotelRooms/getSysHotelRoomsList',
    method: 'get',
    params
  })
}
