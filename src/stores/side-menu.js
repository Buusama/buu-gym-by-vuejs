import { defineStore } from 'pinia'
import { RoleValue } from '../common/enums/permision/role'

export const useSideMenuStore = defineStore('sideMenu', {
  state: () => ({
    menu: [
      {
        icon: 'HomeIcon',
        pageName: 'dashboard',
        title: 'Home',
        role: [RoleValue.ADMIN, RoleValue.STAFF, RoleValue.TRAINER, RoleValue.MEMBER],
      },
      'devider',
      {
        icon: 'UserIcon',
        title: 'Hội Viên',
        role: [RoleValue.ADMIN, RoleValue.STAFF, RoleValue.TRAINER],
        subMenu: [
          {
            icon: '',
            pageName: 'create-member',
            title: 'Thêm hội viên',
            role: [RoleValue.ADMIN, RoleValue.STAFF],
          },
          {
            icon: '',
            pageName: 'list-members',
            title: 'Danh sách hội viên',
            path: '/members',
            role: [RoleValue.ADMIN, RoleValue.STAFF, RoleValue.TRAINER],
          },
          {
            icon: '',
            pageName: 'checkin-history',
            title: 'Lịch sử checkin',
            role: [RoleValue.ADMIN, RoleValue.STAFF, RoleValue.TRAINER],
          },
        ],
      },
      {
        icon: 'UsersIcon',
        title: 'Huấn luyện viên',
        role: [RoleValue.ADMIN, RoleValue.STAFF],
        subMenu: [
          {
            icon: '',
            pageName: 'create-trainer',
            title: 'Thêm huấn luyện viên',
            role: [RoleValue.ADMIN],
          },
          {
            icon: '',
            pageName: 'list-trainers',
            title: 'Danh sách huấn luyện viên',
            path: '/trainers',
            role: [RoleValue.ADMIN, RoleValue.STAFF],
          },
        ],
      },
      {
        icon: 'PackageIcon',
        title: 'Thẻ hội viên',
        role: [RoleValue.ADMIN, RoleValue.STAFF],
        subMenu: [
          {
            icon: '',
            pageName: 'create-package',
            title: 'Thêm thẻ hội viên',
            role: [RoleValue.ADMIN],
          },
          {
            icon: '',
            pageName: 'list-packages',
            title: 'Danh sách thẻ hội viên',
            role: [RoleValue.ADMIN, RoleValue.STAFF],
            path: '/packages',
          },
        ],
      },
      {
        icon: 'CalendarIcon',
        title: 'Lịch tập',
        role: [RoleValue.ADMIN, RoleValue.STAFF, RoleValue.TRAINER],
        subMenu: [
          {
            icon: '',
            pageName: 'schedule-members',
            title: 'Lịch tập hội viên',
            role: [RoleValue.ADMIN, RoleValue.STAFF, RoleValue.TRAINER],
            path: '/schedules',
          }, {
            icon: '',
            pageName: 'schedule-trainers',
            title: 'Lịch tập huấn luyện viên',
            role: [RoleValue.ADMIN, RoleValue.STAFF],
            path: '/schedules',
          }
        ],
      },
      'devider',
      {
        icon: 'BuildingIcon',
        title: 'Phòng tập',
        role: [RoleValue.ADMIN, RoleValue.STAFF],
        subMenu: [
          {
            icon: '',
            pageName: 'create-room',
            title: 'Thêm phòng tập',
            role: [RoleValue.ADMIN, RoleValue.STAFF],
          },
          {
            icon: '',
            pageName: 'list-rooms',
            title: 'Danh sách phòng tập',
            path: '/rooms',
            role: [RoleValue.ADMIN, RoleValue.STAFF],
          },
        ],
      },
      {
        icon: 'DumbbellIcon',
        title: 'Thiết bị',
        role: [RoleValue.ADMIN, RoleValue.STAFF],
        subMenu: [
          {
            icon: '',
            pageName: 'create-device',
            role: [RoleValue.ADMIN, RoleValue.STAFF],
            title: 'Thêm thiết bị',
          },
          {
            icon: '',
            pageName: 'list-devices',
            title: 'Danh sách thiết bị',
            path: '/devices',
            role: [RoleValue.ADMIN, RoleValue.STAFF],
          },
        ],
      },
      {
        icon: 'ServerIcon',
        title: 'Dịch vụ',
        role: [RoleValue.ADMIN, RoleValue.STAFF],
        subMenu: [
          {
            icon: '',
            pageName: 'create-service',
            title: 'Thêm dịch vụ',
            role: [RoleValue.ADMIN, RoleValue.STAFF],
          },
          {
            icon: '',
            pageName: 'list-services',
            title: 'Danh sách dịch vụ',
            path: '/services',
            role: [RoleValue.ADMIN, RoleValue.STAFF],
          },
        ],
      },
      'devider',
      {
        icon: 'UsersIcon',
        title: 'Thống kê, Báo cáo',
        role: [RoleValue.ADMIN, RoleValue.STAFF],
        subMenu: [
          {
            icon: '',
            pageName: 'list-users',
            title: 'Thống kê doanh thu',
            path: '/users',
            role: [RoleValue.ADMIN, RoleValue.STAFF],
          },
          {
            icon: '',
            pageName: 'list-users',
            title: 'Báo cáo doanh thu',
            path: '/users',
            role: [RoleValue.ADMIN, RoleValue.STAFF],
          },
        ],
      },
      'devider',
      {
        icon: 'UsersIcon',
        title: 'Quản trị viên',
        pageName: 'list-users',
        path: '/users',
        role: [RoleValue.ADMIN, RoleValue.STAFF],
      },
    ],
  }),
})
