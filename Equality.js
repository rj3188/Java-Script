prompt("What is your Name ?");
prompt("What is their Name ?");

var lovescore = Math.random() * 100;
lovescore = Math.floor(lovescore) + 1;
console.log("Your lovescore is a " + lovescore + "%");

if (lovescore <= 30) {
    console.log("Your lovescore is a " + lovescore + "%" + " Your love is bad.")
}

if (lovescore > 30 && lovescore <= 70) {
    console.log("Your lovescore is a " + lovescore + "%" + " Your love is good.")
}

if (lovescore > 75 && lovescore <= 100) {
    console.log("Your lovescore is a " + lovescore + "%" + " Your love is Excellent.")
}

if (lovescore > 80) {
    console.log("Yes value number");
}
else {
    console.log("No value number");
}