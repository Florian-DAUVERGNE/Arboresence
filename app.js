const express = require("express");
const multer = require("multer");
const AdmZip = require("adm-zip");
const path = require("path");
const fs = require("fs");
const cors = require("cors");

const app = express();
app.use(cors());

const upload = multer({ dest: "./" });

const mysql = require("mysql");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "arboresence",
});

db.connect((err) => {
  if (err) throw err;
  console.log("Connecté");
});

app.use(express.static(path.join(__dirname, "interface")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "interface", "index.html"));
});

app.get("/file", (req, res) => {
  const fichier = "uploads/" + req.query.file;
  const ext = path.extname(fichier);
  if (ext === ".html") {
    fs.readFile(path.resolve(__dirname, fichier), "utf8", (err, data) => {
      if (err) {
        console.error(err);
        res.status(500).send("ERREUR FICHIER");
      } else {
        res.type("text/plain");
        res.send(data);
      }
    });
  } else if (
    ext !== ".pdf" &&
    ext !== ".jpg" &&
    ext !== ".png" &&
    ext !== ".jpeg"
  ) {
    fs.readFile(path.resolve(__dirname, fichier), "utf8", (err, data) => {
      if (err) {
        console.error(err);
        res.status(500).send("ERREUR FICHIER");
      } else {
        res.send(data);
      }
    });
  } else {
    res.sendFile(path.resolve(__dirname, fichier));
  }
});

app.post("/upload", upload.single("fileUpload"), (req, res) => {
  const chemin = req.file.path;
  const zip = new AdmZip(chemin);
  
  const dossierSauvegarde = path.parse(req.file.originalname).name;
  zip.extractAllTo("uploads/" + dossierSauvegarde);
  const fichiers = parcourirArborescence("uploads/" + dossierSauvegarde);
  fs.unlinkSync(chemin);
  res.json(fichiers);
});

app.get("/data", (req, res) => {
  const sql = "SELECT * FROM fichiers";
  db.query(sql, (err, result) => {
    if (err) throw err;
    res.json(result);
  });
});

app.get("/data/:param", (req, res) => {
  const param = req.params.param;
  const sql = `SELECT * FROM fichiers WHERE extension = '${param}'`;
  db.query(sql, (err, result) => {
    if (err) throw err;
    res.json(result);
  });
});

function parcourirArborescence(chemin) {
  let cheminFichiers = [];
  try {
    const fichiers = fs.readdirSync(chemin);
    fichiers.forEach((fichier) => {
      const cheminComplet = path.join(chemin, fichier);
      const stat = fs.statSync(cheminComplet);
      if (stat && stat.isDirectory()) {
        cheminFichiers = cheminFichiers.concat(
          parcourirArborescence(cheminComplet)
        );
      } else {
        const extensionFichier = path.extname(cheminComplet);
        const tailleFichier = stat.size;
        const chemin = cheminComplet.replace("uploads/", "");
        const sql = `INSERT INTO fichiers (path, extension, taille) VALUES ('${chemin}', '${extensionFichier}', '${tailleFichier}')`;
        db.query(sql, (err, result) => {
          if (err) throw err;
          console.log(`${chemin} ajoutée à la bdd`);
        });
      }
    });
  } catch (erreur) {
    console.error("Erreur de lecture du répertoire :", erreur);
  }
  return cheminFichiers;
}

app.listen(3001, () => {
  console.log("Server started on port 3001");
});
