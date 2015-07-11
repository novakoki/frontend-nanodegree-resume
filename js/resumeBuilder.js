/*
This is empty on purpose! Your code to build the resume will go here.
 */
var work = {
	"jobs":[
	{
		"employer":"",
		"title":"",
		"location":"",
		"dates":"",
		"description":""
	}
	],
	"display":function () {
		for(job in work.jobs){
			$('#workExperience').append(HTMLworkStart);
			$('.work-entry:last').append(HTMLworkEmployer.replace('%data%',work.jobs[job].employer)
				+HTMLworkTitle.replace('%data%',work.jobs[job].title));
			$('.work-entry:last').append(HTMLworkLocation.replace('%data%',work.jobs[job].location));
			$('.work-entry:last').append(HTMLworkDates.replace('%data%',work.jobs[job].dates));
			$('.work-entry:last').append(HTMLworkDescription.replace('%data%',work.jobs[job].description));	
		}
	}	
};

var projects = {
	"projects":[
	{
		"title":"Voice-Trip",
		"dates":"2014",
		"description":"An Android app designed for travellers",
		"images":"http://placekitten.com/550/250",
		"url":"https://github.com/novakoki/Voice-Trip"
	},
	{
		"title":"Rhythm-Snake",
		"dates":"2013",
		"description":"A modified classic snake game",
		"images":"http://placekitten.com/g/550/250",
		"url":"https://github.com/novakoki/Rhythm-Snake"
	}
	],
	"display":function () {
		for(project in projects.projects){
			$('#projects').append(HTMLprojectStart);
			$('.project-entry:last').append(HTMLprojectTitle.replace('%data%',projects.projects[project].title).replace('%url%',projects.projects[project].url));
			$('.project-entry:last').append(HTMLprojectDates.replace('%data%',projects.projects[project].dates));
			$('.project-entry:last').append(HTMLprojectDescription.replace('%data%',projects.projects[project].description));
			$('.project-entry:last').append(HTMLprojectImage.replace('%data%',projects.projects[project].images));
		}
	}
};

var bio = {
	"name":"Ziqi",
	"role":"Web Developer",
	"welcomeMessage":"Stay foolish, stay hungry!",
	"biopic":"http://placekitten.com/g/450/400",
	"contacts":{
		"mobile":"123456789",
		"email":"shaoziqi0628@gmail.com",
		"github":"novakoki",
		"twitter":"shaoziqi0628",
		"location":"Hangzhou, China"
	},
	"skills":['C++','HTML/CSS','JavaScript','PHP','Android','Python'],
	"display":function () {
		var header = $('#header');
		var topContacts = $('#topContacts');
		var footerContacts = $('#footerContacts');
		header.prepend(HTMLheaderRole.replace('%data%',bio.role));
		header.prepend(HTMLheaderName.replace('%data%',bio.name));
		topContacts.append(HTMLmobile.replace('%data%',bio.contacts.mobile));
		topContacts.append(HTMLemail.replace('%data%',bio.contacts.email));
		topContacts.append(HTMLgithub.replace('%data%',bio.contacts.github));
		topContacts.append(HTMLtwitter.replace('%data%',bio.contacts.twitter));
		topContacts.append(HTMLlocation.replace('%data%',bio.contacts.location));
		header.append(HTMLbioPic.replace('%data%',bio.biopic));
		header.append(HTMLwelcomeMsg.replace('%data%',bio.welcomeMessage));
		header.append(HTMLskillsStart);
		for(skill in bio.skills)
			$('#skills-h3').append(HTMLskills.replace('%data%',bio.skills[skill]));
		footerContacts.append(HTMLmobile.replace('%data%',bio.contacts.mobile));
		footerContacts.append(HTMLemail.replace('%data%',bio.contacts.email));
		footerContacts.append(HTMLgithub.replace('%data%',bio.contacts.github));
		footerContacts.append(HTMLtwitter.replace('%data%',bio.contacts.twitter));
		footerContacts.append(HTMLlocation.replace('%data%',bio.contacts.location));
	}
};

var education = {
	"schools":[
	{
		"name":"Zhejiang University Of Technology",
		"location":"Hangzhou,China",
		"degree":"BS",
		"majors":"Computer Science",
		"dates":"2013",
		"url":"http://www.zjut.edu.cn"
	}
	],
	"onlineCourses":[
	{
		"title":"JavaScript Basics",
		"school":"Udacity",
		"dates":"2015",
		"url":"https://www.udacity.com/course/javascript-basics--ud804"
	},
	{
		"title":"Intro to HTML and CSS",
		"school":"Udacity",
		"dates":"2015",
		"url":"https://www.udacity.com/course/intro-to-html-and-css--ud304"
	},
	{
		"title":"From Nand to Tetris / Part I",
		"school":"The Hebrew University of Jerusalem",
		"dates":"2015",
		"url":"https://www.coursera.org/course/nand2tetris1"
	},
	{
		"title":"Computer Organization",
		"school":"Peking University",
		"dates":"2015",
		"url":"https://www.coursera.org/course/pkuco"
	},
	{
		"title":"More Details",
		"school":"",
		"dates":"",
		"url":"http://mooc.guokr.com/user/0181324484/"
	},
	],
	"display":function () {
		$('#education').append(HTMLschoolStart);
		var education_entry = $('.education-entry');
		for(school in education.schools){
			education_entry.append(HTMLschoolName.replace('%data%',education.schools[school].name).replace('%url%',education.schools[school].url)
				+HTMLschoolDegree.replace('%data%',education.schools[school].degree));
			education_entry.append(HTMLschoolDates.replace('%data%',education.schools[school].dates));
			education_entry.append(HTMLschoolLocation.replace('%data%',education.schools[school].location));
			education_entry.append(HTMLschoolMajor.replace('%data%',education.schools[school].majors));
		}
		education_entry.append(HTMLonlineClasses);
		for(course in education.onlineCourses){
			education_entry.append(HTMLonlineTitle.replace('%data%',education.onlineCourses[course].title).replace('%url%',education.onlineCourses[course].url)
				+HTMLonlineSchool.replace('%data%',education.onlineCourses[course].school));
			education_entry.append(HTMLonlineDates.replace('%data%',education.onlineCourses[course].dates));
		}
	}
};


bio.display();
work.display();
projects.display();
education.display();
$('#map-div').append(googleMap);

