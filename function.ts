/*function add(a: number, b: number) : number {
    return a + b;
}
//console.log(add( 12, 23));
//let sum = add('10', '20');
//var sum = add(5, 67);

console.log(add(1,2));

*/

//function echo(message: string): void {
   // console.log(message.toUpperCase());
//}

function add(a: any, b: any): any {
    return a + b;
}
console.log(add(1,2));

//abstract class
abstract class Employee {
    constructor(private firstName: string, private lastName: string) {
    }
    abstract getSalary(): number
    get fullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }
    compensationStatement(): string {
        return `${this.fullName} makes ${this.getSalary()} a month.`;
    }
}


