# jsonplaceholder

**A simple fake REST API for testing.**

json-server 모듈 사용 json데이터 호스팅 [port : 8003]<br/>
express 모듈 사용 json데이터 호스팅 [port : 8002]

***
JSONPlaceholder is powered by [JSON Server](https://github.com/typicode/json-server).

Demo site :<br/>
- [JSON Server hosting - http://arong.info:7003](http://arong.info:7003).
- [express hosting - http://arong.info:7002/posts/1](http://arong.info:7002/posts/1).

### Get json data by all [json-server]
```
curl \
  -X GET "http://arong.info:7003/posts"
```

### Get json data by id [json-server]
```
curl \
  -X GET "http://arong.info:7003/posts/{id}"
```
***

### Get json data by all
```
curl \
  -X GET "http://arong.info:7002/posts"
```

### Get json data by id
```
curl \
  -X GET "http://arong.info:7002/posts/{id}"
```

### File upload
```
curl \
  -X POST \
  -F 'file=@hello.jpg' -F 'name=userfile'
```

### File download
```
curl \
  -X GET "http://arong.info:7002/filedownload?filename={filename}"
  
```
