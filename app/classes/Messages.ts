export module Messages {
    export interface Message{
        Text: string;
    }

    export class Greeter{
        private message: Message = {Text: "Peoples"};
        
        constructor(public greeting: string){}
            greet(){
                return "<h1>" + this.greeting + ", " + this.message.Text + "</h1>";
            }
    }
}