package response

import (
	"github.com/flipped-aurora/gin-vue-admin/server/model/hotelSys"
	req "github.com/flipped-aurora/gin-vue-admin/server/model/hotelSys/request"
)

type HotelsRsp struct {
	req.HotelsView
	Rooms []hotelSys.SysHotelRooms `json:"rooms"`
}
