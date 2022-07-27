'use strict';

//Внешние библиотеки
import $ from "jquery";
window.$ = $;
import 'slick-carousel';
import { Fancybox, Carousel, Panzoom } from "@fancyapps/ui";

import * as flsFunctions from './modules/functions.js';
import burger from './modules/burger.js';
import spoiler from './modules/spoiler.js';
import searchHeader from './modules/searchHeader.js';
import searchMobile from './modules/searchMobile.js';
import slickSlider from './modules/slickSlider.js';
import tabs from './modules/tabs.js';

flsFunctions.isWebp();
burger();
spoiler();
searchHeader();
searchMobile();
slickSlider();
tabs();




