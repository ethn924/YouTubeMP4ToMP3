// Required packages :
const express = require('express');
const fetch = require('node-fetch');
require('dotenv').config();

// Ma clé API YouTube : 4ec8fd0294msh9ca48c8d0f9e7d4p1b3086jsn1711e36f4046

// Create the express server :
const app = express();

// Server port number : Si bug : netstat -ano | findstr :3000 puis taskkill /PID (mon PID) /F
const PORT = process.env.PORT || 3000;

// Set template engine :
app.set('view engine', 'ejs');
app.use(express.static('public'));

// Needed to parse html data for POST requests :
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.render("index");
});

app.post("/convert-mp3", async (req, res) => {
  const videoId = req.body.videoID;
  if (videoId === undefined || videoId === "" || videoId === null) {
    return res.render("index", { success: false, message: "Veuillez entrer un ID valide" });
  } else {
    const fetchAPI = await fetch(`https://youtube-mp36.p.rapidapi.com/dl?id=${videoId}`, {
      "method": "GET",
      "headers": {
        "x-rapidapi-key": process.env.API_KEY,
        "x-rapidapi-host": process.env.API_HOST
      }
    });

    const fetchResponse = await fetchAPI.json();

    if (fetchResponse.status === "ok") {
      return res.render("index", { success: true, song_title: fetchResponse.title, song_link: fetchResponse.link });
    }
    else {
      return res.render("index", { success: false, message: fetchResponse.msg });
    }
  }
});

// Start the server : dans le terminal : npm run dev
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
