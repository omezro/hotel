package request

import (
	"github.com/flipped-aurora/gin-vue-admin/server/model/common/request"
	"github.com/flipped-aurora/gin-vue-admin/server/model/hotelSys"
)

type SysRoomCostsSearch struct {
	hotelSys.SysRoomCosts
	request.PageInfo
}
