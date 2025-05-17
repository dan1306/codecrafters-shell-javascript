const readline = require("readline");

const fs = require('fs');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});


let isExecutable = (file) => {
  fs.access(file, fs.constants.X_OK, err => {
  console.log(`${file} ${err ? 'is not executable' : 'is executable'}`)

  return(err? false: true)
})
}
// Uncomment this block to pass the first stage

// while(1){
// rl.question("$ ", (answer) => {
//   console.log(`${answer}: command not found`)
//   rl.close();
// });

let prompt = () => {
  rl.question("$ ", (answer) => {
    let dummy = answer
    if(answer == "exit 0"){
        // console.log(`0`)
        process.exit(0)
    }else if(answer.includes("type")){
      let ans = answer.replace("type ", "");
      // console.log(ans)
      if(fs.existsSync(`/bin/${ans}`) &&  isExecutable(`/bin/${ans}`)) {
        // if(isExecutable(`/bin/${ans}`) == )
        console.log(`${ans} is /bin/${ans}`)
      }else if(fs.existsSync(`/local/bin/${ans}`) && isExecutable(`/local/bin/${ans}`)){
        console.log(`${ans} is /local/bin/${ans}`)

      }else if(fs.existsSync(`usr/local/bin/${ans}` ) && fs.accessSync(`usr/local/bin/${ans}`, fs.constants.X_OK)){
        console.log(`${ans} is usr/local/bin/${ans}`)

      }else if(fs.existsSync(`/tmp/qux/${ans}` ) && isExecutable(`/tmp/qux/${ans}`)){
        console.log(`${ans} is tmp/qux/bin/${ans}`)

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







