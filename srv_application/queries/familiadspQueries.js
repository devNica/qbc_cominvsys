/* eslint-disable prettier/prettier */
const familiadspQueries = {
    listar: ()=>{
        return `SELECT  
        FAM.IDFAMILIADSP,
        CD.DISPOSITIVO,
        MK.MARCA,
        FAM.FAMILIA,
        FAM.ARQUITECTURA,
        CE.TIPOEQP
        
        FROM familiadsp as FAM
        INNER JOIN catalogodsp AS CD ON CD.IDCATALOGODSP = FAM.FK_CATALOGODSP
        INNER JOIN marca AS MK ON MK.IDMARCA = FAM.FK_MARCA
        INNER JOIN catalogoeqp AS CE ON CE.IDCATALOGOEQP = FAM.FK_CATALOGOEQP
        WHERE 1`
    },
}

module.exports = familiadspQueries;