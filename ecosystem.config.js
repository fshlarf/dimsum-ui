module.exports = {
  apps: [
    {
      name: 'dimsum-ui',
      // exec_mode: 'fork',
      // instances: '2', // Or a number of instances
      script: 'yarn',
      args: 'start',
      interpreter: 'bash',
      env: {
        NODE_ENV: 'development',
      },
    },
  ],
}
