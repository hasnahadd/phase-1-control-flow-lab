
let x = 2500;
function scuberGreetingForFeet(distance) {
  if (distance <= 400) {
    return 'This one is on me!';

  } else if (distance > 400 && distance <= 2000) {

    return 'That will be twenty bucks.';

  } else if (distance > 2000 && distance <= 2500) {

    return 'I will gladly take your thirty bucks.';

  } else {
    return 'No can do.';
  }
}


console.log(scuberGreetingForFeet(x));

let city = 'NYC';
city = 'Pittsburgh';
function ternaryCheckCity(city) {


  return city === 'NYC' ? 'Ok, sounds good.' : 'No go.';
}
console.log(ternaryCheckCity(city));
let tips= 'generous';
function switchOnCharmFromTip(tips) {
switch(tips) 
{
  case 'generous':
  return 'Thank you so much.';
  case 'not as generous':
   return 'Thank you.';
  default:
  return 'Bye.';
}

}
console.log(switchOnCharmFromTip(tips));