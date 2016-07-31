class CreateNewcomerController {
  /** @ngInject */
  constructor($http, $scope, $location) {
    this.$http = $http;
    this.$scope = $scope;
    this.$location = $location;
    this.newcomer = this.$scope.newcomer;


    this.needs = [ {id: 'food_shopping', name: 'Food shopping', selected: false},
                   {id: 'clothes_shopping', name: 'Clothing shopping for me', selected: false},
                   {id: 'familyclothes_shopping', name: 'Clothing shopping for my family', selected: false},
                   {id: 'furniture_shopping', name: 'Furniture and home goods shopping', selected: false},
                   {id: 'beauty', name: 'Makeup, nails, hair and beauty', selected: false},
                   {id: 'rental_search', name: 'Finding a place to rent', selected: false},
                   {id: 'buying_search', name: 'Finding a place to buy', selected: false},
                   {id: 'gettingaround_public', name: 'Getting around by public transport', selected: false},
                   {id: 'gettingaround_car', name: 'Getting around by car', selected: false},
                   {id: 'gettingaround_bike', name: 'Getting around by bike', selected: false},
                   {id: 'gettingtoknow_nbhd', name: 'Getting to know a new neighbourhood', selected: false},
                   {id: 'drivers_license', name: 'Getting a drivers license', selected: false},
                   {id: 'prof_mentor', name: 'Professional mentorship', selected: false},
                   {id: 'english', name: 'English language practice', selected: false},
                   {id: 'australianisms', name: 'What is vegemite and are drop bears dangerous?', selected: false}
                 ];

    this.selection = [];
    this.selectedNeeds = {};






    //$http
    //  .post('app/newcomers/newcomerData.json', this.newcomer)
    //  .then(response => {
    //    this.techs = response.data;
    //  });
  }

   toggleSelection(needsName) {
     console.log('needsName', needsName);
     var idx = this.selection.indexOf(needsName);

     // is currently selected
     if (idx > -1) {
       this.selection.splice(idx, 1);
     } else {
       this.selection.push(needsName);
     }
   }


    submitForm($http, $location) {
        console.log("controller -> submitForm()");
        console.log(this.$scope.newcomerDetailsForm.fullName.$modelValue);
        var newcomer = {
          id: this.id
        };
        console.log('selected', this);

        this.needsArray = [];
       /* angular.forEach(this.needs, function(need){
            if (!!this.needs.selected) this.needsArray.push(need.id);
        });*/
/*    <input type="checkbox" ng-model="needs.selected" value={{need.id}} />{{need.name}}*/
    /*<input type="checkbox" ng-model="album.selected" value={{album.name}} />*/

        /*angular.forEach($scope.albums, function(album){
            if (!!album.selected) $scope.albumNameArray.push(album.name);
        })*/

        console.log('this.selection', this.selection);
        this.$location.path('/newcomerMatch');
    //this.$http
    //    .get('app/techs/techs.json')
    //    .then(response => {
    //      this.techs = response.data;
    //    });
   /* this.$http
      .post('app/newcomers/newcomerData.json', newcomer)
    .success(function(data, status, headers, config) {
      // this callback will be called asynchronously
      // when the response is available
    });*/

    //if (self.loadingAddressDetails) {
    //  throw "Can't submit while loading address details";
    //}
    //
    //if (this.order.hasEmptyLastAdditionalPerson()) {
    //  this.order.removeLastAdditionalPerson();
    //}
    //
    //this.saveOrder();
    //
    //this.$location.path('/verify');
  }

}

export const newcomers = {
  templateUrl: 'app/newcomers/newcomers.html',
  controller: CreateNewcomerController
};
