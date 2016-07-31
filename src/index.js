import angular from 'angular';

import {techsModule} from './app/techs/index';
import {sectsModule} from './app/sects/index';
import {newcomersModule} from './app/newcomers/index';
import 'angular-ui-router';
import routesConfig from './routes';

import {main} from './app/main';
import {sector} from './app/sector';
import {newcomer} from './app/newcomer';
import {newcomerMatch} from './app/newcomerMatch';
import {guide} from './app/guide';
import {guideMatch} from './app/guideMatch';
import {landing} from './app/landing';
import {header} from './app/header';
import {title} from './app/title';
import {titleCreateProfile} from './app/titleCreateProfile';
import {titleCreateGuide} from './app/titleCreateGuide';
import {footer} from './app/footer';

import './index.scss';

angular
  .module('app', [techsModule, 'ui.router'])
  .config(routesConfig)
  .component('app', main)
  .component('app2', sector)
  .component('app3', newcomer)
  .component('app4', guide)
  .component('app5', landing)
  .component('app6', newcomerMatch)
  .component('app7', guideMatch)
  .component('fountainHeader', header)
  .component('fountainTitle', title)
  .component('titleCreateProfile', titleCreateProfile)
  .component('titleCreateGuide', titleCreateGuide)
  .component('fountainFooter', footer);
