var A = ["cake", "apple pie", "cookie", "chips", "patties"];
var B=prompt("What u want in our Bakery"); 
var flag=0;
for (let index = 0; index < A.length; index++) {
    if (A[index]==B) {
        console.log(B," is available at index ",index);
        flag=1;
        break
    } 
}
if (flag==0) {
    console.log(B," is not available at out store");
}