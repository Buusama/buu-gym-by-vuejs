<template>
  <div class="grid">
    <div class="col-span-12 lg:col-span-8 2xl:col-span-9">
      <!-- BEGIN: Thông tin lớp dịch vụ -->
      <div class="intro-y box lg:mt-5">
        <div class="flex items-center p-5 border-b border-slate-200/60 dark:border-darkmode-400">
          <h2 class="font-medium text-base mr-auto">Thông tin lớp dịch vụ</h2>
        </div>
        <div class="p-5 border-b border-slate-200/60 dark:border-darkmode-400">
          <div class="flex flex-col-reverse xl:flex-row">
            <div class="flex-1 mt-6 xl:mt-0">
              <div class="grid grid-cols-12 gap-x-5">
                <div class="col-span-12 2xl:col-span-6">
                  <div>
                    <label for="create-package-form-1" class="form-label">Tên lớp dịch vụ</label>
                    <input v-model="formData.name" type="text" class="form-control" placeholder="Tên dịch vụ" />
                  </div>
                  <div class="mt-3">
                    <label for="create-package-form-2" class="form-label">Loại lớp dịch vụ</label>
                    <select v-model="formData.serviceType" class="form-select">
                      <option v-for="(label, value) in TypeLabel" :key="value" :value="TypeValue[value]" :selected="TypeValue[value] === formData.serviceType">{{ label }}</option>
                    </select>
                  </div>
                </div>
                <div class="col-span-12 2xl:col-span-6">
                  <div class="mt-3 2xl:mt-0">
                    <label for="create-package-form-4" class="form-label">Giá dịch vụ (VND)</label>
                    <input v-model="formData.price" type="number" step="50000" class="form-control" placeholder="Giá dịch vụ" />
                  </div>
                  <div class="mt-3">
                    <label for="create-package-form-2" class="form-label">Thời lượng</label>
                    <input v-model="formData.duration" type="text" class="form-control" placeholder="Thời lượng" />
                  </div>
                  <div class="mt-3">
                    <label for="create-package-form-2" class="form-label">Số lượng tối đa</label>
                    <input v-model="formData.maxParticipants" type="number" class="form-control" placeholder="Số lượng tối đa" />
                  </div>
                </div>
                <div class="col-span-12">
                  <div class="mt-3">
                    <label for="create-package-form-7" class="form-label">Ghi chú</label>
                    <textarea v-model="formData.description" rows="5" class="form-control" placeholder="Ghi chú"></textarea>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="p-5">
          <button type="button" class="btn btn-primary w-20 mt-3">
            Lưu
          </button>
          <router-link :to="{ name: 'list-services' }" class="btn btn-outline-secondary ml-3 w-20 mt-3">
            Hủy
          </router-link>
        </div>
      </div>
      <!-- END: Thông tin dịch vụ -->
    </div>
  </div>
</template>
<script setup lang="ts">
  import { defineComponent, defineProps } from 'vue';
  import { TypeValue, TypeLabel } from '@/common/enums/services/type';
  const props = defineProps(['formData']);
  defineComponent({
    props,
  });
</script>