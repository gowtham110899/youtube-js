function abc() {
  console.log("gowtham");
}
abc();
function oppo() {
  console.log("this is oppo");
}
oppo();
function apple() {
  console.log("this is apple");
}
apple();
function redmi() {
  console.log("this is redmi");
}
redmi();

var a = 10;
var b = 21;
function add() {
  console.log(a + b);
}
add();

var factor = "kamal";
var fmovie = "anbesivam";
var fplayer = "dhoni";

function fav() {
  console.log("favourt actor: " + factor);
  console.log("favourt movie: " + fmovie);
  console.log("favourt player: " + fplayer);
}
fav();
function mul(a, b) {
  console.log(a * b);
}
mul(20, 30);
// retuen
function myname() {
  return "gowtham";
}
var a = myname();
console.log(a);

function add(a, b) {
  return a + b;
}
var total = add(20, 30);
console.log(total);
// if else

if (false) {
  console.log("its true");
} else {
  console.log("its false");
}
var rain = true;

if (rain) {
  console.log("take umberlla");
} else {
  console.log("enjoy th sunshine");
}
var work = false;

if (work) {
  console.log("great job");
} else {
  console.log("finish your work before playing");
}
var cookie = true;

if (cookie) {
  console.log("whould you like cookie");
} else {
  console.log("need toome to bake");
}
var teeth = false;

if (teeth) {
  console.log("your teeth are clean");
} else {
  console.log("go and bresh yor teeth");
}
// logiacl AND(&&),OR(||),NOT(!)
var color = "yellow";
if (color == "red") {
  console.log("stop");
}
if (color == "yellow") {
  console.log("get redy");
}
if (color == "green") {
  console.log("Go");
}
// ex=2

var season = "winter";
if (season == "spring") {
  console.log("enjoy the blooming flowers");
}
if (season == "winter") {
  console.log("bundle up and stay warm");
}
if (season == "summer") {
  console.log("have a fun in the sun");
}
if (season == " autumn") {
  console.log("admire the colorful leaves");
}
var score = 80;
if (score <= 50) {
  console.log("you need to improve");
} else if (score > 50 && score <= 70) {
  console.log("good job");
} else if (score > 70) {
  console.log("excellent perfromance");
}

var number = 6;
if (number % 2 == 0) {
  console.log("its is even");
} else if (number % 2 == 1) {
  console.log("its is odd");
}
// for loop

for (count = 1; count <= 10; count = count + 1) {
  console.log("john");
}

// print number 1 to 10
for (count = 10; count >= 0; count = count - 1) {
  console.log(count);
}
for (count = 1; count <= 10; count = count + 1) {
  var total = count * 2;
  console.log(count + "*2=" + total);
}
