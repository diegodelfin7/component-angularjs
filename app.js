angular.module('app', ['ui.bootstrap']);

angular.module('app').controller('InitCtrl',InitCtrl);

InitCtrl.$inject = ['$uibModal'];

angular.module('app').component('sendRecipientsComponent', {
  template: '<div> holaa</div>',
  bindings: {
    resolve: '<',
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

	self.openModal = function() {
		//var modalInstance = $uibModal.open({
		var modalInstance = $modal.open({
			component : 'sendRecipientsComponent',
			resolve : {
				items : function () {
					return ["hola", "amigo"];
				}
			}
		});
	}
}



