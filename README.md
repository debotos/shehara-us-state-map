# shehara-us-states-map

## Available Scripts

In the project directory, you can run:

### `yarn` or `yarn install`

To install the dependency.

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

## Project Setup

Fill the file `src/config/keys.js` with your Mapbox Default public token (https://account.mapbox.com/)

`src/data/us-states.json` This is the main data object file. Every item of this object is a state. Every state have properties -

```
"properties": {
    "short": "Ohio",
    "name": "Ohio",
    "density": 281.9,
    "text": 200,
    "bgColor": "#088",
    "textColor": "#fff"
}
```
Those field is pretty self explanatory.
If you don't put bgColor then the background color will not appear. Same for the text property. You can put string here.