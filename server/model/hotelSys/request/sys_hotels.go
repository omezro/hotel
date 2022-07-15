package request

import (
	"github.com/flipped-aurora/gin-vue-admin/server/global"
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

type HotelSave struct {
	HotelsView
	Rooms []*hotelSys.SysHotelRooms
}

type HotelsView struct {
	global.GVA_MODEL
	UserId          uint     `json:"userId"`
	Name            string   `json:"name"`
	Platform        []string `json:"platform"`
	Manager         string   `json:"manager"`
	SettlementType  string   `json:"settlementType"`
	TransferAccount string   `json:"transferAccount"`
	Signatory       string   `json:"signatory"`
	Phone           string   `json:"phone"`
	Mark            string   `json:"mark"`
}
