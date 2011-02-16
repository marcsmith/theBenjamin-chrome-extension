(function() {

	var types = ['html', 'body', 'div', 'pre', 'span', 'code', 'table', 'td', 'p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'];

	var init = function() {
		//change the bg color and text color for our list of nodes
		types.forEach(changeColors);
		//cleanup <a> tags
		fixUpLinks();
	};

	var changeColors = function(type) {
		var nodes = document.getElementsByTagName(type);
		if(nodes) {
			for (var i = 0; i < nodes.length; ++i) {
				var n = nodes[i];
				n.style.backgroundColor	="#fff";
				n.style.background		="#fff";
				n.style.color			="#000";
			}
		}
	};

	var fixUpLinks = function() {
		var as = document.getElementsByTagName('a');
		for (var i = 0; i < as.length; ++i) {
			var a = as[i];
			a.style.color			='#11C';
			a.style.textDecoration	='underline';
			a.style.textShadow		='none';
		}
	};

	return {
		init: init
	};

})().init();
