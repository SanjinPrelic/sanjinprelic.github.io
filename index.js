/*
        Name: Sanjin Prelić
        Course: CS412
        Assignment: Project 3 JS FILE
        Due Date: 09/12/2021
        Purpose: Project 3
*/
 let Sanjin ={
    name:"Sanjin",
    age:21
};
const currentTime = new Date();
const currentHour = currentTime.getHours();
var greeting;
var lang=0;

if(currentHour>18) {
    greeting = "Good Evening";
}
else if(currentHour>12) {
    greeting = "Good Afternoon";
}
else if(currentHour>0) {
    greeting = "Good Morning";
}
document.write("<h2>" + greeting + "</h2>");
function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
  }
  function changeLanguage(lang) {
    switch(lang) {
        case "en":
            document.getElementById("mybio").innerHTML = "Moje ime je Sanjin Prelić, trenutno studiram kompjuterske nauke na IUS-u u Sarajevu. Završio sam Cambridge Internacionalnu Srednju Školu, Matematički smjer, i trenutno sam na petom semestru na IUS-u. Bio sam zainteresovan za računare od srednje škole, a tehnologija u mom životu je općenito bila veliki interes čak i od malena";
            break;
        case "ba":
            document.getElementById("mybio").innerHTML = "My name is Sanjin Prelić, and I am currently studying Computer Science at The Internation University of Sarajevo.I finished the Cambridge International High School Math Curriculum, and am currently on my 5th semester on IUS. I have been interested in computer science ever since high school and technology in general has been one of my biggest passions in life since I was a small child fascinated by any sort of machines around me.";
            break;
    }
}
$(document).ready(function(){
$('moveRight').click(function(){
    $('box').animate({
        left:"250px"});
        
    },1000,);
});
//My attempt to animate, didn't work :(
