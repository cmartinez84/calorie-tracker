export class Item{

    constructor(public name: string, public calories: number, public details: string, public quantity:number){}
    getTotalCalories(){
        return this.quantity * this.calories;
    }
}
