<template>
  <!-- BEGIN: Thông tin hội viên -->
  <div class="intro-y box lg:mt-5">
    <div class="intro-y flex flex-col sm:flex-row items-center p-5 border-b border-slate-200/60 dark:border-darkmode-400">
      <h2 class="text-lg font-medium mr-auto">Đăng ký theo giáo trình có HLV</h2>
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

      <div class="mb-4">
        <label class="form-label">Số tuần</label>
        <input type="number" v-model="numberOfWeeks" class="form-control" min="1" />
      </div>

      <div class="mb-4">
        <label class="form-label">Khung giờ có thể tập luyện</label>
        <div v-for="(time, index) in trainingTimes" :key="index" class="flex items-center mt-2">
          <select v-model="time.day" class="form-control mr-2">
            <option v-for="day in daysOfWeek" :key="day.value" :value="day.value">
              {{ day.label }}
            </option>
          </select>
          <input type="time" v-model="time.start" class="form-control mr-2" placeholder="Thời gian bắt đầu" />
          <input type="time" v-model="time.end" class="form-control" placeholder="Thời gian kết thúc" />
          <button class="btn btn-danger ml-2" @click="removeTimeSlot(index)">Xóa</button>
        </div>
        <button class="btn btn-outline-primary border-dashed w-full mt-4" @click="addTimeSlot">
          <PlusIcon class="w-4 h-4 mr-2" /> Thêm khung giờ
        </button>
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
import { getMembers } from '@/api/members';
import { getServices } from '@/api/services';
import { TypeValue } from '@/common/enums/services/type';
import { createListBooking } from '@/api/booking';
import moment from 'moment';

const selectedMemberId = ref<string | null>(null);
const selectedServiceId = ref<string | null>(null);
const numberOfWeeks = ref<number>(1);

const memberOptions = ref<{ value: string; label: string }[]>([]);
const serviceOptions = ref<{ value: string; label: string }[]>([]);

const trainingTimes = ref<{ day: string; start: string; end: string }[]>([{ day: '', start: '', end: '' }]);

const daysOfWeek = [
  { value: 1, label: 'Thứ Hai' },
  { value: 2, label: 'Thứ Ba' },
  { value: 3, label: 'Thứ Tư' },
  { value: 4, label: 'Thứ Năm' },
  { value: 5, label: 'Thứ Sáu' },
  { value: 6, label: 'Thứ Bảy' },
  { value: 0, label: 'Chủ Nhật' },
];

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
    const response = await getServices({ field: 'table.service_type', type: '=', value: TypeValue.PRIVATE.toString() });
    serviceOptions.value = response.data.map((service: any) => ({
      value: service.id,
      label: service.name,
    }));
  } catch (error) {
    console.error(error);
  }
};

const addTimeSlot = () => {
  trainingTimes.value.push({ day: '', start: '', end: '' });
};

const removeTimeSlot = (index: number) => {
  trainingTimes.value.splice(index, 1);
};

const registerTrainingSession = async () => {
  const bookingData = {
    memberId: selectedMemberId.value,
    serviceId: selectedServiceId.value,
    numberOfWeeks: numberOfWeeks.value,
    trainingTimes: trainingTimes.value,
  };

  console.log(bookingData);

  try {
    await createListBooking(bookingData);
    console.log('Booking successful');
  } catch (error) {
    console.error(error);
  }
};

onMounted(async () => {
  await fetchMembers();
  await fetchServices();
});
</script>
