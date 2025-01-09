module.exports = {
  apps: [
    {
      name: 'minimal_english_be_new',
      script: './dist/web/server.js',
      instances: 'max',
      exec_mode: 'cluster',
      env: {
        NODE_ENV: 'production',
        PORT: 3337,
      },
      env_development: {
        NODE_ENV: 'development',
        PORT: 3336,
      },
    },
  ],
};
