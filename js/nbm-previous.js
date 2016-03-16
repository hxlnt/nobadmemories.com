$(document).ready(function(){
    
    $(".main").fadeIn(800);
    
// Insert random text on homepage //////////
var randomtitles = [
    "{{ ERROR 0: INDEX ORIGIN = 0 }}",
    "{{ ERROR 1: NO BAD MEMORIES }}",
    "{{ ERROR 2: INSERT COIN }}",
    "{{ ERROR 3: NO CASH VALUE }}",
    "{{ ERROR 5: TITLE NOT FOUND }}",
    "{{ ERROR 6: PLEASE INSERT ANOTHER DISK }}",
    "{{ ERROR 7: BUFFER MADE AN OOPSIE }}",
    "{{ ERROR 8: FILE TYPE RIDICULOUS }}",
    "{{ ERROR 9: ALL OUT OF ERRORS }}",
    "{{ ERROR 10: MARIO IS MISSING }}",
    "{{ ERROR 11: REDIAL ON AUTOMATIC... }}",
    "{{ ERROR 12: ART NOT FOUND }}",
    "{{ ERROR 13: RESOURCE IN ANOTHER CASTLE }}",
    "{{ ERROR 14: RESULTS NOT GUARANTEED }}",
    "{{ ERROR 15: TITLE GENERATOR NOT RESPONDING }}",
    "{{ RRR 16: VWLS NT PRNTNG }}"
]
var randomart = [
    "msdream.png",
    "gameroom.png",
    "ascuteas15.jpg"
]
var randomartcaptions = [
    "<em>MS-DREAM.bat</em>. Windows 2000 PC, 2012.",
    "<em>Game Room</em>. Exhibition, 2014.",
    "Rachel Simone Weil and Josh House at <em>As Cute as You Remember</em>. Exhibition, 2014."
]
    var r2 = Math.floor(Math.random() * randomtitles.length);
    var r3 = Math.floor(Math.random() * randomart.length);

    if (r2 < 17) { $("#maintitle").append(randomtitles[r2]); }
    else { $("#maintitle").append(randomtitles[Math.floor(r2/2)]); }
    $(".randomwork").html("<img src='/images/" + randomart[r3] + "' width='100%'><figcaption>" + randomartcaptions[r3] + "</figcaption>") 
});    

function expandHiddenEvents(event) {
    var button = $('#button' + event.data.year);
    var title = $('#header' + event.data.year);
    
    $('.notselect' + event.data.year).slideToggle(700);
    if (button.text() == "  Collapse") {
        title.html("SELECTED EVENTS, 20" + event.data.year + " <span id=button" + event.data.year + " class=expand><i class='fa fa-angle-down' style='padding-right: 6px;'></i>Show all");
    } 
    else {
        title.html("ALL EVENTS, 20" + event.data.year + " <span id=button" + event.data.year + " class=expand><i class='fa fa-angle-up' style='padding-right: 6px;'></i>  Collapse");
    } 
}

$(document).ready(function(){
       $("#header15").on( "click", "#button15", { year: "15" }, expandHiddenEvents );
       $("#header14").on( "click", "#button14", { year: "14" }, expandHiddenEvents );
       $("#header13").on( "click", "#button13", { year: "13" }, expandHiddenEvents );
       $("#header12").on( "click", "#button12", { year: "12" }, expandHiddenEvents );
       $("#header11").on( "click", "#button11", { year: "11" }, expandHiddenEvents );
       
       $("a[href='#top']").click(function() {
  $("html, body").animate({ scrollTop: 0 }, 800);
  return false;
});
});





   

 