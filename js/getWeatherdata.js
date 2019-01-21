/*Get data using xmlhttprequest*/

// function getWeatherdata(){
// 	this.http=new XMLHttpRequest();
// }

// getWeatherdata.prototype.get = function(url,callback){
// this.http.open('GET',url,true)
// this.http.onload=function(){
// 	if(this.status===200&&this.readyState===4){
// 		return callback(JSON.parse(this.responseText));
// 	}
// }
// this.http.send()
// }


/*Get data using async wait*/

class getWeatherdata{

	async get(url){
		const response=await fetch(url);
		const reponsedata=await (response.json());
		 return reponsedata;

	}
}

