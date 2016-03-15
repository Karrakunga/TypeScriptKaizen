import {Messages} from './classes/Messages';
import {House} from './classes/House';
import {Door} from './classes/Door';

var greeter = new Messages.Greeter("Hello World");

var door = new Door('Red', 'Wood');
var house = new House(door);

document.body.innerHTML = `${greeter.greet()} <br /> ${house.GetDoorProperties()}`

