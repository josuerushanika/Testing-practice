const stringLength = require('./stringLength');

//testing with npm test
test('return length of string "rushanika" returns 9',()=>{
   expect(stringLength('Rushanika')).toBe(9);
});