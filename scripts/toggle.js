var text_color =       "#bbbbbb";
var background_color = "#332233";
var text_color_light = "#111";
var background_color_light = "#dadada";

function change_theme(){
	if (document.getElementsByTagName('body')[0].classList.contains('dark-theme')){
		localStorage['svok33-github-theme'] = 'light';
		document.getElementById('svok33-change-theme').textContent = "Dark theme"
	}
	else{
		localStorage['svok33-github-theme'] = 'dark';
		document.getElementById('svok33-change-theme').textContent = "Light theme"
	}

	apply_theme();
}

function apply_theme(){
	//since default is dark theme
	if(localStorage['svok33-github-theme'] == 'light'){
		document.getElementsByTagName('body')[0].classList.remove('dark-theme');
		document.getElementsByTagName('body')[0].classList.add('light-theme');

		//set background colour for triggered hamburger menu
		//there is only one such div whose background colour needs to be changed
		try{
			document.getElementsByClassName('trigger')[0].style.backgroundColor = background_color_light;
			//somehow with an updated version of the bundle, the header colour doesn't change properly, so change it manually
			links = document.getElementsByClassName('site-header')[0].getElementsByTagName('a');
			for(var l in links){
				links[l].style.color = text_color_light;
			}
		}
		catch{
			;
		}

	}
	else{
		document.getElementsByTagName('body')[0].classList.remove('light-theme');
		document.getElementsByTagName('body')[0].classList.add('dark-theme');

		try{
			document.getElementsByClassName('trigger')[0].style.backgroundColor = background_color;
			links = document.getElementsByClassName('site-header')[0].getElementsByTagName('a');
			for(var l in links){
				links[l].style.color = text_color;
			}
		}
		catch{
			;
		}
	}
}
