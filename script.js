function quotes() {
    var aquote = new Array;
aquote[0]="\"I have a dog called Einstein\"";
aquote[1]="\"I have a degree in Photography\"";
aquote[2]="\"I support Southampton FC\""
aquote[3]="\"My favourite snacks are crisps!\"";
aquote[4]="\"I have been married for almost 10 years\"";
aquote[5]="\"My favourite TV shows are Breaking Bad and Cobra Kai\""

rdmQuote = Math.floor(Math.random()*aquote.length);
document.getElementById("txtbox") .value=aquote[rdmQuote];
};