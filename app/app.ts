import {Messages} from './classes/Messages';

var greeter = new Messages.Greeter("Hello");

document.body.innerHTML = greeter.greet();

