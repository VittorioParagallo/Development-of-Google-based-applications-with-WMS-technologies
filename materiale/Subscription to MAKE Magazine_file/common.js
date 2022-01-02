// common js code for network
//Clear inherited frames

if (parent != self) {
                top.location=self.document.location;
}

//random number for dc
//var ord = Math.round(Math.random() * 10000000000);
var abc = Math.random() + "";
var ord = abc.substring(2,abc.length);

