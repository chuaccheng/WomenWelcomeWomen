class GuideController {
  /** @ngInject */
  constructor($http, $scope, $location) {
    this.$http = $http;
    this.$scope = $scope;
    this.$location = $location;
    this.guide = this.$scope.guide;

    this.needs = [ {id: 'food_shopping', name: 'Food shopping', selected: false},
                   {id: 'clothes_shopping', name: 'Clothing shopping', selected: false},
                   {id: 'familyclothes_shopping', name: 'Clothing shopping for kids', selected: false},
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
                   {id: 'australianisms', name: 'How to be an Aussie', selected: false}
                 ];

    this.selection = [];
    this.selectedNeeds = {};

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


    submitForm($http) {
        console.log("controller -> submitForm()");
        console.log(this.$scope.guideDetailsForm.fullName.$modelValue);
        var newcomer = {
          id: this.id
        };
        console.log('selected', this);

        this.needsArray = [];


        console.log('this.selection', this.selection);
        this.$location.path('/guideMatch');

  }

}

export const guides = {
  templateUrl: 'app/guides/guides.html',
  controller: GuideController
};
