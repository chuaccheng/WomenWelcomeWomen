import angular from 'angular';

import {tech} from './tech';
import {techs} from './techs';
import {sect} from '../sects/sect';
import {sects} from '../sects/sects';
import {newcomer} from '../newcomers/newcomer';
import {newcomers} from '../newcomers/newcomers';
import {newcomerMatch} from '../newcomerMatches/newcomerMatch';
import {newcomerMatches} from '../newcomerMatches/newcomerMatches';
import {guideMatch} from '../guideMatches/guideMatch';
import {guideMatches} from '../guideMatches/guideMatches';
import {guide} from '../guides/guide';
import {guides} from '../guides/guides';

export const techsModule = 'techs';

angular
  .module(techsModule, [])
  .component('fountainTech', tech)
  .component('fountainTechs', techs)
  .component('fountainSect', sect)
  .component('fountainSects', sects)
  .component('newcomer', newcomer)
  .component('newcomers', newcomers)
  .component('newcomerMatch', newcomerMatch)
  .component('newcomerMatches', newcomerMatches)
  .component('guideMatch', guideMatch)
  .component('guideMatches', guideMatches)
  .component('guide', guide)
  .component('guides', guides)
;
