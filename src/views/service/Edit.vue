<template>
  <div class="intro-y flex items-center mt-8">
    <h2 class="text-lg font-medium mr-auto">Chỉnh sửa lớp dịch vụ</h2>
  </div>

  <ServiceInfo :formData="formData" />

</template>

<script setup lang="ts">
import { onMounted, ref, nextTick } from 'vue';
import { getDetailService } from '@/api/services';
import ServiceInfo from './components/InfoTab.vue';
import router from '@/router';

// Khai báo các tab và trạng thái hiển thị của SessionInfo
const tabs = ref([{ id: 1, name: 'Thông tin lớp dịch vụ' }]);

// Khai báo dữ liệu form
const formData = ref({
  name: '',
  price: 0,
  serviceType: 1,
  duration: 0,
  description: '',
  maxParticipants: 0,
});

// Hàm lấy chi tiết dịch vụ
const fetchServiceDetail = async () => {
  const paramId = router.currentRoute.value.params.id.toString();
  try {
    const response = await getDetailService(paramId);
    console.log(response.data);
    formData.value = response.data;
    if (response.data.serviceType === 3) {
      tabs.value.push({ id: 2, name: 'Thông tin buổi học' });
    }
  } catch (error) {
    console.error(error);
  }
};

// Gọi hàm fetchServiceDetail khi component được mount
onMounted(async () => {
  await fetchServiceDetail();
});
</script>