# Tricorder - TS
A back-end template package for Phaser.js and other html game frameworks

### **Make real-time multiplayer games and store player information in a database**
![browser](docs/tricorder-demonstration-browser.gif)

### **Use simple node commands to make development smooth and painless**
![server](docs/tricorder-demonstration-npm-commands.gif)

This template provides a development environment written in Typescript for Phaser games (or any html based library) by utilizing a few common node modules like [Socket.IO](https://socket.io/docs/), [TypeOrm](https://typeorm.io/#/), and Http. It works by running an http server with bound websocket and rendering files to the browser that are used to run the game. Although you can use Javascript, Typescript makes development cleaner and easier in a variety of way: 
- Smart Completions
- Scalability
- Readability

Getting started: 
1. Install node.js
2. Clone the repository and open the folder in your IDE
3. Install the required dependencies and devDependencies with `npm install`. (dependencies are found in the package.json file)
4. Run the following commands: 
- `npm run devServer`
: Runs the development server on localhost and automatically restarts the server when file changes are detected. It also initializes a connection to a sqlite database configured with 'ormconfig.json'.
- `npm run bundle`
: Runs webpack to create a browser-ready Javascript file and automatically re-bundles when file changes are detected.
5. Go to the 'game' folder and start coding!

Later updates may include:
- Added functionality
- Production-ready environment
- Better documentation
