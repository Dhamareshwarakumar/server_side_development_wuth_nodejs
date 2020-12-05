const http = require('http');
const fs = require('fs');
const path = require('path');


const hostname = 'localhost';
const port = 4000;

const server = http.createServer((req, res) => {
    console.log(`-----------------------
Request URL: ${req.url}
Request method: ${req.method}`);

	if (req.method == 'GET') {
		var fileUrl;
		if (req.url == '/') fileUrl = '/index.html';
		else fileUrl = req.url;

		var filePath = path.resolve('./public'+fileUrl);
		const fileExt = path.extname(filePath);
		if(fileExt == '.html') {
			fs.exists(filePath, (exists) => {
				if (!exists) {
                    res.statusCode = 404;
                    console.log("Status Code: 404 - Page Not Found");
					res.setHeader('Content-Type', 'text/html');
					res.end('<html><body><h1>404 Not Found: '+ fileUrl +'</h1></body)</html>');
					return;
				}
				res.statusCode = 200;
                console.log("Status Code: 200 - OK");
				res.setHeader('Content-Type', 'text/html');
				fs.createReadStream(filePath).pipe(res);
			})
		}
		else {
			res.statusCode = 404;
            console.log("Status Code: 404 - Page Not Found");
			res.setHeader('Content-Type', 'text/html');
			res.end('<html><body><h1>Invalid File Type</h1></body)</html>');
		}
	}
	else {
		res.statusCode = 405;
        console.log("Status Code: 405 - Method Not Allowed");
		res.setHeader('Content-Type', 'text/html');
		res.end('<html><body><h1>Method Not Allowed</h1></body)</html>');
	}

});

server.listen(port, hostname, () => {
    console.log(`Server running @ http://${hostname}:${port}`)
});
