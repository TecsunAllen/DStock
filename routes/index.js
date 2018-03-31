var express = require('express');
var router = express.Router();
var https = require('https');
var http = require('http');
var url = require('url');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/DStock', function(req, res, next) {
  res.render('DStock', { title: 'Express' });
});


router.get('/GetUrlResultProxy', function (req, res) {
  var arg = url.parse(req.url, true).query;
  getUrlHttpsProxy(arg.url,function(result){
      res.writeHead(200, {'Content-type' : 'text/json;charset=utf-8','Access-Control-Allow-Origin':'*'});
      res.write(result);
      res.end();
  });
});



function getUrlHttpsProxy(url,callback) {
  var curHttp;
  curHttp = /https/i.test(url)?https:http;
  curHttp.get(url, function (res) {
      var datas = [];
      var size = 0;
      res.on('data', function (data) {
          datas.push(data);
          size += data.length;
      });
      res.on("end", function () {
          var buff = Buffer.concat(datas, size);
          var result = iconv.decode(buff, "utf8");
          if(callback)callback(result);
      });
  }).on('error', function (e) {
      console.error(e);
  });
}

module.exports = router;
