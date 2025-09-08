// $("p").text("Good bye")   //tag diya  text k dhore change kora

$("#text1").text("yes")  //id diya dora aita te kono html tag kaj kore  na .
$("#text2").html("<b>yes</b>")  // ekhon aita te html tag use kora jabe
$("#text3").append("<b>yes</b>")  // ekhon html file er text er sate aita add hoye jabe,,,ager 2 ta example e replac ehoito
$("#text4").prepend("<b>yes</b>")  // ekhon html file er text er sate aita add hoye jabe,,,kinto ekhon html file er text ta pore bosbe

var mypara=$("<p></p>").text("This is a new para") // aita holo amar idtext 5 er age ekta text add kora
$("#text5").after(mypara)

var mypara=$("<p></p>").text("This is a new para1") // aita holo amar idtext 5 er pore ekta text add kora
$("#text6").after(mypara)