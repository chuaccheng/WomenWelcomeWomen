class SectsController {
  /** @ngInject */
  constructor($http) {
    $http
      .get('app/techs/techs.json')
      .then(response => {
        this.techs = response.data;
      });
  }
}

export const sects = {
  templateUrl: 'app/sects/sects.html',
  controller: SectsController
};
