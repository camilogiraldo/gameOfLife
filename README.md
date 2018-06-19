# Application structure
*App.js* contains all the game of life logic, and is in charge for rendering the main layout of the page. 

## Components
*header/Header.js* contains all the game controls, and lifts up the game actions via props to the main app.js logic. <br>
*box.js* is the visual representation of a cell in the grid.<br>
*ui/button.js* is the visual representation of a button in the screen<br>
*styledGrid.js* is the visual representation for the complete grid

## Containers Components
*Grid.js* is the 50x50 grid, with all the visual game. It recieves all the logic to show in the screen via props as if a row is alive or dead.


### `How to run`
npm install<br>
npm start

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.


### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

