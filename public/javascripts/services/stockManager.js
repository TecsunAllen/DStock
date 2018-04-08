async function queryAllStockData(code){
    let response =  await new Promise(function(resolve,reject){
        var xhr = new XMLHttpRequest();
       
        var data = JSON.stringify({
        });
        xhr.open('GET',`/GetUrlResultProxy?url=${encodeURIComponent(`https://xueqiu.com/stock/forchart/stocklist.json?symbol=${code}&period=all`)}`,true);
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