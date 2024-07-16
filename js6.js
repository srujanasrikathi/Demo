//AREA OF TRIANGLE by herons//
// function triangle(a,b,c){
//     var s= ((a+b+c)/2);
//     return Math.sqrt(s*(s-a)*(s-b)*(s-c));    
// }
// var aa=3;
// var bb=4;
// var cc=5;
// var area=triangle(aa,bb,cc);
// console.log(area);
//////////////////////////////////
//GRADES//
// var marks =parseInt(window.prompt("enter marks"));
// if( marks>=90 && marks<=100)
//     {
//        console.log('A');
//     }
//     else if(marks>=80 && marks<90){
//         console.log('B');
//     }
//     else if(marks>=70 && marks<80)
//         {
//             console.log('C');
//         }
//         else if(marks>=60 && marks<=70){
//             console.log('D');
//         }
//         else{
//             console.log('F');
//         }
//QE//
// var a = parseInt(prompt('Enter a value '));
// var b = parseInt(prompt('Enter b value'));
// var c = parseInt(prompt('Enter c value'));
// var x=(-b+Math.sqrt(Math.pow(b,2)-(4*a*c)))/(2*a);
// var y=(-b-Math.sqrt(Math.pow(b,2)-(4*a*c)))/(2*a);
// console.log("Root1 : ",x);
// console.log("Root2 : ",y);
var a = parseInt(prompt('Enter a value'));
var b = parseInt(prompt('Enter b value'));
var c = parseInt(prompt('Enter c value'));
if (isNaN(a) || isNaN(b) || isNaN(c)) {
    console.log("Invalid input. Please enter valid numbers.");
} else {
    var discriminant = Math.pow(b, 2) - 4 * a * c;
    if (discriminant >= 0) {
        var sqrtDiscriminant = Math.sqrt(discriminant);
        var x = (-b + sqrtDiscriminant) / (2 * a);
        var y = (-b - sqrtDiscriminant) / (2 * a);
        console.log("Root1 : ", x);
        console.log("Root2 : ", y);
    } else {
        console.log("Roots are imaginary. Discriminant is negative.");
    }
}
