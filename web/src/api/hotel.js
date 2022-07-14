import service from '@/utils/request'

// @Tags Hotel
// @Summary 分页获取酒店
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body modelInterface.PageInfo true "分页获取酒店列表"
// @Success 200 {string} json "{"success":true,"data":{},"msg":"获取成功"}"
// @Router /hotel/list [post]
// {
//  page     int
//	pageSize int
// }
export const getHotelList = (data) => {
  return service({
    url: '/hotel/list',
    method: 'post',
    data
  })
}

// @Tags Hotel
// @Summary 根据id获取酒店信息
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body hotel.GetById true "根据id获取酒店信息"
// @Success 200 {string} json "{"success":true,"data":{},"msg":"获取成功"}"
// @Router /hotel/getApiById [post]
export const getHotelById = (data) => {
  return service({
    url: '/hotel/getHotelById',
    method: 'post',
    data
  })
}

// @Tags Hotel
// @Summary 创建hotel
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body api.CreateHotelParams true "创建api"
// @Success 200 {string} json "{"success":true,"data":{},"msg":"获取成功"}"
// @Router /hotel/createHotel [post]
export const createHotel = (data) => {
  return service({
    url: '/hotel/createHotel',
    method: 'post',
    data
  })
}

// @Tags Hotel
// @Summary 更新hotel
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body hotel.CreateHotelParams true "更新api"
// @Success 200 {string} json "{"success":true,"data":{},"msg":"更新成功"}"
// @Router /hotel/updateHotel [post]
export const updateHotel = (data) => {
  return service({
    url: '/hotel/updateHotel',
    method: 'post',
    data
  })
}

// @Tags Hotel
// @Summary 删除指定hotel
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body dbModel.Hotel true "删除api"
// @Success 200 {string} json "{"success":true,"data":{},"msg":"获取成功"}"
// @Router /hotel/deleteHotel [post]
export const deleteHotel = (data) => {
  return service({
    url: '/hotel/deleteHotel',
    method: 'post',
    data
  })
}

// @Tags Hotel
// @Summary 删除选中Hotel
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body request.IdsReq true "ID"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"删除成功"}"
// @Router /api/deleteHotelByIds [delete]
export const deleteHotelByIds = (data) => {
  return service({
    url: '/hotel/deleteHotelByIds',
    method: 'delete',
    data
  })
}

