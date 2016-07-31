import angular from 'angular';

import {newcomerMatch} from './newcomerMatch';
import {newcomerMatches} from './newcomerMatches';

export const newcomerMatchesModule = 'newcomerMatch';

angular
  .module(newcomerMatchesModule, [])
  .component('newcomerMatch', newcomerMatch)
  .component('newcomerMatches', newcomerMatches);
