package hotelSys

import (
	"github.com/flipped-aurora/gin-vue-admin/server/global"
)

// SysRoomCosts 结构体
// 如果含有time.Time 请自行import time包
type SysRoomCosts struct {
	global.GVA_MODEL
	HotelId         *int   `json:"hotelId" form:"hotelId" gorm:"column:hotel_id;comment:酒店ID;size:19;"`
	Name            string `json:"name" form:"name" gorm:"column:name;comment:房型名称;size:50;"`
	NoBreakfast     *int   `json:"noBreakfast" form:"noBreakfast" gorm:"column:no_breakfast;comment:无早价格;size:10;"`
	SingleBreakfast *int   `json:"singleBreakfast" form:"singleBreakfast" gorm:"column:single_breakfast;comment:单早价格;size:10;"`
	DoubleBreakfast *int   `json:"doubleBreakfast" form:"doubleBreakfast" gorm:"column:double_breakfast;comment:双早价格;size:10;"`
	SetMeal         *int   `json:"setMeal" form:"setMeal" gorm:"column:set_meal;comment:套餐价格;size:10;"`
}

// TableName SysRoomCosts 表名
func (SysRoomCosts) TableName() string {
	return "sys_room_costs"
}
