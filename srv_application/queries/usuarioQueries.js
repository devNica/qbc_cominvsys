const usuarioQueries = {
  sesion: (data) => {
    return `SELECT 

            USR.IDUSUARIO,
            USR.USERNAME,
            USR.PASSWORD,
            USR.TOKEN,
            USR.ESTADO AS ESTADOUSUARIO,
            PF.IDPERFIL,
            PF.PERFIL,
            PF.ESTADO AS ESTADOPERFIL,
            GROUP_CONCAT(DISTINCT(CONCAT(TP.TIPO,'-',MD.MODULO)))AS PERMISO,
            GROUP_CONCAT(DISTINCT(MD.MODULO)) AS MODULO

            FROM usuario AS USR
            INNER JOIN usuario_perfil AS UP ON UP.FK_USUARIO = USR.IDUSUARIO
            INNER JOIN perfil AS PF ON PF.IDPERFIL = UP.FK_PERFIL
            INNER JOIN perfil_permiso AS PP ON PP.FK_PERFIL = PF.IDPERFIL
            INNER JOIN permiso AS PM ON PM.IDPERMISO = PP.FK_PERMISO
            INNER JOIN tipo_permiso AS TP ON TP.IDTIPOPERMISO = PM.FK_TIPOPERMISO
            INNER JOIN usuario_modulo AS UM ON UM.FK_USUARIO = USR.IDUSUARIO
            INNER JOIN modulo AS MD ON MD.IDMODULO = UM.FK_MODULO
            WHERE USR.USERNAME = '${data.username}'`;
  },

  accounts: () => {
    return `SELECT 

            USR.IDUSUARIO,
            USR.USERNAME,
            IF(USR.ESTADO=1,'USR-ACTIVO','USR-INACTIVO') AS ESTADOUSUARIO,
            PF.IDPERFIL,
            PF.PERFIL,
            IF(PF.ESTADO=1,'ACTIVO','INACTIVO') AS ESTADOPERFIL,
            GROUP_CONCAT(DISTINCT(CONCAT(TP.TIPO,'-',MD.MODULO)))AS PERMISO,
            GROUP_CONCAT(DISTINCT(MD.MODULO)) AS MODULO

            FROM usuario AS USR
            INNER JOIN usuario_perfil AS UP ON UP.FK_USUARIO = USR.IDUSUARIO
            INNER JOIN perfil AS PF ON PF.IDPERFIL = UP.FK_PERFIL
            INNER JOIN perfil_permiso AS PP ON PP.FK_PERFIL = PF.IDPERFIL
            INNER JOIN permiso AS PM ON PM.IDPERMISO = PP.FK_PERMISO
            INNER JOIN tipo_permiso AS TP ON TP.IDTIPOPERMISO = PM.FK_TIPOPERMISO
            INNER JOIN usuario_modulo AS UM ON UM.FK_USUARIO = USR.IDUSUARIO
            INNER JOIN modulo AS MD ON MD.IDMODULO = UM.FK_MODULO
            WHERE 1`;
  },
};

module.exports = usuarioQueries;
