/**
 * Created by FD1 on 2017/1/22.
 */
var Animal = (function () {
    function Animal() {
    }
    Object.defineProperty(Animal.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: true,
        configurable: true
    });
    return Animal;
}());
var newInstance = new Animal();
console.log("new Instance name=" + newInstance.name);
//# sourceMappingURL=ClassTest.js.map