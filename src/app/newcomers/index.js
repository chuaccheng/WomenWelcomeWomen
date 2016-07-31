import angular from 'angular';

import {newcomer} from './newcomer';
import {newcomers} from './newcomers';

export const newcomersModule = 'newcomer';

angular
  .module(newcomersModule, [])
  .component('newcomer', newcomer)
  .component('newcomers', newcomers);
