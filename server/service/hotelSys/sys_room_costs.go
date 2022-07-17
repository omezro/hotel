package hotelSys

import (
	"github.com/flipped-aurora/gin-vue-admin/server/global"
	"github.com/flipped-aurora/gin-vue-admin/server/model/common/request"
	"github.com/flipped-aurora/gin-vue-admin/server/model/hotelSys"
	hotelSysReq "github.com/flipped-aurora/gin-vue-admin/server/model/hotelSys/request"
)

type SysRoomCostsService struct {
}

var SysRoomCostsServiceApp = new(SysRoomCostsService)

// CreateSysRoomCosts 创建SysRoomCosts记录
// Author [piexlmax](https://github.com/piexlmax)
func (sysRoomCostsService *SysRoomCostsService) CreateSysRoomCosts(sysRoomCosts hotelSys.SysRoomCosts) (err error) {
	err = global.GVA_DB.Create(&sysRoomCosts).Error
	return err
}

// DeleteSysRoomCosts 删除SysRoomCosts记录
// Author [piexlmax](https://github.com/piexlmax)
func (sysRoomCostsService *SysRoomCostsService) DeleteSysRoomCosts(sysRoomCosts hotelSys.SysRoomCosts) (err error) {
	err = global.GVA_DB.Delete(&sysRoomCosts).Error
	return err
}

// DeleteSysRoomCostsByIds 批量删除SysRoomCosts记录
// Author [piexlmax](https://github.com/piexlmax)
func (sysRoomCostsService *SysRoomCostsService) DeleteSysRoomCostsByIds(ids request.IdsReq) (err error) {
	err = global.GVA_DB.Delete(&[]hotelSys.SysRoomCosts{}, "id in ?", ids.Ids).Error
	return err
}

// DeleteRoomCostByHotelIds 根据hotelId删除所有rooms
func (sysRoomCostsService *SysRoomCostsService) DeleteRoomCostByHotelIds(hotelIds []uint) (err error) {
	return global.GVA_DB.Unscoped().Delete(&hotelSys.SysHotelRooms{}, "hotel_id IN ?", hotelIds).Error
}

// UpdateSysRoomCosts 更新SysRoomCosts记录
// Author [piexlmax](https://github.com/piexlmax)
func (sysRoomCostsService *SysRoomCostsService) UpdateSysRoomCosts(sysRoomCosts hotelSys.SysRoomCosts) (err error) {
	err = global.GVA_DB.Save(&sysRoomCosts).Error
	return err
}

// GetSysRoomCosts 根据id获取SysRoomCosts记录
// Author [piexlmax](https://github.com/piexlmax)
func (sysRoomCostsService *SysRoomCostsService) GetSysRoomCosts(id uint) (sysRoomCosts hotelSys.SysRoomCosts, err error) {
	err = global.GVA_DB.Where("id = ?", id).First(&sysRoomCosts).Error
	return
}

// GetSysRoomCostsInfoList 分页获取SysRoomCosts记录
// Author [piexlmax](https://github.com/piexlmax)
func (sysRoomCostsService *SysRoomCostsService) GetSysRoomCostsInfoList(info hotelSysReq.SysRoomCostsSearch) (list interface{}, total int64, err error) {
	limit := info.PageSize
	offset := info.PageSize * (info.Page - 1)
	// 创建db
	db := global.GVA_DB.Model(&hotelSys.SysRoomCosts{}).Where("hotel_id = ?", info.HotelId)
	var sysRoomCostss []hotelSys.SysRoomCosts
	// 如果有条件搜索 下方会自动创建搜索语句
	if len(info.Name) > 0 {
		db = db.Where("name LIKE ?", "%"+info.Name+"%")
	}
	err = db.Count(&total).Error
	if err != nil {
		return
	}
	err = db.Limit(limit).Offset(offset).Find(&sysRoomCostss).Error
	return sysRoomCostss, total, err
}
