# Overlay

In its current version, this app will take your original picture, resize and crop it to 1080 by 1080 pixels while maintaining aspect ratio and put an overlay picture in the centre of it, by using ImageMagick image manipulation software.

## Requirements

Install [ImageMagick](https://imagemagick.org/script/download.php)

Install [Node.js](https://nodejs.org/en/)

Install [Babel CLI](https://babeljs.io/setup#installation):

```bash
npm i babel-cli -g
```
with latest preset:
```bash
npm i babel-preset-latest
```

## Usage

Put the desired background picture under the name **originalPicture.jpg** and the desired overlay picture under the name **overlay.jpg** into the app folder.

Once you run the app, you will get your Instagram ready 1080x1080 picture under the name **final.jpg** inside the app folder.

## How to run the app

Run test.js via:
```bash
babel-node --presets latest test.js
```

## Project goal

The ultimate goal of this project is to develop an app that will allow users to upload their picture of the basketball game they attended, put an overlay with the final result of the game on it and have it ready for sharing on social networks.

## License
[MIT](https://choosealicense.com/licenses/mit/)
