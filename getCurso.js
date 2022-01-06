const cnx = require('./cnx');
const sql = require('mssql');

/*
* OBTENER DATOS DE UNA TABBLA (GET)
*/
/*
async function getCurso(){
    try {
        let pool = await sql.connect(cnx);
        let salida = await pool.request().query('SELECT *FROM Curso');

        console.log(salida.recordsets);
    } catch (error) {
        console.log(error);
    }
}

getCurso();
module.exports = {
    getCurso: getCurso
}
*/

/**
 *  INSERTAR DATOS A UNA TABLA - (SE PUEDE HACER UN PROCESO ALMACENADO EN SQL CAMBIANDO .query por .execute('nombre del SP'))
 */
/*
async function putCurso(){
    try {
        let pool = await sql.connect(cnx);
        //let newCurso = await pool.request().query('SELECT *FROM Curso');
        const request = pool.request()
        request.input('Nombre', sql.VarChar, 'Noveno'),
        request.input('CarreraId', sql.Int, 4)
        request.query('INSERT INTO Curso (Nombre,CarreraId) VALUES (@Nombre,@CarreraId)', (err,result) => {
            console.log(result);
        });

        //console.log(newCurso.recordsets);
    } catch (error) {
        console.log(error);
    }
}
putCurso();
*/

/**
 *  UPDATE - ACTUALIZAR DATOS DE UNA TABLA (TODO ESTO SE ESTA HACIENDO DE FORMA LOCAL)
 */
/*
async function updCurso(){
    try {
        let pool = await sql.connect(cnx);
        //let newCurso = await pool.request().query('SELECT *FROM Curso');
        const request = pool.request()
        request.input('Nombre', sql.VarChar, 'asdasd'),
        //request.input('CarreraId', sql.Int, 4)
        request.query('UPDATE Curso SET Nombre = @Nombre WHERE ID = 9', (err,result) => {
            console.log(result);
        });

        //console.log(newCurso.recordsets);
    } catch (error) {
        console.log(error);
    }
}
updCurso();
*/

/**
 *  DELETE - ELIMINAR UN REGISTRO DE LA TABLA (TODO ESTO SE ESTA HACIENDO DE FORMA LOCAL)
 */

 async function delCurso(){
    try {
        let pool = await sql.connect(cnx);
        let salida = await pool.request().query('DELETE FROM Curso WHERE ID = 9');

        console.log(salida.recordsets);
    } catch (error) {
        console.log(error);
    }
}

delCurso();

module.exports = {
    //getCurso: getCurso,
    //putCurso: putCurso,
    //updCurso: updCurso
    delCurso: delCurso
}