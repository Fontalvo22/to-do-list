const express = require('express')
const app = express()
const port = 80;
const countPages = require('./helpers/countPages');
const getPaginatedData = require('./helpers/getPaginatedData');
const findNextElementIndex = require('./helpers/findNextElementIndex');
const hbs = require('hbs');
var cors = require('cors')
const db = require('./db/config');
const isEmpty = require('just-is-empty');


// app.use(cors())
app.use(express.json());
app.use(express.urlencoded());

app.set('views', __dirname + '/views');
app.set('view engine', 'hbs');

app.use(express.static(__dirname + "/static"));
app.use(express.static(__dirname + "/js"));

var bodyParser = require('body-parser')

hbs.registerHelper('if_equal', function(a, b, opts) {
    if (a == b) {
        return opts.fn(this)
    } else {
        return opts.inverse(this)
    }
});

app.get('/', (req, res) => {

    countPages(db).then(totalPages=>{
        db.query(`SELECT * FROM to_do_list ORDER BY creado_en desc LIMIT 10`, function (err, result, fields) {
            if (err){
                res.status(400).json({"message": "ha habido un error"})
            }else{
                res.render('home', { data: result, pages:totalPages });
            };
        });
    })



})

app.post('/add-task', (req, res) => {

    let taskName = req.body.taskName;

    if (isEmpty(taskName)) {

        res.status(406).json({"message": "Debe insertar una descripcion de la tarea"});

    }else{
        db.query(`INSERT INTO to_do_list (descripcion, fecha_limite) VALUES ("${taskName}", ${"2023-12-11"})`, function (err, result, fields) {
            if (err){
                res.status(400).json({"message": "ha habido un error"})
            }else{
                res.json({"message": "Tarea creada con éxito", "newId":result.insertId})
            };
        });
    }

})

app.get('/get-tasks', (req, res) => {
    getPaginatedData(db, req.query.offset)
        .then((data) => {
            res.json({"tasks": data})
        })
        .catch((error)=>{
            res.status(406).json({"message": "Ha ocurrido un error"});
        });




})

app.delete('/delete-task/:id', (req, res) => {

    let taskId = req.params.id;

    if (isEmpty(taskId)) {

        res.status(406).json({"message": "necesita id de tarea"});

    }else{
        const nextIndex = findNextElementIndex(taskId)

        // db.query(`SELECT * FROM to_do_list WHERE tarea_id > ${taskId} LIMIT 1`, function (err, nextElement, fields) {
        //     if (err){
        //         res.status(400).json({"message": "ha habido un error"})
        //     }else{
                db.query(`DELETE FROM to_do_list WHERE tarea_id = ${taskId}`, function (err, result, fields) {
                    if (err){
                        res.status(400).json({"message": "ha habido un error"})
                    }else{

                        // res.json({"message": "Tarea eliminada con éxito con éxito", "nextElement": nextElement[0]})
                        res.json({"message": "Tarea eliminada con éxito con éxito", "nextElement": "padd"})

                    };
                });

            // };
        // });
    }

})


app.patch('/update-task/:id', (req, res) => {

    let taskId = req.params.id;
    let taskName = req.body.taskName;
    if (isEmpty(taskId)) {

        res.status(406).json({"message": "necesita id de tarea"});

    }else{
        db.query(`UPDATE to_do_list SET descripcion = "${taskName}" WHERE tarea_id = ${taskId}`, function (err, result, fields) {
            if (err){
                res.status(400).json({"message": "ha habido un error", "error": err.message})
            }else{
                res.json({"message": "Tarea actualizada con éxito con éxito"})
            };
        });
    }

})

app.listen(port, () => {
    // console.log(`Example app listening on port ${port}`)
})