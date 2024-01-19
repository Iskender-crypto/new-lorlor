<template>
  <!--  header-->
  <div>
    <section class="banner">
      <Carousel
        :value="products"
        :num-visible="1"
        :num-scroll="1"
        circular
        :autoplay-interval="3000"
      >
        <template #item="slotProps">
          <div class="grid">
            <div class="col-12 md:col-6">
              <div class="relative p-5 sm:p-7 md:p-8  h-full flex flex-column justify-content-center">
                <img src="/layout/images/border-left.svg" class="animation-icon--left w-3rem sm:w-1 absolute top-0 left-0" alt="">
                <h4 class=" mb-1 text-5xl md:text-7xl text-blue-700 w-6">
                  {{ slotProps.data.title }}
                </h4>
                <h6 class="text-left mt-0 text-4xl text-red-400">
                  {{ slotProps.data.subtitle }}
                </h6>
                <a v-if="slotProps.data.link" :href="slotProps.data.link" />
                <img src="/layout/images/border-right.svg" class="animation-icon--right w-3rem sm:w-1 absolute bottom-0 right-0" alt="">
              </div>
            </div>
            <div class="col-12 md:col-6">
              <img :src="slotProps.data.image" class="w-full h-15rem md:h-30rem object-cover" style="object-position: center" alt="">
            </div>
          </div>
        </template>
      </Carousel>
    </section>
    <!-- list   -->
    <section id="list" class="mt-8">
      <div class="container">
        <div class="grid ">
          <div class="col-12 md:col-6  xl:col-3 scroll-hover">
            <div class="flex line-scroll justify-content-center md:justify-content-start">
              <img class="w-4rem" src="/layout/images/cardiogram.svg" alt="">
              <h1 class="list-title ml-4">
                ДИАГНОСТИКА
              </h1>
            </div>
            <ul class="list-menu">
              <h6 class="flex md:hidden text-1.2rem font-sans ml--6">
                Исследования уха
              </h6>
              <li class="list-item">
                <router-link class="list-link" to="">
                  Тимпанометрия
                </router-link>
              </li>
              <li class="list-item">
                <router-link class="list-link" to="">
                  Аудиометрия
                </router-link>
              </li>
              <li class="list-item">
                <router-link class="list-link" to="">
                  Электрокохлеография
                </router-link>
              </li>
              <li class="list-item flex md:hidden ">
                <router-link class="list-link" to="">
                  Исследование проходимости слуховой трубы
                </router-link>
              </li>
              <li class="list-item flex md:hidden">
                <router-link class="list-link " to="">
                  Отоскопия
                </router-link>
              </li>
              <li class="list-item flex md:hidden">
                <router-link class="list-link" to="">
                  Камертональное исследование
                </router-link>
              </li>
              <li class="list-item flex md:hidden">
                <router-link class="list-link" to="">
                  КТ височной кости
                </router-link>
              </li>
              <li class="list-item flex md:hidden">
                <router-link class="list-link" to="">
                  Диагностика вестибулярной функции
                </router-link>
              </li>
              <h6 class="flex md:hidden text-1.2rem font-sans ml--6">
                Исследования носа и пазух
              </h6>
              <li class="list-item">
                <router-link class="list-link" to="">
                  Эндоскопия носа
                </router-link>
              </li>
              <li class="list-item">
                <router-link class="list-link" to="">
                  КТ пазух носа
                </router-link>
              </li>
              <li class="list-item">
                <router-link class="list-link" to="">
                  КТ челюсти
                </router-link>
              </li>
              <li class="list-item flex md:hidden">
                <router-link class="list-link" to="">
                  Риноскопия
                </router-link>
              </li>
              <li class="list-item flex md:hidden">
                <router-link class="list-link" to="">
                  Диафаноскопия
                </router-link>
              </li>
              <li class="list-item flex md:hidden">
                <router-link class="list-link" to="">
                  УЗИ пазух носа
                </router-link>
              </li>
              <li class="list-item flex md:hidden">
                <router-link class="list-link" to="">
                  Рентгенография пазух
                </router-link>
              </li>
              <li class="list-item flex md:hidden">
                <router-link class="list-link" to="">
                  Зондирование пазух
                </router-link>
              </li>
              <li class="list-item flex md:hidden">
                <router-link class="list-link" to="">
                  Диагностика дыхательной функции
                </router-link>
              </li>
              <h6 class="flex md:hidden text-1.2rem font-sans ml--6">
                Исследования глотки, гортани
              </h6>
              <li class="list-item flex md:hidden">
                <router-link class="list-link" to="">
                  Пальпация
                </router-link>
              </li>
              <li class="list-item flex md:hidden">
                <router-link class="list-link" to="">
                  Ларингоскопия
                </router-link>
              </li>
              <li class="list-item flex md:hidden">
                <router-link class="list-link" to="">
                  Рентгенография гортани
                </router-link>
              </li>
              <li class="list-item flex md:hidden">
                <router-link class="list-link" to="">
                  Диагностика голосовой функции
                </router-link>
              </li>
            </ul>
          </div>
          <div class="col-12 md:col-6  xl:col-3 scroll-hover">
            <div class="flex line-scroll justify-content-center md:justify-content-start">
              <img class="w-4rem" src="/layout/images/syringe.svg" alt="">
              <h1 class="list-title ml-4">
                ПРОЦЕДУРЫ
              </h1>
            </div>
            <ul class="list-menu">
              <li class="list-item">
                <router-link class="list-link" to="">
                  Промывание носа
                </router-link>
              </li>
              <li class="list-item">
                <router-link class="list-link" to="">
                  Пункция пазух
                </router-link>
              </li>
              <li class="list-item">
                <router-link class="list-link" to="">
                  Ямик
                </router-link>
              </li>
              <li class="list-item">
                <router-link class="list-link" to="">
                  Промывание миндалин
                </router-link>
              </li>
              <li class="list-item">
                <router-link class="list-link" to="">
                  Удаление серной пробки
                </router-link>
              </li>
              <li class="list-item flex md:hidden">
                <router-link class="list-link" to="">
                  Лазеротерапия
                </router-link>
              </li>
              <li class="list-item flex md:hidden">
                <router-link class="list-link" to="">
                  Магнитотерапия
                </router-link>
              </li>
              <li class="list-item flex md:hidden">
                <router-link class="list-link" to="">
                  Фонофорез
                </router-link>
              </li>
              <li class="list-item flex md:hidden">
                <router-link class="list-link" to="">
                  Электрофорез
                </router-link>
              </li>
              <li class="list-item flex md:hidden">
                <router-link class="list-link" to="">
                  Промывание уха
                </router-link>
              </li>
              <li class="list-item flex md:hidden">
                <router-link class="list-link" to="">
                  Тампонада носа
                </router-link>
              </li>
              <li class="list-item flex md:hidden">
                <router-link class="list-link" to="">
                  Прижигание слизистой носа
                </router-link>
              </li>
              <li class="list-item flex md:hidden">
                <router-link class="list-link" to="">
                  Удаление инородных тел из носа
                </router-link>
              </li>
              <li class="list-item flex md:hidden">
                <router-link class="list-link" to="">
                  Милта
                </router-link>
              </li>
              <li class="list-item flex md:hidden">
                <router-link class="list-link" to="">
                  Кварц
                </router-link>
              </li>
              <li class="list-item flex md:hidden">
                <router-link class="list-link" to="">
                  Соляная пещера
                </router-link>
              </li>
            </ul>
          </div>
          <div class="col-12 md:col-6  xl:col-3 scroll-hover">
            <div class="flex line-scroll justify-content-center md:justify-content-start">
              <img class="w-4rem" src="/layout/images/blood-transfusion.svg" alt="">
              <h1 class="list-title ml-4">
                ОПЕРАЦИИ
              </h1>
            </div>
            <ul class="list-menu">
              <h6 class="flex md:hidden text-1.2rem font-sans ml--6">
                Операции носа и пазух носа
              </h6>
              <li class="list-item">
                <router-link class="list-link" to="">
                  Удаление миндалин
                </router-link>
              </li>
              <li class="list-item">
                <router-link class="list-link" to="">
                  Удаление аденоидов
                </router-link>
              </li>
              <li class="list-item">
                <router-link class="list-link" to="">
                  Септопластика
                </router-link>
              </li>
              <li class="list-item flex md:hidden">
                <router-link class="list-link" to="">
                  Вазотомия
                </router-link>
              </li>
              <li class="list-item flex md:hidden">
                <router-link class="list-link" to="">
                  Полисинусотомия
                </router-link>
              </li>
              <li class="list-item">
                <router-link class="list-link" to="">
                  Удаление полипов
                </router-link>
              </li>
              <li class="list-item flex md:hidden">
                <router-link class="list-link" to="">
                  Конхотомия носовых раковин
                </router-link>
              </li>
              <li class="list-item flex md:hidden">
                <router-link class="list-link" to="">
                  Резекция носовой перегородки
                </router-link>
              </li>
              <h6 class="flex md:hidden text-1.2rem font-sans ml--6">
                Операция уха
              </h6>
              <li class="list-item flex md:hidden">
                <router-link class="list-link" to="">
                  Стапедопластика
                </router-link>
              </li>
              <li class="list-item flex md:hidden">
                <router-link class="list-link" to="">
                  Мирингопластика
                </router-link>
              </li>
              <li class="list-item">
                <router-link class="list-link" to="">
                  Тимпанопластика
                </router-link>
              </li>
              <li class="list-item flex md:hidden">
                <router-link class="list-link" to="">
                  Мастоидопластика
                </router-link>
              </li>
              <li class="list-item flex md:hidden">
                <router-link class="list-link" to="">
                  Шунтирование барабанной полости
                </router-link>
              </li>
              <h6 class="flex md:hidden text-1.2rem font-sans ml--6">
                Операции глотки и гортани
              </h6>
              <li class="list-item flex md:hidden">
                <router-link class="list-link" to="">
                  Тонзиллэктомия
                </router-link>
              </li>
              <li class="list-item flex md:hidden">
                <router-link class="list-link" to="">
                  Трахеостомия
                </router-link>
              </li>
              <h6 class="flex md:hidden text-1.2rem font-sans ml--6">
                Прочее
              </h6>
              <li class="list-item flex md:hidden">
                <router-link class="list-link" to="">
                  Подготовка к операции
                </router-link>
              </li>
              <li class="list-item flex md:hidden">
                <router-link class="list-link" to="">
                  Лор-хирурги
                </router-link>
              </li>
              <li class="list-item flex md:hidden">
                <router-link class="list-link" to="">
                  Рассрочка по операциям
                </router-link>
              </li>
            </ul>
          </div>
          <div class="col-12 md:col-6  xl:col-3 scroll-hover">
            <div class="flex line-scroll justify-content-center md:justify-content-start">
              <img class="w-4rem" src="/layout/images/hospital-1.svg" alt="">
              <h1 class="list-title ml-4">
                КЛИНИКА
              </h1>
            </div>
            <ul class="list-menu">
              <li class="list-item">
                <router-link class="list-link" to="">
                  О клинике
                </router-link>
              </li>
              <li class="list-item">
                <router-link class="list-link" to="">
                  Специалисты
                </router-link>
              </li>
              <li class="list-item flex md:hidden">
                <router-link class="list-link" to="">
                  Цены
                </router-link>
              </li>
              <li class="list-item">
                <router-link class="list-link" to="">
                  Детский лор-врач
                </router-link>
              </li>
              <li class="list-item">
                <router-link class="list-link" to="">
                  Лор-врач на дом
                </router-link>
              </li>
              <li class="list-item flex md:hidden">
                <router-link class="list-link" to="">
                  Оборудование
                </router-link>
              </li>
              <li class="list-item flex md:hidden">
                <router-link class="list-link" to="">
                  Операционная
                </router-link>
              </li>
              <li class="list-item flex md:hidden">
                <router-link class="list-link" to="">
                  Стационар
                </router-link>
              </li>
              <li class="list-item flex md:hidden">
                <router-link class="list-link" to="">
                  Фото клиники
                </router-link>
              </li>
              <li class="list-item flex md:hidden">
                <router-link class="list-link" to="">
                  Видео
                </router-link>
              </li>
              <li class="list-item">
                <router-link class="list-link" to="">
                  Контакты
                </router-link>
              </li>
              <h6 class="flex md:hidden text-1.2rem font-sans ml--6">
                Филиалы:
              </h6>
              <li class="list-item flex md:hidden">
                <router-link class="list-link" to="">
                  На "Цветном бульваре"
                </router-link>
              </li>
              <li class="list-item flex md:hidden">
                <router-link class="list-link" to="">
                  На "Преображенской площади"
                </router-link>
              </li>
              <li class="list-item flex md:hidden">
                <router-link class="list-link" to="">
                  На "Бульваре Дмитрия Донского"
                </router-link>
              </li>
              <li class="list-item flex md:hidden">
                <router-link class="list-link" to="">
                  На "Мичуринском проспекте"
                </router-link>
              </li>
              <h6 class="flex md:hidden text-1.2rem font-sans ml--6">
                Прочие направления
              </h6>
              <li class="list-item flex md:hidden">
                <router-link class="list-link" to="">
                  Слухопротезирование
                </router-link>
              </li>
              <li class="list-item flex md:hidden">
                <router-link class="list-link" to="">
                  Терапия
                </router-link>
              </li>
              <li class="list-item flex md:hidden">
                <router-link class="list-link" to="">
                  Педиатрия
                </router-link>
              </li>
              <li class="list-item flex md:hidden">
                <router-link class="list-link" to="">
                  УЗИ сосудов
                </router-link>
              </li>
              <li class="list-item flex md:hidden">
                <router-link class="list-link" to="">
                  УЗИ сердца
                </router-link>
              </li>
              <li class="list-item flex md:hidden">
                <router-link class="list-link" to="">
                  Неврология
                </router-link>
              </li>
              <li class="list-item flex md:hidden">
                <router-link class="list-link" to="">
                  Мануальная терапия
                </router-link>
              </li>
              <li class="list-item flex md:hidden">
                <router-link class="list-link" to="">
                  Аллергология-иммунология
                </router-link>
              </li>
              <li class="list-item">
                <router-link class="list-link" to="">
                  Кардиология
                </router-link>
              </li>
              <h6 class="flex md:hidden text-1.2rem font-sans ml--6">
                Пациентам:
              </h6>
              <li class="list-item">
                <router-link class="list-link" to="">
                  Контроль качества
                </router-link>
              </li>
              <li class="list-item flex md:hidden">
                <router-link class="list-link" to="">
                  Отзывы о лор-клинике
                </router-link>
              </li>
            </ul>
          </div>
        </div>
        <Button class="text-cyan-700 hover:bg-cyan-700 hover:text-white  text-xl border-noround mt-6 mb-8" label="Все услуги" severity="success" outlined />
        <div>
          <h1 class="main-title mb-15">
            Лор-клиника
          </h1>
          <p class="main-description">
            Клиника уха, горла и носа является современной специализированной лор-клиникой в Москве, способной оказывать своевременную высококвалифицированную медицинскую помощь пациентам с заболеваниями уха, горла и носа всех возрастных категорий, используя самые современные технологии.
          </p>
          <p class="main-description mt-5 mb-15">
            В нашей клинике доступна востребованная услуга - <router-link class="main-description__link" to="">
              реабилитация после ковида.
            </router-link> Мы составили комплекс эффективных лечебных процедур, направленных на полнейшее восстановление всех ресурсов организма после перенесенной инфекции.
          </p>
          <p class="main-description mb-5">
            Своевременное обращение к врачу поможет сохранить Ваше здоровье.
            Не откладывайте лечение, звоните прямо сейчас. Мы работаем круглосуточно в Москве.
          </p>
          <p class="main-description mb-4">
            тел.: <a class="text-2xl p-1 main-description__link" href="tel:8(495)266-28-73">8 (495) 266-28-73</a> (круглосуточно)
          </p>
        </div>
      </div>
    </section>
  </div>
  <!-- card doctor-->
  <section class="bg-gray-100 pt-20">
    <div class="container">
      <h1 class="main-title mb-4">
        Наши специалисты
      </h1>
      <div class="grid -ml-6">
        <div v-for="el in cards" :key="el.id" class="col-12 xl:col-6 mb-6 pl-6 ">
          <div class=" card flex-column sm:flex-row flex p-4 bg-white w-full h-full">
            <div class="card-animation-left" />
            <div class="">
              <img class="card-img" :src="el.img" alt="">
            </div>
            <div class="ml-4 mt-5 ">
              <h1 class="card-name">
                {{ el.name }}
              </h1>
              <div class="card-job-title">
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
      <div class="flex justify-content-center">
        <Button class="border-noround mr-3 border-0 p-tag-primary bg-cyan-700 hover:bg-cyan-600 text-xl" label="Задать вопрос врачу" />
        <Button class="border-noround ml-5 text-blue-700 hover:bg-blue-700 hover:text-white text-xl" label="Все специалисты" severity="success" outlined />
      </div>
      <p class="main-description mt-5 pb-6">
        <router-link class="main-description__link" to="">
          Наши лор-врачи
        </router-link> имеют огромный и уникальный опыт лечения лор-заболеваний, как взрослых пациентов, так и детей. У нас работает высокопрофессиональная команда отоларингологов высшей квалификационной категории, ринохирургов и отохирургов, в том числе 40% наших врачей имеют ученую степень кандидата медицинских наук. Наши специалисты ежедневно решают сложнейшие задачи и проводят уникальные <router-link class="main-description__link" to="">
          хирургические операции
        </router-link> лор-органов.
      </p>
    </div>
  </section>
  <!-- about as -->
  <section>
    <div class="container">
      <div class="w-full md:w-8">
        <h1 class="main-title mt-8 mb-5">
          Современное оборудование
        </h1>
        <p class="main-description mb-6">
          Мы оснащены современным оборудованием, которое позволяет проводить качественную диагностику заболеваний уха, горла и носа, в том числе эндоскопический осмотр лор-органов, УЗИ пазух носа, <router-link class="main-description__link" to="">
            КТ пазух носа,
          </router-link> аудиометрию и многое другое. Качественная диагностика пациентов является ключевым фактором эффективного лечения, позволяет выявлять лор-патологии на ранней стадии и проводить своевременное и эффективное лечение.
        </p>
        <div class="w-full md:w-800px">
          <img class="w-full" src="/layout/images/equipment.jpg" alt="equipment">
        </div>
        <h1 class="main-title mb-5">
          Детский лор
        </h1>
        <p class="main-description mb-8">
          Профилактика и <span class="text-black font-normal">лечение лор-заболеваний у детей</span> является одним из наших основных профилей деятельности. Клиника приспособлена для приема самых маленьких пациентов, современное медицинское оборудование оснащено специальными средствами для оказания медицинской помощи детям (например, специальные детские насадки для эндоскопического оборудования и т.п.). <router-link class="main-description__link" to="">
            Детские лор-врачи
          </router-link> клиники имеют огромный опыт лечения детей всех возрастных категорий, обладают специальными навыками общения с детьми и способны оказать своевременную и высококвалифицированную медицинскую помощь, учитывая возрастные особенности диагностики и лечения ребенка.
        </p>
        <h1 class="main-title mb-5">
          Лор-врач круглосуточно
        </h1>
        <p class="main-description mb-8">
          Клиника уха, горла и носа работает 24 часа в сутки 7 дней в неделю. Наш филиал на "Цветном бульваре" не закрывается ни на минуту и готов принять пациентов в любое время суток. В клинике всегда присутствует <router-link class="main-description__link" to="">
            дежурный лор-врач,
          </router-link> готовый оказать своевременную медицинскую помощь нашим пациентам.
        </p>
        <h1 class="main-title mb-5">
          Вызов лор-врача на дом
        </h1>
        <p class="main-description mb-8">
          Для удобства наших пациентов в клинике организована <router-link class="main-description__link" to="">
            служба вызова лор-врача на дом.
          </router-link> В случае если у Вас температура или Вы по объективным причинам не можете самостоятельно посетить клинику, свяжитесь с администратором клиники и вызовите лор-врача на дом. Прием заявок осуществляется круглосуточно.
        </p>
        <h1 class="main-title mb-5">
          Операции в клинике уха, горла и носа
        </h1>
        <p class="main-description mb-8">
          В клинике проводится широкий спектр <router-link class="main-description__link" to="">
            хирургических операций,
          </router-link> таких как <router-link class="main-description__link" to="">
            удаление аденоидов, удаление миндалин, тимпанопластика, септопластика,
          </router-link> ринопластика, вазотомия и др. В нашем распоряжении операционная и стационар, которые оснащены самым современным медицинским оборудованием. Команда хирургов представлена широким спектром специалистов своей области, имеющих огромный опыт проведения сложнейших хирургических операций с использованием современных технологий оперирования и реабилитации пациентов.
        </p>
        <img class="w-full" src="/layout/images/adenoidy.jpg" alt="dsfsdddddddddd">
        <h1 class="main-title mb-5">
          Центр лор-помощи в Москве
        </h1>
        <p class="main-description mb-5">
          Клиника уха, горла и носа является современным <span class="text-black font-normal">лор-центром в Москве</span>, где каждый человек может рассчитывать на высококвалифицированную медицинскую помощь, пройти курсы физиотерапии и укрепить свое здоровье.
        </p>
        <p class="main-description mb-5">
          В клинике физиотерапевтические процедуры включают в себя целый спектр мероприятий:
        </p>
        <ul class="m-0 pl-4 mb-5">
          <li class="mb-3">
            <p class="main-description">
              <router-link class="main-description__link" to="">
                лазеротерапия
              </router-link> и магнитотерапия на аппарате Милта
            </p>
          </li>
          <li class="mb-3">
            <p class="main-description">
              <router-link class="main-description__link" to="">
                тубус кварц
              </router-link>
            </p>
          </li>
          <li class="mb-3">
            <p class="main-description">
              пневмомассаж
            </p>
          </li>
          <li class="mb-3">
            <p class="main-description">
              <router-link class="main-description__link" to="">
                электрофорез
              </router-link>
            </p>
          </li>
          <li class="mb-3">
            <p class="main-description">
              промывание лакун миндалин на аппарате «Тонзиллор»
            </p>
          </li>
          <li class="mb-3">
            <p class="main-description">
              <router-link class="main-description__link" to="">
                соляная пещера
              </router-link>
            </p>
          </li>
        </ul>
        <p class="main-description pb-8">
          Физиотерапия является неотъемлемой частью комплексной терапии, позволяет достигать более быстрых результатов в лечении заболеваний лор-органов. Также физиотерапия позволяет сократить сроки реабилитации в послеоперационном периоде.
        </p>
      </div>
    </div>
  </section>
  <!-- disease -->
  <section>
    <div class="container">
      <div>
        <h1 class="main-title text-4rem mb-6">
          Симптомы заболеваний
        </h1>
        <div class="grid mb-8">
          <div class="col-12 md:col-6  xl:col-4 mb-6 scroll-hover">
            <div class="flex line-scroll justify-content-center md:justify-content-start">
              <h1 class="list-title ml-4">
                УШИ
              </h1>
            </div>
            <ul class="list-menu">
              <li class="list-item">
                <router-link class="list-link" to="">
                  Шум в ухе
                </router-link>
              </li>
              <li class="list-item">
                <router-link class="list-link" to="">
                  Снижение слуха
                </router-link>
              </li>
              <li class="list-item">
                <router-link class="list-link" to="">
                  Боль в ухе
                </router-link>
              </li>
              <li class="list-item">
                <router-link class="list-link" to="">
                  Серная пробка в ухе
                </router-link>
              </li>
              <li class="list-item">
                <router-link class="list-link " to="">
                  Заложенность уха
                </router-link>
              </li>
              <li class="list-item">
                <router-link class="list-link" to="">
                  Выделения из уха
                </router-link>
              </li>
              <li class="list-item">
                <router-link class="list-link" to="">
                  Экзостозы
                </router-link>
              </li>
              <li class="list-item">
                <router-link class="list-link" to="">
                  Травмы уха
                </router-link>
              </li>
              <li class="list-item">
                <router-link class="list-link" to="">
                  Ушной свищ
                </router-link>
              </li>
              <li class="list-item">
                <router-link class="list-link" to="">
                  Кровь из уха
                </router-link>
              </li>
              <li class="list-item">
                <router-link class="list-link" to="">
                  Атрезии слухового прохода
                </router-link>
              </li>
            </ul>
          </div>
          <div class="col-12 md:col-6  xl:col-4 mb-6 scroll-hover">
            <div class="flex line-scroll justify-content-center md:justify-content-start">
              <h1 class="list-title ml-4">
                ГОРЛО
              </h1>
            </div>
            <ul class="list-menu">
              <li class="list-item">
                <router-link class="list-link" to="">
                  Боль в горле
                </router-link>
              </li>
              <li class="list-item">
                <router-link class="list-link" to="">
                  Увеличенные миндалины
                </router-link>
              </li>
              <li class="list-item">
                <router-link class="list-link" to="">
                  Кашель
                </router-link>
              </li>
              <li class="list-item">
                <router-link class="list-link" to="">
                  Першение в горле
                </router-link>
              </li>
              <li class="list-item">
                <router-link class="list-link" to="">
                  Налет на языке
                </router-link>
              </li>
              <li class="list-item">
                <router-link class="list-link" to="">
                  Пропал голос
                </router-link>
              </li>
              <li class="list-item">
                <router-link class="list-link" to="">
                  Отек гортани
                </router-link>
              </li>
              <li class="list-item">
                <router-link class="list-link" to="">
                  Аденоиды
                </router-link>
              </li>
            </ul>
          </div>
          <div class="col-12 md:col-6  xl:col-4 mb-6 scroll-hover">
            <div class="flex line-scroll justify-content-center md:justify-content-start">
              <h1 class="list-title ml-4">
                НОС
              </h1>
            </div>
            <ul class="list-menu">
              <li class="list-item">
                <router-link class="list-link" to="">
                  Кровотечение из носа
                </router-link>
              </li>
              <li class="list-item">
                <router-link class="list-link" to="">
                  Полипы в носу
                </router-link>
              </li>
              <li class="list-item">
                <router-link class="list-link" to="">
                  Насморк
                </router-link>
              </li>
              <li class="list-item flex md:hidden">
                <router-link class="list-link" to="">
                  Заложенность носа
                </router-link>
              </li>
              <li class="list-item flex md:hidden">
                <router-link class="list-link" to="">
                  Кривой нос
                </router-link>
              </li>
              <li class="list-item">
                <router-link class="list-link" to="">
                  Фурункул в носу
                </router-link>
              </li>
              <li class="list-item flex md:hidden">
                <router-link class="list-link" to="">
                  Перфорация носовой перегородки
                </router-link>
              </li>
              <li class="list-item flex md:hidden">
                <router-link class="list-link" to="">
                  Травмы носа
                </router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div>
        <h1 class="main-title mb-5">
          Заболевания лор-органов
        </h1>
        <div class="grid ">
          <div class="col-12 md:col-6  xl:col-4 mb-6 scroll-hover">
            <div class="flex line-scroll justify-content-center md:justify-content-start">
              <h1 class="list-title ml-4">
                БОЛЕЗНИ НОСА
              </h1>
            </div>
            <ul class="list-menu">
              <li class="list-item">
                <router-link class="list-link" to="">
                  Синусит
                </router-link>
              </li>
              <li class="list-item">
                <router-link class="list-link" to="">
                  Гайморит
                </router-link>
              </li>
              <li class="list-item">
                <router-link class="list-link" to="">
                  Фронтит
                </router-link>
              </li>
              <li class="list-item">
                <router-link class="list-link" to="">
                  Этмоидит
                </router-link>
              </li>
              <li class="list-item">
                <router-link class="list-link " to="">
                  Сфеноидит
                </router-link>
              </li>
              <li class="list-item">
                <router-link class="list-link" to="">
                  Ринит
                </router-link>
              </li>
              <li class="list-item">
                <router-link class="list-link" to="">
                  Ринофима
                </router-link>
              </li>
              <li class="list-item">
                <router-link class="list-link" to="">
                  Озена
                </router-link>
              </li>
              <li class="list-item">
                <router-link class="list-link" to="">
                  Гранулематоз Вегенера
                </router-link>
              </li>
              <li class="list-item">
                <router-link class="list-link" to="">
                  Сикоз носа
                </router-link>
              </li>
              <li class="list-item">
                <router-link class="list-link" to="">
                  Атрезия хоан
                </router-link>
              </li>
            </ul>
          </div>
          <div class="col-12 md:col-6  xl:col-4 mb-6 scroll-hover">
            <div class="flex line-scroll justify-content-center md:justify-content-start">
              <h1 class="list-title ml-4">
                БОЛЕЗНИ ГОРЛА
              </h1>
            </div>
            <ul class="list-menu">
              <li class="list-item">
                <router-link class="list-link" to="">
                  Ларингит
                </router-link>
              </li>
              <li class="list-item">
                <router-link class="list-link" to="">
                  Тонзиллит
                </router-link>
              </li>
              <li class="list-item">
                <router-link class="list-link" to="">
                  Паратонзиллярный абсцесс
                </router-link>
              </li>
              <li class="list-item">
                <router-link class="list-link" to="">
                  Фарингит
                </router-link>
              </li>
              <li class="list-item">
                <router-link class="list-link" to="">
                  Трахеит
                </router-link>
              </li>
              <li class="list-item">
                <router-link class="list-link" to="">
                  Ложный круп
                </router-link>
              </li>
              <li class="list-item">
                <router-link class="list-link" to="">
                  Хондроперихондрит
                </router-link>
              </li>
              <li class="list-item">
                <router-link class="list-link" to="">
                  Заглоточный абсцесс
                </router-link>
              </li>
            </ul>
          </div>
          <div class="col-12 md:col-6  xl:col-4 mb-6 scroll-hover">
            <div class="flex line-scroll justify-content-center md:justify-content-start">
              <h1 class="list-title ml-4">
                БОЛЕЗНИ УХА
              </h1>
            </div>
            <ul class="list-menu">
              <li class="list-item">
                <router-link class="list-link" to="">
                  Отит
                </router-link>
              </li>
              <li class="list-item">
                <router-link class="list-link" to="">
                  Отосклероз
                </router-link>
              </li>
              <li class="list-item">
                <router-link class="list-link" to="">
                  Болезнь Меньера
                </router-link>
              </li>
              <li class="list-item flex md:hidden">
                <router-link class="list-link" to="">
                  Тубоотит
                </router-link>
              </li>
              <li class="list-item flex md:hidden">
                <router-link class="list-link" to="">
                  Лабиринтит
                </router-link>
              </li>
              <li class="list-item">
                <router-link class="list-link" to="">
                  Нейросенсорная тугоухость
                </router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="awards">
    <div class="container">
      <h2 class="text-700 text-2xl md:text-4xl">
        Наши награды
      </h2>
      <div class="grid">
        <div class="col-12 md:col-6 lg:col-5 xl:col-3 mb-5">
          <Card class="h-full">
            <template #header>
              <img class="w-full h-full object-cover" alt="user header" src="https://lorlor.ru/images/ci1108668v480x320s0.jpg">
            </template>
            <template #title>
              "Клиника уха, горла и носа" в ТОП-30 частных клиник Москвы
            </template>
            <template #content>
              <p>
                Премия Продокторов по мнению пациентов.
              </p>
              <span>18.07.23</span>
            </template>
          </Card>
        </div>
        <div class="col-12 md:col-6 lg:col-5 xl:col-3 mb-5">
          <Card class="h-full">
            <template #header>
              <img class="w-full h-full object-cover" alt="user header" src="https://lorlor.ru/images/ci1104996v480x320s0.jpg">
            </template>
            <template #title>
              Наша Клиника получила "Звезду Качества" за лучшее предприятие страны 2020 года.
            </template>
            <template #content>
              <span>18.07.23</span>
            </template>
          </Card>
        </div>
      </div>
    </div>
  </section>
  <section class="news-clinic">
    <div class="container">
      <h2 class="text-700 text-2xl md:text-4xl">
        Новости клиники
      </h2>
      <div class="grid">
        <div v-for="news in newsClinic" :key="news.subtitle" class="col-12 sm:col-6 lg:col-4">
          <Card class="h-full">
            <template #header>
              <img class="w-full h-full object-cover" alt="user header" :src="news.img">
            </template>
            <template #title>
              {{ news.title }}
            </template>
            <template #content>
              <p>
                {{ news.subtitle }}
              </p>
              <span>{{ news.date }}</span>
            </template>
          </Card>
        </div>
      </div>
      <div class="flex justify-content-center mt-5">
        <Button label="Все новости" outlined class="m-auto btn-primary border-noround  font-normal" size="large" />
      </div>
    </div>
  </section>
  <section class="video">
    <div class="container">
      <h2 class="text-700 text-2xl md:text-4xl">
        Видео
      </h2>
      <div class="grid">
        <div v-for="video in videos" :key="video.img" class="col-12 sm:col-6 lg:col-4">
          <Card class="h-full">
            <template #header>
              <img class="w-full h-full object-cover" alt="user header" :src="video.img">
            </template>
            <template #title>
              {{ video.title }}
            </template>
            <template #content>
              <p>
                {{ video.subtitle }}
              </p>
            </template>
          </Card>
        </div>
      </div>
      <div class="flex justify-content-center mt-5">
        <Button label="Все видео" outlined class="m-auto btn-primary border-noround  font-normal" size="large" />
      </div>
    </div>
  </section>
  <section class="video">
    <div class="container">
      <h2 class="text-700 text-2xl md:text-4xl">
        Статьи
      </h2>
      <div class="grid">
        <div v-for="article in articles" :key="article.img" class="col-12 sm:col-6 lg:col-4">
          <Card class="h-full">
            <template #header>
              <img class="w-full h-full object-cover" alt="user header" :src="article.img">
            </template>
            <template #title>
              {{ article.title }}
            </template>
            <template #content>
              <p>
                {{ article.subtitle }}
              </p>
            </template>
          </Card>
        </div>
      </div>
      <div class="flex justify-content-center mt-5">
        <Button label="Все cтатьи" outlined class="m-auto btn-primary border-noround  font-normal" size="large" />
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import 'public/layout/fonts/roboto/stylesheet.css'

const products = ref([
  {
    title: 'Поможем услышать мир',
    subtitle: 'Лучшие лор хирурги',
    link: 'Узнайне подробнее >>',
    image: '/img/bg1.jpg'
  },
  {
    title: 'Лор операция',
    subtitle: 'Лучшие лор хирурги',
    link: 'Узнайне подробнее >>',
    image: '/img/bg2.jpg'
  }, {
    title: 'Лор операция',
    subtitle: 'Лучшие лор хирурги',
    link: 'Узнайне подробнее >>',
    image: '/img/bg1.jpg'
  }, {
    title: 'Лор операция',
    subtitle: 'Лучшие лор хирурги',
    link: 'Узнайне подробнее >>',
    image: '/img/bg2.jpg'
  }
])
const videos = ref([
  {
    title: 'Букет на завтрак: чем полезен салат из роз?',
    subtitle: 'Наш врач-эндокринолог, диетолог Севастьянова Наталья готовит салат из лепестков роз в прямом эфире.',
    img: 'https://lorlor.ru/images/ci1155057v480x320s0.jpg'
  },
  {
    title: 'Исследование слуха методом КСВП под наркозом',
    subtitle: '',
    img: 'https://lorlor.ru/images/ci1144151v480x320s0.jpg'
  },
  {
    title: 'Аденоиды: лечить или удалять?',
    subtitle: '',
    img: 'https://lorlor.ru/images/ci1143865v480x320s0.jpg'
  },
  {
    title: 'Как побороть нафтизиновую зависимость?',
    subtitle: 'Какое обследование показано при периодически возникающих головокружениях?',
    img: 'https://lorlor.ru/images/ci1143777v480x320s0.jpg'
  },
  {
    title: 'Доктор Никонов ждет вас и готов помочь!',
    subtitle: 'Развенчиваем основные вопросы, которые могут мешать принятию решения.',
    img: 'https://lorlor.ru/images/ci1143532v480x320s0.jpg'
  }, {
    title: 'Антивозрастные стратегии на страже здоровья и красоты. Пошаговые инструкции.',
    subtitle: 'Вебинар от врача-диетолога, эндокринолога Севастьяновой Натальи Владимировны.',
    img: 'https://lorlor.ru/images/ci1141764v480x320s0.jpg'
  }, {
    title: 'Что такое аденоиды, почему они воспаляются и как проводится аденотомия',
    subtitle: '',
    img: 'https://lorlor.ru/images/ci1141284v480x320s0.jpg'
  }, {
    title: 'Все о гайморотомии',
    subtitle: '',
    img: 'https://lorlor.ru/images/ci1141283v480x320s0.jpg'
  }, {
    title: 'Тонзилэктомия',
    subtitle: '',
    img: 'https://lorlor.ru/images/ci1119605v480x320s0.jpg'
  }
])
const newsClinic = ref([
  {
    title: 'Капли VS спрей',
    subtitle: 'Что подойдет именно вам? Рассказывает отоларинголог клиники - Анатолий Якушев.',
    img: 'https://lorlor.ru/images/ci1156347v480x320s0.jpg',
    date: '01.01.21'
  },
  {
    title: 'Для чего необходимо слухопротезирование?',
    subtitle: 'Как проходит процедура в нашей клинике? Смотрите в новом ролике.',
    img: 'https://lorlor.ru/images/ci1156345v480x320s0.jpg',
    date: '01.01.21'
  },
  {
    title: 'Ребенок боится врачей?',
    subtitle: 'Что с этим делать - рассказывает на видео наш оториноларинголог Рагим Садыхов.',
    img: 'https://lorlor.ru/images/ci1156336v480x320s0.jpg',
    date: '01.01.21'
  },
  {
    title: 'Эпизодически кружится голова?',
    subtitle: 'Какое обследование показано при периодически возникающих головокружениях?',
    img: 'https://lorlor.ru/images/ci1156318v480x320s0.jpg',
    date: '01.01.21'
  },
  {
    title: 'С нами легко, даже если вы приехали оперироваться из другой страны!',
    subtitle: 'Развенчиваем основные вопросы, которые могут мешать принятию решения.',
    img: 'https://lorlor.ru/images/ci1156306v480x320s0.jpg',
    date: '01.01.21'
  }, {
    title: 'Не чистите уши при детях!',
    subtitle: 'И другие способы, как НЕ надо чистить уши. Рассказывает на видео эксперт клиники Якушев Анатолий Андреевич.',
    img: 'https://lorlor.ru/images/ci1156278v480x320s0.jpg',
    date: '01.01.21'
  }, {
    title: 'Когда необходимо делать пункцию?',
    subtitle: 'Об этом рассказал Акопян Карен - отоларинголог клиники.',
    img: 'https://lorlor.ru/images/ci1156277v480x320s0.jpg',
    date: '01.01.21'
  }, {
    title: 'Открытие филиала "Клиники уха, горла и носа" в Сочи состоится 31 июля',
    subtitle: 'Мы открываем новый филиал в городе Сочи.',
    img: 'https://lorlor.ru/images/ci1156221v480x320s0.jpg',
    date: '01.01.21'
  }, {
    title: 'Капли VS спрей',
    subtitle: 'Что подойдет именно вам? Рассказывает отоларинголог клиники - Анатолий Якушев.',
    img: 'https://lorlor.ru/images/ci1156148v480x320s0.jpg',
    date: '01.01.21'
  }
])
const articles = ref([
  {
    title: 'Аденоиды - все о заболевании',
    subtitle: 'Что такое аденоиды, причины, симптомы, степени гипертрофии, методы диагностики и лечения аденоидов.',
    img: 'https://lorlor.ru/images/ci1155716v480x320s0.jpg'
  },
  {
    title: 'Синдром пустого носа',
    subtitle: 'Все о губительном для качества жизни заболевании.',
    img: 'https://lorlor.ru/images/ci1143680v480x320s0.jpg'
  },
  {
    title: 'Фурункул наружного слухового прохода',
    subtitle: 'Фурункул уха - болезненное воспаление волосяного мешочка слухового канала. Симптомы, анатомия и лечение.',
    img: 'https://lorlor.ru/images/ci1143420v480x320s0.jpg'
  },
  {
    title: 'Тиннитус (звон в ушах): все о беспокоящем симптоме',
    subtitle: 'Глубинные причины возникновения в связи с анатомией человека, влияние на психику, грамотный подход к лечению.',
    img: 'https://lorlor.ru/images/ci1142781v480x320s0.jpg'
  },
  {
    title: 'Фармакотерапия никотиновой зависимости',
    subtitle: 'Препараты для лечения табачной зависимости.',
    img: 'https://lorlor.ru/images/ci1141955v480x320s0.jpg'
  }, {
    title: 'Спирометрия - что это и зачем она нужна?',
    subtitle: 'Спирометрия - базисный метод функциональной диагностики внешнего дыхания.',
    img: 'https://lorlor.ru/images/ci1141311v480x320s0.jpg'
  }, {
    title: 'Слизь в горле или синдром постназального затекания',
    subtitle: 'В этой статье объясняются симптомы и причины слизи в носоглотке, а также способы диагностики и лечения.',
    img: 'https://lorlor.ru/images/ci1141194v480x320s0.jpg'
  }, {
    title: 'Экссудативный средний отит у детей. Симптомы, причины и лечение',
    subtitle: 'Негнойное заболевание среднего уха, при котором в среднем ухе происходит накопление патологической жидкости.',
    img: 'https://lorlor.ru/images/ci1106513v480x320s0.jpg'
  }, {
    title: 'Синдром Маршалла (PFAPA синдром)',
    subtitle: 'Что такое синдром Маршалла, клиническая картина, симптомы, лечение.',
    img: 'https://lorlor.ru/images/ci1105933v480x320s0.jpg'
  }
])
/// cards object
const cards = ref([
  {
    id: 1,
    img: 'layout/images/ci1154646v360x540s0.jpg',
    name: 'Галкин Алексей Владимирович',
    expert: 'эксперт по лор-патологиям',
    profession: 'оториноларинголог, ринохирург',
    experience: '16 лет'
  },
  {
    id: 2,
    img: 'layout/images/card 2.jpg',
    name: 'Садыхов Рагим Агаларович',
    expert: 'эксперт по лор-патологиям',
    profession: 'оториноларинголог, ринохирург',
    experience: '8 лет'
  },
  {
    id: 3,
    img: 'layout/images/card 3.jpg',
    name: 'Чуприков Роман Сергеевич',
    expert: 'эксперт по лор-патологиям',
    profession: 'оториноларинголог, ринохирург, фониатр, врач высшей категории',
    experience: '21 лет'
  },
  {
    id: 4,
    img: 'layout/images/card 4.jpg',
    name: 'Оганесян Тигран Сергеевич',
    expert: 'заведующий отделением, экс',
    profession: 'оториноларинголог, ринохирург',
    experience: '20 лет'
  },
  {
    id: 5,
    img: 'layout/images/card 5.jpg',
    name: 'Якушев Анатолий Андреевич',
    expert: 'ведущий врач клиники',
    profession: 'оториноларинголог, отохирург',
    experience: '13 лет'
  },
  {
    id: 6,
    img: 'layout/images/card 6.jpg',
    name: 'Соколова Алла Васильевна',
    expert: 'кандидат медицинских наук',
    profession: 'оториноларинголог, отохирург, врач высшей категории',
    experience: 'свыше 35 лет'
  },
  {
    id: 7,
    img: 'layout/images/card 7.jpg',
    name: 'Старосветский Андрей Борисович',
    expert: 'кандидат медицинских наук',
    profession: 'оториноларинголог, ринохирург',
    experience: '22 лет'
  },
  {
    id: 8,
    img: 'layout/images/card 8.jpg',
    name: 'Мосейкина Лилия Алексеевна',
    expert: 'кандидат медицинских наук',
    profession: 'отохирург',
    experience: '31 лет'
  }
])
</script>
