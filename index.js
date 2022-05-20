require('dotenv').config({path: '.env'});
const express = require("express");
const fetch = require("node-fetch");
const app = express();
const port = 3000;

app.get("/", async (req, res) => {
  let json = await fetch(process.env.URL).then(
    (res) => res.json()
  );
  let response = `<html><head><title>Desafio</title></head><body>`;

  json
    .filter((item, i) => i < 100)
    .forEach((item) => {
      response += `<h3>${item.albumId} / ${item.id} - ${item.title}</h3><img src='${item.url}'><br />`;
    });

  response += `</body></html>`;

  res.send(response);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
