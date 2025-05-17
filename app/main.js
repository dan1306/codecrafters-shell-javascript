const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

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




