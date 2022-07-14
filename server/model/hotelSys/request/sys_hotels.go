package request

import (
	"github.com/flipped-aurora/gin-vue-admin/server/model/common/request"
	"github.com/flipped-aurora/gin-vue-admin/server/model/hotelSys"
)

type SysHotelsSearch struct {
	hotelSys.SysHotels
	request.PageInfo
}

type HotelCreateUpdate struct {
	hotelSys.SysHotels
	Rooms []*hotelSys.SysHotelRooms
}
