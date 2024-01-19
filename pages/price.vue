<script setup lang="ts">
import {useDataStore} from "~/stores/data";
import {useBreadcrumbStore} from "~/stores/breadcrumb";

const dataStore = useDataStore();
const breadcrumbStore = useBreadcrumbStore();
breadcrumbStore.breadcrumb = [
  {
    label: 'Цены'
  }
]
</script>

<template>
  <div>
    <div class="container">

      <Breadcrumb :home="breadcrumbStore.home" :model="breadcrumbStore.breadcrumb" class="breadcrumb" />
      <div class="flex justify-content-between w-full mb-3">
        <p class="text-base md:text-xl font-semibold mb-0">Услуга</p>
        <div class="flex align-items-center cursor-pointer" >
          <img class="accordion-img--all w-0.7rem opacity-80 mr-2" src="https://www.svgrepo.com/show/108052/arrow-down-filled-triangle.svg" alt="">
          <h4 class="text-base md:text-xl font-semibold my-0">Цена</h4>
        </div>
      </div>
      <Accordion :multiple="true" :activeIndex="[0]">
        <AccordionTab>
          <template #header>
            <div class="flex justify-content-between w-full">
              <p class="text-base md:text-xl font-semibold mb-0">Консультация лора</p>
              <img class="accordion-img w-0.7rem opacity-80" src="https://www.svgrepo.com/show/108052/arrow-down-filled-triangle.svg" alt="">
            </div>
          </template>
          <template #default>
            <div v-for="price in dataStore.prices">
              <div class="flex align-items-center justify-content-between w-full p-4 hover:bg-[#dee2e6]">
                <p class="text-base md:text-xl font-light mb-0">{{price.caption}}</p>
                <p class="text-base md:text-xl">{{price.number}}</p>
              </div>
            </div>
          </template>
        </AccordionTab>
        <AccordionTab>
          <template #header>
            <div class="flex justify-content-between w-full ">
              <p class="text-base md:text-xl font-semibold mb-0">Консультация лора</p>
              <img class="accordion-img w-0.7rem opacity-80" src="https://www.svgrepo.com/show/108052/arrow-down-filled-triangle.svg" alt="">
            </div>
          </template>
          <template #default>
            <div v-for="price in dataStore.prices">
              <div class="flex align-items-center justify-content-between w-full p-4 hover:bg-[#dee2e6]">
                <p class="text-base md:text-xl font-light mb-0">{{price.caption}}</p>
                <p class="text-base md:text-xl">{{price.number}}</p>
              </div>
            </div>
          </template>
        </AccordionTab>
        <AccordionTab>
          <template #header>
            <div class="flex justify-content-between w-full ">
              <p class="text-base md:text-xl font-semibold mb-0">Консультация лора</p>
              <img class="accordion-img w-0.7rem opacity-80" src="https://www.svgrepo.com/show/108052/arrow-down-filled-triangle.svg" alt="">
            </div>
          </template>
          <template #default>
            <div v-for="price in dataStore.prices">
              <div class="flex align-items-center justify-content-between w-full p-4 hover:bg-[#dee2e6]">
                <p class="text-base md:text-xl font-light mb-0">{{price.caption}}</p>
                <p class="text-base md:text-xl">{{price.number}}</p>
              </div>
            </div>
          </template>
        </AccordionTab>
      </Accordion>
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>