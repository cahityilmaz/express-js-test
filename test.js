const express = require('express');
const app = express()
const fs = require('fs');
const formidable = require('formidable');

app.post('/yukleme', function (req, res) {

  let yukleme = new formidable.IncomingForm();
  yukleme.parse(req, function (err, fields, files) {

    let dosyaYolu = files.yuklenecek_dosya.filepath;
    let yuklenecekYer = __dirname + '/' + files.yuklenecek_dosya.originalFilename;

    fs.rename(dosyaYolu, yuklenecekYer, function (error) {
      if (error) throw error;
      res.send('Dosya başarıyla yüklendi.');
    });

  });
});

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/form.html');
});

app.listen(3000);