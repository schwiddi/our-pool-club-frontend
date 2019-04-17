module.exports = process.env.NODE_ENV !== 'production'
  ? require('./config/store.dev')
  : require('./config/store.prod');
