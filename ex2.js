var http = require('http');
var express = require('express');
var bodyParser = require('body-parser');
const https = require('https');


let CHROME_USER_AGENT ='Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36(KHTML, like Gecko) Chrome/41.0.2228.0 Safari/537.36';
let FIREFOX_USER_AGENT ='Mozilla/5.0 (Windows NT 6.1; WOW64; rv:40) Gecko/20100101 Firefox/40.1';
let IE_USER_AGENT ='Mozilla/5.0 (Windows NT 6.1; WOW64; Trident/7.0; AS; rv:11.0) likeGecko';

let options = {
    host: 'api.github.com',
    path: '/users',
    method: 'GET',
    headers: { 'user-agent': CHROME_USER_AGENT}
};

let request = https.request(options,(response) =>{
    let body = '';
    response.on('data' , (out)=> {
        body += out ;
        
     });
     
    
     
     response.on('end' , (out)=> {
     let json = JSON.parse(body);
      console.log(json);
    
  });
});
  
request.end();
