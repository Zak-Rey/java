**JavaScript Symbol**

Immutable primitive value that is unique.
```javascript
const value1 = Symbol('hello');
const value2 = Symbol('hello');
```

Even though value1 and value2 both contain 'hello', they are different as they are of Symbol type.

**JavaScript Object**

An `Object` is a complex data type that allows us to store a collection of data.

```javascript
const student = {
    firstName: 'Zak',
    lastName: null,
    class: 10
};
```
JavaScript is a dynamically typed language, a variables data type is automatically determined for you.

It also means that a variable can be of one data type and later changed to another type. Check out the example below

```javascript
let data = 34; //typeof(data): number
data = "Zak"; //typeof(data): String