// Immediately Invoked Function Expressions (IIFE)
//global variable se ivike n hojye
//in this ending the function executuion is important 
(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')
