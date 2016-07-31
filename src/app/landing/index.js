import angular from 'angular';

import {guide} from './guide';
import {guides} from './guides';

export const guidesModule = 'guide';

angular
  .module(guidesModule, [])
  .component('guide', guide)
  .component('guides', guides);
