var regEx1 = new RegExp("xyz");

console.log(regEx1.test("vwxyz"));
console.log(regEx1.test("vxwtyz"));

console.log(/abc/.test("abcdef"));
console.log(/abc/.test("abxde"));

