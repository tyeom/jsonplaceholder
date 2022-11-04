const jsonServer = require('json-server');
const clone = require('clone');  // npm install clone 
const data = require('../data/data.json');

// json-server 모듈 사용 json데이터 호스팅
const app = jsonServer.create();
const router = jsonServer.router(clone(data), { _isFake: true });

app.use((req, res, next) => {
    if (req.path === '/') return next();
    router.db.setState(clone(data));
    next();
});

app.use(jsonServer.defaults({
    logger: process.env.NODE_ENV !== 'production'
}));
  
app.use(router);
  
module.exports = app;