import * as oracledb from 'oracledb';

export async function getDatabaseVersion(){

    try{
        const connection = await oracledb.getConnection({
            user: 'XXXX',
            password: 'XXXX',
            connectString: 'XXXX',
        });
        const queryResult = await connection.execute('SELECT VERSION FROM DATABASE_VERSION')
        await connection.close();
        console.log("la version es: ", queryResult);
        return queryResult;
    } catch(error) {
        console.error('Error al obtener version ',error);
        throw error;
    }

}
