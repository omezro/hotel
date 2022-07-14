package hotelSys

import (
	"github.com/flipped-aurora/gin-vue-admin/server/global"
	"github.com/flipped-aurora/gin-vue-admin/server/model/common/request"
	"github.com/flipped-aurora/gin-vue-admin/server/model/common/response"
	"github.com/flipped-aurora/gin-vue-admin/server/model/hotelSys"
	hotelSysReq "github.com/flipped-aurora/gin-vue-admin/server/model/hotelSys/request"
	"github.com/gin-gonic/gin"
	"go.uber.org/zap"
)

type SysHotelRoomsApi struct {
}

// CreateSysHotelRooms 创建SysHotelRooms
// @Tags SysHotelRooms
// @Summary 创建SysHotelRooms
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body hotelSys.SysHotelRooms true "创建SysHotelRooms"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"获取成功"}"
// @Router /sysHotelRooms/createSysHotelRooms [post]
func (sysHotelRoomsApi *SysHotelRoomsApi) CreateSysHotelRooms(c *gin.Context) {
	var sysHotelRooms []*hotelSys.SysHotelRooms
	_ = c.ShouldBindJSON(&sysHotelRooms)
	if err := sysHotelRoomsService.CreateSysHotelRooms(sysHotelRooms); err != nil {
		global.GVA_LOG.Error("创建失败!", zap.Error(err))
		response.FailWithMessage("创建失败", c)
	} else {
		response.OkWithMessage("创建成功", c)
	}
}

// DeleteSysHotelRooms 删除SysHotelRooms
// @Tags SysHotelRooms
// @Summary 删除SysHotelRooms
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body hotelSys.SysHotelRooms true "删除SysHotelRooms"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"删除成功"}"
// @Router /sysHotelRooms/deleteSysHotelRooms [delete]
func (sysHotelRoomsApi *SysHotelRoomsApi) DeleteSysHotelRooms(c *gin.Context) {
	var sysHotelRooms hotelSys.SysHotelRooms
	_ = c.ShouldBindJSON(&sysHotelRooms)
	if err := sysHotelRoomsService.DeleteSysHotelRooms(sysHotelRooms); err != nil {
		global.GVA_LOG.Error("删除失败!", zap.Error(err))
		response.FailWithMessage("删除失败", c)
	} else {
		response.OkWithMessage("删除成功", c)
	}
}

// DeleteSysHotelRoomsByIds 批量删除SysHotelRooms
// @Tags SysHotelRooms
// @Summary 批量删除SysHotelRooms
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body request.IdsReq true "批量删除SysHotelRooms"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"批量删除成功"}"
// @Router /sysHotelRooms/deleteSysHotelRoomsByIds [delete]
func (sysHotelRoomsApi *SysHotelRoomsApi) DeleteSysHotelRoomsByIds(c *gin.Context) {
	var IDS request.IdsReq
	_ = c.ShouldBindJSON(&IDS)
	if err := sysHotelRoomsService.DeleteSysHotelRoomsByIds(IDS); err != nil {
		global.GVA_LOG.Error("批量删除失败!", zap.Error(err))
		response.FailWithMessage("批量删除失败", c)
	} else {
		response.OkWithMessage("批量删除成功", c)
	}
}

// UpdateSysHotelRooms 更新SysHotelRooms
// @Tags SysHotelRooms
// @Summary 更新SysHotelRooms
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body hotelSys.SysHotelRooms true "更新SysHotelRooms"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"更新成功"}"
// @Router /sysHotelRooms/updateSysHotelRooms [put]
func (sysHotelRoomsApi *SysHotelRoomsApi) UpdateSysHotelRooms(c *gin.Context) {
	var sysHotelRooms hotelSys.SysHotelRooms
	_ = c.ShouldBindJSON(&sysHotelRooms)
	if err := sysHotelRoomsService.UpdateSysHotelRooms(sysHotelRooms); err != nil {
		global.GVA_LOG.Error("更新失败!", zap.Error(err))
		response.FailWithMessage("更新失败", c)
	} else {
		response.OkWithMessage("更新成功", c)
	}
}

// FindSysHotelRooms 用id查询SysHotelRooms
// @Tags SysHotelRooms
// @Summary 用id查询SysHotelRooms
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data query hotelSys.SysHotelRooms true "用id查询SysHotelRooms"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"查询成功"}"
// @Router /sysHotelRooms/findSysHotelRooms [get]
func (sysHotelRoomsApi *SysHotelRoomsApi) FindSysHotelRooms(c *gin.Context) {
	var sysHotelRooms hotelSys.SysHotelRooms
	_ = c.ShouldBindQuery(&sysHotelRooms)
	if resysHotelRooms, err := sysHotelRoomsService.GetSysHotelRooms(sysHotelRooms.ID); err != nil {
		global.GVA_LOG.Error("查询失败!", zap.Error(err))
		response.FailWithMessage("查询失败", c)
	} else {
		response.OkWithData(gin.H{"resysHotelRooms": resysHotelRooms}, c)
	}
}

// GetSysHotelRoomsList 分页获取SysHotelRooms列表
// @Tags SysHotelRooms
// @Summary 分页获取SysHotelRooms列表
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data query hotelSysReq.SysHotelRoomsSearch true "分页获取SysHotelRooms列表"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"获取成功"}"
// @Router /sysHotelRooms/getSysHotelRoomsList [get]
func (sysHotelRoomsApi *SysHotelRoomsApi) GetSysHotelRoomsList(c *gin.Context) {
	var pageInfo hotelSysReq.SysHotelRoomsSearch
	_ = c.ShouldBindQuery(&pageInfo)
	if list, total, err := sysHotelRoomsService.GetSysHotelRoomsInfoList(pageInfo); err != nil {
		global.GVA_LOG.Error("获取失败!", zap.Error(err))
		response.FailWithMessage("获取失败", c)
	} else {
		response.OkWithDetailed(response.PageResult{
			List:     list,
			Total:    total,
			Page:     pageInfo.Page,
			PageSize: pageInfo.PageSize,
		}, "获取成功", c)
	}
}
