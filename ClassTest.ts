/**
 * Created by FD1 on 2017/1/22.
 */

class Animal{
    private _name : String;

    get name(): String {
        return this._name;
    }

    set name(value: String) {
        this._name = value;
    }
}

let newInstance = new Animal();
console.log("new Instance name="+ newInstance.name);