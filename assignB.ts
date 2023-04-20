console.log(`=========== Given Array=============================`);

var inputArr = [1,2,2,4,5,4,7,8,7,3,6]
console.log(inputArr);
console.log(`======= After Removing Duplicate Items from Array ==========`);
let newArray:Array<number> = []
inputArr.forEach((element)=>{
    if (newArray.includes(element)=== false) {
        newArray.push(element)
    }
})
console.log(newArray);