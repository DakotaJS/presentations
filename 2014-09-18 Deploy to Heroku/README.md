# Depoying to Heroku

September 18th, 2014

Lighting talk by Justin Walsh [@justin_walsh](http://twitter.com/justin_walsh).

---

Heroku is a cloud computing platform designed and built for developers

# Presentation Agenda

- Signup
- Setup local git
- Create basic project structure
- Create heroku app
	- Procfile
	- Package file
	- index.js
- Push code to heroku
- Scale!
- View Logs
- Success!

# Links

- [Heroku](http://heroku.com/)
- [Heroku - Node Getting Started Guide](https://devcenter.heroku.com/articles/getting-started-with-nodejs)
- [12 Factor App](http://12factor.net/)
- [Up Time Robot](https://uptimerobot.com/)

# Example http server

```
var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
}).listen(1337, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1337/');
```