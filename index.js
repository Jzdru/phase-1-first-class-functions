function spy() {
    console.log(spy)
}

function receivesAFunction(spy) {
    spy();
}

const namedFunction =  (function (param) {
    console.log(`${param}`))
}

function returnsANamedFunction(namedFunction) {
   nFunction();
}