import Vue from 'vue';
import Swiper from 'swiper';
import { Swiper as SwiperClass, Navigation, Pagination } from 'swiper/core';
import 'swiper/swiper-bundle.min.css';

// Configure Swiper to use modules
SwiperClass.use([Navigation, Pagination]);

Vue.prototype.$swiper = Swiper;
