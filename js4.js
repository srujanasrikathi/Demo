// var x=new Date();
//  document.write(x.getDate()+"-"+ x.getMonth()+"-"+ x.getFullYear());
// document.write(x.getDate());
// // document.write(x.getDay());
// document.write(x.getMonth());
// document.write(x.getFullYear());
// document.write(x.getHours());
// document.write(x.getMinutes());
// document.write(x.getMilliseconds());
// console.log(Math.sqrt(2));
// console.log(Math.pow(2,2));
// console.log(Math.abs(-2));
// console.log(Math.min(2,4,5,7,1));
// console.log(Math.max(2,3,4,5,6,67,8));
// console.log(Math.random() *10);
// console.log(Math.trunc(2.436454));
// console.log(Math.sign(-2));
// console.log(Math.sign(2));
// console.log(Math.sign(0));
// function add(a,b){
//     return a+b
// }
// console.log(add(2,3));
// var x={
//     name : "sri",
//     getname:function()
//     {
//         console.log(this.name)
//     }
// }
// x.getname();
//error handlinh
try{
    {
        let x=window.prompt("enter some number");
        if(x==4){
            throw{name:"x",message:"it's a wrong number"}
        }
    }
    console.log(x);

}
catch(err){
    // console.log(err.message);
    // console.log(err.name);
    console.log(err);
}
finally{
    console.log("completed");
}