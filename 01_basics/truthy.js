
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




