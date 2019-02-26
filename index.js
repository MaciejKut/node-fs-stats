var fs = require('fs');
var colors = require('colors');
// var StatMode = require('stat-mode');

// fs.stat('./cat.jpg', function (err, stats) {
//     var statMode = new StatMode(stats);
//     console.log(statMode.toString());
// });

// fs.readFile('./tekst.txt', 'utf-8', function (err, data) {
//     console.log(data);
// });

// fs.writeFile('./tekst.txt', 'Tekst który dodajemy', function (err) {
//     if (err) throw err;
//     console.log('zapisano');
// });

// fs.readFile('./tekst.txt', 'utf-8', function (err, data) {
//     console.log('Dane przed zapisem!'.blue);
//     console.log(data);
//     fs.appendFile('./tekst.txt', '\nDodano kolejną linijkę', function (err) {
//         if (err) throw err;
//         console.log('zapisano'.blue);
//         fs.readFile('./tekst.txt', 'utf-8', function (err, data) {
//             console.log('Dane po zapisie'.green);
//             console.log(data);
//         })
//     });
// });

fs.readdir('../node-fs-stats', 'utf-8', function (err, files) {
    fs.appendFile('./tekst.txt', '\n' + files, function (err) {
        if (err) throw err;
        fs.readFile('./tekst.txt', 'utf-8', function (err, data) {
            console.log('Dane po zapisie'.green);
            console.log(data);
        });
    });
});