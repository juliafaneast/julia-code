/**
 * Created by FD1 on 2017/2/19.
 */

interface Person{
    firstName : string;
    lastName : string;
}
class Student{
    fullName : string;
    constructor (public firstName, public middleIniitial, public lastName){
        this.fullName = firstName + " "+ middleIniitial + " "+ lastName;
    }
}
function greeter(person :Person){
    return "Hello, "+ person.firstName + " "+person.lastName;
}

var student =new Student("Julia" , " ","Zhang");

document.body.innerHTML = greeter(student);