import { Item }   from './item.model';

export class Meal{
    public newItem:Item = new Item("hamburger", 500, "delicious", 1);
    public newItem2:Item = new Item("Magnum Bar", 600, "oops", 1);
    public newItem3:Item = new Item("Al pastor Tacos", 400, "yaas", 1);
    public mealItems: Item[] = [this.newItem, this.newItem2, this.newItem3];
    constructor(){}
    getMealCalories = function(){
        var output = 0;
        this.mealItems.forEach(function(item){
            output += item.getItemCalories();
        });
        return output;
    }
}
