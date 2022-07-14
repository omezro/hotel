package hotelSys

import "github.com/flipped-aurora/gin-vue-admin/server/service"

type ApiGroup struct {
	SysHotelRoomsApi
	SysHotelsApi
}

var (
	sysHotelRoomsService = service.ServiceGroupApp.HotelSysServiceGroup.SysHotelRoomsService
	sysHotelsService     = service.ServiceGroupApp.HotelSysServiceGroup.SysHotelsService
)
