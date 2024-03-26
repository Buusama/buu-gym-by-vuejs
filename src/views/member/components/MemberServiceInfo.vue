<template>
  <div class="grid">
    <div class="col-span-12 lg:col-span-8 2xl:col-span-9">
      <!-- BEGIN: Thông tin hội viên -->
      <div class="intro-y box lg:mt-5">
        <div
          class="flex items-center p-5 border-b border-slate-200/60 dark:border-darkmode-400"
        >
          <h2 class="font-medium text-base mr-auto">Dịch vụ đăng ký</h2>
        </div>
        <div class="p-5">
          <div class="flex flex-col-reverse xl:flex-row flex-col">
            <div class="flex-1 mt-6 xl:mt-0">
              <div class="grid grid-cols-12 gap-x-5">
                <div class="col-span-12 2xl:col-span-6">
                  <div>
                    <label for="create-member-form-1" class="form-label"
                      >Gói tập luyện</label
                    >
                    <select class="form-select">
                      <option value="1">Gói tập 1</option>
                      <option value="2">Gói tập 2</option>
                      <option value="3">Gói tập 3</option>
                    </select>
                  </div>
                  <div class="mt-3">
                    <label for="create-member-form-2" class="form-label"
                      >Huấn luyện viên</label
                    >
                    <select class="form-select">
                      <option value="1">Huấn luyện viên 1</option>
                      <option value="2">Huấn luyện viên 2</option>
                      <option value="3">Huấn luyện viên 3</option>
                    </select>
                  </div>
                </div>
                <div class="col-span-12 2xl:col-span-6">
                  <div class="mt-3 2xl:mt-0">
                    <label for="create-member-form-4" class="form-label"
                      >Lớp học</label
                    >
                    <select class="form-select">
                      <option value="1">Lớp học 1</option>
                      <option value="2">Lớp học 2</option>
                      <option value="3">Lớp học 3</option>
                    </select>
                  </div>
                  <div class="mt-3">
                    <label for="create-member-form-2" class="form-label"
                      >Ngày đăng ký</label
                    >
                    <div class="relative form-control">
                      <div
                        class="absolute rounded-l w-10 h-full flex items-center justify-center bg-slate-100 border text-slate-500 dark:bg-darkmode-700 dark:border-darkmode-800 dark:text-slate-400"
                      >
                        <CalendarIcon class="w-4 h-4" />
                      </div>
                      <Litepicker
                        :options="{
                          maxDate: new Date(),
                          dropdowns: {
                            minYear: 1900,
                            maxYear: null,
                            months: true,
                            years: true,
                          },
                        }"
                        class="form-control pl-12"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button
            type="button"
            class="btn btn-primary w-20 mt-3"
            @click="updateMemberFunc"
          >
            Lưu
          </button>
          <router-link
            :to="{ name: 'list-members' }"
            tag="a"
            class="btn btn-outline-secondary ml-3 w-20 mt-3"
          >
            Hủy
          </router-link>
        </div>
      </div>
      <!-- END: Thông tin hội viên -->
    </div>
  </div>
</template>
