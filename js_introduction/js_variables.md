**JavaScript variables**

A variable is a container to hold data.

```javascript
let num = 4;
```
num is a variable storing 4.

To declare a variable in javascript we use either `var` or `let` keyword.

    var x;
    let y;
x and y are variables

**JavaScript var Vs let**

var | let
-------- | -------
function scoped | block scoped
used in older js versions | used in ES6 and later versions

To initialize a variable we use the assignment operator `=` to assign a value to a variable.

```javascript
let x = 5;
```
5 is assigned to variable x.

**Rules for naming variables**

1. Variable names must start with either a letter, an underscore or a dollar sign. For example, 
```javascript
let a = 'hello';
let _a = 'hello';
let $a = 'hello';
```
2. Variable names cannot start with numbers.
3. JavaScript is case-sensitive.x an X are different
4. Keywords cannot be used as variables names.

**Java Script constants**
Constants are types of variables whose values can't be changes onced they are initialized.
```javascript
const x = 5;
```
