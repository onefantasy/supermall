'use strict'

// 导入服务器模块
let http = require('http');
let fs = require('fs');
let path = require('path');
let url = require('url');


// 创建服务器，回调函数的第一个参数为请求的内容，第二个参数为响应的结果
let server = http.createServer(function(request,response){
	// 打印地址
	// let requestUrl = request.url;
	
	// 获取路径名
	let requestUrl = url.parse(request.url);
	// 获取参数
	let param = url.parse(request.url,true).query;

	console.log(requestUrl.pathname);

	switch(requestUrl.pathname){
		case '/categoryData':
			getData(request,response,'categoryData.json');
			break;
		case '/homeImgBanner':
			getData(request,response,'homeImgBanner.json');
			break;
		case '/homeRecommend':
			getData(request,response,'homeRecommend.json');
			break;
		case '/homeGoods':
			getData(request,response,'homeGoods.json');
			break;
		case '/detailInfo':
			getData(request,response,'detailInfo.json',param.id);
			break;
		default : 
			response.writeHead(404,'not found',{
    			'Content-Type':'text/palin;charset=utf-8'
			});
			response.end();
			break;
	};
})

// 启动服务，第一个参数为监听的端口号，第二个参数为回调和函数
server.listen(8082,function(error){
	console.log('成功监听8082端口!');
});

// 获取数据的函数
function getData(request,response,way,id=-1){
	response.writeHead(200,{
		'Content-Type':'text/json;charset=utf-8',
		"Access-Control-Allow-Origin":"*"
	});
	/*let str = '';
	let dataPath = path.join(__dirname,'data/categoryData.json');
	let steam = fs.createReadStream(dataPath,);
	steam.on('data',(chunk)=>{
		str += chunk;
	})

	steam.on('end',()=>{

		str = JSON.parse(str).data;

		str = JSON.stringify(str);
	
		response.write(str);
	
		response.end();
	})*/
	let str = require('./data/' + way);
	str = str.data;
	if(id !== -1) {str = str[id-1];}
	str = JSON.stringify(str);
	
	response.write(str);

	response.end();
}