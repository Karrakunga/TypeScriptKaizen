import {IDoor} from './Door'

export class House {
    private _door: IDoor;
    
    constructor(door: IDoor){
        this._door = door;
    }
    
    GetDoorProperties(){
        return `Color: ${this._door.GetColor()}, Handle Type: ${this._door.GetHandleType()}`;
    }
}