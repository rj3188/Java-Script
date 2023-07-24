var guestlist = ["Jay", "Jigar", "Rathod", "Jason"];
console.log(guestlist.length);
console.log(guestlist[0]);
console.log(guestlist[1]);


var guestlist = ["Jay", "Jigar", "Rathod", "Jason"];
var guestname = prompt("What is your name ?");

if (guestlist.includes(guestname)) {
    alert("You are Welcome !");
}
else {
    alert("Sorry, Name is not available you can be try next time chance.");
}
