function loadContact(arr) {
	var innerHTML='';
	for(i=0;i<arr.length;i++) {
		innerHTML += convertElement(arr[i]);
	}
	$('#contact').html(innerHTML);
}

function loadHello(hello) {
	var helloInnerHTML='';
	for(i=0;i<hello.length;i++) {
		helloInnerHTML += hello[i]
	}
	$('#helloText').html(helloInnerHTML);
}

function loadSkills2(skills) {
		var i=0,j;
		var innerHTML='';
		var row = '';
		while(i<skills.length){
			for(j=i;j<i+6&&j<skills.length;j++){

				if (skills[j].type) {
					row += convertElement(skills[j]);;
				} else if (skills[j].icon) {
					row += '<div class="skill"><img src="' + skills[j].icon +'"><span>'+skills[j].name+'</span></div>';;
				} else {
					row += '<div class="skill"><svg viewBox="0 0 128 128"><path d="'+skills[j].svg+'"></path></svg><span>'+skills[j].name+'</span></div>';;
				}

			}
			innerHTML+=row;
			i=j;
		}
		$('#skills').html(innerHTML);
}

function loadSkills(skills) {
	var i=0;
	var innerHTML='';
	var skillGroup='';
	var row = '';
	var skill = null;
	while(i<skills.length){
		skillGroup = '<h3>' + skills[i].name + '</h3>';
		for(var j=0; j<skills[i].skills.length; j++){
			skill = skills[i].skills[j];
			if (skill.svg) {
				row = '<div class="skill"><svg viewBox="0 0 128 128"><path d="' + skill.svg + '"></path></svg><span>' + skill.name + '</span></div>';
			} else if (skill.icon) {
				row = '<div class="skill"><img src="' + skill.icon + '"/><span>' + skill.name + '</span></div>';
			} else {
				row = '<div class="skill"><svg viewBox="0 0 128 128"></svg><span>' + skill.name + '</span></div>';
			}
			skillGroup += row;
		}
		innerHTML += '<div class="skill_group">' + skillGroup + '</div>'
		i++;
	}
	$('#skills').html(innerHTML);
}

{/* <div class="skill">
	<svg viewBox="0 0 128 128">
		<path d="M124.737 58.378l-55.116-55.114c-3.172-3.174-8.32-3.174-11.497 0l-11.444 11.446 14.518 14.518c3.375-1.139 7.243-.375 9.932 2.314 2.703 2.706 3.461 6.607 2.294 9.993l13.992 13.993c3.385-1.167 7.292-.413 9.994 2.295 3.78 3.777 3.78 9.9 0 13.679-3.78 3.78-9.901 3.78-13.683 0-2.842-2.844-3.545-7.019-2.105-10.521l-13.048-13.048-.002 34.341c.922.455 1.791 1.063 2.559 1.828 3.778 3.777 3.778 9.898 0 13.683-3.779 3.777-9.904 3.777-13.679 0-3.778-3.784-3.778-9.905 0-13.683.934-.933 2.014-1.638 3.167-2.11v-34.659c-1.153-.472-2.231-1.172-3.167-2.111-2.862-2.86-3.551-7.06-2.083-10.576l-14.313-14.313-37.792 37.79c-3.175 3.177-3.175 8.325 0 11.5l55.117 55.114c3.174 3.174 8.32 3.174 11.499 0l54.858-54.858c3.174-3.176 3.174-8.327-.001-11.501z"></path>
	</svg>
	<span>Git</span>
</div> */}

function loadProjects(projects) {
	projects.sort(function(a,b){
		return a.sn-b.sn;
	});
	var i=0,j;
	var projectsInnerHTML='';
	for(i=0;i<projects.length;i++){
		project = ' <div class="row project"><div class="col m6 s12"><div class="row"><span class="title">'+projects[i].projectTitle+'</span><hr></div><div class="row"><span>'+projects[i].periodStart+' - '+projects[i].periodEnd+'</span></div>';
		toolsUsed = '<div class="row">Tools Used:&nbsp';
		for(j=0;j<projects[i].toolsUsed.length;j++){
			toolsUsed+='<span>'+projects[i].toolsUsed[j]+'</span>&nbsp';
		}
		toolsUsed+='</div>';
		project+=toolsUsed;
		tags = '<div class=row">'
		for(j=0;j<projects[i].tags.length;j++)tags+='<span class="tag">#'+projects[i].tags[j]+'</span>&nbsp';
		tags+='<a href="'+projects[i].link+'" target="_blank"><i class="material-icons right">language</i></a></div>';
		project+=tags;
		project+='</div><div class="col m6 s12 details">'+projects[i].shortInfo+'</div></div>';
		projectsInnerHTML+=project;
	}
	$('#projects').html(projectsInnerHTML);
}

function loadWorks(works) {
	works.sort(function(a,b){
		return a.sn-b.sn;
	});
	var i;
	var worksInnerHTML = '';
	for(i=0;i<works.length;i++){
		worksInnerHTML+='<div class="row work"><div class="col m6 s12"><div class="row title">'+works[i].workPosition+'<hr></div><div class="row">'+ works[i].periodStart+ '-' + works[i].periodEnd +'</div><div class="row"><a href="'+works[i].link+'">'+works[i].organisation+'</a></div></div><div class="col m6 s12 details"><div class="row">'+works[i].experience+'</div></div></div>';
	}
	$('#experience').html(worksInnerHTML);
}

function loadEducations(educations) {
	var i=0,j;
	var educationsInnerHTML = '';
	for(i=0;i<educations.length;i++){
		education = '<div class="row education"><div class="col m6 s12">					' +
					'<div class="row title">'+educations[i].course+'<hr></div>' +
					'<div class="row">'+educations[i].periodStart+'-'+educations[i].periodEnd+'</div>' +
					'<div class="row">'+educations[i].inst+'</div>		' +
					'<div class="row">'+educations[i].course+'</div>		' +
					'<div class="row">Scored: '+educations[i].score+'</div></div>' +
					'<div class="col m6 s12 details"><ul class="collapsible" data-collapsible="accordion"><li><div class="collapsible-header"><i class="material-icons">view_list</i>Completed following Core courses</div><div class="collapsible-body">';
		var courses = educations[i].courses;
		courses.sort(function(a,b){
			return a.sn-b.sn;
		});
		var coursesInnerHTML = '';
		for(j=0;j<courses.length;j++){
				coursesInnerHTML+='<div class="row"><div class="col m2 s2">'+courses[j].courseCode+'</div><div class="col m8 s8">'+courses[j].courseName+'</div><div class="col m2 s2">'+courses[j].courseScore+'</div></div>';
		}
		education+=coursesInnerHTML;
		education +='</div></li></ul></div></div>';
		educationsInnerHTML+=education;
	}
	$('#education').html(educationsInnerHTML);
}

function loadLinks(profileLinks) {
	var i=0,j;
	profileLinks.sort(function(a,b){
		return a.sn-b.sn;
	});
	var profileLinksInnerHTML = '';
	while(i<profileLinks.length){
		profileLinksInnerHTML+='<div class="row">'
		for(j=i;j<profileLinks.length&&j<i+5;j++){
			if (profileLinks[j].enabled) {
				profileLinksInnerHTML+='<div class="col s2">													<a href="'+profileLinks[j].link+'" target="_blank" >					<img src="img/'+profileLinks[j].icon+'" alt="'+profileLinks[j].name+'">															</a></div>';
			}
		}
		profileLinksInnerHTML+='</div>';
		i=j;
	}
	$('#links').html(profileLinksInnerHTML);
}

function loadLikes(likes) {
	likes = likes.sort(function(a,b){
		return a.sn-b.sn;
	});
	var i;
	var likesInnerHTML = '<h4>I like</h4>';
	for(i=0;i<likes.length;i++){
		likesInnerHTML+='<object type="image/svg+xml" data="img/'+likes[i].icon+'">'+likes[i].name+'</object>'
	}
	$('#likes').html(likesInnerHTML);
}

function loadPages(pages) {
	var i=0,j;
	pages.sort(function(a,b){
		return a.sn-b.sn;
	});
	var menu_html = '';
	var html = '';
	while(i < pages.length){
		for(j = i; j < pages.length && j < i + 5; j++) {
			var page = pages[j]
			if (!page.enabled) continue;
			var tab_text = page.tab.replace(/_/g, ' ');
			menu_html += '<li class="tab col s2"><a href="#' + page.tab + '">' + tab_text + '</a></li>'
			var el = $('<div id="' + page.tab + '" class="info col s12 m12 l6 x4"></div>');

			var innerHTML = "<h4 style='text-align: left'>" + page.title + "</h4>";
			for(var i = 0; i < page.text.length; i++) {
				innerHTML += page.text[i] + "\n";
			}

			el.html(innerHTML);
			el.appendTo($('div#pages'));
			html += el.html();
		}
		html+='</div>';
		i=j;
	}
	$('ul#tabs').html(menu_html);
}

function convertElement(element) {
	if (element.type == "h1") {
		return "<h1>" + element.text + "</h1>";
	} else if (element.type == "h2") {
		return "<h2>" + element.text + "</h2>";
	} else if (element.type == "h3") {
		return "<h3>" + element.text + "</h3>";
	} else if (element.type == "link") {
		var t = (element.link_new_window) ? ' target="_blank"' : '';
		return '<a href="' + element.link + '"' + t + '>' + element.text + '</a>';
	} else if (element.type == "br") {
		return "<br />";
	} else if (element.text) {
		return element.text
	} else {
		return element;
	}
}

// swal({
// 		title:"Hello, World!",
// 		text:"Hello Visitor, you have landed upon little webspace of Dirk.",
// 		confirmButtonColor:"#1f1f1f"
// 	});

$.get("js/profile.json",
	function(profile, status){
		var pInfo = profile.personalInfo;
		$('title').html(pInfo.nick+'|Portfolio');
		$('#name').html(pInfo.fname+' '+pInfo.lname+'<sub>&lt'+pInfo.nick+'/&gt</sub>');
		$('#image img').attr('src','img/'+pInfo.myimg);
		$('#summary p').html(profile.summary);
		// Typed.new('#summary p', {
		// 	strings: [profile.summary],
		// 	typeSpeed: 0,
		// 	cursorChar:"",
		// 	loop:false
		// });

		loadContact(profile.contact);
		// loadHello(profile.hello);
		// loadLikes(profile.likes);
		// loadLinks(profile.profileLinks);
		// loadSkills(profile.skills);
		// loadProjects(profile.projects);
		// loadWorks(profile.works);
		// loadEducations(profile.education);
});

$.get("js/architect.json",
	function(profile, status){
		console.log('architect.json', profile);
		$('#contact2').html(profile.contact2);
		loadPages(profile.pages);
	});

function onBodyLoad(){

}

$(document).ready(function(){
	$('.collapsible').collapsible({
	  'accordion' : true
	});
	var tabs = $('#tabs').tabs({ 'swipeable': false })
	$('.info').perfectScrollbar();
	onWindowResize();

	// tabs.select('#education');
});

$(window).resize(onWindowResize);

function onWindowResize(){
	//$('#skills div.m2').css('height',$('#skills div.m2').css('width'));
	$('#image img').css('height',$('#image img').css('width'));
}

function reloadPage() {
	setTimeout(function(){
		window.location.reload(1);
	 }, 30000);
}