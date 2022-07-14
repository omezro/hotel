package hotelSys

import (
	"github.com/flipped-aurora/gin-vue-admin/server/global"
	"github.com/flipped-aurora/gin-vue-admin/server/model/common/request"
	"github.com/flipped-aurora/gin-vue-admin/server/model/hotelSys"
	hotelSysReq "github.com/flipped-aurora/gin-vue-admin/server/model/hotelSys/request"
	hotelSysRsp "github.com/flipped-aurora/gin-vue-admin/server/model/hotelSys/response"
	"gorm.io/gorm"
)

type SysHotelsService struct {
}

// CreateSysHotels 创建SysHotels记录
// Author [piexlmax](https://github.com/piexlmax)
func (sysHotelsService *SysHotelsService) CreateSysHotels(req hotelSysReq.HotelCreateUpdate) (err error) {
	return global.GVA_DB.Transaction(func(tx *gorm.DB) error {
		err = global.GVA_DB.Create(&req.SysHotels).Error
		if err != nil {
			return err
		}
		for i := range req.Rooms {
			req.Rooms[i].HotelId = req.SysHotels.ID
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
		err = SysHotelRoomServiceApp.DeleteRoomByHotelIds(tx, []uint{sysHotels.ID})
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
		err = SysHotelRoomServiceApp.DeleteRoomByHotelIds(tx, hIds)
		return err
	})
}

// UpdateSysHotels 更新SysHotels记录
// Author [piexlmax](https://github.com/piexlmax)
func (sysHotelsService *SysHotelsService) UpdateSysHotels(req hotelSysReq.HotelCreateUpdate) (err error) {
	return global.GVA_DB.Transaction(func(tx *gorm.DB) error {
		err = global.GVA_DB.Save(&req.SysHotels).Error
		if err != nil {
			return err
		}
		err = SysHotelRoomServiceApp.DeleteRoomByHotelIds(tx, []uint{req.SysHotels.ID})
		if err != nil {
			return err
		}
		err = SysHotelRoomServiceApp.CreateSysHotelRooms(req.Rooms)
		return err
	})
}

// GetSysHotels 根据id获取SysHotels记录
// Author [piexlmax](https://github.com/piexlmax)
func (sysHotelsService *SysHotelsService) GetSysHotels(id uint) (sysHotels hotelSysRsp.HotelsRsp, err error) {
	err = global.GVA_DB.Where("id = ?", id).First(&sysHotels.SysHotels).Error
	if err != nil {
		return
	}
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
	if info.Platform != 0 {
		db = db.Where("platform = ?", info.Platform)
	}
	if len(info.Name) > 0 {
		db = db.Where("name LIKE ?", "%"+info.Name+"%")
	}
	if len(info.Phone) > 0 {
		db = db.Where("phone LIKE ?", "%"+info.Phone+"%")
	}
	err = db.Count(&total).Error
	if err != nil {
		return
	}
	err = db.Limit(limit).Offset(offset).Find(&sysHotelss).Error
	return sysHotelss, total, err
}
