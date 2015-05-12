// speed of light = 299792458 meters/second
// 1 meter = 100 centimeters
// 1 nanosecond = 1.0/1000000000 seconds
// $("#main").append((299792458*100)* 1 / 1000000000);

var firstname = 'derrick';
var age = 35;
console.log(firstname + ' ' + age);

var email = 'muffettsman@yahoo.com';
var newEmail = email.replace("yahoo", "gmail")
console.log(email);
console.log(newEmail);

// the helper.js file has saved variable names and %data% 
// placeholders that we can easily update with our own data:
var name = "Derrick Smith";
var formattedName = HTMLheaderName.replace("%data%", name);

var role = "Web Developer";
var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

var skillsArr = [
	"Advanced programming and design skills", 
	"Project Management", 
	"Web content management and automation", 
	"Excellent problem solving skills",
	"Strong collaborative skills"];
$("#main").append(skillsArr);
console.log("length" + skillsArr.length);

// Declare an Object
var bio = {
	"name" : "Derrick",
	"role" : "Web Developer",
	"picture" : "images/pic.jpg",
	"contacts" : {
		"email" : "muffettsman@gmail.com",
		"mobile" : "940-536-9559",
		"github" : "muffettsman"
		"location" : "Denton, TX"
	},
	"skills" : skillsArr,
	"motd" : "Advanced web developer with over a decade of experience in structuring, developing, automating, and implementing interactive websites. Innovative use of the latest technology standards to drive traffic and engage users. Able to complete projects efficiently and exceed expectations providing attractive, user-friendly websites."
}

// add additional values with dot or bracket notation:
bio.qotd = "I choose a lazy person to do a hard job. Because a lazy person will find an easy way to do it. ― Bill Gates";
bio["address"] = "6324 St. James Pl.";

bio.experience = {
	"company" : "AT&T U-Verse",
	"position" : "Support Applications Developer",
	"location" : "Las Colinas, TX",
	"description" : "Maintains and develops the Proactive Analysis Tool which Calculates raw statistical data, creates averaged data summary reporting throughout the entire network hierarchy, and arranges analysis reports in multiple views. This tool supplies statistical analysis for the ELMPro team, VQI and BQI Blitz teams which is critical for isolating RG's BAN's and VRAD's that require troubleshooting and maintenance.",
	"years" 10
}

bio["education"] = {
	"name" : "Columbia International University"
	"location" : "Columbia, SC",
	"years" : "1997 - 1999"
}


// example of how to access object values using dot notation:
$("#main").append(bio.name);
$("#main").append(bio["address"]);


// JSON JavaScript Object Notation is basically objects inside of an array
// validate with jsonlint.com
// each [] is an object {} is an array
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
    ]
}