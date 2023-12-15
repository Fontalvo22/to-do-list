const countPages = (db)=>{
    return new Promise(function(resolve, reject) {

        db.query(`SELECT COUNT(*) AS items_count FROM to_do_list`, function (err, result, fields) {
            if (err){
                reject(err);
            }else{
                const totalPages = Math.ceil(result[0].items_count / 10);

                const pages = new Array(totalPages);

                for (let i = 0; i < pages.length; i++) {
                    // let page = pages[i];
                    pages[i] = {};
                    pages[i].page = i+1;
                    pages[i].limit = 10;
                    pages[i].offset = 10*i;
                }
                resolve(pages);
            }
        });

    });
}


module.exports = countPages;