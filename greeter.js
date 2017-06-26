/**
 * Created by FD1 on 2017/2/19.
 */
var Student = (function () {
    function Student(firstName, middleIniitial, lastName) {
        this.firstName = firstName;
        this.middleIniitial = middleIniitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleIniitial + " " + lastName;
    }
    return Student;
}());
function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var student = new Student("Julia", " ", "Zhang");
document.body.innerHTML = greeter(student);
