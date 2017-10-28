
$(function() {
	var currentView = "world";

	var ui = ['asia', 'europe', 'australia', 'africa', 'north_america', 'south_america'];

	var pinId_suffex = 'pin';

	var countries = {
		'asia':['china','uae'],
		'europe':['uk'],
		'australia':['austCountry'],
		'africa':['egypt'],
		'north_america':['usa'],
		'south_america':['brazil']
	}

	var titles = {
		'china': 'China',
		'uae': 'UAE',
		'uk': 'United Kingdom',
		'austCountry': 'Australia',
		'egypt': 'Egypt',
		'usa': 'USA',
		'brazil': 'Brazil',
	}

	var $svg = $('#map_svg');

	var viewBox = {
		'asia':"280 90 240 140",
		'europe':"230 0 280 170",
		'australia':"430 200 80 90",
		'africa':"215 135 130 130",
		'north_america':"0 -10 270 210",
		'south_america': "125 170 100 140"
	};

	function changeViewOnClick( ui ){
		_.each(ui, function(elm){
			$('#' + elm).on( 'click',
				function() {
					if (currentView === "world"){

						// set View
						setViewBox(viewBox[elm]);

						// highlight active
						highlightActive(elm);

						// set current view
						currentView = elm;

						// Content Title
						$("#content").html(elm.replace('_', ' '));

						_.each(countries[elm], function(country) {
							$("#countries_list").append("<li>" + titles[country] + "</li>");
						});

						// show aside info
						$("#info_aside").show();

						// binde model events
						bindeModalEvents(countries[elm]);
					}
				}
			);
		});
	}

	function bindeModalEvents( ui ){
		_.each(ui, 
			function(val){
				$('#' + val).leanModal({ top : 200, closeButton: ".modal_close" })
			}
		);
	}

	function setViewBox(params){
		$svg.attr('viewBox', params);
	}

	function highlightActive(elm){
		_.each(
			_.reject(ui, function(t) { return t === elm }),
			function(elmToHide) {
				$('#' + elmToHide).addClass('vague');
			}
		)
		$('#' + elm).removeClass('vague');
	}

	function init() {
		changeViewOnClick(ui);

		$(".back_btn").click(resetViewBox);
	}

	function resetViewBox() {
		$svg.attr('viewBox', '0 0 541.27698 314.38699');
		$('.vague').removeClass('vague');
		_.each(countries[currentView],function(val) {
			$('#' + val).unbind();
		})
		currentView = "world";
		$("#countries_list").empty();
		$("#info_aside").hide();
	}

	init();


})