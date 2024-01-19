<script setup lang="ts">
import { useThemeStore } from '~/stores'
const themeStore = useThemeStore()

const menu = ref()
const menuItems = ref([
  {
    label: 'Главная',
    url: '#'
  },
  {
    label: 'Детский лор',
    url: '/children'
  },
  {
    label: 'Лор-врачи',
    url: '/doctors'
  },
  {
    label: 'Лор-операции'
  },
  {
    label: 'Услуги'
  },
  {
    label: 'Цены',
    url: '/price'
  },
  {
    label: 'Пациенту',
    items: [
      { label: 'Онлайн-консультация', icon: 'pi pi-fw pi-file' },
      { label: 'Тест слуха онлайн' },
      { label: 'Вызов врача на дом' },
      { label: 'Вызов медсестры на дом' },
      { label: 'Акции' },
      { label: 'Отзывы' },
      { label: 'Второе мнение' },
      { label: 'Вопрос-ответ' },
      { label: 'Бесплатное лечение' },
      { label: 'Прием по ДМС' },
      { label: 'Налоговый вычет' },
      { label: 'Статьи' },
      { label: 'Контроль качества' },
      { label: 'Рассрочка' },
      { label: 'Подготовка к операции' },
      { label: 'Партнеры' }
    ]
  },
  {
    label: 'Контакты'
  }
])
const loginItems = ref([
  {
    label: 'Войти в личный кабинет'
  },
  {
    label: 'Зарегистрироваться'
  }
])
const toggle = (event) => {
  menu.value.toggle(event)
}
</script>

<template>
  <div>
    <Link rel="stylesheet" :href="themeStore.link" />
    <div class="sticky top-0 bg-white z-2147483646">

      <div class="border-bottom-1 border-300 py-1">
        <div class="container">
          <div class="flex align-content-center justify-content-between">
            <Menubar :model="menuItems" />
            <div class="flex align-items-center">
              <Button
                  aria-haspopup="true"
                  rounded
                  aria-controls="overlay_menu"
                  severity="secondary"
                  text
                  class="hidden lg:flex p-2 -mr-2"
                  @click="toggle"
              >
                <i class="  pi pi pi-user text-2xl cursor-pointer" />
                <i class="  pi pi-angle-down text-1rem mt-1 cursor-pointer" />
              </Button>
              <Menu id="overlay_menu" ref="menu" :model="loginItems" :popup="true" />

              <Button icon="pi pi-map-marker text-2xl" class="ml-3 flex lg:hidden" severity="secondary" text rounded />
              <Button icon="pi pi-eye text-2xl" class="ml-3" severity="secondary" text rounded />
              <Button
                  icon="pi pi-search text-2xl"
                  class="ml-3"
                  severity="secondary"
                  text
                  rounded
                  aria-label="Search"
              />
              <div class="hidden sm:flex ml-4 border-left-1 border-900 h-2rem" />
              <a href="tel:8(495)153-04-49" class="white-space-nowrap hidden sm:flex ml-4 text-red-500 font-medium text-lg">8 (495) 153-04-49</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <section class="container">
      <div class="flex justify-content-center sm:justify-content-start" >
        <div class="grid sm:justify-content-center my-5 flex-column sm:flex-row">
          <div class="col-12 sm:col-6 md:col-4 xl:col ">
            <div class="branch">
              <img src="https://lorlor.ru/content/images/logo-kids.svg" alt="logo" class="logo">
            </div>
          </div>

          <div class="block sm:hidden flex justify-content-center">
            <a href="tel:8(495)153-04-49" class=" text-red-500 font-bold text-3xl" style="width: fit-content">8 (495) 153-04-49</a>
          </div>

          <div class="col-12 sm:col-6 md:col-4 xl:col">
            <div class="branch">
              <div class="branch__metro branch__metro--gray" />
              <div>
                <h3 class="branch__title">
                  Цветной бульвар
                </h3>
                <p class="branch__subtitle">
                  Москва, Самотечная, 5
                </p>
                <Tag value="Круглосуточно" class="text-sm font-normal p-tag-primary" />
              </div>
            </div>
          </div>
          <div class="col-12 sm:col-6 md:col-4 xl:col">
            <div class="branch">
              <div class="branch__metro branch__metro--red" />
              <div>
                <h3 class="branch__title">
                  Преображенская площадь
                </h3>
                <p class="branch__subtitle">
                  Преображенская площадь
                </p>
                <p class="branch__description">
                  Ежедневно c 09:00 до 21:00
                </p>
              </div>
            </div>
          </div>
          <div class="col-12 sm:col-6 md:col-4 xl:col">
            <div class="branch">
              <div class="branch__metro branch__metro--gray" />
              <div>
                <h3 class="branch__title">
                  Бульвар Дмитрия Донского
                </h3>
                <p class="branch__subtitle">
                  Бульвар Дмитрия Донского
                </p>
                <p class="branch__description">
                  Ежедневно c 09:00 до 21:00
                </p>
              </div>
            </div>
          </div>
          <div class="col-12 sm:col-6 md:col-4 xl:col">
            <div class="branch">
              <div class="branch__metro branch__metro--yellow" />
              <div>
                <h3 class="branch__title">
                  Мичуринский проспект
                </h3>
                <p class="branch__subtitle">
                  Москва, Большая Очаковская, 3
                </p>
                <p class="branch__description">
                  Ежедневно c 09:00 до 21:00
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <slot />
    <footer class="bg-[#364779] py-8 mt-5">
      <div class="container">
        <div class="grid justify-content-between">
          <div class="col-12 lg:col-7">
            <div class="grid">
              <div class="col-12 sm:col-6 md:col-4 mb-4">
                <h2 class="footer-title">
                  Клиника
                </h2>
                <ul class="footer-menu">
                  <li class="footer-item">
                    <router-link class="footer-link" to="">
                      О клинике
                    </router-link>
                  </li>
                  <li class="footer-item">
                    <router-link class="footer-link" to="">
                      Специалисты
                    </router-link>
                  </li>
                  <li class="footer-item">
                    <router-link class="footer-link" to="">
                      Контакты
                    </router-link>
                  </li>
                  <li class="footer-item">
                    <router-link class="footer-link" to="">
                      Работа в клинике
                    </router-link>
                  </li>
                  <li class="footer-item">
                    <router-link class="footer-link" to="">
                      Новости
                    </router-link>
                  </li>
                </ul>
              </div>
              <div class="col-12 sm:col-6 md:col-4 mb-4">
                <h2 class="footer-title">
                  Услуги
                </h2>
                <ul class="footer-menu">
                  <li class="footer-item">
                    <router-link class="footer-link" to="">
                      Прайс-лист
                    </router-link>
                  </li>
                  <li class="footer-item">
                    <router-link class="footer-link" to="">
                      Детский лор
                    </router-link>
                  </li>
                  <li class="footer-item">
                    <router-link class="footer-link" to="">
                      Дежурный лор
                    </router-link>
                  </li>
                  <li class="footer-item">
                    <router-link class="footer-link" to="">
                      Лор-врач на дом
                    </router-link>
                  </li>
                  <li class="footer-item">
                    <router-link class="footer-link" to="">
                      Онлайн-консультация
                    </router-link>
                  </li>
                </ul>
              </div>
              <div class="col-12 sm:col-6 md:col-4 mb-4">
                <h2 class="footer-title">
                  Пациентам
                </h2>
                <ul class="footer-item">
                  <li class="footer-item">
                    <router-link class="footer-link" to="">
                      Контроль качества
                    </router-link>
                  </li>
                  <li class="footer-item">
                    <router-link class="footer-link" to="">
                      Отзывы о лор-клинике
                    </router-link>
                  </li>
                  <li class="footer-item">
                    <router-link class="footer-link" to="">
                      Статьи
                    </router-link>
                  </li>
                  <li class="footer-item">
                    <router-link class="footer-link" to="">
                      Клинические случаи
                    </router-link>
                  </li>
                  <li class="footer-item">
                    <router-link class="footer-link" to="">
                      Прием по ДМС
                    </router-link>
                  </li>
                  <li class="footer-item">
                    <router-link class="footer-link" to="">
                      Налоговый вычет
                    </router-link>
                  </li>
                  <li class="footer-item">
                    <router-link class="footer-link" to="">
                      Бесплатное лечение
                    </router-link>
                  </li>
                  <li class="footer-item">
                    <router-link class="footer-link" to="">
                      Партнеры
                    </router-link>
                  </li>
                  <li class="footer-item">
                    <router-link class="footer-link" to="">
                      Отзывы на картах
                    </router-link>
                  </li>
                  <li class="footer-item">
                    <router-link class="footer-link" to="">
                      Публичная оферта о компьютерной диагностике слуха
                    </router-link>
                  </li>
                </ul>
              </div>
            </div>
            <div class="flex-column">
              <h2 class="footer-title">
                Конфиденциальность
              </h2>
              <p class="footer-link">
                Согласие на обработку персональных данных
              </p>
              <p class="footer-link">
                Политика в отношении обработки персональных данных
              </p>
            </div>
          </div>
          <div class="col-12 lg:col-3">
            <div class="flex justify-content-center ">
              <div class="grid--branch-footer relative grid sm:justify-content-center my-5 flex-column">
                <div class="branch-animation-left" />
                <div class="col-12 ">
                  <div class="branch flex-column">
                    <a href="tel:8(495)153-04-49" class=" text-white font-bold text-3xl" style="width: fit-content">8 (495) 153-04-49</a>
                    <p class="text-white text-1.1em">
                      (круглосуточно)
                    </p>
                  </div>
                </div>
                <div class="col-12">
                  <div class="branch branch--white-text">
                    <div class="branch__metro branch__metro--gray" />
                    <div>
                      <h3 class="branch__title">
                        Цветной бульвар
                      </h3>
                      <p class="branch__subtitle">
                        Москва, Самотечная, 5
                      </p>
                      <Tag value="Круглосуточно" class="text-sm font-normal p-tag-primary" />
                    </div>
                  </div>
                </div>
                <div class="col-12">
                  <div class="branch branch--white-text">
                    <div class="branch__metro branch__metro--red" />
                    <div>
                      <h3 class="branch__title">
                        Преображенская площадь
                      </h3>
                      <p class="branch__subtitle">
                        Преображенская площадь
                      </p>
                      <p class="branch__description">
                        Ежедневно c 09:00 до 21:00
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-12">
                  <div class="branch branch--white-text">
                    <div class="branch__metro branch__metro--gray" />
                    <div>
                      <h3 class="branch__title">
                        Бульвар Дмитрия Донского
                      </h3>
                      <p class="branch__subtitle">
                        Бульвар Дмитрия Донского
                      </p>
                      <p class="branch__description">
                        Ежедневно c 09:00 до 21:00
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-12">
                  <div class="branch branch--white-text">
                    <div class="branch__metro branch__metro--yellow" />
                    <div>
                      <h3 class="branch__title">
                        Мичуринский проспект
                      </h3>
                      <p class="branch__subtitle">
                        Москва, Большая Очаковская, 3
                      </p>
                      <p class="branch__description">
                        Ежедневно c 09:00 до 21:00
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-12">
                  <div class="branch branch--white-text">
                    <div class="branch__metro branch__metro--blue" />
                    <div>
                      <h3 class="branch__title">
                        Фили
                      </h3>
                      <p class="branch__subtitle">
                        Москва, Береговой проезд, 7
                      </p>
                      <p class="branch__description">
                        Ежедневно c 09:00 до 21:00
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-12">
                  <div class="branch branch--white-text">
                    <div class="mr-3">
                      <img src="/layout/images/sun.svg" alt="sun" class="w-2rem">
                    </div>
                    <div>
                      <div class="flex align-items-center">
                        <h3 class="branch__title">
                          г. Сочи
                        </h3>
                        <Tag value="cкоро" class="text-sm font-normal p-tag-danger ml-2 -mt-4" />
                      </div>

                      <p class="branch__subtitle">
                        Навагинская, 7
                      </p>
                    </div>
                  </div>
                </div>
                <div class="branch-animation-right" />
              </div>
            </div>
          </div>
        </div>
        <div class="footer-icons">
          <div class="footer-icon">
            <img src="https://lorlor.ru/Content/images/Zen_shortlogo.svg" alt="dssadsda" class="w-7rem h-5rem">
          </div>
          <div class="footer-icon">
            <img src="https://lorlor.ru/Content/images/iconmonstr-vk-1.svg" alt="dwdas" class="w-3rem">
          </div>
          <div class="footer-icon">
            <i class="pi pi-youtube text-5xl" />
          </div>
          <div class="footer-icon">
            <i class="pi pi-instagram text-3xl" />
          </div>
          <div class="footer-icon">
            <i class="pi pi-telegram text-3xl" />
          </div>
        </div>
        <div class="bg-[#465B9C] w-full py-3">
          <p class="text-[#d4d4d4] text-0.9em text-center font-sans">
            © 2013 - 2023 Клиника уха, горла и носа, лицензия №ЛО-77-01-0099047 от 24.09.2014г.
          </p>
          <p class="text-[#d4d4d4] text-0.9em text-center font-sans">
            Создание сайта клиники и медицинский маркетинг: medmarketing
          </p>
          <p class="text-[#d4d4d4] text-0.9em text-center font-sans">
            Карта сайта
          </p>
        </div>
      </div>
    </footer>
  </div>
  <slot />
</template>

<style scoped lang="scss">

</style>