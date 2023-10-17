function calculate() {
    prompt("what is your name?");
prompt("what is your Spouse name?");
let loveScore = Math.random() * 100;
loveScore = Math.floor(loveScore) + 1;


if(loveScore > 70) {
    alert("Your love score is " + loveScore + "%" + " You love each other like there is no tomorrow" );
}

if(loveScore > 30 && loveScore < 70) {
    alert("Your love score is " + loveScore + "%");
}

if(loveScore <= 30) {
    alert("Your love score is " + loveScore + "%" + " You go together like water and oil!");
}

}







