const prompt = require('prompt')
const exec = require('child_process').exec
const colors = require("colors/safe")

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
  bash(`${process.cwd()}/scripts/check-install.sh`)
  .then(ok => {
    bash(`nanobox dns add local ${result.name}.local`)
  })
  .then(ok => {
    msg('green', `Run npm start, then finish setting up WordPress at ${result.name}.local/wp-admin`)
  })
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
      default: '<project-name>.nanoapp.io',
    }
  }
}, setup);
