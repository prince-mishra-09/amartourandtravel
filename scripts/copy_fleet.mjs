import fs from "fs";
import path from "path";

const brainDir = "C:\\Users\\mrpri\\.gemini\\antigravity-ide\\brain\\8e7aec85-5f23-4257-bf79-fcb1d1efe6d4";
const targetDir = path.resolve("public/fleet");

if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

const mapping = {
  "ertiga.jpg": "ertiga_car_1792774942548.jpg",
  "scorpio.jpg": "scorpio_car_1792774991399.jpg",
  "xylo.jpg": "xylo_car_1792775081172.jpg",
  "tavera.jpg": "tavera_car_1792775126760.jpg",
  "bolero.jpg": "bolero_car_1792775181961.jpg",
  "indigo.jpg": "indigo_car_1792775275147.jpg",
  "swift.jpg": "swift_car_1792775441782.jpg",
};

for (const [destName, srcName] of Object.entries(mapping)) {
  const src = path.join(brainDir, srcName);
  const dest = path.join(targetDir, destName);
  if (fs.existsSync(src)) {
    fs.copyFileSync(src, dest);
    console.log(`Copied ${srcName} -> ${destName} (${fs.statSync(dest).size} bytes)`);
  } else {
    console.error(`Source not found: ${src}`);
  }
}
