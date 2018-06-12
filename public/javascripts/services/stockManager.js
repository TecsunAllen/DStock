import $ from "jquery";

async function callJsonp(url){
    let data = await new Promise((resolve,reject)=>{
        $.ajax({
            url: url,
            dataType: "jsonp",
            type: "get",
            jsonpCallback: "jsonpcallback",
            timeout: 5000,
            success: function (data) {
                resolve(data);
            },
            error: function (XHR, textStatus, errorThrown) {
                console.log('error: ' + textStatus);
                reject('error: ' + errorThrown);
            }
        });
    });
    return data;
}


async function queryAllStockData(code){
    let response =  await new Promise(function(resolve,reject){
        var xhr = new XMLHttpRequest();   
        var data = JSON.stringify({
        });
        //var url =`https://xueqiu.com/stock/forchartk/stocklist.json?symbol=${code}&period=1day&type=normal
        //&begin=${0}&end=${(new Date()).getTime()}`;
        var url = "/javascripts/services/sz50StockData.json";
        xhr.open('GET',url,true);
        //xhr.open('GET',`/GetUrlResultProxy?url=${url}`,true);
        xhr.onload=function(ev){
          resolve(ev.currentTarget.response);
        };
        xhr.send();
    });
    return JSON.parse(response);
}

async function getFundInfo(code){
    let data = await callJsonp(`http://api.fund.eastmoney.com/pinzhong/LJSYLZS?fundCode=${code}&indexcode=000300&type=y&_=${(new Date()).getTime()}`);
    return data.Data;
}

async function searFunds(search){
    let data = await callJsonp(`http://fundsuggest.eastmoney.com/FundSearch/api/FundSearchAPI.ashx?m=1&key=${search}&_=${(new Date()).getTime()}`);
    return data.Datas;
}

export default {
    queryAllStockData,
    searFunds,
    getFundInfo
};