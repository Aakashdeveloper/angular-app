(function(){
	var app = angular.module('store', []);

	app.controller('StoreController', function(){
		this.products = peoples;
	});
	
	/*app.controller('PanelController', function(){
		this.tab = 1;
		
		this.selectTab = function(setTab){
			this.tab = setTab;
		}
		this.isSelected = function(checkTab){
			return this.tab === checkTab;
		}
	});*/

	app.controller('ReviewController', function(){
		this.review = {};
		
	  this.addReview = function(people){
		people.reviews.push(this.review);
		this.review= {};
	  };
	});
	
	app.directive('productTitle', function(){
		return{
			restrict: "E", /*here a is for attribute it can be E for element*/
			templateUrl:'product-title.html'
		};
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
			],
			reviews:[
				{
					
					body:"yes i know",
					author:"aakashhanda.me"
				},
				{
					
					body:"No i know",
					author:"aakashhanda.me"
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
			],
			reviews:[
				{
					
					body:"what",
					author:"aakashhanda.me"
				},
				{
					
					body:"why",
					author:"aakashhanda.me"
				}
			]
		}

	];
})();