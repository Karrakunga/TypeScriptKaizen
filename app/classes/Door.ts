export interface IDoor{
    GetColor(): string;
    GetHandleType(): string;
}

export class Door implements IDoor{
    private _color: string;
    private _handleType: string;
    
    constructor(color: string, handleType: string){
        this._color = color;
        this._handleType = handleType;
    }
    
    public GetColor(){
        return this._color;
    }
    
    public GetHandleType(){
        return this._handleType;
    }
}