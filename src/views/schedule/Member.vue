<template>
  <div class="intro-y flex flex-col sm:flex-row items-center mt-8">
    <h2 class="text-lg font-medium mr-auto">Lịch tập hội viên</h2>
    <div class="w-full sm:w-auto flex mt-4 sm:mt-0">
      <button class="btn btn-primary shadow-md mr-2">In Lịch tập</button>
      <span class="ml-auto sm:ml-0">
        <button class="btn px-2 box" @click="showCreateModal">
          <span class="w-5 h-5 flex items-center justify-center">
            <FilterIcon class="w-4 h-4" />
          </span>
        </button>
      </span>
    </div>
  </div>
  <form id="tabulator-html-filter-form" class="xl:flex sm:mr-auto">
    <div class="sm:flex items-center sm:mr-4">
      <label class="w-12 flex-none xl:w-auto xl:flex-initial mr-2">Trường</label>
      <select id="tabulator-html-filter-field" class="form-select w-full sm:w-32 2xl:w-full mt-2 sm:mt-0 sm:w-auto">
        <option value="name">Tên hội viên</option>
        <option value="phone">Số điện thoại</option>
        <option value="address">Địa chỉ</option>
      </select>
    </div>
    <div class="sm:flex items-center sm:mr-4 mt-2 xl:mt-0">
      <label class="w-12 flex-none xl:w-auto xl:flex-initial mr-2">So sánh</label>
      <select id="tabulator-html-filter-type" class="form-select w-full mt-2 sm:mt-0 sm:w-auto">
        <option value="like" selected>like</option>
        <option value="=">=</option>
        <option value="<">&lt;</option>
        <option value="<=">&lt;=</option>
        <option value=">">></option>
        <option value=">=">>=</option>
        <option value="!=">!=</option>
      </select>
    </div>
    <div class="sm:flex items-center sm:mr-4 mt-2 xl:mt-0">
      <label class="w-12 flex-none xl:w-auto xl:flex-initial mr-2">Value</label>
      <input id="tabulator-html-filter-value" type="text" class="form-control sm:w-40 2xl:w-full mt-2 sm:mt-0" placeholder="Giá trị..." />
    </div>
    <div class="sm:flex items-center sm:mr-4 mt-2 xl:mt-0">
      <label class="w-12 flex-none xl:w-auto xl:flex-initial mr-2">Trạng thái</label>
      <select id="tabulator-html-filter-type" class="form-select w-full mt-2 sm:mt-0 sm:w-auto">
        <option value="0" selected>Tất cả</option>
        <option value="1">Đang hoạt động</option>
        <option value="2">Ngưng hoạt động</option>
        <option value="3">Sắp hết hạn</option>
      </select>
    </div>
    <div class="mt-2 xl:mt-0">
      <button id="tabulator-html-filter-go" type="button" class="btn btn-primary w-full sm:w-16" @click="onFilter">
        Lọc
      </button>
      <button id="tabulator-html-filter-reset" type="button" class="btn btn-secondary w-full sm:w-16 mt-2 sm:mt-0 sm:ml-1" @click="onResetFilter">
        Reset
      </button>
    </div>
  </form>
  <div class="grid grid-cols-12 gap-5 mt-5">

    <!-- BEGIN: Calendar Side Menu -->
    <div class="col-span-12 xl:col-span-4 2xl:col-span-3">
      <div class="box p-5 intro-y">
        <button type="button" class="btn btn-primary w-full mt-2">
          <Edit3Icon class="w-4 h-4 mr-2" />Tạo lịch tập
        </button>
        <FullCalendarDraggable id="calendar-events" :options="dragableOptions" class="border-t border-b border-slate-200/60 dark:border-darkmode-400 mt-6 mb-5 py-3">
          <div class="relative">
            <div class="event p-3 -mx-3 cursor-pointer transition duration-300 ease-in-out hover:bg-slate-100 dark:hover:bg-darkmode-400 rounded-md flex items-center">
              <div class="w-2 h-2 bg-pending rounded-full mr-3"></div>
              <div class="pr-10">
                <div class="event__title truncate">VueJS Amsterdam</div>
                <div class="text-slate-500 text-xs mt-0.5">
                  <span class="event__days">2</span> Days
                  <span class="mx-1">•</span> 10:00 AM
                </div>
              </div>
            </div>
            <a class="flex items-center absolute top-0 bottom-0 my-auto right-0" href="">
              <EditIcon class="w-4 h-4 text-slate-500" />
            </a>
          </div>
          <div class="relative">
            <div class="event p-3 -mx-3 cursor-pointer transition duration-300 ease-in-out hover:bg-slate-100 dark:hover:bg-darkmode-400 rounded-md flex items-center">
              <div class="w-2 h-2 bg-warning rounded-full mr-3"></div>
              <div class="pr-10">
                <div class="event__title truncate">Vue Fes Japan 2019</div>
                <div class="text-slate-500 text-xs mt-0.5">
                  <span class="event__days">3</span> Days
                  <span class="mx-1">•</span> 07:00 AM
                </div>
              </div>
            </div>
            <a class="flex items-center absolute top-0 bottom-0 my-auto right-0" href="">
              <EditIcon class="w-4 h-4 text-slate-500" />
            </a>
          </div>
          <div class="relative">
            <div class="event p-3 -mx-3 cursor-pointer transition duration-300 ease-in-out hover:bg-slate-100 dark:hover:bg-darkmode-400 rounded-md flex items-center">
              <div class="w-2 h-2 bg-pending rounded-full mr-3"></div>
              <div class="pr-10">
                <div class="event__title truncate">Laracon 2021</div>
                <div class="text-slate-500 text-xs mt-0.5">
                  <span class="event__days">4</span> Days
                  <span class="mx-1">•</span> 11:00 AM
                </div>
              </div>
            </div>
            <a class="flex items-center absolute top-0 bottom-0 my-auto right-0" href="">
              <EditIcon class="w-4 h-4 text-slate-500" />
            </a>
          </div>
          <div class="text-slate-500 p-3 text-center hidden" id="calendar-no-events">
            No events yet
          </div>
        </FullCalendarDraggable>
        <div class="form-check form-switch flex">
          <label class="form-check-label" for="checkbox-events">Remove after drop</label>
          <input class="show-code form-check-input ml-auto" type="checkbox" id="checkbox-events" />
        </div>
      </div>
      <div class="box p-5 intro-y mt-5">
        <!-- <div class="flex">
          <ChevronLeftIcon class="w-5 h-5 text-slate-500" />
          <div class="font-medium text-base mx-auto">April</div>
          <ChevronRightIcon class="w-5 h-5 text-slate-500" />
        </div>
        <div class="grid grid-cols-7 gap-4 mt-5 text-center">
          <div class="font-medium">Su</div>
          <div class="font-medium">Mo</div>
          <div class="font-medium">Tu</div>
          <div class="font-medium">We</div>
          <div class="font-medium">Th</div>
          <div class="font-medium">Fr</div>
          <div class="font-medium">Sa</div>
          <div class="py-0.5 rounded relative text-slate-500">29</div>
          <div class="py-0.5 rounded relative text-slate-500">30</div>
          <div class="py-0.5 rounded relative text-slate-500">31</div>
          <div class="py-0.5 rounded relative">1</div>
          <div class="py-0.5 rounded relative">2</div>
          <div class="py-0.5 rounded relative">3</div>
          <div class="py-0.5 rounded relative">4</div>
          <div class="py-0.5 rounded relative">5</div>
          <div class="py-0.5 bg-success/20 dark:bg-success/30 rounded relative">
            6
          </div>
          <div class="py-0.5 rounded relative">7</div>
          <div class="py-0.5 bg-primary text-white rounded relative">8</div>
          <div class="py-0.5 rounded relative">9</div>
          <div class="py-0.5 rounded relative">10</div>
          <div class="py-0.5 rounded relative">11</div>
          <div class="py-0.5 rounded relative">12</div>
          <div class="py-0.5 rounded relative">13</div>
          <div class="py-0.5 rounded relative">14</div>
          <div class="py-0.5 rounded relative">15</div>
          <div class="py-0.5 rounded relative">16</div>
          <div class="py-0.5 rounded relative">17</div>
          <div class="py-0.5 rounded relative">18</div>
          <div class="py-0.5 rounded relative">19</div>
          <div class="py-0.5 rounded relative">20</div>
          <div class="py-0.5 rounded relative">21</div>
          <div class="py-0.5 rounded relative">22</div>
          <div class="py-0.5 bg-pending/20 dark:bg-pending/30 rounded relative">
            23
          </div>
          <div class="py-0.5 rounded relative">24</div>
          <div class="py-0.5 rounded relative">25</div>
          <div class="py-0.5 rounded relative">26</div>
          <div class="py-0.5 bg-primary/10 dark:bg-primary/50 rounded relative">
            27
          </div>
          <div class="py-0.5 rounded relative">28</div>
          <div class="py-0.5 rounded relative">29</div>
          <div class="py-0.5 rounded relative">30</div>
          <div class="py-0.5 rounded relative text-slate-500">1</div>
          <div class="py-0.5 rounded relative text-slate-500">2</div>
          <div class="py-0.5 rounded relative text-slate-500">3</div>
          <div class="py-0.5 rounded relative text-slate-500">4</div>
          <div class="py-0.5 rounded relative text-slate-500">5</div>
          <div class="py-0.5 rounded relative text-slate-500">6</div>
          <div class="py-0.5 rounded relative text-slate-500">7</div>
          <div class="py-0.5 rounded relative text-slate-500">8</div>
          <div class="py-0.5 rounded relative text-slate-500">9</div>
        </div>
        <div
          class="border-t border-slate-200/60 dark:border-darkmode-400 pt-5 mt-5"
        >
          <div class="flex items-center">
            <div class="w-2 h-2 bg-pending rounded-full mr-3"></div>
            <span class="truncate">Independence Day</span>
            <div
              class="h-px flex-1 border border-r border-dashed border-slate-200 mx-3 xl:hidden"
            ></div>
            <span class="font-medium xl:ml-auto">23th</span>
          </div>
          <div class="flex items-center mt-4">
            <div class="w-2 h-2 bg-primary rounded-full mr-3"></div>
            <span class="truncate">Memorial Day</span>
            <div
              class="h-px flex-1 border border-r border-dashed border-slate-200 mx-3 xl:hidden"
            ></div>
            <span class="font-medium xl:ml-auto">10th</span>
          </div>
        </div> -->
      </div>
    </div>
    <!-- END: Calendar Side Menu -->
    <!-- BEGIN: Calendar Content -->
    <div class="col-span-12 xl:col-span-8 2xl:col-span-9">
      <div class="box p-5">
        <Calendar />
      </div>
    </div>
    <!-- END: Calendar Content -->
  </div>

  <Modal :show="isCreateModalVisible" @hide="hideCreateModal">
    <ModalBody>
      <div class="p-5">
        <h3 class="text-lg font-medium">Lọc lịch tập hội viên</h3>
        <div class="mt-3">
          <label class="form-label font-medium">Tên</label>
          <input type="number" class="form-control" />
        </div>
        <div class="mt-3">
          <label class="form-label font-medium">Số điện thoại</label>
          <input type="number" class="form-control" />
        </div>
        <div class="mt-3">
          <label class="form-label font-medium">Email</label>
          <input type="number" class="form-control" />
        </div>
      </div>
    </ModalBody>
    <ModalFooter>
      <div class="px-5 pb-8 flex justify-end"> <button type="button" class="btn btn-outline-secondary w-24 mr-1" @click="hideCreateModal">
          Hủy
        </button>
        <button type="button" class="btn btn-primary w-24" @click="createMemberMembershipFunc">
          Lọc
        </button>
      </div>
    </ModalFooter>
  </Modal>
</template>

<script setup>
  import Calendar from '@/components/calendar/Main.vue';
  import dom from '@left4code/tw-starter/dist/js/dom';
  import { FilterIcon } from 'lucide-vue-next';
  import { ref } from 'vue';

  const dragableOptions = {
    itemSelector: '.event',
    eventData(eventEl) {
      return {
        title: dom(eventEl).find('.event__title').html(),
        duration: {
          days: parseInt(dom(eventEl).find('.event__days').text()),
        },
      };
    },
  };

  const isCreateModalVisible = ref(false);

  const showCreateModal = () => {
  isCreateModalVisible.value = true;
  };

  const hideCreateModal = () => {
    isCreateModalVisible.value = false;
  };


</script>
