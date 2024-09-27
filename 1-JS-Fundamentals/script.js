//Arrays (foreach,map,filter,find,indexOf)

var arr=[1,2,3,4];
// arr.forEach((val)=>{
//     console.log(val + " hello");
// })

// var newArr=arr.map((val)=> val+=12)
// console.log(newArr);

// var ans=arr.filter((val)=>{
//     return (val>=3)
//     // if(val > 3){
//     //     return true;
//     // }
//     // else return false;
// })
// console.log(ans);

// var ans=arr.find((val)=>{
//     if (val===2) return val;   //return first 2
// })
// console.log(ans);

// console.log(arr.indexOf(3));
// console.log(arr.indexOf(8));

//    <--------------------------------------------------------------------------------->


//Asynchronus JavaScript coding

//line by line code running is called synchronous
//Async code is sent to side stack, after sync code runs, check whether async code is
//completed or not, if completed then it goes to main stack and runs.

async function abcd(){
    var blob=await fetch (`https://randomuser.me/api/`)
    var ans= await blob.json()

    console.log(ans);
    console.log(ans.results);
    console.log(ans.results[0].name);
}

abcd();