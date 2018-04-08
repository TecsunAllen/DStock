var express = require('express');
var router = express.Router();
var https = require('https');
var http = require('http');
var request = require('request');
var url = require('url');
var iconv = require("iconv-lite");
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
    var option = {
        url,
        headers: {
            'Cookie': 'device_id=2a0151b29fb12defc30df47ab352ef27; remember=1; remember.sig=K4F3faYzmVuqC0iXIERCQf55g2Y; xq_a_token=f6eec5e2c53f78e5269e29ebcd1ac6769b9dcf2e; xq_a_token.sig=MdLTcA9DDPVwO33v6w1EqmsqFbg; xq_r_token=2d6ad170d2d0e3f58a3a6e2c8a83224b4d74c5e0; xq_r_token.sig=jhvxfju1ode06CDrPSXLdF6rRw0; xq_is_login=1; xq_is_login.sig=J3LxgPVPUzbBg3Kee_PquUfih7Q; u=7066027086; u.sig=cQgJ3rQ9Cbo4ltBbo29bXrkaNX4; s=g8125u9w28; bid=175bbf0aedfd91a63df4827cbf81eda1_jfgtrqtb; aliyungf_tc=AQAAABL0fATdWwkAyDAxOluT9Zuk5EGa; Hm_lvt_1db88642e346389874251b5a1eded6e3=1522559761,1523017651,1523190313; __utmc=1; __utmz=1.1523190313.5.3.utmcsr=baidu|utmccn=(organic)|utmcmd=organic; snbim_minify=true; __utma=1.54466226.1522559761.1523190313.1523192360.6; __utmb=1.1.10.1523192360; Hm_lpvt_1db88642e346389874251b5a1eded6e3=1523192360',
        }
    };
    request(option,function (error, response, body) {
        if (!error && response.statusCode == 200) {
            if(callback)callback(body); 
        }
    });
  /*var curHttp;
  curHttp = /https/i.test(url)?https:http;
  curHttp.get(url, function (res) {
      var datas = [];
      var size = 0;
      res.headers.cookie="";
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
  });*/
}

module.exports = router;
