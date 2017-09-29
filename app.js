angular.module('app', ['ui.bootstrap']);

angular.module('app').controller('InitCtrl',InitCtrl);

InitCtrl.$inject = ['$uibModal'];

angular.module('app').component('sendRecipientsComponent', {
  template: '<div> holaa {{ $ctrl | json }} </div>',
  bindings: {
    //resolve: '<',
    codprod : '=',
    items : '=',
    fechini : '='
    //item : '='
  },
  controller: function () {
    var $ctrl = this;

    console.log('ctrl', $ctrl);
  }
});

function InitCtrl($modal){
	var self = this;

	self.hola ="hola";
	console.log('log', self);
	self.peru ="Holaa Peru";

	self.resumeData = {};
	self.codProd = "323";
	self.fechIni = "2017 Julio";

	self.openModal = function() {
		//var modalInstance = $uibModal.open({
		var modalInstance = $modal.open({
			//component : 'sendRecipientsComponent', items="$ctrl.message"  fechIni="$ctrl.message"
			template : '<send-recipients-component codprod="$ctrl.codprod" items="$ctrl.message"  fechini="$ctrl.fechIniData"></send-recipients-component>',
			controller : function(){
				console.log('self',self);
				this.codprod = self.codProd;
				this.fechIniData = self.fechIni;
				this.message = self.peru;
				console.log('this modal', this);
			},
			controllerAs : '$ctrl'
			
			/*controller : function(){
				vm.peru = 'hola'; 
			},
			controllerAs :'$ctrl'
			*/

			/*
			resolve : {
				items : function () {
					return ["hola", "amigo"];
				},
				item : function() {
					return "golang";
				}
			}
			*/
		});
	}
}



