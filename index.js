let input = prompt("enter a list of comma-separated froyo flavors");

try {
    if(!input.includes(",")) throw "Please seperate the flavors by coma,"
  }
  catch(err) {
    alert(err);
    input = prompt("enter a list of comma-separated froyo flavors");
  }

let iArray=input.split(",");
//console.log(iArray);
// tested, successfully split the string into array


function countFlavor(arr){
    //empty object
    const FlavorAndCount={

    };
    // for each element in the array
    //
    arr.forEach(x => {
        FlavorAndCount[x]=(FlavorAndCount[x]||0)+1;
    });

    return FlavorAndCount;
    // return the object as rubic requirement
}

const output=countFlavor(iArray);

console.log(output);