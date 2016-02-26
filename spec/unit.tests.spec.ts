import {Messages} from '../app/classes/Messages';

describe("Greeter Tests", function() {
    var greeter = new Messages.Greeter("Hello World");
    
    it("should have a message of hello world", function(){
        expect(greeter.greeting).toBe("Hello World")  
    });
})