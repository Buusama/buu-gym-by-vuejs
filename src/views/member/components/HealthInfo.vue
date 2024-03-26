<!-- MemberInfoTab.vue -->
<template>
  <div class="grid">
    <div class="col-span-12 lg:col-span-8 2xl:col-span-9">
      <!-- BEGIN: Thông tin hội viên -->
      <div class="intro-y box lg:mt-5">
        <div class="p-5 font-medium text-base flex items-center border-b border-slate-200/60 dark:border-darkmode-400">
          Thông tin sức khỏe
        </div>
        <div class="p-5">
          <div class="form-inline items-start flex-col xl:flex-row mt-2 pt-2 first:mt-0 first:pt-0">
            <div class="form-label xl:w-64 xl:!mr-10">
              <div class="text-left">
                <div class="flex items-center">
                  <div class="font-medium form-label">Lịch sử bệnh tật</div>
                </div>
                <div class="leading-relaxed text-slate-500 text-xs mt-3">
                  Các bệnh tật trước đây hoặc hiện tại, bao gồm các bệnh mãn tính.
                </div>
              </div>
            </div>
            <div class="w-full mt-3 xl:mt-0 flex-1">
              <div class="relative pl-5 pr-5 xl:pr-10 py-10 bg-slate-50 dark:bg-transparent dark:border rounded-md">
                <div>
                  <div class="form-inline mt-5 items-start first:mt-0">
                    <label class="form-label mt-2 sm:w-20">Loại bệnh</label>
                    <div class="flex-1">
                      <div class="xl:flex items-center mt-5 first:mt-0">
                        <div class="input-group flex-1">
                          <TomSelect v-model="selectMultiple" :options="{
                            placeholder: 'Chọn tiền sử bệnh tật',
                          }" class="w-full mr-3">
                            <option value="1">Bệnh tim mạch</option>
                            <option value="2">Huyết áp cao</option>
                            <option value="3">Tiểu đường</option>
                            <option value="4">Ung thư</option>
                            <option value="5">Viêm gan</option>
                            <option value="6">Viêm thận</option>
                            <option value="7">Viêm khớp</option>
                            <option value="8">Viêm dạ dày</option>
                            <option value="9">Viêm phổi</option>
                            <option value="10">Viêm mũi họng</option>
                            <option value="11">Viêm ruột</option>
                            <option value="12">Viêm gan B</option>
                            <option value="13">Viêm gan C</option>
                            <option value="14">Viêm gan E</option>
                            <option value="15">Viêm gan F</option>
                          </TomSelect>

                          <TomSelect v-model="selectMultiple" :options="{
                            placeholder: 'Chọn tình trạng bệnh',
                          }" class="w-full">
                            <option value="1">Bệnh tim mạch</option>
                            <option value="2">Huyết áp cao</option>
                            <option value="3">Tiểu đường</option>
                            <option value="4">Ung thư</option>
                            <option value="5">Viêm gan</option>
                            <option value="6">Viêm thận</option>
                            <option value="7">Viêm khớp</option>
                            <option value="8">Viêm dạ dày</option>
                            <option value="9">Viêm phổi</option>
                            <option value="10">Viêm mũi họng</option>
                            <option value="11">Viêm ruột</option>
                            <option value="12">Viêm gan B</option>
                            <option value="13">Viêm gan C</option>
                            <option value="14">Viêm gan E</option>
                            <option value="15">Viêm gan F</option>
                          </TomSelect>
                        </div>
                        <div class="w-20 flex text-slate-500 mt-3 xl:mt-0">
                          <a href="" class="ml-3 xl:ml-5">
                            <Trash2Icon class="w-4 h-4" />
                          </a>
                        </div>
                      </div>
                      <div class="xl:flex items-center mt-5 first:mt-0">
                        <div class="input-group flex-1">
                          <TomSelect v-model="selectMultiple" :options="{
                            placeholder: 'Chọn tiền sử bệnh tật',
                          }" class="w-full mr-3">
                            <option value="1">Bệnh tim mạch</option>
                            <option value="2">Huyết áp cao</option>
                            <option value="3">Tiểu đường</option>
                            <option value="4">Ung thư</option>
                            <option value="5">Viêm gan</option>
                            <option value="6">Viêm thận</option>
                            <option value="7">Viêm khớp</option>
                            <option value="8">Viêm dạ dày</option>
                            <option value="9">Viêm phổi</option>
                            <option value="10">Viêm mũi họng</option>
                            <option value="11">Viêm ruột</option>
                            <option value="12">Viêm gan B</option>
                            <option value="13">Viêm gan C</option>
                            <option value="14">Viêm gan E</option>
                            <option value="15">Viêm gan F</option>
                          </TomSelect>

                          <TomSelect v-model="selectMultiple" :options="{
                            placeholder: 'Chọn tình trạng bệnh',
                          }" class="w-full">
                            <option value="1">Bệnh tim mạch</option>
                            <option value="2">Huyết áp cao</option>
                            <option value="3">Tiểu đường</option>
                            <option value="4">Ung thư</option>
                            <option value="5">Viêm gan</option>
                            <option value="6">Viêm thận</option>
                            <option value="7">Viêm khớp</option>
                            <option value="8">Viêm dạ dày</option>
                            <option value="9">Viêm phổi</option>
                            <option value="10">Viêm mũi họng</option>
                            <option value="11">Viêm ruột</option>
                            <option value="12">Viêm gan B</option>
                            <option value="13">Viêm gan C</option>
                            <option value="14">Viêm gan E</option>
                            <option value="15">Viêm gan F</option>
                          </TomSelect>
                        </div>
                        <div class="w-20 flex text-slate-500 mt-3 xl:mt-0">
                          <a href="" class="ml-3 xl:ml-5">
                            <Trash2Icon class="w-4 h-4" />
                          </a>
                        </div>
                      </div>

                      <div class="xl:flex items-center mt-5 first:mt-0">
                        <div class="input-group flex-1">
                          <TomSelect v-model="selectMultiple" :options="{
                            placeholder: 'Chọn tiền sử bệnh tật',
                          }" class="w-full mr-3">
                            <option value="1">Bệnh tim mạch</option>
                            <option value="2">Huyết áp cao</option>
                            <option value="3">Tiểu đường</option>
                            <option value="4">Ung thư</option>
                            <option value="5">Viêm gan</option>
                            <option value="6">Viêm thận</option>
                            <option value="7">Viêm khớp</option>
                            <option value="8">Viêm dạ dày</option>
                            <option value="9">Viêm phổi</option>
                            <option value="10">Viêm mũi họng</option>
                            <option value="11">Viêm ruột</option>
                            <option value="12">Viêm gan B</option>
                            <option value="13">Viêm gan C</option>
                            <option value="14">Viêm gan E</option>
                            <option value="15">Viêm gan F</option>
                          </TomSelect>

                          <TomSelect v-model="selectMultiple" :options="{
                            placeholder: 'Chọn tình trạng bệnh',
                          }" class="w-full">
                            <option value="1">Bệnh tim mạch</option>
                            <option value="2">Huyết áp cao</option>
                            <option value="3">Tiểu đường</option>
                            <option value="4">Ung thư</option>
                            <option value="5">Viêm gan</option>
                            <option value="6">Viêm thận</option>
                            <option value="7">Viêm khớp</option>
                            <option value="8">Viêm dạ dày</option>
                            <option value="9">Viêm phổi</option>
                            <option value="10">Viêm mũi họng</option>
                            <option value="11">Viêm ruột</option>
                            <option value="12">Viêm gan B</option>
                            <option value="13">Viêm gan C</option>
                            <option value="14">Viêm gan E</option>
                            <option value="15">Viêm gan F</option>
                          </TomSelect>
                        </div>
                        <div class="w-20 flex text-slate-500 mt-3 xl:mt-0">
                          <a href="" class="ml-3 xl:ml-5">
                            <Trash2Icon class="w-4 h-4" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="xl:ml-20 xl:pl-5 xl:pr-20 mt-5 first:mt-0">
                    <button class="btn btn-outline-primary border-dashed w-full">
                      <PlusIcon class="w-4 h-4 mr-2" />Thêm
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="form-inline items-start flex-col xl:flex-row mt-2 pt-2 first:mt-0 first:pt-0">
            <div class="form-label xl:w-64 xl:!mr-10">
              <div class="text-left">
                <div class="flex items-center">
                  <div class="font-medium form-label">Dấu hiệu và triệu chứng</div>
                </div>
                <div class="leading-relaxed text-slate-500 text-xs mt-3">
                  Các triệu chứng hiện tại hoặc gần đây của hội viên.
                </div>
              </div>
            </div>
            <div class="w-full mt-3 xl:mt-0 flex-1">
              <div class="relative pl-5 pr-5 xl:pr-10 py-10 bg-slate-50 dark:bg-transparent dark:border rounded-md">
                <div>
                  <div class="form-inline mt-5 items-start first:mt-0">
                    <label class="form-label mt-2 sm:w-20">Triệu chứng</label>
                    <div class="flex-1">
                      <div class="xl:flex items-center mt-5 first:mt-0">
                        <div class="input-group flex-1">
                          <TomSelect v-model="selectMultiple" :options="{
                            placeholder: 'Chọn tiền sử bệnh tật',
                          }" class="w-full mr-3">
                            <option value="1">Bệnh tim mạch</option>
                            <option value="2">Huyết áp cao</option>
                            <option value="3">Tiểu đường</option>
                            <option value="4">Ung thư</option>
                            <option value="5">Viêm gan</option>
                            <option value="6">Viêm thận</option>
                            <option value="7">Viêm khớp</option>
                            <option value="8">Viêm dạ dày</option>
                            <option value="9">Viêm phổi</option>
                            <option value="10">Viêm mũi họng</option>
                            <option value="11">Viêm ruột</option>
                            <option value="12">Viêm gan B</option>
                            <option value="13">Viêm gan C</option>
                            <option value="14">Viêm gan E</option>
                            <option value="15">Viêm gan F</option>
                          </TomSelect>

                          <TomSelect v-model="selectMultiple" :options="{
                            placeholder: 'Chọn tình trạng bệnh',
                          }" class="w-full">
                            <option value="1">Bệnh tim mạch</option>
                            <option value="2">Huyết áp cao</option>
                            <option value="3">Tiểu đường</option>
                            <option value="4">Ung thư</option>
                            <option value="5">Viêm gan</option>
                            <option value="6">Viêm thận</option>
                            <option value="7">Viêm khớp</option>
                            <option value="8">Viêm dạ dày</option>
                            <option value="9">Viêm phổi</option>
                            <option value="10">Viêm mũi họng</option>
                            <option value="11">Viêm ruột</option>
                            <option value="12">Viêm gan B</option>
                            <option value="13">Viêm gan C</option>
                            <option value="14">Viêm gan E</option>
                            <option value="15">Viêm gan F</option>
                          </TomSelect>
                        </div>
                        <div class="w-20 flex text-slate-500 mt-3 xl:mt-0">
                          <a href="" class="ml-3 xl:ml-5">
                            <Trash2Icon class="w-4 h-4" />
                          </a>
                        </div>
                      </div>
                      <div class="xl:flex items-center mt-5 first:mt-0">
                        <div class="input-group flex-1">
                          <TomSelect v-model="selectMultiple" :options="{
                            placeholder: 'Chọn tiền sử bệnh tật',
                          }" class="w-full mr-3">
                            <option value="1">Bệnh tim mạch</option>
                            <option value="2">Huyết áp cao</option>
                            <option value="3">Tiểu đường</option>
                            <option value="4">Ung thư</option>
                            <option value="5">Viêm gan</option>
                            <option value="6">Viêm thận</option>
                            <option value="7">Viêm khớp</option>
                            <option value="8">Viêm dạ dày</option>
                            <option value="9">Viêm phổi</option>
                            <option value="10">Viêm mũi họng</option>
                            <option value="11">Viêm ruột</option>
                            <option value="12">Viêm gan B</option>
                            <option value="13">Viêm gan C</option>
                            <option value="14">Viêm gan E</option>
                            <option value="15">Viêm gan F</option>
                          </TomSelect>

                          <TomSelect v-model="selectMultiple" :options="{
                            placeholder: 'Chọn tình trạng bệnh',
                          }" class="w-full">
                            <option value="1">Bệnh tim mạch</option>
                            <option value="2">Huyết áp cao</option>
                            <option value="3">Tiểu đường</option>
                            <option value="4">Ung thư</option>
                            <option value="5">Viêm gan</option>
                            <option value="6">Viêm thận</option>
                            <option value="7">Viêm khớp</option>
                            <option value="8">Viêm dạ dày</option>
                            <option value="9">Viêm phổi</option>
                            <option value="10">Viêm mũi họng</option>
                            <option value="11">Viêm ruột</option>
                            <option value="12">Viêm gan B</option>
                            <option value="13">Viêm gan C</option>
                            <option value="14">Viêm gan E</option>
                            <option value="15">Viêm gan F</option>
                          </TomSelect>
                        </div>
                        <div class="w-20 flex text-slate-500 mt-3 xl:mt-0">
                          <a href="" class="ml-3 xl:ml-5">
                            <Trash2Icon class="w-4 h-4" />
                          </a>
                        </div>
                      </div>

                      <div class="xl:flex items-center mt-5 first:mt-0">
                        <div class="input-group flex-1">
                          <TomSelect v-model="selectMultiple" :options="{
                            placeholder: 'Chọn tiền sử bệnh tật',
                          }" class="w-full mr-3">
                            <option value="1">Bệnh tim mạch</option>
                            <option value="2">Huyết áp cao</option>
                            <option value="3">Tiểu đường</option>
                            <option value="4">Ung thư</option>
                            <option value="5">Viêm gan</option>
                            <option value="6">Viêm thận</option>
                            <option value="7">Viêm khớp</option>
                            <option value="8">Viêm dạ dày</option>
                            <option value="9">Viêm phổi</option>
                            <option value="10">Viêm mũi họng</option>
                            <option value="11">Viêm ruột</option>
                            <option value="12">Viêm gan B</option>
                            <option value="13">Viêm gan C</option>
                            <option value="14">Viêm gan E</option>
                            <option value="15">Viêm gan F</option>
                          </TomSelect>

                          <TomSelect v-model="selectMultiple" :options="{
                            placeholder: 'Chọn tình trạng bệnh',
                          }" class="w-full">
                            <option value="1">Bệnh tim mạch</option>
                            <option value="2">Huyết áp cao</option>
                            <option value="3">Tiểu đường</option>
                            <option value="4">Ung thư</option>
                            <option value="5">Viêm gan</option>
                            <option value="6">Viêm thận</option>
                            <option value="7">Viêm khớp</option>
                            <option value="8">Viêm dạ dày</option>
                            <option value="9">Viêm phổi</option>
                            <option value="10">Viêm mũi họng</option>
                            <option value="11">Viêm ruột</option>
                            <option value="12">Viêm gan B</option>
                            <option value="13">Viêm gan C</option>
                            <option value="14">Viêm gan E</option>
                            <option value="15">Viêm gan F</option>
                          </TomSelect>
                        </div>
                        <div class="w-20 flex text-slate-500 mt-3 xl:mt-0">
                          <a href="" class="ml-3 xl:ml-5">
                            <Trash2Icon class="w-4 h-4" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="xl:ml-20 xl:pl-5 xl:pr-20 mt-5 first:mt-0">
                    <button class="btn btn-outline-primary border-dashed w-full">
                      <PlusIcon class="w-4 h-4 mr-2" />Thêm
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="form-inline items-start flex-col xl:flex-row mt-2 pt-2 first:mt-0 first:pt-0">
            <div class="form-label xl:w-64 xl:!mr-10">
              <div class="text-left">
                <div class="flex items-center">
                  <div class="font-medium">Mục tiêu huấn luyện</div>
                </div>
                <div class="leading-relaxed text-slate-500 text-xs mt-3">
                  Mục tiêu huấn luyện của hội viên.
                </div>
              </div>
            </div>
            <div class="w-full mt-3 xl:mt-0 flex-1">
              <div class="relative pl-5 pr-5 xl:pr-10 py-10 bg-slate-50 dark:bg-transparent dark:border rounded-md">
                <div>
                  <div class="form-inline mt-5 first:mt-0">
                    <label class="form-label sm:w-20">Số ngày tập trong tuần</label>
                    <div class="flex items-center flex-1 xl:pr-20">
                      <div class="input-group flex-1">
                        <input type="text" class="form-control" placeholder="Số ngày có thể tham gia trong tuần" />
                      </div>
                    </div>
                  </div>

                  <div class="form-inline mt-5 first:mt-0">
                    <label class="form-label sm:w-20">Cường độ luyện tập</label>
                    <div class="flex items-center flex-1 xl:pr-20">
                      <div class="flex flex-col sm:flex-row">
                        <div class="form-check mr-4">
                          <input class="form-check-input" type="radio" name="horizontal_radio_button"
                            value="horizontal-radio-chris-evans" />
                          <label class="form-check-label" for="shipping-service-standard">Nhẹ nhàng</label>
                        </div>
                        <div class="form-check mr-4 mt-2 sm:mt-0">
                          <input class="form-check-input" type="radio" name="horizontal_radio_button"
                            value="horizontal-radio-liam-neeson" />
                          <label class="form-check-label" for="shipping-service-custom">Bình thường</label>
                        </div>
                        <div class="form-check mr-4 mt-2 sm:mt-0">
                          <input class="form-check-input" type="radio" name="horizontal_radio_button"
                            value="horizontal-radio-liam-neeson" />
                          <label class="form-check-label" for="shipping-service-custom">Mạnh</label>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="form-inline mt-5 first:mt-0">
                    <label class="form-label sm:w-20">Kinh nghiệm luyện tập</label>
                    <div class="flex items-center flex-1 xl:pr-20">
                      <div class="input-group flex-1">
                        <input type="text" class="form-control" placeholder="Số ngày có thể tham gia trong tuần" />
                      </div>
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
</template>

<script setup lang="ts">
import { ref } from 'vue';
const selectMultiple = ref('');
</script>
