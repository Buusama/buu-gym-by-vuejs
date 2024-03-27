<!-- MemberInfoTab.vue -->
<template>
  <div class="grid">
    <div class="col-span-12 lg:col-span-8 2xl:col-span-9">
      <!-- BEGIN: Thông tin hội viên -->
      <div class="intro-y box lg:mt-5">
        <div
          class="p-5 font-medium text-base flex items-center border-b border-slate-200/60 dark:border-darkmode-400"
        >
          Lịch sử tập luyện
        </div>
        <div class="p-5">


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

<script setup lang="ts">
  import { ref } from 'vue';
  const selectMultiple = ref('');
  const diseases = ref([1]);
  const symptoms = ref([1]);

  const diseaseOptions = [
    { value: 1, label: 'Bệnh tim mạch' },
    { value: 2, label: 'Huyết áp cao' },
    { value: 3, label: 'Tiểu đường' },
    { value: 4, label: 'Ung thư' },
    { value: 5, label: 'Viêm gan' },
    { value: 6, label: 'Viêm thận' },
    { value: 7, label: 'Viêm khớp' },
    { value: 8, label: 'Viêm dạ dày' },
    { value: 9, label: 'Viêm phổi' },
    { value: 10, label: 'Viêm mũi họng' },
    { value: 11, label: 'Viêm ruột' },
    { value: 12, label: 'Viêm gan B' },
    { value: 13, label: 'Viêm gan C' },
    { value: 14, label: 'Viêm gan E' },
    { value: 15, label: 'Viêm gan F' },
  ];
  const intensityOptions = [
    { value: 1, label: 'Nhẹ nhàng' },
    { value: 2, label: 'Bình thường' },
    { value: 3, label: 'Mạnh' },
  ];

</script>
