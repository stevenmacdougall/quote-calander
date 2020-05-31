// Display the name of the month
var d = new Date();
var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
document.getElementById("display-month").innerHTML = months[d.getMonth()];

// Display day of the month 
var d = new Date();
document.getElementById("display-day-month").innerHTML = d.getDate();

// Display the name of the day of the week
var d = new Date();
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
document.getElementById("display-day-week").innerHTML = days[d.getDay()] + "'s Quote";  

// Display a quote for each day of the week
var d = new Date();
var days = ["\"... millions long for immortality who don't know what to do with themselves on a rainy Sunday afternoon.\" ― Susan Ertz", 

"\"Most people hate Mondays because most people do not know the incredible beauty of being simply existed in any day whatsoever!\"― Mehmet Murat ildan", 
            
"\"Why does February feel like one big Tuesday? \" ― Todd Stocker",

"\"Smile your day away.Happy Wednesday.\" ― Anthony T. Hincks", 

"\"Thursday is perhaps the worst day of the week. It's nothing in itself; it just reminds you that the week has been going on too long. \" ― Nicci French", 

"\"Friday: The day after Thursday and before Saturday according to Rebecca Black. Also the most annoying day of the week now.\" ― Aaron Peckham", 

"\"Saturday is the mightiest day of the week. It's unshakably, overwhelmingly superior. Not only is it a day off of school, the following day is also a day off, like some kind of Super Saiyan bargain sale.\" ― Wataru Watari"];
document.getElementById("display-day-quote").innerHTML = days[d.getDay()];