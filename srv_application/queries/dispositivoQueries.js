const dispositivoQueries = {
  listar: (IDDISPOSITIVO) => {
    return `SELECT 

    DSP.IDDISPOSITIVO,
    CONCAT(FAM.FAMILIA,' - ',FAM.ARQUITECTURA)AS FAMILIA,
    DSP.FK_FAMILIADSP,
    DSP.UCAP,
    DSP.FK_UCAPC,
    DSP.UFREQ,
    DSP.FK_UFREQ,
    DSP.MODELO
    
    FROM dispositivo AS DSP
    INNER JOIN familiadsp AS FAM ON FAM.IDFAMILIADSP = DSP.FK_FAMILIADSP 
    WHERE DSP.IDDISPOSITIVO = ${IDDISPOSITIVO}`;
  },
};

module.exports = dispositivoQueries;
