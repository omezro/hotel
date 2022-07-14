package hotelSys

import (
	"github.com/flipped-aurora/gin-vue-admin/server/global"
	"github.com/flipped-aurora/gin-vue-admin/server/model/common/request"
	"github.com/flipped-aurora/gin-vue-admin/server/model/hotelSys"
	hotelSysReq "github.com/flipped-aurora/gin-vue-admin/server/model/hotelSys/request"
	"gorm.io/gorm"
)

type SysHotelRoomsService struct {
}

var SysHotelRoomServiceApp = new(SysHotelRoomsService)

// CreateSysHotelRooms 创建SysHotelRooms记录
// Author [piexlmax](https://github.com/piexlmax)
func (sysHotelRoomsService *SysHotelRoomsService) CreateSysHotelRooms(sysHotelRooms []*hotelSys.SysHotelRooms) (err error) {
	err = global.GVA_DB.Save(&sysHotelRooms).Error
	return err
}

// DeleteRoomByHotelIds 根据hotelId删除所有rooms
func (sysHotelRoomsService *SysHotelRoomsService) DeleteRoomByHotelIds(tx *gorm.DB, hotelIds []uint) (err error) {
	return tx.Unscoped().Delete(&hotelSys.SysHotelRooms{}, "hotel_id IN ?", hotelIds).Error
}

// DeleteSysHotelRooms 删除SysHotelRooms记录
// Author [piexlmax](https://github.com/piexlmax)
func (sysHotelRoomsService *SysHotelRoomsService) DeleteSysHotelRooms(sysHotelRooms hotelSys.SysHotelRooms) (err error) {
	err = global.GVA_DB.Delete(&sysHotelRooms).Error
	return err
}

// DeleteSysHotelRoomsByIds 批量删除SysHotelRooms记录
// Author [piexlmax](https://github.com/piexlmax)
func (sysHotelRoomsService *SysHotelRoomsService) DeleteSysHotelRoomsByIds(ids request.IdsReq) (err error) {
	err = global.GVA_DB.Delete(&[]hotelSys.SysHotelRooms{}, "id in ?", ids.Ids).Error
	return err
}

// UpdateSysHotelRooms 更新SysHotelRooms记录
// Author [piexlmax](https://github.com/piexlmax)
func (sysHotelRoomsService *SysHotelRoomsService) UpdateSysHotelRooms(sysHotelRooms hotelSys.SysHotelRooms) (err error) {
	err = global.GVA_DB.Save(&sysHotelRooms).Error
	return err
}

// GetSysHotelRooms 根据id获取SysHotelRooms记录
// Author [piexlmax](https://github.com/piexlmax)
func (sysHotelRoomsService *SysHotelRoomsService) GetSysHotelRooms(id uint) (sysHotelRooms hotelSys.SysHotelRooms, err error) {
	err = global.GVA_DB.Where("id = ?", id).First(&sysHotelRooms).Error
	return
}

func (sysHotelRoomsService *SysHotelRoomsService) GetSysHotelRoomsByHotelIds(hotelIds []uint) (list []hotelSys.SysHotelRooms, err error) {
	err = global.GVA_DB.Where("hotel_id IN ?", hotelIds).Find(&list).Error
	return
}

// GetSysHotelRoomsInfoList 分页获取SysHotelRooms记录
// Author [piexlmax](https://github.com/piexlmax)
func (sysHotelRoomsService *SysHotelRoomsService) GetSysHotelRoomsInfoList(info hotelSysReq.SysHotelRoomsSearch) (list interface{}, total int64, err error) {
	limit := info.PageSize
	offset := info.PageSize * (info.Page - 1)
	// 创建db
	db := global.GVA_DB.Model(&hotelSys.SysHotelRooms{})
	var sysHotelRoomss []hotelSys.SysHotelRooms
	// 如果有条件搜索 下方会自动创建搜索语句
	err = db.Count(&total).Error
	if err != nil {
		return
	}
	err = db.Limit(limit).Offset(offset).Find(&sysHotelRoomss).Error
	return sysHotelRoomss, total, err
}
