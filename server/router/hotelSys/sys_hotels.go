package hotelSys

import (
	"github.com/flipped-aurora/gin-vue-admin/server/api/v1"
	"github.com/flipped-aurora/gin-vue-admin/server/middleware"
	"github.com/gin-gonic/gin"
)

type SysHotelsRouter struct {
}

// InitSysHotelsRouter 初始化 SysHotels 路由信息
func (s *SysHotelsRouter) InitSysHotelsRouter(Router *gin.RouterGroup) {
	sysHotelsRouter := Router.Group("sysHotels").Use(middleware.OperationRecord())
	sysHotelsRouterWithoutRecord := Router.Group("sysHotels")
	var sysHotelsApi = v1.ApiGroupApp.HotelsysApiGroup.SysHotelsApi
	{
		sysHotelsRouter.POST("createSysHotels", sysHotelsApi.CreateSysHotels)   // 新建SysHotels
		sysHotelsRouter.DELETE("deleteSysHotels", sysHotelsApi.DeleteSysHotels) // 删除SysHotels
		sysHotelsRouter.DELETE("deleteSysHotelsByIds", sysHotelsApi.DeleteSysHotelsByIds) // 批量删除SysHotels
		sysHotelsRouter.PUT("updateSysHotels", sysHotelsApi.UpdateSysHotels)    // 更新SysHotels
	}
	{
		sysHotelsRouterWithoutRecord.GET("findSysHotels", sysHotelsApi.FindSysHotels)        // 根据ID获取SysHotels
		sysHotelsRouterWithoutRecord.GET("getSysHotelsList", sysHotelsApi.GetSysHotelsList)  // 获取SysHotels列表
	}
}
