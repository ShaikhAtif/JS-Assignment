var A = [24, 53, 78, 91, 12];
var a=1000;
for (let index = 0; index < A.length; index++) {
    if (A[index]<a) {
        a=A[index]
    }
    
}
console.log("The Smallest Number is ",a);