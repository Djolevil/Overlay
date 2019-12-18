import { exec } from 'child_process';

/**
 * Execute simple shell command (async wrapper).
 * @param {String} cmd
 * @return {Object} { stdout: String, stderr: String }
 */
async function sh(cmd) {
  return new Promise(function (resolve, reject) {
    exec(cmd, (err, stdout, stderr) => {
      if (err) {
        reject(err);
      } else {
        resolve({ stdout, stderr });
      }
    });
  });
}

async function main() {
  let { stdout } = await sh('magick originalPicture.jpg -resize x1080 resize-originalPicture.jpg \n magick resize-originalPicture.jpg -gravity center -crop 1080x1080+0+0 +repage square-originalPicture.jpg \n magick square-originalPicture.jpg -gravity center overlay.jpg -composite final.jpg');
}

main();
