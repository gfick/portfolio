#Portfolio Website (gregfick.com)

##Powered By
Node.js, Express, Forever, EJS, node-sass, HTML, CSS, JavaScript, jQuery, Git

##Getting Started
To run and develop:

1. Install node and git.
2. Clone the project: `$ git clone https://github.com/gfick/portfolio.git`
3. Change directory into the portfolio folder `$ cd portfolio`
4. Install node dependencies `$ npm install`
  * You might have to manually install the node packages if starting the server fails/the local webpage doesn't appear. If so open `package.json` and view the node package dependencies section.
  * Run an install for each node package dependency`$ npm install -g package-name`
5. Run the SCSS compiler in a new terminal window  `$ node-sass -w assets/scss/ -o assets/css`
6. Run the server with forever `forever start server.js`
7. You have an express web server running on port 3000. To change the port edit this line in the server.js file to reflect whatever port you desire. `app.set('port', process.env.PORT || 3000);` Set port to 80 for use on the web.
8. Open a browser to your localhost:PORTNUMBER