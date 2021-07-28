export class Add{

    private result: number = 0;
    constructor(a:number, b:number){
        this.result = a + b;
    }

    public getResult(){
        return this.result;
    }
}