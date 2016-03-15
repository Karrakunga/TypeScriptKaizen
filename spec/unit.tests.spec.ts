/// <reference path="../typings/main.d.ts" />

import {Messages} from '../app/classes/Messages';
import {IDoor} from '../app/classes/Door';
import {House} from '../app/classes/House';

describe('Greeter Tests', () => {
    var greeter = new Messages.Greeter('Hello World');
    
    it('should have a message of hello world', () => {
        expect(greeter.greeting).toBe('Hello World')  
    });
})


describe('House Tests', () => {
    var door = jasmine.createSpyObj('door', ['GetColor', 'GetHandleType']);
    door.GetColor.and.callFake(function(){
        return 'Blue';
    });
    door.GetHandleType.and.callFake(() => {
        return 'Metal';
    })    
    
    var house = new House(door);
    
    it('should have the correct door color', () => {
        expect(house.GetDoorProperties()).toBe('Color: Blue, Handle Type: Metal');
    })
});
    