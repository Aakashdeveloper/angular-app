(function(){
	var app = angular.module('store', []);

	app.controller('StoreController', function(){
		this.products = peoples;
	});
	
	app.controller('PanelController', function(){
		this.tab = 1;
		
		this.selectTab = function(setTab){
			this.tab = setTab;
		}
		this.isSelected = function(checkTab){
			return this.tab === checkTab;
		}
	});

	var peoples = [
		{
			name:"aakash",
			tech: "angularjs",
			exp: 2,
			canWork: true,
			sal: 500,
			desc:"yes i know angular",
			images:[
				{
					full:'IMG_1680.jpg'
				}
			]
			
		},
		{
			name:"kunal",
			tech: "nodejs",
			exp: 4,
			canWork: true,
			sal: 1000,
			desc:"yes i know node",
			images:[
				{
					full:'IMG_1660.jpg'
				}
			]
		}

	];
})();