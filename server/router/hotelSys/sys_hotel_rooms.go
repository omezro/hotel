package hotelSys

import (
	"github.com/flipped-aurora/gin-vue-admin/server/api/v1"
	"github.com/flipped-aurora/gin-vue-admin/server/middleware"
	"github.com/gin-gonic/gin"
)

type SysHotelRoomsRouter struct {
}

// InitSysHotelRoomsRouter 初始化 SysHotelRooms 路由信息
func (s *SysHotelRoomsRouter) InitSysHotelRoomsRouter(Router *gin.RouterGroup) {
	sysHotelRoomsRouter := Router.Group("sysHotelRooms").Use(middleware.OperationRecord())
	sysHotelRoomsRouterWithoutRecord := Router.Group("sysHotelRooms")
	var sysHotelRoomsApi = v1.ApiGroupApp.HotelsysApiGroup.SysHotelRoomsApi
	{
		sysHotelRoomsRouter.POST("createSysHotelRooms", sysHotelRoomsApi.CreateSysHotelRooms)   // 新建SysHotelRooms
		sysHotelRoomsRouter.DELETE("deleteSysHotelRooms", sysHotelRoomsApi.DeleteSysHotelRooms) // 删除SysHotelRooms
		sysHotelRoomsRouter.DELETE("deleteSysHotelRoomsByIds", sysHotelRoomsApi.DeleteSysHotelRoomsByIds) // 批量删除SysHotelRooms
		sysHotelRoomsRouter.PUT("updateSysHotelRooms", sysHotelRoomsApi.UpdateSysHotelRooms)    // 更新SysHotelRooms
	}
	{
		sysHotelRoomsRouterWithoutRecord.GET("findSysHotelRooms", sysHotelRoomsApi.FindSysHotelRooms)        // 根据ID获取SysHotelRooms
		sysHotelRoomsRouterWithoutRecord.GET("getSysHotelRoomsList", sysHotelRoomsApi.GetSysHotelRoomsList)  // 获取SysHotelRooms列表
	}
}
