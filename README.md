#Portfolio Website (gregfick.com)

##Powered By
Node.js, Express, Forever, HTML, CSS, JavaScript, jQuery, Git

##Getting Started
To run locally:

1. Install node and git.
2. Clone the project: `$ git clone https://github.com/gfick/portfolio.git`
3. Change directory into the portfolio folder `$ cd portfolio`
4. Install node dependencies `$ npm install`
5. Run the server with forever `forever start server.js`
6. You have an express web server running on port 3000. To change the port edit this line in the server.js file to reflect whatever port you desire. `app.set('port', process.env.PORT || 3000);`