<script setup lang="ts">
import {useBreadcrumbStore} from "~/stores/breadcrumb";
import {useDataStore} from "~/stores/data";
const breadcrumbStore = useBreadcrumbStore();
const dataStore = useDataStore();

const router = useRouter();

breadcrumbStore.breadcrumb = [
  {
    label: 'Специалисты',
    to: '#'
  },
];


</script>

<template>
  <div class="bg-[#f2f2f2]">
    <div class="container">
      <Breadcrumb :home="breadcrumbStore.home" :model="breadcrumbStore.breadcrumb" class="breadcrumb" />
      <h1 class="main-title">ЛОР-врачи</h1>
      <div class="grid">
        <div class="col-12 lg:col-4">
          <div class="card-branch">
            <div class="mb-5">
              <h3>Филиал</h3>
              <div v-for="branch in dataStore.branchs">
                <div class="flex align-items-start mb-3">
                  <input type="radio" name="branchs"  class="mr-2">
                  <p class="font-medium text-lg">{{branch.caption}}</p>
                </div>
              </div>
            </div>
            <div>
              <h3>Направление врача</h3>
              <div v-for="referral in dataStore.referrals">
                <div class="flex align-items-start mb-3">
                  <input type="checkbox" class="mr-2">
                  <p class="font-medium text-lg">{{referral.caption}}</p>
                </div>
              </div>
            </div>
            <div>
              <h3>Стиль работы</h3>
              <div v-for="workStyle in dataStore.workStyles">
                <div class="flex align-items-start mb-3">
                  <input type="checkbox" class="mr-2">
                  <p class="font-medium text-lg">{{workStyle.caption}}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 lg:col-8">
          <div class="grid ">
            <div v-for="el in dataStore.items" :key="el.id" class="col-12 mb-6">
              <div @click="router.push(`/doctors/${el.firstName}`)" class="cursor-pointer card flex-column sm:flex-row flex p-4 bg-white w-full h-full">
                <div class="card-animation-left" />
                <div class="">
                  <img class="card-img" :src="el.img" alt="">
                </div>
                <div class="ml-4 mt-5 ">
                  <h1 class="card-name">
                    {{ el.fullName }}
                  </h1>
                  <div class="card-job-title"
                       :class="
                       el.expert=='ведущий врач клиники' ||
                        el.expert=='врач первой категории' ||
                      el.expert=='кандидат медицинских наук'?'bg-red-300':'bg-[#5bbdbe]'">
                    <span>{{ el.expert }}</span>
                  </div>
                  <p class="main-description mt-4">
                    {{ el.profession }}
                  </p>
                  <div class="main-description main-description--bg-hover">
                    <p>
                      стаж: <b>{{ el.experience }}</b>
                    </p>
                    <div class="rectangle" />
                  </div>
                  <div class="card-animation-right" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>