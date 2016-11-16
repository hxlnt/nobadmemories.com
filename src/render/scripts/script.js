/* Your scripts go here */

var likes1 = [
    "Copic markers",
    "Electric Light Orchestra",
    "bourbon",
    "vintage toys",
    "graphic design",
    "stargazing",
    "art history",
    "old romance manga"
]

var likes2 = [
    "assembly language",
    "hardware hacking",
    "Javascript",
    "Windows 95 nostalgia",
    "bootleg NES games",
    "glitch art",
    "old Macs",
    "horoscope amusement machines",
    "electronic love testers",
]

var likes3 = [
    "dissecting pop music", 
    "collecting Barbie comic books",
    "cotton candy",
    "perfume",
    "Nancy comics",
    "Barbie doll history",
    "computer love stories" 
]

var index1 = Math.floor(Math.random()*likes1.length);
var index2 = Math.floor(Math.random()*likes2.length);
var index3 = Math.floor(Math.random()*likes3.length);

$(function(){
    $('span#like1').text(likes1[index1]).fadeIn();
    $('span#like2').text(likes2[index2]).fadeIn();
    $('span#like3').text(likes3[index3]).fadeIn();
});