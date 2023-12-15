const getPaginatedData = (db, offset)=>{
    return new Promise(function(resolve, reject) {
        db.query(`SELECT * FROM to_do_list ORDER BY creado_en desc LIMIT 10 OFFSET ${offset}`, function (err, result, fields) {
            if (err){
                reject(err.message);
            }else{
                resolve(result);
            }
        });
    });
}

module.exports = getPaginatedData;