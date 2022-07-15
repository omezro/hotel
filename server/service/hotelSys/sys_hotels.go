package hotelSys

import (
	"github.com/flipped-aurora/gin-vue-admin/server/global"
	"github.com/flipped-aurora/gin-vue-admin/server/model/common/request"
	"github.com/flipped-aurora/gin-vue-admin/server/model/hotelSys"
	hotelSysReq "github.com/flipped-aurora/gin-vue-admin/server/model/hotelSys/request"
	hotelSysRsp "github.com/flipped-aurora/gin-vue-admin/server/model/hotelSys/response"
	"github.com/jinzhu/copier"
	"gorm.io/gorm"
	"strings"
)

type SysHotelsService struct {
}

// CreateSysHotels 创建SysHotels记录
// Author [piexlmax](https://github.com/piexlmax)
func (sysHotelsService *SysHotelsService) CreateSysHotels(req hotelSysReq.HotelSave) (err error) {
	return global.GVA_DB.Transaction(func(tx *gorm.DB) error {
		var hotels hotelSys.SysHotels
		err = copier.Copy(&hotels, req.HotelsView)
		if err != nil {
			return err
		}
		if len(req.Platform) > 0 {
			hotels.Platform = strings.Join(req.Platform, ",")
		}

		err = global.GVA_DB.Create(&hotels).Error
		if err != nil {
			return err
		}
		for i := range req.Rooms {
			req.Rooms[i].HotelId = hotels.ID
		}
		err = SysHotelRoomServiceApp.CreateSysHotelRooms(req.Rooms)
		return err
	})

}

// DeleteSysHotels 删除SysHotels记录
// Author [piexlmax](https://github.com/piexlmax)
func (sysHotelsService *SysHotelsService) DeleteSysHotels(sysHotels hotelSys.SysHotels) (err error) {
	return global.GVA_DB.Transaction(func(tx *gorm.DB) error {
		err = global.GVA_DB.Delete(&sysHotels).Error
		if err != nil {
			return err
		}
		err = SysHotelRoomServiceApp.DeleteRoomByHotelIds([]uint{sysHotels.ID})
		return err
	})
}

// DeleteSysHotelsByIds 批量删除SysHotels记录
// Author [piexlmax](https://github.com/piexlmax)
func (sysHotelsService *SysHotelsService) DeleteSysHotelsByIds(userId uint, ids request.IdsReq) (err error) {
	return global.GVA_DB.Transaction(func(tx *gorm.DB) error {
		err = global.GVA_DB.Delete(&[]hotelSys.SysHotels{}, "id in ?", ids.Ids).Error
		if err != nil {
			return err
		}
		var hIds []uint
		for i := range ids.Ids {
			hIds = append(hIds, uint(ids.Ids[i]))
		}
		err = SysHotelRoomServiceApp.DeleteRoomByHotelIds(hIds)
		return err
	})
}

// UpdateSysHotels 更新SysHotels记录
// Author [piexlmax](https://github.com/piexlmax)
func (sysHotelsService *SysHotelsService) UpdateSysHotels(req hotelSysReq.HotelSave) (err error) {
	return global.GVA_DB.Transaction(func(tx *gorm.DB) error {
		var hotels hotelSys.SysHotels
		err = copier.Copy(&hotels, req.HotelsView)
		if err != nil {
			return err
		}
		if len(req.Platform) > 0 {
			hotels.Platform = strings.Join(req.Platform, ",")
		}
		err = global.GVA_DB.Save(&hotels).Error
		if err != nil {
			return err
		}
		err = SysHotelRoomServiceApp.DeleteRoomByHotelIds([]uint{hotels.ID})
		if err != nil {
			return err
		}
		for i := range req.Rooms {
			req.Rooms[i].HotelId = hotels.ID
		}
		return SysHotelRoomServiceApp.CreateSysHotelRooms(req.Rooms)
	})
}

// GetSysHotels 根据id获取SysHotels记录
// Author [piexlmax](https://github.com/piexlmax)
func (sysHotelsService *SysHotelsService) GetSysHotels(id uint) (sysHotels hotelSysRsp.HotelsRsp, err error) {
	var hotels hotelSys.SysHotels
	err = global.GVA_DB.Where("id = ?", id).First(&hotels).Error
	if err != nil {
		return
	}
	err = copier.Copy(&sysHotels.HotelsView, hotels)
	if err != nil {
		return
	}
	sysHotels.HotelsView.Platform = strings.Split(hotels.Platform, ",")
	sysHotels.Rooms, err = SysHotelRoomServiceApp.GetSysHotelRoomsByHotelIds([]uint{id})
	return
}

// GetSysHotelsInfoList 分页获取SysHotels记录
// Author [piexlmax](https://github.com/piexlmax)
func (sysHotelsService *SysHotelsService) GetSysHotelsInfoList(info hotelSysReq.SysHotelsSearch) (list interface{}, total int64, err error) {
	limit := info.PageSize
	offset := info.PageSize * (info.Page - 1)
	// 创建db
	db := global.GVA_DB.Model(&hotelSys.SysHotels{}).Where("user_id = ?", info.UserId)
	var sysHotelss []hotelSys.SysHotels
	// 如果有条件搜索 下方会自动创建搜索语句
	if len(info.Signatory) > 0 {
		db = db.Where("signatory LIKE ?", "%"+info.Signatory+"%")
	}
	if len(info.Name) > 0 {
		db = db.Where("name LIKE ?", "%"+info.Name+"%")
	}
	if len(info.Phone) > 0 {
		db = db.Where("phone = ?", info.Phone)
	}
	err = db.Count(&total).Error
	if err != nil {
		return
	}
	err = db.Limit(limit).Offset(offset).Find(&sysHotelss).Error
	if err != nil {
		return nil, 0, err
	}
	var hotelsView []hotelSysReq.HotelsView
	err = copier.Copy(&hotelsView, sysHotelss)
	if err != nil {
		return nil, 0, err
	}
	for i := range hotelsView {
		hotelsView[i].Platform = strings.Split(sysHotelss[i].Platform, ",")
	}
	return hotelsView, total, err
}
