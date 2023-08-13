module.exports = {
  apps: [
    {
      name: 'dimsum-ui',
      exec_mode: 'cluster',
      instances: '2', // Or a number of instances
      script: 'yarn',
      args: 'start',
      interpreter: '/bin/bash',
      env: {
        NODE_ENV: 'development',
      },
    },
  ],
}
