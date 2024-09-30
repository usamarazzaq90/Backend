const fs = require('fs');

// fs.writeFile("hey.txt","Hello World!",function(err){
//     if(err) console.error(err)
//     else console.log(("done"));
// })

// fs.appendFile("hey.txt"," My name is Usama Razzaq",function(err){
//     if(err) console.error(err)
//     else console.log(("done"));
// })

// fs.rename("hey.txt", "hello.txt", (err)=>{
//     if(err) console.error(err);
//     else console.log("Done");
// })

// fs.copyFile("hello.txt","./copy/copy.txt",(err)=>{
//     if(err) console.error(err)
//     else console.log("Copied")
    
// })

// fs.unlink("hello.txt",(err)=>{
//     if(err) throw err
//     else console.log("File removed");
    
// })

// fs.rm("./copy",{recursive: true},(err)=>{
//     if(err) throw err
//     else console.log("removed");
    
// })

fs.readFile("hey.txt","utf8",(err,data)=>{
    if(err) throw err
    else console.log(data);
    
})