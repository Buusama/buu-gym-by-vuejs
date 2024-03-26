<!-- MemberInfoTab.vue -->
<template>
  <div class="grid">
    <div class="col-span-12 lg:col-span-8 2xl:col-span-9">
      <!-- BEGIN: Thông tin hội viên -->
      <div class="intro-y box lg:mt-5">
        <div
            class="p-5 font-medium text-base flex items-center border-b border-slate-200/60 dark:border-darkmode-400"
          >
            Thông tin sức khỏe
          </div>
          <div class="p-5">
            <div
              class="form-inline items-start flex-col xl:flex-row mt-2 pt-2 first:mt-0 first:pt-0"
            >
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
                <div
                  class="relative pl-5 pr-5 xl:pr-10 py-10 bg-slate-50 dark:bg-transparent dark:border rounded-md"
                >
                  <a
                    href=""
                    class="text-slate-500 absolute top-0 right-0 mr-4 mt-4"
                  >
                    <XIcon class="w-5 h-5" />
                  </a>
                  <div>
                    <div class="form-inline mt-5 first:mt-0">
                      <label class="form-label sm:w-20">Name</label>
                      <div class="flex items-center flex-1 xl:pr-20">
                        <div class="input-group flex-1">
                          <input
                            type="text"
                            class="form-control"
                            placeholder="Size"
                          />
                          <div class="input-group-text">6/14</div>
                        </div>
                      </div>
                    </div>
                    <div class="form-inline mt-5 items-start first:mt-0">
                      <label class="form-label mt-2 sm:w-20">Options</label>
                      <div class="flex-1">
                        <div class="xl:flex items-center mt-5 first:mt-0">
                          <div class="input-group flex-1">
                            <input
                              type="text"
                              class="form-control"
                              placeholder="Small"
                            />
                            <div class="input-group-text">6/14</div>
                          </div>
                          <div class="w-20 flex text-slate-500 mt-3 xl:mt-0">
                            <a href="" class="xl:ml-5">
                              <MoveIcon class="w-4 h-4" />
                            </a>
                            <a href="" class="ml-3 xl:ml-5">
                              <Trash2Icon class="w-4 h-4" />
                            </a>
                          </div>
                        </div>
                        <div class="xl:flex items-center mt-5 first:mt-0">
                          <div class="input-group flex-1">
                            <input
                              type="text"
                              class="form-control"
                              placeholder="Medium"
                            />
                            <div class="input-group-text">6/14</div>
                          </div>
                          <div class="w-20 flex text-slate-500 mt-3 xl:mt-0">
                            <a href="" class="xl:ml-5">
                              <MoveIcon class="w-4 h-4" />
                            </a>
                            <a href="" class="ml-3 xl:ml-5">
                              <Trash2Icon class="w-4 h-4" />
                            </a>
                          </div>
                        </div>
                        <div class="xl:flex items-center mt-5 first:mt-0">
                          <div class="input-group flex-1">
                            <input
                              type="text"
                              class="form-control"
                              placeholder="Large"
                            />
                            <div class="input-group-text">6/14</div>
                          </div>
                          <div class="w-20 flex text-slate-500 mt-3 xl:mt-0">
                            <a href="" class="xl:ml-5">
                              <MoveIcon class="w-4 h-4" />
                            </a>
                            <a href="" class="ml-3 xl:ml-5">
                              <Trash2Icon class="w-4 h-4" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="xl:ml-20 xl:pl-5 xl:pr-20 mt-5 first:mt-0">
                      <button
                        class="btn btn-outline-primary border-dashed w-full"
                      >
                        <PlusIcon class="w-4 h-4 mr-2" /> Add New Option
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="form-inline items-start flex-col xl:flex-row mt-2 pt-2 first:mt-0 first:pt-0"
            >
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
                <div
                  class="relative pl-5 pr-5 xl:pr-10 py-10 bg-slate-50 dark:bg-transparent dark:border rounded-md"
                >
                  <a
                    href=""
                    class="text-slate-500 absolute top-0 right-0 mr-4 mt-4"
                  >
                    <XIcon class="w-5 h-5" />
                  </a>
                  <div>
                    <div class="form-inline mt-5 first:mt-0">
                      <label class="form-label sm:w-20">Name</label>
                      <div class="flex items-center flex-1 xl:pr-20">
                        <div class="input-group flex-1">
                          <input
                            type="text"
                            class="form-control"
                            placeholder="Color"
                          />
                          <div class="input-group-text">6/14</div>
                        </div>
                      </div>
                    </div>
                    <div class="form-inline mt-5 items-start first:mt-0">
                      <label class="form-label mt-2 sm:w-20">Options</label>
                      <div class="flex-1">
                        <div class="xl:flex items-center mt-5 first:mt-0">
                          <div class="input-group flex-1">
                            <input
                              type="text"
                              class="form-control"
                              placeholder="Black"
                            />
                            <div class="input-group-text">6/14</div>
                          </div>
                          <div class="w-20 flex text-slate-500 mt-3 xl:mt-0">
                            <a href="" class="xl:ml-5">
                              <MoveIcon class="w-4 h-4" />
                            </a>
                            <a href="" class="ml-3 xl:ml-5">
                              <Trash2Icon class="w-4 h-4" />
                            </a>
                          </div>
                        </div>
                        <div class="xl:flex items-center mt-5 first:mt-0">
                          <div class="input-group flex-1">
                            <input
                              type="text"
                              class="form-control"
                              placeholder="White"
                            />
                            <div class="input-group-text">6/14</div>
                          </div>
                          <div class="w-20 flex text-slate-500 mt-3 xl:mt-0">
                            <a href="" class="xl:ml-5">
                              <MoveIcon class="w-4 h-4" />
                            </a>
                            <a href="" class="ml-3 xl:ml-5">
                              <Trash2Icon class="w-4 h-4" />
                            </a>
                          </div>
                        </div>
                        <div class="xl:flex items-center mt-5 first:mt-0">
                          <div class="input-group flex-1">
                            <input
                              type="text"
                              class="form-control"
                              placeholder="Gray"
                            />
                            <div class="input-group-text">6/14</div>
                          </div>
                          <div class="w-20 flex text-slate-500 mt-3 xl:mt-0">
                            <a href="" class="xl:ml-5">
                              <MoveIcon class="w-4 h-4" />
                            </a>
                            <a href="" class="ml-3 xl:ml-5">
                              <Trash2Icon class="w-4 h-4" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="xl:ml-20 xl:pl-5 xl:pr-20 mt-5 first:mt-0">
                      <button
                        class="btn btn-outline-primary border-dashed w-full"
                      >
                        <PlusIcon class="w-4 h-4 mr-2" /> Add New Option
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="xl:ml-64 xl:pl-10 mt-2 pt-2 first:mt-0 first:pt-0">
              <button
                class="btn py-3 btn-outline-secondary border-dashed w-full"
              >
                <PlusIcon class="w-4 h-4 mr-2" /> Add New Variant
              </button>
            </div>
            <div
              class="form-inline items-start flex-col xl:flex-row mt-5 pt-5 first:mt-0 first:pt-0"
            >
              <div class="form-label xl:w-64 xl:!mr-10">
                <div class="text-left">
                  <div class="flex items-center">
                    <div class="font-medium">Variant Information</div>
                  </div>
                  <div class="leading-relaxed text-slate-500 text-xs mt-3">
                    Apply price and stock on all variants or based on certain
                    variant codes.
                  </div>
                </div>
              </div>
              <div class="w-full mt-3 xl:mt-0 flex-1">
                <div class="sm:grid grid-cols-4 gap-2">
                  <div class="input-group">
                    <div class="input-group-text">$</div>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Price"
                    />
                  </div>
                  <input
                    type="text"
                    class="form-control mt-2 sm:mt-0"
                    placeholder="Stock"
                  />
                  <input
                    type="text"
                    class="form-control mt-2 sm:mt-0"
                    placeholder="Variant Code"
                  />
                  <button class="btn btn-primary mt-2 sm:mt-0">
                    Apply To All
                  </button>
                </div>
              </div>
            </div>
            <div
              class="form-inline items-start flex-col xl:flex-row mt-5 pt-5 first:mt-0 first:pt-0"
            >
              <div class="form-label xl:w-64 xl:!mr-10">
                <div class="text-left">
                  <div class="flex items-center">
                    <div class="font-medium">Variant List</div>
                  </div>
                  <div class="leading-relaxed text-slate-500 text-xs mt-3">
                    Set the price and stock for each variant.
                  </div>
                </div>
              </div>
              <div class="w-full mt-3 xl:mt-0 flex-1">
                <div class="overflow-x-auto">
                  <table class="table border">
                    <thead>
                      <tr>
                        <th
                          class="bg-slate-50 dark:bg-darkmode-800 text-slate-500 whitespace-nowrap"
                        >
                          Size
                        </th>
                        <th
                          class="bg-slate-50 dark:bg-darkmode-800 text-slate-500 whitespace-nowrap"
                        >
                          <div class="flex items-center">
                            Color <HelpCircleIcon class="w-4 h-4 ml-2" />
                          </div>
                        </th>
                        <th
                          class="bg-slate-50 dark:bg-darkmode-800 text-slate-500 whitespace-nowrap !px-2"
                        >
                          Price
                        </th>
                        <th
                          class="bg-slate-50 dark:bg-darkmode-800 text-slate-500 whitespace-nowrap !px-2"
                        >
                          <div class="flex items-center">
                            <div
                              class="relative w-4 h-4 mr-2 -mt-0.5 before:content-[''] before:absolute before:w-4 before:h-4 before:bg-primary/20 before:rounded-full lg:before:animate-ping after:content-[''] after:absolute after:w-4 after:h-4 after:bg-primary after:rounded-full after:border-4 after:border-white/60 after:dark:border-darkmode-300"
                            ></div>
                            Stock <HelpCircleIcon class="w-4 h-4 ml-2" />
                          </div>
                        </th>
                        <th
                          class="bg-slate-50 dark:bg-darkmode-800 text-slate-500 whitespace-nowrap !pl-2"
                        >
                          Variant Code
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td rowspan="3" class="border-r">Small</td>
                        <td>Black</td>
                        <td class="!px-2">
                          <div class="input-group">
                            <div class="input-group-text">$</div>
                            <input
                              type="text"
                              class="form-control min-w-[6rem]"
                              placeholder="Price"
                            />
                          </div>
                        </td>
                        <td class="!px-2">
                          <input
                            type="text"
                            class="form-control min-w-[6rem]"
                            placeholder="Stock"
                          />
                        </td>
                        <td class="!pl-2">
                          <input
                            type="text"
                            class="form-control min-w-[6rem]"
                            placeholder="Variant Code"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>White</td>
                        <td class="!px-2">
                          <div class="input-group">
                            <div class="input-group-text">$</div>
                            <input
                              type="text"
                              class="form-control min-w-[6rem]"
                              placeholder="Price"
                            />
                          </div>
                        </td>
                        <td class="!px-2">
                          <input
                            type="text"
                            class="form-control min-w-[6rem]"
                            placeholder="Stock"
                          />
                        </td>
                        <td class="!pl-2">
                          <input
                            type="text"
                            class="form-control min-w-[6rem]"
                            placeholder="Variant Code"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Gray</td>
                        <td class="!px-2">
                          <div class="input-group">
                            <div class="input-group-text">$</div>
                            <input
                              type="text"
                              class="form-control min-w-[6rem]"
                              placeholder="Price"
                            />
                          </div>
                        </td>
                        <td class="!px-2">
                          <input
                            type="text"
                            class="form-control min-w-[6rem]"
                            placeholder="Stock"
                          />
                        </td>
                        <td class="!pl-2">
                          <input
                            type="text"
                            class="form-control min-w-[6rem]"
                            placeholder="Variant Code"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td rowspan="3" class="border-r">Medium</td>
                        <td>Black</td>
                        <td class="!px-2">
                          <div class="input-group">
                            <div class="input-group-text">$</div>
                            <input
                              type="text"
                              class="form-control min-w-[6rem]"
                              placeholder="Price"
                            />
                          </div>
                        </td>
                        <td class="!px-2">
                          <input
                            type="text"
                            class="form-control min-w-[6rem]"
                            placeholder="Stock"
                          />
                        </td>
                        <td class="!pl-2">
                          <input
                            type="text"
                            class="form-control min-w-[6rem]"
                            placeholder="Variant Code"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>White</td>
                        <td class="!px-2">
                          <div class="input-group">
                            <div class="input-group-text">$</div>
                            <input
                              type="text"
                              class="form-control min-w-[6rem]"
                              placeholder="Price"
                            />
                          </div>
                        </td>
                        <td class="!px-2">
                          <input
                            type="text"
                            class="form-control min-w-[6rem]"
                            placeholder="Stock"
                          />
                        </td>
                        <td class="!pl-2">
                          <input
                            type="text"
                            class="form-control min-w-[6rem]"
                            placeholder="Variant Code"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Gray</td>
                        <td class="!px-2">
                          <div class="input-group">
                            <div class="input-group-text">$</div>
                            <input
                              type="text"
                              class="form-control min-w-[6rem]"
                              placeholder="Price"
                            />
                          </div>
                        </td>
                        <td class="!px-2">
                          <input
                            type="text"
                            class="form-control min-w-[6rem]"
                            placeholder="Stock"
                          />
                        </td>
                        <td class="!pl-2">
                          <input
                            type="text"
                            class="form-control min-w-[6rem]"
                            placeholder="Variant Code"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td rowspan="3" class="border-r">Large</td>
                        <td>Black</td>
                        <td class="!px-2">
                          <div class="input-group">
                            <div class="input-group-text">$</div>
                            <input
                              type="text"
                              class="form-control min-w-[6rem]"
                              placeholder="Price"
                            />
                          </div>
                        </td>
                        <td class="!px-2">
                          <input
                            type="text"
                            class="form-control min-w-[6rem]"
                            placeholder="Stock"
                          />
                        </td>
                        <td class="!pl-2">
                          <input
                            type="text"
                            class="form-control min-w-[6rem]"
                            placeholder="Variant Code"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>White</td>
                        <td class="!px-2">
                          <div class="input-group">
                            <div class="input-group-text">$</div>
                            <input
                              type="text"
                              class="form-control min-w-[6rem]"
                              placeholder="Price"
                            />
                          </div>
                        </td>
                        <td class="!px-2">
                          <input
                            type="text"
                            class="form-control min-w-[6rem]"
                            placeholder="Stock"
                          />
                        </td>
                        <td class="!pl-2">
                          <input
                            type="text"
                            class="form-control min-w-[6rem]"
                            placeholder="Variant Code"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Gray</td>
                        <td class="!px-2">
                          <div class="input-group">
                            <div class="input-group-text">$</div>
                            <input
                              type="text"
                              class="form-control min-w-[6rem]"
                              placeholder="Price"
                            />
                          </div>
                        </td>
                        <td class="!px-2">
                          <input
                            type="text"
                            class="form-control min-w-[6rem]"
                            placeholder="Stock"
                          />
                        </td>
                        <td class="!pl-2">
                          <input
                            type="text"
                            class="form-control min-w-[6rem]"
                            placeholder="Variant Code"
                          />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div
              class="form-inline items-start flex-col xl:flex-row mt-5 pt-5 first:mt-0 first:pt-0"
            >
              <div class="form-label xl:w-64 xl:!mr-10">
                <div class="text-left">
                  <div class="flex items-center">
                    <div class="font-medium">Wholesale</div>
                  </div>
                  <div class="leading-relaxed text-slate-500 text-xs mt-3">
                    Add wholesale price for certain quantity purchases.
                  </div>
                </div>
              </div>
              <div class="w-full mt-3 xl:mt-0 flex-1">
                <div class="overflow-x-auto">
                  <table class="table border">
                    <thead>
                      <tr>
                        <th class="!pr-2 bg-slate-50 dark:bg-darkmode-800"></th>
                        <th class="bg-slate-50 dark:bg-darkmode-800"></th>
                        <th
                          class="!px-2 bg-slate-50 dark:bg-darkmode-800 text-slate-500 whitespace-nowrap"
                        >
                          Min.
                        </th>
                        <th
                          class="!px-2 bg-slate-50 dark:bg-darkmode-800 text-slate-500 whitespace-nowrap"
                        >
                          Max.
                        </th>
                        <th
                          class="!px-2 bg-slate-50 dark:bg-darkmode-800 text-slate-500 whitespace-nowrap"
                        >
                          Unit Price
                        </th>
                        <th class="!px-2 bg-slate-50 dark:bg-darkmode-800"></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td class="!pr-2">1.</td>
                        <td class="whitespace-nowrap">Wholesale Price 1</td>
                        <td class="!px-2">
                          <input
                            type="text"
                            class="form-control min-w-[6rem]"
                            placeholder="Min Qty"
                          />
                        </td>
                        <td class="!px-2">
                          <input
                            type="text"
                            class="form-control min-w-[6rem]"
                            placeholder="Max Qty"
                          />
                        </td>
                        <td class="!px-2">
                          <div class="input-group">
                            <div class="input-group-text">$</div>
                            <input
                              type="text"
                              class="form-control min-w-[6rem]"
                              placeholder="Price"
                            />
                          </div>
                        </td>
                        <td class="!pl-4 text-slate-500">
                          <a href="">
                            <Trash2Icon class="w-4 h-4" />
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td class="!pr-2">2.</td>
                        <td class="whitespace-nowrap">Wholesale Price 2</td>
                        <td class="!px-2">
                          <input
                            type="text"
                            class="form-control min-w-[6rem]"
                            placeholder="Min Qty"
                          />
                        </td>
                        <td class="!px-2">
                          <input
                            type="text"
                            class="form-control min-w-[6rem]"
                            placeholder="Max Qty"
                          />
                        </td>
                        <td class="!px-2">
                          <div class="input-group">
                            <div class="input-group-text">$</div>
                            <input
                              type="text"
                              class="form-control min-w-[6rem]"
                              placeholder="Price"
                            />
                          </div>
                        </td>
                        <td class="!pl-4 text-slate-500">
                          <a href="">
                            <Trash2Icon class="w-4 h-4" />
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td class="!pr-2">3.</td>
                        <td class="whitespace-nowrap">Wholesale Price 3</td>
                        <td class="!px-2">
                          <input
                            type="text"
                            class="form-control min-w-[6rem]"
                            placeholder="Min Qty"
                          />
                        </td>
                        <td class="!px-2">
                          <input
                            type="text"
                            class="form-control min-w-[6rem]"
                            placeholder="Max Qty"
                          />
                        </td>
                        <td class="!px-2">
                          <div class="input-group">
                            <div class="input-group-text">$</div>
                            <input
                              type="text"
                              class="form-control min-w-[6rem]"
                              placeholder="Price"
                            />
                          </div>
                        </td>
                        <td class="!pl-4 text-slate-500">
                          <a href="">
                            <Trash2Icon class="w-4 h-4" />
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <button
                  class="btn btn-outline-primary border-dashed w-full mt-4"
                >
                  <PlusIcon class="w-4 h-4 mr-2" /> Add New Wholesale Price
                </button>
              </div>
            </div>
          </div>
      </div>
      <!-- END: Thông tin hội viên -->
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue';
</script>
