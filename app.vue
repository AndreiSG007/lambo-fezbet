<template>
  <div class="main-container">
    <div class="main-wrapper">
      <img
        src="/assets/Logo_Fez.svg"
        alt=""
        class="main-logo"
        w="190"
        h="36"
      />
      <div class="main-texts">
        <h2>{{ $t("lastManStanding") }}</h2>
        <h1>{{ $t("lamborghiniHuracan") }}</h1>
      </div>
      <div class="counter-container">
        <h3>{{ $t("promotionStartsIn") }}</h3>
        <no-ssr>
          <vue-countdown
            :time="time"
            v-slot="{ days, hours, minutes, seconds }"
          >
            <div class="counter-container_labels">
              <div class="counter-container_labels-container">
                <p class="counter-container_labels-container-number day">
                  {{ days }}
                </p>
                <p class="counter-container_labels-container-text">
                  {{ $t("days") }}
                </p>
              </div>
              <div class="counter-container_labels-container">
                <p class="counter-container_labels-container-number hour">
                  {{ hours }}
                </p>
                <p class="counter-container_labels-container-text">
                  {{ $t("hours") }}
                </p>
              </div>
              <div class="counter-container_labels-container">
                <p class="counter-container_labels-container-number minute">
                  {{ minutes }}
                </p>
                <p class="counter-container_labels-container-text">
                  {{ $t("minutes") }}
                </p>
              </div>
              <div class="counter-container_labels-container">
                <p class="counter-container_labels-container-number seconds">
                  {{ seconds }}
                </p>
                <p class="counter-container_labels-container-text">
                  {{ $t("seconds") }}
                </p>
              </div>
            </div>
          </vue-countdown>
        </no-ssr>
      </div>
      <div @click="casinoUrl" click="" id="play-now">
        <button class="main-button">{{ $t("playNow") }}</button>
      </div>
      <div>
        <img
          src="/assets/header_group_Fez.png"
          format="webp"
          alt=""
          class="main-image"
        />
      </div>

      <div class="steps">
        <h2 class="steps-title">{{ $t("howToWIN") }}</h2>
        <div class="steps-container">
          <div class="step">
            <img src="/assets/1.svg" alt="" class="step-image" />
            <h2>{{ $t("placeAtLeast") }}</h2>
          </div>
          <div class="step">
            <img src="/assets/2.svg" alt="" class="step-image" />
            <h2>{{ $t("keepDoingThatUntil") }}</h2>
          </div>
          <div class="step">
            <img src="/assets/3.svg" alt="" class="step-image" />
            <h2>{{ $t("hopOnThisAmazingLambo") }}</h2>
          </div>
        </div>
      </div>

      <div class="bottom-gallery">
        <h2 class="bottom-gallery-text">{{ $t("thePrizeInAction") }}</h2>
        <iframe
          src="https://www.youtube.com/embed/u8Oqaxf4r94"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>

        <div class="swiper-container">
          <swiper
            :slidesPerView="2"
            :space-between="20"
            class="gallery-swiper"
            navigation
            :breakpoints="breakpoints"
            :modules="[Controller]"
            @swiper="setControlledSwiper"
          >
            <swiper-slide
              v-for="(src, index) in imgs"
              :key="index"
              class="pic swiper-container-1"
              @click="() => showImg(index)"
            >
              <img :src="src" format="webp" />
            </swiper-slide>
          </swiper>
          <div class="arrows-container">
            <button @click="controlledSwiper.slidePrev()">
              <img src="/assets/left-arrow.svg" />
            </button>
            <button @click="controlledSwiper.slideNext()">
              <img src="/assets/right-arrow.svg" />
            </button>
          </div>
        </div>
        <vue-easy-lightbox
          :visible="visibleRef"
          :imgs="imgs"
          :index="indexRef"
          @hide="onHide"
        ></vue-easy-lightbox>

        <div class="modal-overlay" v-show="showModal">
          <div class="modal">
            <h2>{{ $t("termsAndConditions") }}</h2>
            <p>1.{{ $t("thePromotionStarts") }}</p>
            <p>2.{{ $t("thePromotionIsOpen") }}</p>
            <p>3.{{ $t("onceThePromotionStarts") }}</p>
            <p>4.{{ $t("inOrderToParticipateIn") }}</p>
            <p>5.{{ $t("theSystemTimeisInGMT") }}</p>
            <p>6.{{ $t("atTheEndOfEachMonth") }}</p>
            <p>7.{{ $t("theBigPrizeIsA2021") }}</p>
            <p>8.{{ $t("theWinningPlayerShould") }}</p>
            <p>9.{{ $t("importTaxesAnd") }}</p>
            <p>10.{{ $t("ifThePromotionReaches") }}</p>
            <p>11.{{ $t("theCurrencyEquivalentOf") }}</p>
            <p>12.{{ $t("theSiteGeneral") }}</p>
            <p>13.{{ $t("aPlayerCanWinTheIphone") }}</p>
            <p>14.{{ $t("theMinimunAcumulated") }}</p>
            <p>15.{{ $t("weUnderstandThatAnything") }}</p>
            <p>16.{{ $t("thisEssentiallyMeans") }}</p>
            <div class="close">
              <button @click="closeModal">X</button>
            </div>
          </div>
        </div>

        <footer>
          <button @click="openModal">
            <u>{{ $t("termsAndConditions") }}</u>
          </button>
          <p>
            {{ $t("casinolyIsOperated") }}
          </p>
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import VueEasyLightbox from "vue-easy-lightbox";
import { Swiper, SwiperSlide } from "swiper/vue";
import VueCountdown from "@chenfengyuan/vue-countdown";
import { Controller } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default defineComponent({
  components: {
    VueEasyLightbox,
    Swiper,
    SwiperSlide,
    VueCountdown,
  },
  setup() {
    const visibleRef = ref(false);
    const indexRef = ref(0);
    const showModal = ref(false);
    const mySwiper = ref();

    const openModal = () => {
      showModal.value = true;
      document.body.style.overflow = "hidden";
    };

    const closeModal = () => {
      showModal.value = false;
      document.body.style.overflow = "auto";
    };
    const breakpoints = {
      600: {
        slidesPerView: 3,
      },
    };

    const controlledSwiper = ref(null);
    const setControlledSwiper = (swiper) => {
      controlledSwiper.value = swiper;
    };

    const now = new Date().getTime();
    const newYear = new Date("April 28, 2023 00:00:00").getTime();
    const imgs = [
      "/mateadmin/fezbet/assets/poze/a0.jpg",
      "/mateadmin/fezbet/assets/poze/a1.jpg",
      "/mateadmin/fezbet/assets/poze/a2.jpg",
      "/mateadmin/fezbet/assets/poze/a3.jpg",
      "/mateadmin/fezbet/assets/poze/a4.jpg",
      "/mateadmin/fezbet/assets/poze/a5.jpg",
      "/mateadmin/fezbet/assets/poze/a6.jpg",
      "/mateadmin/fezbet/assets/poze/a7.jpg",
      "/mateadmin/fezbet/assets/poze/a8.jpg",
      "/mateadmin/fezbet/assets/poze/a9.jpg",
    ];
    const showImg = (index) => {
      indexRef.value = index;
      visibleRef.value = true;
    };

    const onHide = () => (visibleRef.value = false);

    const route = useRoute();
    const casinoUrl = () => {
      let url = 'https://fezbet.com/en';
      if (route.query.btag) {
        url += `?btag=${route.query.btag}`;
      }
      console.log(url);
      window.open(url, '_blank');  
    };

    return {
      visibleRef,
      indexRef,
      imgs,
      showImg,
      onHide,
      showModal,
      breakpoints,
      time: newYear - now,
      mySwiper,
      Controller,
      controlledSwiper,
      setControlledSwiper,
      openModal,
      closeModal,
      casinoUrl,
    };
  },
});
</script>
