n=parseInt(window.prompt("enter a number"));
function prime(n){
for ( var i=2;i<= n;i++){
            if(n%i!=0){
                return true;
            }
        }
        return false;
    }
   console.log( prime(n));