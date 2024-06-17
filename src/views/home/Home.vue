<template>
  <!-- BEGIN: General Report -->
  <div class="col-span-12 mt-8">
    <!-- Overview Section -->
    <div class="intro-y flex items-center h-10">
      <h2 class="text-lg font-medium truncate mr-5">Tổng quan</h2>
    </div>
    <div class="grid grid-cols-12 gap-6 mt-5">
      <div class="col-span-12 sm:col-span-6 xl:col-span-3 intro-y" v-for="stat in stats" :key="stat.id">
        <div class="report-box zoom-in">
          <div class="box p-5">
            <div class="flex">
              <component :is="stat.icon" class="report-box__icon" :class="stat.iconClass" />
              <div class="ml-auto">
                <Tippy tag="div" class="report-box__indicator cursor-pointer" :class="stat.indicatorClass" :content="stat.tooltip">
                  {{ stat.percentage }}%
                  <component :is="stat.indicatorIcon" class="w-4 h-4" />
                </Tippy>
              </div>
            </div>
            <div class="text-3xl font-bold leading-8 mt-6">{{ stat.value }}</div>
            <div class="text-base text-gray-600 mt-1">{{ stat.label }}</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Current Workout Information Section -->
    <div class="intro-y flex items-center h-10 mt-8">
      <h2 class="text-lg font-medium truncate mr-5">Thông tin tập luyện</h2>
    </div>
    <div class="box mt-5">
      <div class="overflow-x-auto mt-5">
        <table class="table">
          <thead>
            <tr>
              <th class="border-b-2 dark:border-dark-5 whitespace-nowrap">#</th>
              <th class="border-b-2 dark:border-dark-5 whitespace-nowrap">Tên Khu Vực</th>
              <th class="border-b-2 dark:border-dark-5 whitespace-nowrap">Số người đang tập luyện</th>
              <th class="border-b-2 dark:border-dark-5 whitespace-nowrap">Sức chứa tối đa</th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-gray-200 dark:bg-dark-1" v-for="(area, index) in workoutAreas" :key="area.id">
              <td class="border-b dark:border-dark-5">{{ index + 1 }}</td>
              <td class="border-b dark:border-dark-5">{{ area.name }}</td>
              <td class="border-b dark:border-dark-5">{{ area.current }}</td>
              <td class="border-b dark:border-dark-5">{{ area.capacity }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <!-- Potential Members Section -->
    <div class="intro-y flex items-center h-10 mt-8">
      <h2 class="text-lg font-medium truncate mr-5">Hội viên tiềm năng</h2>
    </div>
    <div class="box mt-5">
      <div class="overflow-x-auto mt-5">
        <table class="table">
          <thead>
            <tr>
              <th class="border-b-2 dark:border-dark-5 whitespace-nowrap">#</th>
              <th class="border-b-2 dark:border-dark-5 whitespace-nowrap">Tên</th>
              <th class="border-b-2 dark:border-dark-5 whitespace-nowrap">Email</th>
              <th class="border-b-2 dark:border-dark-5 whitespace-nowrap">Điện thoại</th>
              <th class="border-b-2 dark:border-dark-5 whitespace-nowrap">Trạng thái</th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-gray-200 dark:bg-dark-1" v-for="(member, index) in potentialMembers" :key="member.id">
              <td class="border-b dark:border-dark-5">{{ index + 1 }}</td>
              <td class="border-b dark:border-dark-5">{{ member.name }}</td>
              <td class="border-b dark:border-dark-5">{{ member.email }}</td>
              <td class="border-b dark:border-dark-5">{{ member.phone }}</td>
              <td class="border-b dark:border-dark-5">{{ member.status }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- Available Trainers Section -->
    <div class="intro-y flex items-center h-10 mt-8">
      <h2 class="text-lg font-medium truncate mr-5">Huấn luyện viên đang rảnh</h2>
    </div>
    <div class="box mt-5">
      <div class="overflow-x-auto mt-5">
        <table class="table">
          <thead>
            <tr>
              <th class="border-b-2 dark:border-dark-5 whitespace-nowrap">#</th>
              <th class="border-b-2 dark:border-dark-5 whitespace-nowrap">Tên</th>
              <th class="border-b-2 dark:border-dark-5 whitespace-nowrap">Email</th>
              <th class="border-b-2 dark:border-dark-5 whitespace-nowrap">Điện thoại</th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-gray-200 dark:bg-dark-1" v-for="(trainer, index) in availableTrainers" :key="trainer.id">
              <td class="border-b dark:border-dark-5">{{ index + 1 }}</td>
              <td class="border-b dark:border-dark-5">{{ trainer.name }}</td>
              <td class="border-b dark:border-dark-5">{{ trainer.email }}</td>
              <td class="border-b dark:border-dark-5">{{ trainer.phone }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <!-- Exercises Section -->
    <div class="intro-y flex items-center h-10 mt-8">
      <h2 class="text-lg font-medium truncate mr-5">Bài tập</h2>
    </div>
    <div class="box mt-5">
      <div class="overflow-x-auto mt-5">
        <table class="table">
          <thead>
            <tr>
              <th class="border-b-2 dark:border-dark-5 whitespace-nowrap">#</th>
              <th class="border-b-2 dark:border-dark-5 whitespace-nowrap">Tên Bài Tập</th>
              <th class="border-b-2 dark:border-dark-5 whitespace-nowrap">Loại</th>
              <th class="border-b-2 dark:border-dark-5 whitespace-nowrap">Thời lượng</th>
              <th class="border-b-2 dark:border-dark-5 whitespace-nowrap">Huấn luyện viên</th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-gray-200 dark:bg-dark-1" v-for="(exercise, index) in exercises" :key="exercise.id">
              <td class="border-b dark:border-dark-5">{{ index + 1 }}</td>
              <td class="border-b dark:border-dark-5">{{ exercise.name }}</td>
              <td class="border-b dark:border-dark-5">{{ exercise.type }}</td>
              <td class="border-b dark:border-dark-5">{{ exercise.duration }}</td>
              <td class="border-b dark:border-dark-5">{{ exercise.trainer }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ChevronDownIcon, ChevronUpIcon } from 'lucide-vue-next';
import { UsersIcon } from 'lucide-vue-next';
import { ref, onMounted } from 'vue';

// Sample data for statistics
const stats = ref([
  {
    id: 1,
    icon: UsersIcon,
    iconClass: 'text-theme-10',
    label: 'Tổng số hội viên',
    value: '4.710',
    percentage: '33',
    indicatorClass: 'bg-theme-9',
    indicatorIcon: ChevronDownIcon,
    tooltip: '33% Higher than last month',
  },
  {
    id: 2,
    icon: UsersIcon,
    iconClass: 'text-theme-11',
    label: 'Tham gia hôm nay',
    value: '3.721',
    percentage: '2',
    indicatorClass: 'bg-theme-6',
    indicatorIcon: ChevronDownIcon,
    tooltip: '2% Lower than last month',
  },
  {
    id: 3,
    icon: UsersIcon,
    iconClass: 'text-theme-12',
    label: 'Tỷ lệ hội viên mới',
    value: '2.149',
    percentage: '12',
    indicatorClass: 'bg-theme-9',
    indicatorIcon: ChevronUpIcon,
    tooltip: '12% Higher than last month',
  },
  {
    id: 4,
    icon: UsersIcon,
    iconClass: 'text-theme-9',
    label: 'Khách vãng lai',
    value: '152.040',
    percentage: '22',
    indicatorClass: 'bg-theme-9',
    indicatorIcon: ChevronUpIcon,
    tooltip: '22% Higher than last month',
  },
  {
    id: 5,
    icon: UsersIcon,
    iconClass: 'text-theme-10',
    label: 'Tổng doanh thu hội viên',
    value: '$15,000',
    percentage: '10',
    indicatorClass: 'bg-theme-9',
    indicatorIcon: ChevronUpIcon,
    tooltip: '10% Higher than last month',
  },
  {
    id: 6,
    icon: UsersIcon,
    iconClass: 'text-theme-11',
    label: 'Hội viên đang hoạt động',
    value: '1,200',
    percentage: '5',
    indicatorClass: 'bg-theme-9',
    indicatorIcon: ChevronUpIcon,
    tooltip: '5% Higher than last month',
  },
  {
    id: 7,
    icon: UsersIcon,
    iconClass: 'text-theme-12',
    label: 'Tỷ lệ sử dụng thiết bị',
    value: '75%',
    percentage: '8',
    indicatorClass: 'bg-theme-9',
    indicatorIcon: ChevronUpIcon,
    tooltip: '8% Higher than last month',
  },
  {
    id: 8,
    icon: UsersIcon,
    iconClass: 'text-theme-10',
    label: 'Hội viên mới trong tháng',
    value: '300',
    percentage: '15',
    indicatorClass: 'bg-theme-9',
    indicatorIcon: ChevronUpIcon,
    tooltip: '15% Higher than last month',
  }
]);

// Sample data for current workout areas
const workoutAreas = ref([
  { id: 1, name: 'Gym Area 1', current: 20, capacity: 50 },
  { id: 2, name: 'Cardio Area', current: 15, capacity: 40 },
  { id: 3, name: 'Pool Area', current: 10, capacity: 30 },
]);

// Sample data for potential members
const potentialMembers = ref([
  { id: 1, name: 'Nguyen Van A', email: 'nguyenvana@example.com', phone: '0123456789', status: 'Interested' },
  { id: 2, name: 'Tran Thi B', email: 'tranthib@example.com', phone: '0987654321', status: 'Interested' },
]);

// Sample data for available trainers
const availableTrainers = ref([
  { id: 1, name: 'Trainer 1', email: 'trainer1@example.com', phone: '0123456789' },
  { id: 2, name: 'Trainer 2', email: 'trainer2@example.com', phone: '0987654321' },
]);

// Sample data for exercises
const exercises = ref([
  { id: 1, name: 'Push-ups', type: 'Strength', duration: '10 mins', trainer: 'Trainer 1' },
  { id: 2, name: 'Running', type: 'Cardio', duration: '30 mins', trainer: 'Trainer 2' },
]);

onMounted(() => {
  // Fetch data from an API if necessary
  // stats.value = fetchStats();
  // workoutAreas.value = fetchWorkoutAreas();
  // potentialMembers.value = fetchPotentialMembers();
  // availableTrainers.value = fetchAvailableTrainers();
  // exercises.value = fetchExercises();
});
</script>

<style scoped>
/* Additional styles if necessary */
</style>
