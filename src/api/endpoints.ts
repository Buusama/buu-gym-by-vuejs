export default {
  auth: {
    login: '/auth/login',
    logout: '/auth/logout',
  },
  users: {
    list: '/users',
  },
  members: {
    list: '/members',
    create: '/members',
    detail: (id: string) => `/members/${id}`,
    update: (id: string) => `/members/${id}`,
    delete: (id: string) => `/members/${id}`,
  },
  packages: {
    list: '/membership_plans',
    create: '/membership_plans',
    detail: (id: string) => `/membership_plans/${id}`,
    update: (id: string) => `/membership_plans/${id}`,
    delete: (id: string) => `/membership_plans/${id}`,
  },
  trainers: {
    list: '/trainers',
    create: '/trainers',
    detail: (id: string) => `/trainers/${id}`,
    update: (id: string) => `/trainers/${id}`,
    delete: (id: string) => `/trainers/${id}`,
  },
  services: {
    list: '/services',
    create: '/services',
    detail: (id: string) => `/services/${id}`,
    update: (id: string) => `/services/${id}`,
    delete: (id: string) => `/services/${id}`,
  },
  rooms: {
    list: '/rooms',
    create: '/rooms',
    listEquipment: (id:string) => `/rooms/${id}/equipments`,
    detail: (id: string) => `/rooms/${id}`,
    update: (id: string) => `/rooms/${id}`,
    delete: (id: string) => `/rooms/${id}`,
  },
  equipments: {
    list: '/equipments',
    create: '/equipments',
    detail: (id: string) => `/equipments/${id}`,
    update: (id: string) => `/equipments/${id}`,
    delete: (id: string) => `/equipments/${id}`,
  },
}
