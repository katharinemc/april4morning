'use strict';

function updateObject (obj) {
  obj.foo = 'foo';
  obj.bar = 'bar';
  obj.bizz = 'bizz';
  obj.bang = 'bang';

  return obj;
} 

let Myobj= {
  foo: 'bar',
  answerToUniverse: 42,
  'olly olly': 'oxen free',
  sayHello: function () {
    return 'hello';
  }
};
console.log(updateObject(Myobj));