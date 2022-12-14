/*
 * 사용 모듈 : npm install express
 *            npm install moment
 *            npm install ws
 *            npm install decode-html
 *            npm install --save multer [express 파일 업로드]
 *            npm install json-server [json-server모듈, https://github.com/typicode/json-server]
 *            npm install cors [크로스도메인 허용]
 *
 */

// json-server 모듈 사용 json데이터 호스팅 [port : 7003]
const json_server = require('./src/json_server');
const port = process.env.PORT || 7003

json_server.listen(port, () => {
  console.log('JSONPlaceholder listening on http://localhost:' + port)
});

// express 모듈 사용 json데이터 호스팅 [port : 7002]
const fs = require('fs');
fs.readFile('/home/node/app/data/data.json', 'utf8', (error, jsonFile) => {
//fs.readFile('./data/data.json', 'utf8', (error, jsonFile) => {
    if (error)
        return console.log(error);
    //console.log(jsonFile);

    const jsonData = JSON.parse(jsonFile);
    const express = require('express');
    const app = express();
    const router = require('./src/app')(app, jsonData);
    
    app.set('port', process.env.PORT || 7002);
    
    // Start Express
    const server = app.listen(app.get('port'), function(){
        console.clear();
        console.log(`Start express web server : ${app.get('port')}`);
    });
});