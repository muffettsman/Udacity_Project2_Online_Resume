
var skillsArr = [
	"Advanced programming and design skills", 
	"Project Management", 
	"Web content management and automation", 
	"Excellent problem solving skills",
	"Strong collaborative skills"
];
	
var bio = {
	"name" : "Derrick Smith",
	"role" : "Web Developer",
	"picture" : "images/pic.jpg",
	"contacts" : {
		"email" : "muffettsman@gmail.com",
		"mobile" : "940-536-9559",
		"github" : "muffettsman",
		"location" : "Denton, TX"
	},
	"skills" : skillsArr,
	"motd" : "Advanced web developer with over a decade of experience in structuring, developing, automating, and implementing interactive websites. Innovative use of the latest technology standards to drive traffic and engage users. Able to complete projects efficiently and exceed expectations providing attractive, user-friendly websites."
}

// add additional values with dot or bracket notation:
bio.qotd = "I choose a lazy person to do a hard job. Because a lazy person will find an easy way to do it. ― Bill Gates";
bio["address"] = "6324 St. James Pl.";

bio.display = function () {
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    $("#header").prepend(formattedRole);

    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    $("#header").prepend(formattedName);

    var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.motd);
	console.log('formattedWelcomeMessage: ' + formattedWelcomeMessage);
    $("#header").append(formattedWelcomeMessage);

    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    $("#topContacts").append(formattedMobile);

    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    $("#topContacts").append(formattedEmail);

    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    $("#topContacts").append(formattedGithub);

    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    $("#topContacts").append(formattedLocation);

    var formattedBioPic = HTMLbioPic.replace("%data%", bio.picture)
    $("#header").append(formattedBioPic);

	if (bio.skills.length > 0) {
		$("#header").append(HTMLskillsStart);
		// loop through array instead of repeating code
		for (var i = 0; i < bio.skills.length; i++) {
			var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
			// append to the div id skill:
			$("#skills").append(formattedSkill);
		}
	}
}

var education = {
    "schools": [
        {
            "name": "Columbia International University",
            "location": "Columbia, SC",
            "years": "1997 - 1999",
            "major": "Biblical Studies"
        },
        {
            "name": "Summerville High School",
            "location": "Summerville, SC",
            "years": "1993 - 1997",
            "major": "High School Diploma"
        }
    ],
	"certifications": [
		{
			"name": "NCCA (Netcool Core Competency Accreditation) Certification",
			"description": "The updated Micromuse Netcool/Core Certified Consultant Program is a training and accreditation program developed especially for Netcool Service Partners (NSPs). Certification requirements are to build a ‘real world’ working system, which demonstrate the level of competence, as well as understanding of the benefits and appropriate use of the variety of features, which are available in Netcool/OMNIbus v7, ISM, SSM, Impact, and Webtop.",
			"url": "http://www-03.ibm.com/certify/certs/24006405.shtml"
		},
		{
			"name": "BCMSN (Building Cisco Multilayer Switched Networks) 640-406",
			"description": "Covers diagramming and documenting a system topology, verifying connectivity at all layers, and restoring optimal baseline service.",
			"url": "http://www.cisco.com/web/learning/le3/current_exams/642-811.html"
		},
		{
			"name": "CCNA (Cisco Certified Network Associate)",
			"description": "Cisco Certified Network Associate (CCNA) Routing and Switching is a certification program for entry-level network engineers that helps maximize your investment in foundational networking knowledge and increase the value of your employer's network. CCNA Routing and Switching is for Network Specialists, Network Administrators, and Network Support Engineers with 1-3 years of work. The CCNA Routing and Switching validates the ability to install, configure, operate, and troubleshoot medium-size routed and switched networks.",
			"url": "http://www.cisco.com/web/learning/exams/list/ccna_composite2.html"
		}
	]
}

education.display = function () {
    $("#education").append(HTMLschoolStart);

    for (school in education.schools) {
        formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
        $(".education-entry:last").append(formattedSchoolName);
        formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].major);
        $(".education-entry:last").append(formattedSchoolDegree);
        formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].years);
        $(".education-entry:last").append(formattedDates);
        formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
        $(".education-entry:last").append(formattedSchoolLocation);
		
        if (education.schools[school].major.length > 0) {
			for (major in education.schools[school].majors) {
				formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors[major]);
				$(".education-entry:last").append(formattedSchoolMajor);
            }

        }
    }

    $(".education-entry:last").append(HTMLonlineClasses);

    for (course in education.certifications) {

        formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.certifications[course].name);
        $(".education-entry:last").append(formattedOnlineTitle);
        formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.certifications[course].description);
        $(".education-entry:last").append(formattedOnlineSchool);
        // formattedOnlineDates = HTMLonlineDates.replace("%data%", education.certifications[course].dates);
        // $(".education-entry:last").append(formattedOnlineDates);
        formattedOnlineUrl = HTMLonlineURL.replace("%data%", education.certifications[course].url);
        $(".education-entry:last").append(formattedOnlineUrl);

    }

}

var work = {
	"jobs": [
		{
			"company" : "AT&T U-Verse",
			"position" : "U-Verse Performance Developer",
			"location" : "Las Colinas, TX",
			"description" : "Maintains and develops the Proactive Analysis Tool which Calculates raw statistical data, creates averaged data summary reporting throughout the entire network hierarchy, and arranges analysis reports in multiple views. This tool supplies statistical analysis for the ELMPro team, VQI and BQI Blitz teams which is critical for isolating RG's BAN's and VRAD's that require troubleshooting and maintenance.",
			"years": 2,
			"dates": "March 2013 – Present"
		},
		{
			"company" : "AT&T U-Verse",
			"position" : "Support Applications Developer",
			"location" : "Las Colinas, TX",
			"description" : "Responsible for building tools to automate the U-Verse Support Application role including various tools, automation scripts, and utilities for TAC team usage on outage management and repair of CVoIP services across the Uverse and IMS platforms.",
			"years": 2,
			"dates": "November 2011 – March 2013"
		},
		{
			"company" : "AT&T U-Verse",
			"position" : "Support Applications",
			"location" : "Las Colinas, TX",
			"description" : "Systems Administrator of core U-Verse System Applications and servers. Monitor various key systems of the platform and alerted necessary groups as well as  setup outage bridges in order to diagnose and repair outages.",
			"years": 4,
			"dates": "November 2007 – November 2011"
		},
		{
			"company" : "SBC Internet Services",
			"position" : "Dedicated Enhanced Service Center Senior Engineer",
			"location" : "Plano, TX",
			"description" : "Develop web applications / internal tools that assist Work Force Managers to keep track and provide notifications of ticket delegation, and metrics.",
			"years": 3,
			"dates": "February 2004 – November 2007"
		},
		{
			"company" : "generationE Consulting",
			"position" : "Lead Technical Support Analyst / Consultant",
			"location" : "Dallas, TX",
			"description" : "Assisted customers with the troubleshooting of network, database, automations, or tools that may negatively impact performance of corporate network with Micromuse/Netcool’s management suite. Problem resolution achieved after thorough analysis then replication of the customer’s environment, tools, platforms, etc. to reproduce the existing problem, then isolate and correct any contributing factors.",
			"years": 1,
			"dates": "January 2003 – February 2004"
		},
		{
			"company" : "Micromuse Inc.",
			"position" : "Technical Support Engineer",
			"location" : "Dallas, TX",
			"description" : "Delivered support for all Omnibus object servers, probes, monitors, as well as Cisco’s Infocenter, a partnership suite with Cisco. Proficient use of Netcool Impact, experience with Server configuration, Policy   Building / troubleshooting, Event Correlation, Fail over, and Performance / Configuration fault finding.  General knowledge of all Netcool products.",
			"years": 1,
			"dates": "March 2001 – November 2002"
		}
	]
}

work.display = function() {
	for (j in work.jobs) {
		$("#workExperience").append(HTMLworkStart);
		
		var formattedCompany = HTMLworkEmployer.replace("%data%", work.jobs[j].company);
		var formattedPosition = HTMLworkTitle.replace("%data%", work.jobs[j].position);
		$(".work-entry:last").append(formattedCompany + formattedPosition);
		
		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[j].dates);
		$(".work-entry:last").append(formattedDates);
		
		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[j].description);
		$(".work-entry:last").append(formattedDescription);
	}   
}

var proj = {
	"project" : [
		{
			"title": "Udacity Portfolio Site",
			"dates": "Feb 2015 - May 2015",
			"description": "Provided with a design mockup as a PDF-file, replicated the design in HTML and CSS. Developed a responsive website that displays images, descriptions and links to each of the portfolio projects you will complete throughout the course of the Front-End Web Developer Nanodegree.",
			"images": [
				"images/Portfolio1_thumbnail.png",
				"images/Portfolio2_thumbnail.png"
			]
		}
	]
}

projects.display = function() {
	for (i in proj.project) {
		console.log('loading: ' + i);
		$("#projects").append(HTMLprojectStart);
		
		var formattedTitle = HTMLprojectTitle.replace("%data%", proj.project[i].title);
		$(".project-entry:last").append(formattedTitle);
		
		var formattedDate = HTMLprojectDates.replace("%data%", proj.project[i].dates);
		$(".project-entry:last").append(formattedDate);
		
		var formattedDescription = HTMLprojectDescription.replace("%data%", proj.project[i].description);
		$(".project-entry:last").append(formattedDescription);
		
		if (proj.project[i].images.length > 0) {
			for (img in proj.project[i].images) {
				var formattedImage = HTMLprojectImage.replace("%data%", proj.project[i].images[img]);
				$(".project-entry:last").append(formattedImage);
			}
		}
	}
} 

// function inName(name) {
//	name = name.trim().split(" ");
//	console.log('name');
	
//	name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
// 	name[1] = name[1].toUpperCase();
	
// 	return name[0] + " " + name[1];
// }
// $("#main").append(internationalizeButton);


$(document).click(function(loc){
	console.log(loc.pageX + ' x ' + loc.pageY);
	// logClicks(loc.pageX, loc.pageY)
});

bio.display();
work.display();
projects.display();
education.display();
$("#mapDiv").append(googleMap);