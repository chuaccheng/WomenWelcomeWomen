import angular from 'angular';

import {guideMatch} from './guideMatch';
import {guideMatches} from './guideMatches';

export const guideMatchesModule = 'guideMatch';

angular
  .module(guideMatchesModule, [])
  .component('guideMatch', guideMatch)
  .component('guideMatches', guideMatches);
