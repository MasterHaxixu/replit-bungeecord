require("./http.js")
const exec = require('child_process').exec;
const myShellScript = exec('sh main.sh');
myShellScript.stdout.on('data', (data)=>{
    console.log(data); 
    // do whatever you want here with data
});
myShellScript.stderr.on('data', (data)=>{
    console.log(data);
}); 

const ngrokcmd = exec('sh ngrok.sh');
ngrokcmd.stdout.on('data', (data)=>{
    console.log(data); 
    // do whatever you want here with data
});
ngrokcmd.stderr.on('data', (data)=>{
    console.log(data);
}); 

/*const ngrok = require( 'ngrok' );
(async function() {
  const url = await ngrok.connect({
    addr: 25577,
    authtoken: "1xSJLD7kxK0gqaPrmyUNELbIHYS_7qd1HLRWdaqecSLY7CnJH",
    region: "eu",
  });
})(); */

