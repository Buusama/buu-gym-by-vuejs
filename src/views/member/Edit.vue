<template>
  <div class="intro-y flex items-center mt-8">
    <h2 class="text-lg font-medium mr-auto">Chỉnh sửa thông tin hội viên</h2>
  </div>

  <TabGroup class="py-5">
    <TabList class="nav-boxed-tabs text-bold">
      <Tab class="w-full py-2" tag="button">
        <h6 class="font-medium">Thông tin hội viên</h6>
      </Tab>
      <Tab class="w-full py-2" tag="button">
        <h6 class="font-medium">Thông tin sức khỏe</h6>
      </Tab>
      <Tab class="w-full py-2" tag="button">
        <h6 class="font-medium">Dịch vụ đăng ký</h6>
      </Tab>
    </TabList>
    <TabPanels class="mt-5">
      <TabPanel class="leading-relaxed">
        <div class="grid">
          <div class="col-span-12 lg:col-span-8 2xl:col-span-9">
            <!-- BEGIN: Thông tin hội viên -->
            <div class="intro-y box lg:mt-5">
              <div class="flex items-center p-5 border-b border-slate-200/60 dark:border-darkmode-400">
                <h2 class="font-medium text-base mr-auto">Thông tin hội viên</h2>
              </div>
              <div class="p-5">
                <div class="flex flex-col-reverse xl:flex-row flex-col">
                  <div class="flex-1 mt-6 xl:mt-0">
                    <div class="grid grid-cols-12 gap-x-5">
                      <div class="col-span-12 2xl:col-span-6">
                        <div>
                          <label for="create-member-form-1" class="form-label">Tên hội viên</label>
                          <input v-model="formData.name" type="text" class="form-control" placeholder="Tên hội viên" />
                        </div>
                        <div class="mt-3">
                          <label for="create-member-form-2" class="form-label">Giới tính</label>
                          <select v-model="formData.gender" class="form-select">
                            <option value="1">Nam</option>
                            <option value="2">Nữ</option>
                            <option value="3">Khác</option>
                          </select>
                        </div>
                        <div class="mt-3">
                          <label for="create-member-form-3" class="form-label">Ngày sinh</label>
                          <div class="relative form-control">
                            <div
                              class="absolute rounded-l w-10 h-full flex items-center justify-center bg-slate-100 border text-slate-500 dark:bg-darkmode-700 dark:border-darkmode-800 dark:text-slate-400">
                              <CalendarIcon class="w-4 h-4" />
                            </div>
                            <Litepicker v-model="formData.birth_date" :options="datePickerOptions"
                              class="form-control pl-12" />
                          </div>
                        </div>
                      </div>
                      <div class="col-span-12 2xl:col-span-6">
                        <div class="mt-3 2xl:mt-0">
                          <label for="create-member-form-4" class="form-label">Số điện thoại</label>
                          <input v-model="formData.phone" type="text" class="form-control"
                            placeholder="Số điện thoại" />
                        </div>
                        <div class="mt-3">
                          <label for="create-member-form-5" class="form-label">Email</label>
                          <input v-model="formData.email" type="text" class="form-control" placeholder="Email" />
                        </div>
                      </div>
                      <div class="col-span-12">
                        <div class="mt-3">
                          <label for="create-member-form-7" class="form-label">Địa chỉ</label>
                          <textarea v-model="formData.address" rows="8" class="form-control" placeholder="Địa chỉ">
                          </textarea>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="w-52 mx-auto xl:mr-0 xl:ml-6">
                    <label for="create-member-form-8" class="form-label">Avatar</label>

                    <div
                      class="border-2 border-dashed shadow-sm border-slate-200/60 dark:border-darkmode-400 rounded-md p-5">
                      <div class="h-40 relative image-fit mx-auto">
                        <img v-if="newImage" class="rounded-md cursor-pointer zoom-in" alt="" :src="newImage" />
                        <Tippy v-if="newImage" tag="div" content="Remove this profile photo?"
                          class="cursor-pointer w-5 h-5 flex items-center justify-center absolute rounded-full text-white bg-danger right-0 top-0 -mr-2 -mt-2">
                          <xIcon class="w-4 h-4" @click="removePreview()" />
                        </Tippy>
                      </div>
                      <div class="mx-auto cursor-pointer relative mt-5">
                        <button type="button" class="btn btn-primary w-full">
                          Chọn hình ảnh
                        </button>
                        <input id="form-avatar" type="file" class="w-full h-full top-0 left-0 absolute opacity-0"
                          @change="previewFiles($event)" />
                      </div>
                    </div>
                  </div>
                </div>
                <button type="button" class="btn btn-primary w-20 mt-3" @click="updateMemberFunc">
                  Lưu
                </button>
                <router-link :to="{ name: 'list-members' }" tag="a" class="btn btn-outline-secondary ml-3 w-20 mt-3">
                  Hủy
                </router-link>
              </div>
            </div>
            <!-- END: Thông tin hội viên -->
          </div>
        </div>
      </TabPanel>
      <TabPanel class="leading-relaxed">
        <div class="grid">
          <div class="col-span-12 lg:col-span-8 2xl:col-span-9">
            <!-- BEGIN: Thông tin hội viên -->
            <div class="intro-y box lg:mt-5">
              <div class="flex items-center p-5 border-b border-slate-200/60 dark:border-darkmode-400">
                <h2 class="font-medium text-base mr-auto">Thông tin sức khỏe</h2>
              </div>
              <div class="p-5 border-b border-slate-200/60 dark:border-darkmode-400">
                <div class="flex flex-col-reverse xl:flex-row flex-col">
                  <div class="flex-1 mt-6 xl:mt-0">
                    <div class="grid grid-cols-12 gap-x-5">
                      <div class="col-span-12 2xl:col-span-6">
                        <div>
                          <label for="create-member-form-1" class="form-label">Cân nặng</label>
                          <div class="input-group">
                            <div class="input-group-text">Kg</div>
                            <input v-model="weight" type="text" class="form-control" />
                            <div class="input-group-text">.00</div>
                          </div>
                        </div>
                        <div class="mt-3">
                          <label for="create-member-form-2" class="form-label">Chiều cao</label>
                          <div class="input-group">
                            <div class="input-group-text">Cm</div>
                            <input v-model="height" type="text" class="form-control" />
                            <div class="input-group-text">.00</div>
                          </div>
                        </div>
                        <div class="mt-3">
                          <label for="create-member-form-2" class="form-label">Tỷ lệ mỡ</label>
                          <div class="input-group">
                            <div class="input-group-text">%</div>
                            <input v-model="fat" type="text" class="form-control" />
                            <div class="input-group-text">.00</div>
                          </div>
                        </div>
                        <div class="mt-3">
                          <label for="create-member-form-2" class="form-label">Vòng bắp tay</label>
                          <div class="input-group">
                            <div class="input-group-text">Cm</div>
                            <input v-model="aims" type="text" class="form-control" />
                            <div class="input-group-text">.00</div>
                          </div>
                        </div>
                      </div>
                      <div class="col-span-12 2xl:col-span-6">
                        <div class="mt-3 2xl:mt-0">
                          <label for="create-member-form-4" class="form-label">Vòng ngực</label>
                          <div class="input-group">
                            <div class="input-group-text">Cm</div>
                            <input v-model="chest" type="text" class="form-control" />
                            <div class="input-group-text">.00</div>
                          </div>
                        </div>
                        <div class="mt-3">
                          <label for="create-member-form-4" class="form-label">Vòng eo</label>
                          <div class="input-group">
                            <div class="input-group-text">Cm</div>
                            <input v-model="waist" type="text" class="form-control" />
                            <div class="input-group-text">.00</div>
                          </div>
                        </div>
                        <div class="mt-3">
                          <label for="create-member-form-4" class="form-label">Vòng hông</label>
                          <div class="input-group">
                            <div class="input-group-text">Cm</div>
                            <input v-model="thight" type="text" class="form-control" />
                            <div class="input-group-text">.00</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <button type="button" class="btn btn-primary w-20 mt-3" @click="updateMemberFunc">
                  Lưu
                </button>
                <router-link :to="{ name: 'list-members' }" tag="a" class="btn btn-outline-secondary ml-3 w-20 mt-3">
                  Hủy
                </router-link>
              </div>
            </div>
            <!-- END: Thông tin hội viên -->
          </div>
        </div>
      </TabPanel>
      <TabPanel class="leading-relaxed">
        <div class="grid">
          <div class="col-span-12 lg:col-span-8 2xl:col-span-9">
            <!-- BEGIN: Thông tin hội viên -->
            <div class="intro-y box lg:mt-5">
              <div class="flex items-center p-5 border-b border-slate-200/60 dark:border-darkmode-400">
                <h2 class="font-medium text-base mr-auto">Dịch vụ đăng ký</h2>
              </div>
              <div class="p-5">
                <div class="flex flex-col-reverse xl:flex-row flex-col">
                  <div class="flex-1 mt-6 xl:mt-0">
                    <div class="grid grid-cols-12 gap-x-5">
                      <div class="col-span-12 2xl:col-span-6">
                        <div>
                          <label for="create-member-form-1" class="form-label">Gói tập luyện</label>
                          <select class="form-select">
                            <option value="1">Gói tập 1</option>
                            <option value="2">Gói tập 2</option>
                            <option value="3">Gói tập 3</option>
                          </select>
                        </div>
                        <div class="mt-3">
                          <label for="create-member-form-2" class="form-label">Huấn luyện viên</label>
                          <select class="form-select">
                            <option value="1">Huấn luyện viên 1</option>
                            <option value="2">Huấn luyện viên 2</option>
                            <option value="3">Huấn luyện viên 3</option>
                          </select>
                        </div>
                      </div>
                      <div class="col-span-12 2xl:col-span-6">
                        <div class="mt-3 2xl:mt-0">
                          <label for="create-member-form-4" class="form-label">Lớp học</label>
                          <select class="form-select">
                            <option value="1">Lớp học 1</option>
                            <option value="2">Lớp học 2</option>
                            <option value="3">Lớp học 3</option>
                          </select>
                        </div>
                        <div class="mt-3">
                          <label for="create-member-form-2" class="form-label">Ngày đăng ký</label>
                          <div class="relative form-control">
                            <div
                              class="absolute rounded-l w-10 h-full flex items-center justify-center bg-slate-100 border text-slate-500 dark:bg-darkmode-700 dark:border-darkmode-800 dark:text-slate-400">
                              <CalendarIcon class="w-4 h-4" />
                            </div>
                            <Litepicker v-model="formData.birth_date" :options="{
                            maxDate: new Date(),
                            dropdowns: {
                              minYear: 1900,
                              maxYear: null,
                              months: true,
                              years: true,
                            },
                          }" class="form-control pl-12" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <button type="button" class="btn btn-primary w-20 mt-3" @click="updateMemberFunc">
                  Lưu
                </button>
                <router-link :to="{ name: 'list-members' }" tag="a" class="btn btn-outline-secondary ml-3 w-20 mt-3">
                  Hủy
                </router-link>
              </div>
            </div>
            <!-- END: Thông tin hội viên -->
          </div>
        </div>
      </TabPanel>
    </TabPanels>
  </TabGroup>

</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { getDetailMember, editMember } from '@/api/members'
import { showMessage } from '@/common/utils/helpers'
import router from '@/router'
import { CreateMemberRequest } from '@/api/members/interfaces/create'

const datePickerOptions = {
  autoApply: false,
  showWeekNumbers: true,
  dropdowns: {
    minYear: 1970,
    maxYear: null,
    months: true,
    years: true,
  },
};
const formData = ref<CreateMemberRequest>({
  name: '',
  gender: '1',
  avatar: '',
  phone: '',
  email: '',
  address: '',
  birth_date: '',
});

const paramId = router.currentRoute.value.params.id.toString()
const select = ref('1')
const newImageFile = ref(null)
const newImage = ref('')
const existingImage = ref('')

const getMemberData = async () => {
  const res = await getDetailMember(paramId)
  formData.value.name = res.data.MemberName;
  formData.value.gender = res.data.MemberGender;
  formData.value.phone = res.data.MemberPhone;
  formData.value.email = res.data.MemberEmail;
  formData.value.address = res.data.MemberAddress;
  formData.value.birth_date = res.data.MemberBirthDate;
  newImage.value = res.data.MemberAvatar
  existingImage.value = res.data.MemberAvatar
}

onMounted(() => {
  getMemberData()
})


const previewFiles = (event: any) => {
  const input = event.target
  if (input.files) {
    const reader = new FileReader()
    reader.onload = (e: any) => {
      newImage.value = e.target.result
    }
    reader.readAsDataURL(input.files[0])
    newImageFile.value = input.files[0]
  }
}

const removePreview = () => {
  newImage.value = ""
  const input = document.getElementById('form-avatar') as HTMLInputElement
  input.value = ''
  newImageFile.value = null
}
const updateMemberFunc = async () => {
  const data = {
    ...formData.value,
    avatar: newImageFile.value,
  };
  const formDataToSend = new FormData()

  Object.entries(data).forEach(([key, value]) => {
    if (key === 'avatar' && value) {
      formDataToSend.append(key, value)
      return
    } else if (key === 'avatar' && !value) {
      formDataToSend.append(key, existingImage.value)
      return
    }
    formDataToSend.append(key, value?.toString() || '');
  });

  const res = await editMember(paramId, formDataToSend)
  if (res) {
    showMessage('Chỉnh sửa thông tin hội viên thành công', true)
    router.push({ name: 'list-members' })
  }
}
</script>
