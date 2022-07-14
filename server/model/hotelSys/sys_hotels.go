package hotelSys

import (
	"github.com/flipped-aurora/gin-vue-admin/server/global"
)

// SysHotels 结构体
// 如果含有time.Time 请自行import time包
type SysHotels struct {
	global.GVA_MODEL
	UserId          uint   `json:"user_id" gorm:"coloum:user_id;comment:用户id"`
	Name            string `json:"name" form:"name" gorm:"column:name;comment:酒店名称;size:20;"`
	Platform        int    `json:"platform" form:"platform" gorm:"column:platform;comment:登陆平台:1-携程,2-飞猪,3-美团;"`
	Manager         string `json:"manager" form:"manager" gorm:"column:manager;comment:酒店经理姓名;size:20;"`
	SettlementType  string `json:"settlementType" form:"settlementType" gorm:"column:settlementType;comment:结算方式;size:100;"`
	TransferAccount string `json:"transferAccount" form:"transferAccount" gorm:"column:transferAccount;comment:转账账户;size:190;"`
	Signatory       string `json:"signatory" form:"signatory" gorm:"column:signatory;comment:签约人;size:20;"`
	Phone           string `json:"phone" form:"phone" gorm:"column:phone;comment:催单电话;size:11;"`
	Mark            string `json:"mark" form:"mark" gorm:"column:mark;comment:备注;size:190;"`
}

// TableName SysHotels 表名
func (SysHotels) TableName() string {
	return "sys_hotels"
}
