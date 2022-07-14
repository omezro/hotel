package hotelSys

import (
	"github.com/flipped-aurora/gin-vue-admin/server/global"
	"github.com/flipped-aurora/gin-vue-admin/server/model/common/request"
	"github.com/flipped-aurora/gin-vue-admin/server/model/common/response"
	"github.com/flipped-aurora/gin-vue-admin/server/model/hotelSys"
	hotelSysReq "github.com/flipped-aurora/gin-vue-admin/server/model/hotelSys/request"
	"github.com/flipped-aurora/gin-vue-admin/server/utils"
	"github.com/gin-gonic/gin"
	"go.uber.org/zap"
)

type SysHotelsApi struct {
}

// CreateSysHotels 创建SysHotels
// @Tags SysHotels
// @Summary 创建SysHotels
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body hotelSys.SysHotels true "创建SysHotels"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"获取成功"}"
// @Router /sysHotels/createSysHotels [post]
func (sysHotelsApi *SysHotelsApi) CreateSysHotels(c *gin.Context) {
	var req hotelSysReq.HotelCreateUpdate
	_ = c.ShouldBindJSON(&req)
	req.UserId = utils.GetUserID(c)
	if err := sysHotelsService.CreateSysHotels(req); err != nil {
		global.GVA_LOG.Error("创建失败!", zap.Error(err))
		response.FailWithMessage("创建失败", c)
	} else {
		response.OkWithMessage("创建成功", c)
	}
}

// DeleteSysHotels 删除SysHotels
// @Tags SysHotels
// @Summary 删除SysHotels
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body hotelSys.SysHotels true "删除SysHotels"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"删除成功"}"
// @Router /sysHotels/deleteSysHotels [delete]
func (sysHotelsApi *SysHotelsApi) DeleteSysHotels(c *gin.Context) {
	var sysHotels hotelSys.SysHotels
	_ = c.ShouldBindJSON(&sysHotels)
	sysHotels.UserId = utils.GetUserID(c)
	if err := sysHotelsService.DeleteSysHotels(sysHotels); err != nil {
		global.GVA_LOG.Error("删除失败!", zap.Error(err))
		response.FailWithMessage("删除失败", c)
	} else {
		response.OkWithMessage("删除成功", c)
	}
}

// DeleteSysHotelsByIds 批量删除SysHotels
// @Tags SysHotels
// @Summary 批量删除SysHotels
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body request.IdsReq true "批量删除SysHotels"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"批量删除成功"}"
// @Router /sysHotels/deleteSysHotelsByIds [delete]
func (sysHotelsApi *SysHotelsApi) DeleteSysHotelsByIds(c *gin.Context) {
	var IDS request.IdsReq
	_ = c.ShouldBindJSON(&IDS)
	userId := utils.GetUserID(c)
	if err := sysHotelsService.DeleteSysHotelsByIds(userId, IDS); err != nil {
		global.GVA_LOG.Error("批量删除失败!", zap.Error(err))
		response.FailWithMessage("批量删除失败", c)
	} else {
		response.OkWithMessage("批量删除成功", c)
	}
}

// UpdateSysHotels 更新SysHotels
// @Tags SysHotels
// @Summary 更新SysHotels
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body hotelSys.SysHotels true "更新SysHotels"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"更新成功"}"
// @Router /sysHotels/updateSysHotels [put]
func (sysHotelsApi *SysHotelsApi) UpdateSysHotels(c *gin.Context) {
	var sysHotels hotelSysReq.HotelCreateUpdate
	_ = c.ShouldBindJSON(&sysHotels)
	sysHotels.UserId = utils.GetUserID(c)
	if err := sysHotelsService.UpdateSysHotels(sysHotels); err != nil {
		global.GVA_LOG.Error("更新失败!", zap.Error(err))
		response.FailWithMessage("更新失败", c)
	} else {
		response.OkWithMessage("更新成功", c)
	}
}

// FindSysHotels 用id查询SysHotels
// @Tags SysHotels
// @Summary 用id查询SysHotels
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data query hotelSys.SysHotels true "用id查询SysHotels"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"查询成功"}"
// @Router /sysHotels/findSysHotels [get]
func (sysHotelsApi *SysHotelsApi) FindSysHotels(c *gin.Context) {
	var sysHotels hotelSys.SysHotels
	_ = c.ShouldBindQuery(&sysHotels)
	sysHotels.UserId = utils.GetUserID(c)
	if resysHotels, err := sysHotelsService.GetSysHotels(sysHotels.ID); err != nil {
		global.GVA_LOG.Error("查询失败!", zap.Error(err))
		response.FailWithMessage("查询失败", c)
	} else {
		response.OkWithData(gin.H{"resysHotels": resysHotels}, c)
	}
}

// GetSysHotelsList 分页获取SysHotels列表
// @Tags SysHotels
// @Summary 分页获取SysHotels列表
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data query hotelSysReq.SysHotelsSearch true "分页获取SysHotels列表"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"获取成功"}"
// @Router /sysHotels/getSysHotelsList [get]
func (sysHotelsApi *SysHotelsApi) GetSysHotelsList(c *gin.Context) {
	var pageInfo hotelSysReq.SysHotelsSearch
	_ = c.ShouldBindQuery(&pageInfo)
	pageInfo.UserId = utils.GetUserID(c)
	if list, total, err := sysHotelsService.GetSysHotelsInfoList(pageInfo); err != nil {
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
