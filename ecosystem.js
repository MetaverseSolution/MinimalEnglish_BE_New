module.exports = {
  apps: [
    {
      name: 'minimal_english_be_new',
      script: './dist/web/app.js',
      instances: 'max',
      exec_mode: 'cluster',
      env: {
        NODE_ENV: 'production',
      },
      env_development: {
        NODE_ENV: 'development',
      },
    },
  ],
};
