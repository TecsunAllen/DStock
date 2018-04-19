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

export default {
    queryAllStockData
};