export class Item{

    constructor(public name: string, public calories: number, public details: string, public quantity:number){}
    getItemCalories(){
        return this.quantity * this.calories;
    }
}
