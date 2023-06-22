function getNetPrice(price: number, discount: number, format: boolean): number | string {
    let netPrice = price * (1 - discount);
    return format ? `$${netPrice}` : netPrice;
}
//let netPrice = getNetPrice(100, 0.05, true) as string;
//console.log(netPrice);
let netPrice = getNetPrice(100, 0.05, false) as number;
console.log(netPrice);


//Note that a type assertion does not carry any type casting. It only tells the compiler which type it should apply to a value for the type checking purposes.

//The alternative Type Assertion syntax
//we can also uses the angle bracket syntax <> to assert a type, like this:

//<targetType> value

/*let netPrice = <number>getNetPrice(100, 0.05, false);
Code language: TypeScript (typescript)
Note that we cannot use angle bracket syntax <> with some libraries such as React. For this reason, we should use the as keyword for type assertions.

