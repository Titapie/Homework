function analyzeValue(value) {
    return {input:value,
            type: typeof value, 
            isTruthy:value? true:false,
            isNullOrUndefined:value===null || value ===undefined? true:false,
            isReferenceType: ((typeof value==='object' || typeof value=='function') && value!=null)? true:false
        }

};
console.log(analyzeValue(null));
// {
//   input: null,
//   type: "object",
//   isTruthy: false,
//   isNullOrUndefined: true,
//   isReferenceType: false
// }

console.log(analyzeValue(undefined));
// {
//   input: undefined,
//   type: "undefined",
//   isTruthy: false,
//   isNullOrUndefined: true,
//   isReferenceType: false
// }

console.log(analyzeValue(0));
// {
//   input: 0,
//   type: "number",
//   isTruthy: false,
//   isNullOrUndefined: false,
//   isReferenceType: false
// }

console.log(analyzeValue("hello"));
// {
//   input: "hello",
//   type: "string",
//   isTruthy: true,
//   isNullOrUndefined: false,
//   isReferenceType: false
// }

console.log(analyzeValue([1, 2, 3]));
// {
//   input: [1, 2, 3],
//   type: "object",
//   isTruthy: true,
//   isNullOrUndefined: false,
//   isReferenceType: true
// }

console.log(analyzeValue({}));
// {
//   input: {},
//   type: "object",
//   isTruthy: true,
//   isNullOrUndefined: false,
//   isReferenceType: true
// }

console.log(analyzeValue(function() {}));
// {
//   input: [Function],
//   type: "function",
//   isTruthy: true,
//   isNullOrUndefined: false,
//   isReferenceType: true
// }

console.log(analyzeValue(NaN));
// {
//   input: NaN,
//   type: "number",
//   isTruthy: false,
//   isNullOrUndefined: false,
//   isReferenceType: false
// }
