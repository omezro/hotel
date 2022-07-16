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

type SysRoomCostsApi struct {
}

// CreateSysRoomCosts 创建SysRoomCosts
// @Tags SysRoomCosts
// @Summary 创建SysRoomCosts
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body hotelSys.SysRoomCosts true "创建SysRoomCosts"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"获取成功"}"
// @Router /sysRoomCosts/createSysRoomCosts [post]
func (sysRoomCostsApi *SysRoomCostsApi) CreateSysRoomCosts(c *gin.Context) {
	var sysRoomCosts hotelSys.SysRoomCosts
	_ = c.ShouldBindJSON(&sysRoomCosts)
	if err := sysRoomCostsService.CreateSysRoomCosts(sysRoomCosts); err != nil {
		global.GVA_LOG.Error("创建失败!", zap.Error(err))
		response.FailWithMessage("创建失败", c)
	} else {
		response.OkWithMessage("创建成功", c)
	}
}

// DeleteSysRoomCosts 删除SysRoomCosts
// @Tags SysRoomCosts
// @Summary 删除SysRoomCosts
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body hotelSys.SysRoomCosts true "删除SysRoomCosts"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"删除成功"}"
// @Router /sysRoomCosts/deleteSysRoomCosts [delete]
func (sysRoomCostsApi *SysRoomCostsApi) DeleteSysRoomCosts(c *gin.Context) {
	var sysRoomCosts hotelSys.SysRoomCosts
	_ = c.ShouldBindJSON(&sysRoomCosts)
	if err := sysRoomCostsService.DeleteSysRoomCosts(sysRoomCosts); err != nil {
		global.GVA_LOG.Error("删除失败!", zap.Error(err))
		response.FailWithMessage("删除失败", c)
	} else {
		response.OkWithMessage("删除成功", c)
	}
}

// DeleteSysRoomCostsByIds 批量删除SysRoomCosts
// @Tags SysRoomCosts
// @Summary 批量删除SysRoomCosts
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body request.IdsReq true "批量删除SysRoomCosts"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"批量删除成功"}"
// @Router /sysRoomCosts/deleteSysRoomCostsByIds [delete]
func (sysRoomCostsApi *SysRoomCostsApi) DeleteSysRoomCostsByIds(c *gin.Context) {
	var IDS request.IdsReq
	_ = c.ShouldBindJSON(&IDS)
	if err := sysRoomCostsService.DeleteSysRoomCostsByIds(IDS); err != nil {
		global.GVA_LOG.Error("批量删除失败!", zap.Error(err))
		response.FailWithMessage("批量删除失败", c)
	} else {
		response.OkWithMessage("批量删除成功", c)
	}
}

// UpdateSysRoomCosts 更新SysRoomCosts
// @Tags SysRoomCosts
// @Summary 更新SysRoomCosts
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body hotelSys.SysRoomCosts true "更新SysRoomCosts"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"更新成功"}"
// @Router /sysRoomCosts/updateSysRoomCosts [put]
func (sysRoomCostsApi *SysRoomCostsApi) UpdateSysRoomCosts(c *gin.Context) {
	var sysRoomCosts hotelSys.SysRoomCosts
	_ = c.ShouldBindJSON(&sysRoomCosts)
	if err := sysRoomCostsService.UpdateSysRoomCosts(sysRoomCosts); err != nil {
		global.GVA_LOG.Error("更新失败!", zap.Error(err))
		response.FailWithMessage("更新失败", c)
	} else {
		response.OkWithMessage("更新成功", c)
	}
}

// FindSysRoomCosts 用id查询SysRoomCosts
// @Tags SysRoomCosts
// @Summary 用id查询SysRoomCosts
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data query hotelSys.SysRoomCosts true "用id查询SysRoomCosts"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"查询成功"}"
// @Router /sysRoomCosts/findSysRoomCosts [get]
func (sysRoomCostsApi *SysRoomCostsApi) FindSysRoomCosts(c *gin.Context) {
	var sysRoomCosts hotelSys.SysRoomCosts
	_ = c.ShouldBindQuery(&sysRoomCosts)
	if resysRoomCosts, err := sysRoomCostsService.GetSysRoomCosts(sysRoomCosts.ID); err != nil {
		global.GVA_LOG.Error("查询失败!", zap.Error(err))
		response.FailWithMessage("查询失败", c)
	} else {
		response.OkWithData(gin.H{"resysRoomCosts": resysRoomCosts}, c)
	}
}

// GetSysRoomCostsList 分页获取SysRoomCosts列表
// @Tags SysRoomCosts
// @Summary 分页获取SysRoomCosts列表
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data query hotelSysReq.SysRoomCostsSearch true "分页获取SysRoomCosts列表"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"获取成功"}"
// @Router /sysRoomCosts/getSysRoomCostsList [get]
func (sysRoomCostsApi *SysRoomCostsApi) GetSysRoomCostsList(c *gin.Context) {
	var pageInfo hotelSysReq.SysRoomCostsSearch
	_ = c.ShouldBindQuery(&pageInfo)
	if list, total, err := sysRoomCostsService.GetSysRoomCostsInfoList(pageInfo); err != nil {
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
