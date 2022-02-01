function receivesAFunction(cb){
    cb();
}

function returnsANamedFunction(){
    const iHaveAName = function(){
        console.log("My name is Ishmael");
    }
    return iHaveAName;
}

function returnsAnAnonymousFunction(){
    return function(){
        console.log('I am anonumous');
    }
}