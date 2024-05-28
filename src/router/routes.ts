import { RoleValue } from '@/common/enums/permision/role'
import SideMenu from '@/layouts/side-menu/Main.vue'
import ErrorPage from '@/views/error-page/ErrorPage.vue'
import PermisionPage from '@/views/error-page/PermisionPage.vue'
import Home from '@/views/home/Home.vue'
import Login from '@/views/login/Login.vue'
import MemberCreate from '@/views/member/Create.vue'
import MemberEdit from '@/views/member/Edit.vue'
import Member from '@/views/member/List.vue'
import List from '@/views/package/List.vue';
const routes = [
  {
    name: 'login',
    path: '/login',
    component: Login,
  },
  {
    name: 'home',
    path: '/',
    component: SideMenu,
    meta: { requiresAuth: true, title: 'Trang chủ' },
    children: [
      {
        path: '',
        name: 'dashboard',
        component: Home,
        meta: { requiresAuth: true, title: 'Dashboard', role: [RoleValue.TRAINER, RoleValue.STAFF, RoleValue.MEMBER] },
      },
      {
        path: '/trainers',
        name: 'trainers',
        meta: { requiresAuth: true, title: 'Huấn luyện viên', role: [RoleValue.STAFF] },
        children: [
          {
            path: '',
            name: 'list-trainers',
            component: () => import('@/views/trainer/List.vue'),
            meta: { requiresAuth: true, title: 'Danh sách huấn luyện viên' },
          },
          {
            path: 'create',
            children: [
              {
                path: '',
                name: 'create-trainer',
                component: () => import('@/views/trainer/Create.vue'),
                meta: { requiresAuth: true, title: 'Thêm huấn luyện viên' },
              },
            ],
          },
          {
            path: ':id/edit',
            name: 'edit-trainer',
            component: Home,
            meta: { requiresAuth: true, title: 'Chỉnh sửa huấn luyện viên' },
          },
        ],
      },
      {
        path: '/members',
        name: 'members',
        meta: { requiresAuth: true, title: 'Hội viên', role: [RoleValue.TRAINER, RoleValue.STAFF] },
        children: [
          {
            path: '',
            name: 'list-members',
            component: Member,
            meta: { requiresAuth: true, title: 'Danh sách hội viên' },
          },
          {
            path: 'create',
            children: [
              {
                path: '',
                name: 'create-member',
                component: MemberCreate,
                meta: { requiresAuth: true, title: 'Thêm hội viên' },
              },
            ],
          },
          {
            path: 'checkin',
            children: [
              {
                path: '',
                name: 'checkin-history',
                component: Home,
                meta: { requiresAuth: true, title: 'Lịch sử checkin' },
              },
            ],
          },
          {
            path: ':id/edit',
            name: 'edit-member',
            component: MemberEdit,
            meta: { requiresAuth: true, title: 'Chỉnh sửa hội viên' },
          },
        ],
      },
      {
        path: '/packages',
        name: 'packages',
        meta: { requiresAuth: true, title: 'Dịch vụ' },
        children: [
          {
            path: '',
            name: 'list-packages',
            component: List,
            meta: { requiresAuth: true, title: 'Danh sách dịch vụ', role: [RoleValue.STAFF] },
          },
          {
            path: ':id/edit',
            name: 'edit-package',
            component: () => import('@/views/package/Edit.vue'),
            meta: { requiresAuth: true, title: 'Chỉnh sửa dịch vụ' },
          },
          {
            path: 'create',
            children: [
              {
                path: '',
                name: 'create-package',
                component: () => import('@/views/package/Create.vue'),
                meta: { requiresAuth: true, title: 'Thêm dịch vụ' },
              },
            ],
          },
        ],
      },
      {
        path: '/services',
        name: 'services',
        meta: { requiresAuth: true, title: 'Dịch vụ' },
        children: [
          {
            path: '',
            name: 'list-services',
            component: () => import('@/views/service/List.vue'),
            meta: { requiresAuth: true, title: 'Danh sách dịch vụ' },
          },
          {
            path: ':id/edit',
            name: 'edit-service',
            component: () => import('@/views/service/Edit.vue'),
            meta: { requiresAuth: true, title: 'Chỉnh sửa dịch vụ' },
          },
          // {
          //   path: 'create',
          //   children: [
          //     {
          //       path: '',
          //       name: 'create-service',
          //       component: () => import('@/views/service/Create.vue'),
          //       meta: { requiresAuth: true, title: 'Thêm dịch vụ' },
          //     },
          //   ],
          // },
        ],
      },
      {
        path: '/schedule',
        name: 'schedule',
        meta: { requiresAuth: true, title: 'Lịch trình' },
        children: [
          // {
          //   path: 'create',
          //   name: 'create-schedule',
          //   component: () => import('@/views/schedule/Create.vue'),
          //   meta: { requiresAuth: true, title: 'Thêm lịch trình' }
          // },
          // {
          //   path: ':id/edit',
          //   name: 'edit-schedule',
          //   component: () => import('@/views/schedule/Edit.vue'),
          //   meta: { requiresAuth: true, title: 'Chỉnh sửa lịch trình' }
          // },
          {
            path: 'members',
            name: 'schedule-members',
            component: () => import('@/views/schedule/Member.vue'),
            meta: { requiresAuth: true, title: 'Danh sách hội viên' }
          },
          // {
          // path: 'trainers',
          // name: 'schedule-trainers',
          // component: () => import('@/views/schedule/Trainer.vue'),
          // meta: { requiresAuth: true, title: 'Danh sách huấn luyện viên' }
          // }
        ]
      },
      {
        path: '/rooms',
        name: 'rooms',
        meta: { requiresAuth: true, title: 'Phòng tập' },
        children: [
          {
            path: '',
            name: 'list-rooms',
            component: () => import('@/views/room/List.vue'),
            meta: { requiresAuth: true, title: 'Danh sách phòng tập', role: [RoleValue.STAFF] },
          },
          {
            path: ':id/edit',
            name: 'edit-room',
            component: () => import('@/views/room/Edit.vue'),
            meta: { requiresAuth: true, title: 'Chỉnh sửa phòng tập' },
          },
          {
            path: 'create',
            children: [
              {
                path: '',
                name: 'create-room',
                component: () => import('@/views/room/Create.vue'),
                meta: { requiresAuth: true, title: 'Thêm phòng tập' },
              },
            ],
          },
        ],
      },
      {
        path: '/equipments',
        name: 'equipments',
        meta: { requiresAuth: true, title: 'Thiết bị' },
        children: [
          {
            path: '',
            name: 'list-equipments',
            component: () => import('@/views/equipment/List.vue'),
            meta: { requiresAuth: true, title: 'Danh sách thiết bị', role: [RoleValue.STAFF] },
          },
          {
            path: ':id/edit',
            name: 'edit-equipment',
            component: () => import('@/views/equipment/Edit.vue'),
            meta: { requiresAuth: true, title: 'Chỉnh sửa thiết bị' },
          },
          {
            path: 'create',
            children: [
              {
                path: '',
                name: 'create-equipment',
                component: () => import('@/views/equipment/Create.vue'),
                meta: { requiresAuth: true, title: 'Thêm thiết bị' },
              },
            ],
          },
        ],
      },
      {
        path: '/users',
        name: 'users',
        meta: { requiresAuth: true, title: 'Người dùng' },
        children: [
          {
            path: '',
            name: 'list-users',
            component: () => import('@/views/user/List.vue'),
            meta: { requiresAuth: true, title: 'Danh sách người dùng' },
            children: [
              {
                path: 'create',
                name: 'create-user',
                component: () => import('@/views/user/Create.vue'),
                meta: { requiresAuth: true, title: 'Thêm người dùng' },
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: 'errors.404',
    path: '/404',
    component: ErrorPage,
  },
  {
    name: 'errors.403',
    path: '/403',
    component: PermisionPage,
  },
  {
    path: '/:pathMatch(.*)*',
    component: ErrorPage,
  },
  {
    path: '/unauthorized',
    component: PermisionPage,
  }
]

export default routes