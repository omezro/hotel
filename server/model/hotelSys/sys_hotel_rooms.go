package hotelSys

import (
	"github.com/flipped-aurora/gin-vue-admin/server/global"
)

// SysHotelRooms 结构体
// 如果含有time.Time 请自行import time包
type SysHotelRooms struct {
	global.GVA_MODEL
	HotelId uint   `json:"hotel_id" form:"hotel_id" gorm:"column:hotel_id;comment:酒店ID"`
	Name    string `json:"name" form:"name" gorm:"column:name;comment:房型名称;size:50;"`
	Food    int    `json:"food" form:"food" gorm:"column:food;comment:餐点类型:1-无早,2-单早,3-双早,4-套餐;"`
}

// TableName SysHotelRooms 表名
func (SysHotelRooms) TableName() string {
	return "sys_hotel_rooms"
}
