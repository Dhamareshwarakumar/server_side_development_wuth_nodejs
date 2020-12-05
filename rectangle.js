module.exports = (x,y,callback) => {
    if (x <= 0 || y <= 0) {
        setTimeout(() => callback(new Error(`Rectangle Dimensions Should be greater zero`), null), 
            2000);
    }
    else {
        setTimeout(() => callback(null,
            {
                perimter: () => (2*(x+y)),
                area: () => (x*y),
            }), 
            2000);
    }
    console.log("This statement is after timeout in the called function")
}