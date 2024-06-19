<!-- MemberInfoTab.vue -->
<template>
  <!-- BEGIN: Thông tin hội viên -->
  <div class="intro-y box lg:mt-5">
    <div class="intro-y flex flex-col sm:flex-row items-center p-5 border-b border-slate-200/60 dark:border-darkmode-400">
      <h2 class="text-lg font-medium mr-auto">Đăng ký lớp dịch vụ</h2>
    </div>
    <!-- BEGIN: Striped Rows -->

    <!-- Chọn hội viên -->
    <div class="p-5">
      <!-- Chọn hội viên -->
      <div class="mb-4">
        <label class="form-label">Chọn hội viên</label>
        <select v-model="selectedMemberId" class="form-control">
          <option v-for="member in memberOptions" :key="member.value" :value="member.value">
            {{ member.label }}
          </option>
        </select>
      </div>

      <!-- Chọn dịch vụ -->
      <div class="mb-4">
        <label class="form-label">Chọn dịch vụ</label>
        <select v-model="selectedServiceId" class="form-control">
          <option v-for="service in serviceOptions" :key="service.value" :value="service.value">
            {{ service.label }}
          </option>
        </select>
      </div>
    </div>
    <!-- END: Striped Rows -->
    <div class="p-5">
      <button class="btn btn-primary w-20" @click="registerTrainingSession">Đăng ký</button>
      <button class="btn btn-outline-secondary w-20  ml-2">Hủy</button>
    </div>
  </div>
  <!-- END: Thông tin hội viên -->
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue';
// import { getMembers, getServices, getPTPackages, registerTrainingSession } from '@/api/training'; // Các hàm API
import { getMembers } from '@/api/members';
import { getServices } from '@/api/services';
import TomSelect from 'tom-select';
import { TypeValue } from '@/common/enums/services/type';

const selectedMemberId = ref<string | null>(null);
const selectedServiceId = ref<string | null>(null);

const memberOptions = ref<{ value: string; label: string }[]>([]);
const serviceOptions = ref<{ value: string; label: string }[]>([]);
const packageOptions = ref<{ value: string; label: string }[]>([]);


const fetchMembers = async () => {
  try {
    const response = await getMembers({});
    memberOptions.value = response.data.map((member: any) => ({
      value: member.MemberId,
      label: `${member.MemberName} - ${member.MemberPhone}`
    }));

    console.log(memberOptions.value);
  } catch (error) {
    console.error(error);
  }
};

const fetchServices = async () => {
  try {
    const response = await getServices({ field: 'table.service_type', type: '=', value: TypeValue.GROUP.toString() });
    serviceOptions.value = response.data.map((service: any) => ({
      value: service.id,
      label: service.name,
    }));
  } catch (error) {
    console.error(error);
  }
};

onMounted(async () => {
  await fetchMembers();
  await fetchServices();
  //   await fetchPTPackages();
});
</script>