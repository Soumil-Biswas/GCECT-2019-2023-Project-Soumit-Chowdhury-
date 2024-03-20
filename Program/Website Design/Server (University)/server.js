const express = require('express');
const sqlite = require('sqlite3').verbose();
const app = express();
app.listen(6900, () => console.log('listening at 6900'));
app.use(express.static('public'));
app.use(express.json({limit: '100mb'}));

app.post('/api', (request, response) => {
    /*Recieve Candidate Entry*/
    console.log('Candidate Entry Recieved.')
    console.log(request.body);
    const data = request.body;
    /*Send Response Package to Client for Successful reception*/
    response.json({
        status: "Candidate Data Entry Successful.",
        Name : data.studentname,
        Roll_No : data.roll,
        Institute : data.university,
        Year_of_Passing : data.yop,
        DGPA : data.dgpa,
        Report_Card: data.reportcardname,
    })
    /*Create entry in Server-side Database*/
    let db = new sqlite.Database("./Candidate.db", sqlite.OPEN_READWRITE | sqlite.OPEN_CREATE);
    db.run("CREATE TABLE IF NOT EXISTS data(Name TEXT, Roll_No TEXT, Institute TEXT, Year_of_Passing INTEGER, DGPA DECIMAL, Report_Card_Name TEXT, Report_Card_Base_64 TEXT)");
    let insertdata = db.prepare('INSERT INTO data VALUES(?,?,?,?,?,?,?)');
    insertdata.run(data.studentname, data.roll, data.university, data.yop, data.dgpa, data.reportcardname, data.reportcard);
    insertdata.finalize();
    db.close;
})