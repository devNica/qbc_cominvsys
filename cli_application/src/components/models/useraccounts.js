export const useraccounts_model = (data) => {

    let rows = data;

    return {

        data: {
            columns: [
                {
                    label: 'Id',
                    field: 'IDUSUARIO',
                    sort: 'asc',
                    width: 50
                },
                {
                    label: 'Username',
                    field: 'USERNAME',
                    sort: 'asc',
                    width: 150
                },
                {
                    label: 'Perfil',
                    field: 'PERFIL',
                    sort: 'asc',
                    width: 150
                },
                {
                    label: 'Estado',
                    field: 'ESTADOPERFIL',
                    sort: 'asc',
                    width: 150
                },
                {
                    label: 'Opciones',
                    field: 'OPCIONES',
                    sort: 'asc',
                    width: 75
                },
            ],
            rows,
        }
    }

}