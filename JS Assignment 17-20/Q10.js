var Result="";
for (let index = 1; index <= 100; index++) {
    if (index%5==0) {
    Result=Result+index;   
    Result=Result+", "   
    }
}
console.log(Result);