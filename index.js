var rect = require('./rectangle');

function solveRect(l,b) {
    rect(l,b, (err, rectangle) => {
        if (err) {
            console.log(`ERROR: ${err.message}`);
        }
        else {
            console.log(`The area of rectangle with dimensions l=${l} and b=${b} is ${rectangle.area()}`)
            console.log(`The Perimeter of rectangle with dimensions l=${l} and b=${b} is ${rectangle.perimter()}`)
        }
    });
    console.log("This statement is after the function having some timeout")
}

solveRect(1,2);