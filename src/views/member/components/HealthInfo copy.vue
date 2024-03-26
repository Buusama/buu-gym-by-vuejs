<!-- MemberInfoTab.vue -->
<template>
  <div class="grid">
    <div class="col-span-12 lg:col-span-8 2xl:col-span-9">
      <!-- BEGIN: Thông tin hội viên -->
      <div class="intro-y box lg:mt-5">
        <div
          class="flex items-center p-5 border-b border-slate-200/60 dark:border-darkmode-400"
        >
          <h2 class="font-medium text-base mr-auto">Thông tin sức khỏe</h2>
        </div>
        <div class="p-5 border-b border-slate-200/60 dark:border-darkmode-400">
          <div class="flex flex-col-reverse xl:flex-row flex-col">
            <div class="flex-1 mt-6 xl:mt-0">
              <div class="grid grid-cols-12 gap-x-5">
                <div class="col-span-12 2xl:col-span-6">
                  <div>
                    <label for="create-member-form-1" class="form-label"
                      >Cân nặng</label
                    >
                    <div class="input-group">
                      <div class="input-group-text">Kg</div>
                      <input type="text" class="form-control" />
                      <div class="input-group-text">.00</div>
                    </div>
                  </div>
                  <div class="mt-3">
                    <label for="create-member-form-2" class="form-label"
                      >Chiều cao</label
                    >
                    <div class="input-group">
                      <div class="input-group-text">Cm</div>
                      <input type="text" class="form-control" />
                      <div class="input-group-text">.00</div>
                    </div>
                  </div>
                  <div class="mt-3">
                    <label for="create-member-form-2" class="form-label"
                      >Tỷ lệ mỡ</label
                    >
                    <div class="input-group">
                      <div class="input-group-text">%</div>
                      <input type="text" class="form-control" />
                      <div class="input-group-text">.00</div>
                    </div>
                  </div>
                  <div class="mt-3">
                    <label for="create-member-form-2" class="form-label"
                      >Vòng bắp tay</label
                    >
                    <div class="input-group">
                      <div class="input-group-text">Cm</div>
                      <input type="text" class="form-control" />
                      <div class="input-group-text">.00</div>
                    </div>
                  </div>
                </div>
                <div class="col-span-12 2xl:col-span-6">
                  <div class="mt-3 2xl:mt-0">
                    <label for="create-member-form-4" class="form-label"
                      >Vòng ngực</label
                    >
                    <div class="input-group">
                      <div class="input-group-text">Cm</div>
                      <input type="text" class="form-control" />
                      <div class="input-group-text">.00</div>
                    </div>
                  </div>
                  <div class="mt-3">
                    <label for="create-member-form-4" class="form-label"
                      >Vòng eo</label
                    >
                    <div class="input-group">
                      <div class="input-group-text">Cm</div>
                      <input type="text" class="form-control" />
                      <div class="input-group-text">.00</div>
                    </div>
                  </div>
                  <div class="mt-3">
                    <label for="create-member-form-4" class="form-label"
                      >Vòng hông</label
                    >
                    <div class="input-group">
                      <div class="input-group-text">Cm</div>
                      <input type="text" class="form-control" />
                      <div class="input-group-text">.00</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
</script>
