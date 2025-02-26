var compose = function(functions) {
    return function(x) {
        // accumulator start as x 
        return functions.reduceRight((accumulator, currentFunction) => {
            return currentFunction(accumulator); // Apply each function to the value of the previous one
        }, x); // Start with the initial value x
    }
};


const compose = (functions) => {
    return (x) => functions.reduceRight((acc, fn) => fn(acc), x);
};
