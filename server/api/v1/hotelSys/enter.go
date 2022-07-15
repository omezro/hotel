package hotelSys

import "github.com/flipped-aurora/gin-vue-admin/server/service"

type ApiGroup struct {
	SysHotelRoomsApi
	SysHotelsApi
	SysRoomCostsApi
}

var (
	sysHotelRoomsService = service.ServiceGroupApp.HotelSysServiceGroup.SysHotelRoomsService
	sysHotelsService     = service.ServiceGroupApp.HotelSysServiceGroup.SysHotelsService
	sysRoomCostsService  = service.ServiceGroupApp.HotelSysServiceGroup.SysRoomCostsService
)
