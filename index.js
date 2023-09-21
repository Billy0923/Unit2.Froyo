let input = prompt("enter a list of comma-separated froyo flavors");

let iArray=input.split(",");
//console.log(iArray);
// tested, successfully split the string into array


function countFlavor(arr){
    const FlavorAndCount={
        
    };

    arr.forEach(x => {
        FlavorAndCount[x]=(FlavorAndCount[x]||0)+1;
    });

    return FlavorAndCount;
}

const output=countFlavor(iArray);

console.log(output);