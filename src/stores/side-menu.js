import { defineStore } from 'pinia'

export const useSideMenuStore = defineStore('sideMenu', {
  state: () => ({
    menu: [
      {
        icon: 'HomeIcon',
        pageName: 'dashboard',
        title: 'Home',
      },
      'devider',
      {
        icon: 'UserIcon',
        title: 'Hội Viên',
        subMenu: [
          {
            icon: '',
            pageName: 'create-member',
            title: 'Thêm hội viên',
          },
          {
            icon: '',
            pageName: 'list-members',
            title: 'Danh sách hội viên',
            path: '/members',
          },
          {
            icon: '',
            pageName: 'checkin-history',
            title: 'Lịch sử checkin',
          },
        ],
      },
      {
        icon: 'UsersIcon',
        title: 'Huấn luyện viên',
        subMenu: [
          {
            icon: '',
            pageName: 'create-trainer',
            title: 'Thêm huấn luyện viên',
          },
          {
            icon: '',
            pageName: 'list-trainers',
            title: 'Danh sách huấn luyện viên',
            path: '/trainers',
          },
        ],
      },
      {
        icon: 'PackageIcon',
        title: 'Gói tập',
        subMenu: [
          {
            icon: '',
            pageName: 'create-package',
            title: 'Thêm gói tập',
          },
          {
            icon: '',
            pageName: 'list-packages',
            title: 'Danh sách gói tập',
            path: '/packages',
          },
        ],
      },
      {
        icon: 'CalendarIcon',
        title: 'Lịch tập',
        subMenu: [
          {
            icon: '',
            pageName: 'schedule-members',
            title: 'Lịch tập hội viên',
            path: '/schedules',
          }, {
            icon: '',
            pageName: 'schedule-trainers',
            title: 'Lịch tập huấn luyện viên',
            path: '/schedules',
          }
        ],
      },
      'devider',
      {
        icon: 'UsersIcon',
        title: 'Thiết bị',
        subMenu: [
          {
            icon: '',
            pageName: 'create-device',
            title: 'Thêm thiết bị',
          },
          {
            icon: '',
            pageName: 'list-devices',
            title: 'Danh sách thiết bị',
            path: '/devices',
          },
        ],
      },
      {
        icon: 'UsersIcon',
        title: 'Dịch vụ',
        subMenu: [
          {
            icon: '',
            pageName: 'create-service',
            title: 'Thêm dịch vụ',
          },
          {
            icon: '',
            pageName: 'list-services',
            title: 'Danh sách dịch vụ',
            path: '/services',
          },
        ],
      },
      'devider',
      {
        icon: 'UsersIcon',
        title: 'Thống kê, Báo cáo',
        subMenu: [
          {
            icon: '',
            pageName: 'list-users',
            title: 'Thống kê doanh thu',
            path: '/users',
          },
          {
            icon: '',
            pageName: 'list-users',
            title: 'Báo cáo doanh thu',
            path: '/users',
          },
        ],
      },
      'devider',
      {
        icon: 'UsersIcon',
        title: 'Quản trị viên',
        pageName: 'list-users',
        path: '/users',
      },
    ],
  }),
})
