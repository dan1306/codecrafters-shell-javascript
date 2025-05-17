const readline = require("readline");

const fs = require('fs');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});


let Exist = (file) => {

  let myVariable = process.env.PATH || false;
  console.log(`daniel: ${file }`)

  if(myVariable){
    let myArr = myVariable.split(":")
    // console.log(myArr)
    for (let i = 0; i < myArr.length; i++) {

      if(fs.existsSync(`${myArr[i]}/${file}`)){
        return(`${myArr[i]}/${file}`)
      }
      return false
    }
  }
  return false
}

// Exist('cat')
// Uncomment this block to pass the first stage

// while(1){
// rl.question("$ ", (answer) => {
//   console.log(`${answer}: command not found`)
//   rl.close();
// });

let prompt = () => {
  rl.question("$ ", (answer) => {
    if(answer == "exit 0"){
        // console.log(`0`)
        process.exit(0)
    }else if(answer.includes("type")){
      let ans = answer.replace("type ", "");
      let exist = Exist(ans)
      // console.log(ans)
      if(exist) {
        console.log(`${ans} is ${exist}`)
      }else if(ans.includes("echo")){
        console.log(`echo is a shell builtin`)
      } else if(ans.includes("exit")){
        console.log(`exit is a shell builtin`)
      } else if(ans.includes("invalid_command")){
        console.log(`invalid_command: not found`)

      }else if(ans.includes("type")){
        console.log(`type is a shell builtin`)
      }else{
        console.log(`${ans}: not found`)
      }
      
    } else if(answer.includes("echo")){
      let ans = answer.replace("echo ", "");
      console.log(ans)
    }else{
      console.log(`${answer}: command not found`)
    }
  prompt()
});
}

prompt()







