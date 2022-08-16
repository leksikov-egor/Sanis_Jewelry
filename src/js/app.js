'use strict';

//Внешние библиотеки
import $ from "jquery";
window.$ = $;
// window.jQuery = $;
import 'slick-carousel';
import { Fancybox, Carousel, Panzoom } from "@fancyapps/ui";
import * as noUiSlider from 'noUiSlider/dist/nouislider.js';
import * as maskedinput from 'jquery.maskedinput/src/jquery.maskedinput.js';
import * as inputmask from 'inputmask/dist/inputmask.js';



import * as flsFunctions from './modules/functions.js';
import burger from './modules/burger.js';
import searchHeader from './modules/searchHeader.js';
import searchMobile from './modules/searchMobile.js';
import slickSlider from './modules/slickSlider.js';
import tabs from './modules/tabs.js';
import rangeSlider from './modules/rangeSlider.js';
import spoiler from './modules/spoiler.js';
import inputMaskTel from './modules/inputMaskTel.js';
import formStyler from './modules/formStyler.js';
import showMore from './modules/showMore.js';
import mobileFilter from "./modules/mobileFilter.js";

flsFunctions.isWebp();
burger();
searchHeader();
searchMobile();
slickSlider();
tabs('.map-tabs__nav-btn', '.map-tabs__content-item');
rangeSlider();
spoiler('.catalog--spoiler', '.catalog__spoiler-inner');
spoiler('.header__top-menu-item--spoiler', '.header__mobile-catalog');
formStyler();
tabs('.catalog__tabs-btn', '.catalog__box');
showMore();
mobileFilter();

















