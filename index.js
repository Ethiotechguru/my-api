const express = require('express');
const  db = require('./models');
const app = express();

app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: false}));

app.get('/', function(req, res){
    res.send('works fine');
});

app.get('/students', function(req, res){
    db.student.findAll().then(function(students){
        res.json(students);
    });
});
    app.get('/students/:id', function(req, res){
        db.student.findOne({
            where: {id: parseInt(req.params.id)}
        }).then(function(student){
            res.json(student);
        })
    })

app.post('/students', function(req, res){
    db.student.create({
        firstName:req.body.firstName,
        lastName: req.body.lastName,
        studentId: parseInt(req.body.studentId),
        age: parseInt(req.body.age),
        fieldOfStudy: req.body.fieldOfStudy,
        email: req.body.email
    }).then(function(data){
        console.log(data);
        res.json(data);
    });
});

app.put('/students/:id', function(req, res){
    db.student.update({
        firstName:req.body.firstName,
        studentId: parseInt(req.body.studentId),
        fieldOfStudy: req.body.fieldOfStudy,
        lastName: req.body.lastName,
        age: parseInt(req.body.age),
        email: req.body.email
    }, {
        where: {id: parseInt(req.params.id)}
    }).then(function(data){
        res.json(data);
    });
});

app.delete('/students/:id', function(req, res){
    db.student.destroy({
        where: {id:parseInt(req.params.id)}
    }).then(function(data){
        res.json(data);
    });
});

// Make your model
// Run the migrations
// Read one record route
// Read all record route
// Update one record route
// Delete one record route

app.listen(3000);