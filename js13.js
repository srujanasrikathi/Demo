// var CareTaker=new Promise(function(Success,Error){
//    Error("we got error");
// })
// console.log(CareTaker);




// var CareTaker=new Promise(function(Success,Error){
//        Error("we got error");
//     })
// CareTaker.then(function(value){
//     console.log(value);
// },function(error){
//     console.log(error);
// })




// var CareTaker=new Promise(function(Success,Error){
//        var x=100;
//        if(x>10){
//         Success("we got success");
//        }
//        else{
//         Error("we got error");
//        }
//     })
// CareTaker.then(function(value){
//     console.log("success function :",value);
// },function(error){
//     console.log("error function :",error);
// })



function fun(){
    console.log("first");
    setTimeout(function(){
        console.log("hai");
    },1000);
    console.log("second");
    console.log("third");
}
fun();