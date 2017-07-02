var apples = 14
console.log(apples)

console.log('I have ' + apples + ' apples.');


var materials = ['wood', 'metal', 'stone'];
var words = {
  elephant: "The world's largest land mammal.",
  school: "A place of learning.",
  ice cream: "A delicious milk-based dessert."
}

var num = 16
  if (num > 10) {
    console.log( + num 'is greater than 10');
  } else if (num === 10){
    console.log( + num 'is exactly 10.');
  } else {
    console.log( + num 'must be less than 10.');
  }
}

for (var counter = 0; counter < 9; counter++) {
  console.log("Doing the same thing over and over.");
}

for (var base = 5; base < 25; base++) {
  console.log(+base);
}

var total = 0
for (var num = 1; num < 100; num++) {
  console.log(total + num );
}

for(var height = 3; height < 15; height++ ) {
  if (height > 9){
    console.log("You can get on the rollercoaster!");
  } else {
    console.log("You are too short to ride this rolercoaster!");
  }
}

var containers = ['purse', 'wallet', 'backback'];
for (var index = 0; index < containers.length; index++) {
  console.log(containers[index]);
}

function helloWorld() {
  console.log("Hello world!")
}
helloWorld()

function add(num1, num2){
  return num1 + num2
}

var amount = add(5,7)
console.log(amount)
