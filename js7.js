// const genPass=(len) =>{
//     const Upper ='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
//     const Lower ='abcdefghijklmnopqrstuvwwxyz';
//     const Num='0123456789';
//     const Sym='!@#$%^&*()_+~';
//     let pass='';
//     const randomIndexU =Math.floor(Math.random() *Upper.length );
//     pass += Upper[randomIndexU];
//     for(let i = 0 ; i < 5 i++){
//         const randomIndexL =Math.floor(Math.random() * Lower.length );
//         pass += Lower[randomIndexL];
//     }
//     const randomIndexS = Math.floor(Math.random() * Sym.length );
//     pass += Sym[randomIndexS];
//     for(let i = 0 ; i <3 i++){
//         const randomIndexN = Math.floor(Math.random() * Num.length );
//     pass += Num[randomIndexN];
//     }
//  return pass;
// }
// const password =genPass(10);
// console.log(password);
const genPass = (len) => {
    const Upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const Lower = 'abcdefghijklmnopqrstuvwxyz';
    const Num = '0123456789';
    const Sym = '!@#$%^&*()_+~';
    let pass = '';
    for (let i = 0; i < len; i++) {
      const randomIndex = Math.floor(Math.random() * 4);
      switch (randomIndex) {
        case 0:
          pass += Upper[Math.floor(Math.random() * Upper.length)];
          break;
        case 1:
          pass += Lower[Math.floor(Math.random() * Lower.length)];
          break;
        case 2:
          pass += Num[Math.floor(Math.random() * Num.length)];
          break;
        case 3:
          pass += Sym[Math.floor(Math.random() * Sym.length)];
          break;
      }
    }
    return pass;
  };
  
  const password = genPass(10);
  console.log(password);