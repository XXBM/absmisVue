module.exports={
	proxyList:{
	   '/absmis/':{
	        target:"http://localhost:8090/absmis/",
	        changeOrigin:true,
	        pathRewrite:{
	            '^/absmis':""
	    }
	    	}
	}
}