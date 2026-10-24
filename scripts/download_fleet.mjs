import fs from "fs";
import https from "https";
import path from "path";

const fleet = [
  { id: "ertiga", url: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&q=80&w=1200" },
  { id: "scorpio", url: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=1200" },
  { id: "xylo", url: "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&q=80&w=1200" },
  { id: "tavera", url: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=1200" },
  { id: "bolero", url: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&q=80&w=1200" },
  { id: "indigo", url: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=1200" },
  { id: "swift", url: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&q=80&w=1200" },
];

const destDir = path.resolve("public/fleet");
if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

function download(url, dest) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return download(res.headers.location, dest).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) {
        return reject(new Error(`Failed with status ${res.statusCode}`));
      }
      const file = fs.createWriteStream(dest);
      res.pipe(file);
      file.on("finish", () => {
        file.close(() => resolve());
      });
    }).on("error", reject);
  });
}

for (const car of fleet) {
  const file = path.join(destDir, `${car.id}.jpg`);
  try {
    console.log(`Downloading ${car.id}...`);
    await download(car.url, file);
    const size = fs.statSync(file).size;
    console.log(`Saved ${car.id} (${size} bytes)`);
  } catch (err) {
    console.error(`Error downloading ${car.id}:`, err.message);
  }
}
