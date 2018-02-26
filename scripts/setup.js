const prompt = require('prompt')
const exec = require('child_process').exec
const colors = require("colors/safe")

// var fs = require('fs');

// var obj = {
//    table: []
// };

// fs.exists('myjsonfile.json', function(exists){
//     if(exists){
//         console.log("yes file exists");
//         fs.readFile('myjsonfile.json', function readFileCallback(err, data){
//         if (err){
//             console.log(err);
//         } else {
//         obj = JSON.parse(data);
//         for (i=0; i<5 ; i++){
//         obj.table.push({id: i, square:i*i});
//         }
//         var json = JSON.stringify(obj);
//         fs.writeFile('myjsonfile.json', json);
//         }});
//     } else {
//         console.log("file not exists")
//         for (i=0; i<5 ; i++){
//         obj.table.push({id: i, square:i*i});
//         }
//         var json = JSON.stringify(obj);
//         fs.writeFile('myjsonfile.json', json);
//         }
//     });

const bash = cmd => {
  msg('green', `Running: ${cmd}`)
  return new Promise(function(resolve, reject) {
    exec(cmd, (err, stdout, stderr) => {
      if (err) reject(err)
      resolve(stdout, stderr)
    })
  });
}

const msg = (color, text) => {
  console.log(colors[color](text))
}

const setup = (err, result) => {
  if (err) msg(`red`, err)

  msg('yellow', 'WordPress configuration values ☟')

  for (let key in result) {
    msg('yellow', `${key}: ${result[key]};`)
  }
  bash(`cd wp && nanobox dns add local ${result.name}.local`)
  msg('green', `Finish setting up WordPress at ${result.name}.local/wp-admin`)
}

msg('green', 'Making Progress!')
prompt.start();
prompt.get({
  properties: {
    name: {
      description: colors.magenta("Project name:")
    },
    stagingUrl: {
      description: colors.magenta("Staging URL:"),
      default: '.nanoapp.io',
    },
    productionURL: {
      description: colors.magenta("Production URL:")
    }
  }
}, setup);
