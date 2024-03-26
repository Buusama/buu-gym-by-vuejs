<template>
  <div class="intro-y flex items-center mt-8">
    <h2 class="text-lg font-medium mr-auto">Chỉnh sửa thông tin hội viên</h2>
  </div>

  <TabGroup class="py-5">
    <TabList class="nav-boxed-tabs text-bold">
      <Tab v-for="tab in tabs" tag="button" class="w-full py-2">
        <h6 class="font-medium">{{ tab.name }}</h6>
      </Tab>
    </TabList>
    <TabPanels class="">
      <TabPanel class="leading-relaxed">
        <MemberInfoTab
          :formData="formData"
          :newImage="newImage"
          :datePickerOptions="datePickerOptions"
          @preview-file="previewFiles"
          @remove-preview="removePreview"
          @update="updateMemberFunc"
        />
      </TabPanel>
      <TabPanel class="leading-relaxed">
        <MemberHealthInfo />
      </TabPanel>
      <TabPanel class="leading-relaxed">
        <MemberServiceInfo />
      </TabPanel>
    </TabPanels>
  </TabGroup>
</template>

<script setup lang="ts">
  import { onMounted, ref } from 'vue';
  import { getDetailMember, editMember } from '@/api/members';
  import { showMessage } from '@/common/utils/helpers';
  import router from '@/router';
  import { CreateMemberRequest } from '@/api/members/interfaces/create';
  import MemberInfoTab from './components/MemberInfoTab.vue';
  import MemberHealthInfo from './components/MemberHealthInfo.vue';
  import MemberServiceInfo from './components/MemberServiceInfo.vue';

  const tabs = [
    { id: 1, name: 'Thông tin hội viên' },
    { id: 2, name: 'Thông tin sức khỏe' },
    { id: 3, name: 'Dịch vụ đăng ký' },
    { id: 4, name: 'Lịch sử tập luyện' },
    { id: 5, name: 'Chỉ số cơ thể' },
    { id: 6, name: 'Lịch sử thanh toán' },
  ];
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

  const paramId = router.currentRoute.value.params.id.toString();
  const select = ref('1');
  const newImageFile = ref(null);
  const newImage = ref('');
  const existingImage = ref('');

  const getMemberData = async () => {
    const res = await getDetailMember(paramId);
    formData.value.name = res.data.MemberName;
    formData.value.gender = res.data.MemberGender;
    formData.value.phone = res.data.MemberPhone;
    formData.value.email = res.data.MemberEmail;
    formData.value.address = res.data.MemberAddress;
    formData.value.birth_date = res.data.MemberBirthDate;
    newImage.value = res.data.MemberAvatar;
    existingImage.value = res.data.MemberAvatar;
  };

  onMounted(() => {
    getMemberData();
  });

  const previewFiles = (event: any) => {
    const input = event.target;
    if (input.files) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        newImage.value = e.target.result;
      };
      reader.readAsDataURL(input.files[0]);
      newImageFile.value = input.files[0];
    }
  };

  const removePreview = () => {
    newImage.value = '';
    const input = document.getElementById('form-avatar') as HTMLInputElement;
    input.value = '';
    newImageFile.value = null;
  };
  const updateMemberFunc = async () => {
    const data = {
      ...formData.value,
      avatar: newImageFile.value,
    };
    const formDataToSend = new FormData();

    Object.entries(data).forEach(([key, value]) => {
      if (key === 'avatar' && value) {
        formDataToSend.append(key, value);
        return;
      } else if (key === 'avatar' && !value) {
        formDataToSend.append(key, existingImage.value);
        return;
      }
      formDataToSend.append(key, value?.toString() || '');
    });

    const res = await editMember(paramId, formDataToSend);
    if (res) {
      showMessage('Chỉnh sửa thông tin hội viên thành công', true);
      router.push({ name: 'list-members' });
    }
  };
</script>
