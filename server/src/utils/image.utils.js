const sharp = require("sharp");
const fs = require("fs").promises;
const path = require("path");
const { v4: uuidv4 } = require("uuid");

async function resizeProfilePic(inputPath) {
const PROFILE_PIC_FOLDER = path.join(__dirname,"..", "..", "static", "profile_pics");

  await fs.mkdir(PROFILE_PIC_FOLDER, { recursive: true });

  const newFilename = uuidv4() + ".png";
  const filepath = path.join(PROFILE_PIC_FOLDER, newFilename);

  try {
    await sharp(inputPath).resize(200, 200).png().toFile(filepath);
    await fs.unlink(inputPath);
  } catch (err) {
    console.error("Error resizing profile pic:", err);
    throw err;
  }

  return {
    filename: newFilename,
    path: filepath.replace(/\\/g, "/"),
    url: `/profile_pics/${newFilename}`,
  };
}

module.exports = { resizeProfilePic };
