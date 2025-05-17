const readline = require("readline");
const exec = require('child_process').execFile;

const fs = require('fs');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});


let Exist = (file) => {

  let myVariable = process.env.PATH || false;

  if(myVariable){
    let myArr = myVariable.split(":")
    // console.log(myArr)
    for (let i = 0; i < myArr.length; i++) {
      if(fs.existsSync(`${myArr[i]}/${file}`)){
        return(`${myArr[i]}/${file}`)
      }
    }
  }
  return false
}

let execute = (ans) => {

  let myVariable = process.env.PATH || false;
  ans = ans.split(" ")
  if(ans.length < 2) return false;
  let file = ans[0]
  let fileArr = []

  for(let j = 1; j < ans.length; j++){
    fileArr.push(ans[j])
  }
    // console.log(fileArr)


  if(myVariable){
    let myArr = myVariable.split(":")
    // console.log(myArr)
    for (let i = 0; i < myArr.length; i++) {
      if(fs.existsSync(`${myArr[i]}/${file}`)){
        return opt(file, fileArr)
      }
    }
  }
  return false

}



let opt = function(file = null, fieArgs = null){
  let res = false
  if(!file || !fieArgs) return res;
  exec(file, fieArgs, function(err, data) { 
        // exec('file.EXE', ["arg1", "arg2", "arg3"], function(err, data) {  
          // console.log(err)
          // console.log(data.toString());    
          if(!err){
            console.log(output)
          }                
  });  

  return res;
}


let prompt = () => {
  process.stdout.write("$ ");
  rl.question("", (answer) => {
    if(answer == "exit 0"){
        // console.log(`0`)
        process.exit(0)
    }else if(answer.includes("type")){
      let ans = answer.replace("type ", "");
      let exist = Exist(ans)
      // console.log(ans)
      if(ans.includes("echo")){
        console.log(`echo is a shell builtin`)
      } else if(ans.includes("exit")){
        console.log(`exit is a shell builtin`)
      } else if(ans.includes("invalid_command")){
        console.log(`invalid_command: not found`)

      }else if(ans.includes("type")){
        console.log(`type is a shell builtin`)
      }else if(exist){
        console.log(`${ans} is ${exist}`)
      }else{
        console.log(`${ans}: not found`)
      }
      
    } else if(answer.includes("echo")){
      let ans = answer.replace("echo ", "");
      console.log(ans)
    }else if(!answer.includes("type")){
      
      execute(answer)
    }else{
      console.log(`${answer}: command not found`)
    }
  prompt()
});
}

prompt()










