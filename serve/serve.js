'use strict'

// 导入服务器模块
let http = require('http');
let fs = require('fs');
let path = require('path');
let url = require('url');


// 创建服务器，回调函数的第一个参数为请求的内容，第二个参数为响应的结果
let server = http.createServer(function(request,response){
	// 处理预请求OPTIONS
	if(request.method === 'OPTIONS'){
		response.writeHead(200,{
			"Access-Control-Allow-Origin":"*",
			"Access-Control-Allow-Methods":"PUT,POST,GET,OPTIONS",
			"Access-Control-Allow-Headers": "*"  
		});
		response.end();
	}

	// 获取路径名
	let requestUrl = url.parse(request.url);
	// 获取get参数
	let param = url.parse(request.url,true).query;

	console.log(requestUrl.pathname);

	// 接收post参数
	let p = new Promise(function(resolve,reject){
		// 接收post参数
		let str = '';
		request.on('data',(data)=>{
			str += data;
		});
		request.on('end',()=>{
			console.log(str);
			// 传值给then
			resolve(str);
		});
	});

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
		case '/pInfo':
			getData(request,response,'pInfo.json',param.id);
			break;
		case '/proving':
			// 调用验证函数
			p.then((str)=>{
				str = JSON.parse(str);
				console.log(typeof str);
				console.log(str);
				proving(response,str.user,str.password);
			}).catch(err => {
				console.log(err);
			});
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
	let str = require('./data/' + way);
	str = str.data;
	
	if(id !== -1){
		for(let item of str){
			if(item.id == id){
				str = item;
				break;
			}
		}
	}

	str = JSON.stringify(str);
	
	response.write(str);

	response.end();
}


// 验证账号密码函数
function proving(response,user,password){
	response.writeHead(200,{
		'Content-Type':'text/json;charset=utf-8',
		"Access-Control-Allow-Origin":"*"
	});

	let arr = require('./data/userProving.json').data;

	let str = {};

	let i = 0;
	arr.forEach(item => {
		if(item.user === user)
			if(item.password === password){
				str.login = true;
				console.log(i++,item);
			}
	});

	if(!str.login) str.login = false;

	str = JSON.stringify(str);

	response.write(str);

	response.end();

}