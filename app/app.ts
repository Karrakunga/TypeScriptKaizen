import {Messages} from './classes/Messages';

var greeter = new Messages.Greeter("Hello again");

document.body.innerHTML = greeter.greet();

