var data = { x: 1, y: '2' };
// interface Person {
//   username: string
//   age: number
// }
// const user1: Person = {
//   username: 'ho',
//   age: 3,
// }
// const user2: Person = {
//   username: 'h111',
//   age: 36,
// }
var Person = /** @class */ (function () {
    function Person(username, age) {
        this.username = username;
        this.age = age;
    }
    return Person;
}());
var user1 = new Person('ho', 3);
var user2 = new Person('h111', 46);
var arr = [1, 2, 3];
var arr1 = ['1'];
var HTTP_CODE;
(function (HTTP_CODE) {
    HTTP_CODE[HTTP_CODE["OK"] = 200] = "OK";
    HTTP_CODE[HTTP_CODE["NOT_FOUND"] = 404] = "NOT_FOUND";
})(HTTP_CODE || (HTTP_CODE = {}));
HTTP_CODE.OK;
function add(x, y) {
    return x + y;
}
var v = add(1, 2);
