package response

import "github.com/flipped-aurora/gin-vue-admin/server/model/hotelSys"

type HotelsRsp struct {
	hotelSys.SysHotels
	Rooms []hotelSys.SysHotelRooms `json:"rooms"`
}
