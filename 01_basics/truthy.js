
function checkValue (value){
    if (value) {
        console.log(`${value} is truthy`);
    }
    else {
        console.log(`${value} is falsy`);
        
    }
}

checkValue(null)
checkValue(undefined)
checkValue(NaN)
checkValue([]);
checkValue({});

// falsy values :- false, 0 , "", null, undefined, NaN

// Note : Apart from all the falsy values all other values are considered as truthy values.



