const jsonServer = require('json-server');
const data = require('../data/data.json')
const cors = require('cors');

const moment = require('moment');
// multer모듈 (for 파일업로드)
const multer = require('multer');

// 파일 업로드
const storage_file = multer.diskStorage({
    destination: function(req, file, cb) {
        //cb(null, 'jsonplaceholder/upload/');
        cb(null, '/home/node/app/upload');
    },
});
// 파일 업로드 -> 5MB 제한
const fileUpload = multer({ storage: storage_file, limits: { fileSize: 5 * 1024 * 1024 } })

module.exports = function(app, jsonData)
{
    app.use(cors());

    app.post('/fileUpload', fileUpload.single('userfile'), function(req, res) {
        console.log(`[${moment().format('HH:mm:ss.SSS')}] 파일 업로드 완료`);

        res.statusCode = 200;
        res.send(`정상 업로드 되었습니다.`);
    });

    app.get('/filedownload',function(req,res) {
        const filename = req.query.filename;
        const filePath = `/home/node/app/upload/${filename}`;

        res.statusCode = 200;
        res.download(filePath);
    });

    app.get('/',function(req,res) {
        res.statusCode = 200;
        res.send("Main");
    });

    app.get('/posts',function(req,res) {
        res.json(jsonData);
    });

    app.get('/posts/:id',function(req,res) {
        const id = req.params.id;
        const filter = jsonData.posts.filter(it => it.id === parseInt(id));
        res.json(filter);
    });
}