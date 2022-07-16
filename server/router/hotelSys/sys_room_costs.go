package hotelSys

import (
	"github.com/flipped-aurora/gin-vue-admin/server/api/v1"
	"github.com/flipped-aurora/gin-vue-admin/server/middleware"
	"github.com/gin-gonic/gin"
)

type SysRoomCostsRouter struct {
}

// InitSysRoomCostsRouter 初始化 SysRoomCosts 路由信息
func (s *SysRoomCostsRouter) InitSysRoomCostsRouter(Router *gin.RouterGroup) {
	sysRoomCostsRouter := Router.Group("sysRoomCosts").Use(middleware.OperationRecord())
	sysRoomCostsRouterWithoutRecord := Router.Group("sysRoomCosts")
	var sysRoomCostsApi = v1.ApiGroupApp.HotelsysApiGroup.SysRoomCostsApi
	{
		sysRoomCostsRouter.POST("createSysRoomCosts", sysRoomCostsApi.CreateSysRoomCosts)   // 新建SysRoomCosts
		sysRoomCostsRouter.DELETE("deleteSysRoomCosts", sysRoomCostsApi.DeleteSysRoomCosts) // 删除SysRoomCosts
		sysRoomCostsRouter.DELETE("deleteSysRoomCostsByIds", sysRoomCostsApi.DeleteSysRoomCostsByIds) // 批量删除SysRoomCosts
		sysRoomCostsRouter.PUT("updateSysRoomCosts", sysRoomCostsApi.UpdateSysRoomCosts)    // 更新SysRoomCosts
	}
	{
		sysRoomCostsRouterWithoutRecord.GET("findSysRoomCosts", sysRoomCostsApi.FindSysRoomCosts)        // 根据ID获取SysRoomCosts
		sysRoomCostsRouterWithoutRecord.GET("getSysRoomCostsList", sysRoomCostsApi.GetSysRoomCostsList)  // 获取SysRoomCosts列表
	}
}
