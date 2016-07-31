import angular from 'angular';

import {sect} from './sect';
import {sects} from './sects';

export const sectsModule = 'sects';

angular
  .module(sectsModule, [])
  .component('fountainSect', sect)
  .component('fountainSects', sects);
