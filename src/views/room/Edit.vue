<template>
  <div class="intro-y flex items-center mt-8">
    <h2 class="text-lg font-medium mr-auto">Thêm mới phòng tập</h2>
  </div>
  <div class="grid">
    <div class="col-span-12 lg:col-span-8 2xl:col-span-9">
      <!-- BEGIN: Thông tin phòng tập -->
      <div class="intro-y box lg:mt-5">
        <div class="flex items-center p-5 border-b border-slate-200/60 dark:border-darkmode-400">
          <h2 class="font-medium text-base mr-auto">Thông tin phòng tập</h2>
        </div>
        <div class="p-5 border-b border-slate-200/60 dark:border-darkmode-400">
          <div class="flex flex-col-reverse xl:flex-row flex-col">
            <div class="flex-1 mt-6 xl:mt-0">
              <div class="grid grid-cols-12 gap-x-5">
                <div class="col-span-12 2xl:col-span-6">
                  <div>
                    <label for="create-member-form-1" class="form-label">Tên phòng tập</label>
                    <input v-model="nameRoom" type="text" class="form-control" placeholder="Tên phòng tập" />
                  </div>
                  <div class="mt-3">
                    <label for="create-member-form-2" class="form-label">Chức năng</label>
                    <input v-model="duration" type="number" step="50000" class="form-control" placeholder="Chức năng phòng tập" />
                  </div>
                </div>
                <div class="col-span-12 2xl:col-span-6">
                  <div class="mt-3 2xl:mt-0">
                    <label for="create-member-form-4" class="form-label">Vị trí (Tầng)</label>
                    <input v-model="price" type="number" step="50000" class="form-control" placeholder="Tầng" />
                  </div>
                </div>
                <div class="col-span-12">
                  <div class="mt-3">
                    <label for="create-member-form-7" class="form-label">Ghi chú</label>
                    <textarea v-model="note" rows="5" class="form-control" placeholder="Ghi chú"></textarea>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- END: Thông tin phòng tập -->

      <!-- BEGIN: Thông tin thiết bị trong phòng tập -->
      <div class="grid">
        <div class="col-span-12 lg:col-span-8 2xl:col-span-9">
          <div class="intro-y box lg:mt-5">
            <div class="p-5 font-medium text-base flex items-center border-b border-slate-200/60 dark:border-darkmode-400">
              Thiết bị trong phòng tập
            </div>
            <div class="p-5">
              <div class="form-inline items-start flex-col xl:flex-row mt-2 pt-2 first:mt-0 first:pt-0">
                <div class="form-label xl:w-64 xl:!mr-10">
                  <div class="text-left">
                    <div class="flex items-center">
                      <div class="font-medium form-label">Danh sách thiết bị</div>
                    </div>
                    <div class="leading-relaxed text-slate-500 text-xs mt-3">
                      Các thiết bị được lắp đặt trong phòng tập
                    </div>
                  </div>
                </div>
                <div class="w-full mt-3 xl:mt-0 flex-1">
                  <div class="relative pl-5 pr-5 xl:pr-10 py-10 bg-slate-50 dark:bg-transparent dark:border rounded-md">
                    <div>
                      <div class="form-inline mt-5 items-start first:mt-0">
                        <label class="form-label mt-2 sm:w-20">Thiết bị</label>
                        <div class="flex-1">
                          <div v-for="(equipment, index) in equipments" :key="index" class="xl:flex items-center mt-5 first:mt-0">
                            <div class="input-group flex-1">
                              <TomSelect v-model="equipment.name" :options="equipmentOptions" placeholder="Chọn loại thiết bị" class="w-full mr-3">
                                <option v-for="option in equipmentOptions" :key="option.value" :value="option.value">
                                  {{ option.label }}
                                </option>
                              </TomSelect>
                              <input v-model="equipment.quantity" type="number" class="w-full rounded" placeholder="Số lượng" />
                            </div>
                            <div class="w-20 flex text-slate-500 mt-3 xl:mt-0">
                              <button class="ml-3 xl:ml-5" @click="removeEquipment(index)">
                                <Trash2Icon class="w-4 h-4" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="xl:ml-20 xl:pl-5 xl:pr-20 mt-5 first:mt-0">
                        <button class="btn btn-outline-primary border-dashed w-full" @click="addEquipment">
                          <PlusIcon class="w-4 h-4 mr-2" />Thêm
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- END: Thông tin hội viên -->
          <div class="p-5">
            <button @click="updateRoomFunc" type="button" class="btn btn-primary w-20 mt-3">
              Lưu
            </button>
            <router-link :to="{ name: 'list-rooms' }" tag="a" class="btn btn-outline-secondary ml-3 w-20 mt-3">
              Hủy
            </router-link>
          </div>
        </div>
      </div>
      <!-- END: Thông tin thiết bị trong phòng tập -->
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { getDetailRoom, editRoom, getEquipmentsByRoomId } from '@/api/rooms';
import { getEquipments } from '@/api/equipments';
import { showMessage } from '@/common/utils/helpers';
import router from '@/router';
import { CreateRoomRequest } from '@/api/rooms/interfaces';

// Extract the room ID from route parameters
const paramId = router.currentRoute.value.params.id.toString();

// Initialize reactive variables
const nameRoom = ref('');
const duration = ref(0);
const price = ref(0);
const note = ref('');
const equipments = ref([{ name: '', quantity: 0 }]);
const equipmentOptions = ref([{ value: '', label: ''}]);

// Fetch room details and equipment options on mount
onMounted(() => {
  fetchRoomDetails();
  fetchEquipmentOptions();
  fetchRoomEquipments();
});

const fetchRoomDetails = async () => {
  try {
    const response = await getDetailRoom(paramId);
    if (response) {
      nameRoom.value = response.data.name;
      note.value = response.data.description;
    }
  } catch (error) {
    console.error('Error fetching room details:', error);
  }
};

const fetchEquipmentOptions = async () => {
  try {
    const response = await getEquipments({});
    if (response) {
      equipmentOptions.value = response.data.map((item: any) => ({
        label: item.EquipmentName,
        value: item.EquipmentName,
      }));
    }
  } catch (error) {
    console.error('Error fetching equipment options:', error);
  }
};

const fetchRoomEquipments = async () => {
  try {
    const response = await getEquipmentsByRoomId(paramId);
    if (response) {
      equipments.value = response.data;
    }
  } catch (error) {
    console.error('Error fetching room equipments:', error);
  }
};

const updateRoomFunc = async () => {
  try {
    const roomData: CreateRoomRequest = {
      name: nameRoom.value,
      description: note.value,
      // equipments: equipments.value,
    };

    const response = await editRoom(paramId, roomData);
    if (response) {
      showMessage('Chỉnh sửa thông tin phòng tập thành công', true);
      router.push({ name: 'list-rooms' });
    }
  } catch (error) {
    console.error('Error updating room:', error);
  }
};

const addEquipment = () => {
  equipments.value.push({ name: '', quantity: 1 });
};

const removeEquipment = (index: number) => {
  equipments.value.splice(index, 1);
};
</script>
