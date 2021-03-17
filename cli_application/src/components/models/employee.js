export const employee_model = (data) => {

    let rows = data;

    return {

        data: {
            columns: [
                {
                    label: 'Id',
                    field: 'IDEMPLEADO',
                    sort: 'asc',
                    width: 50
                },
                {
                    label: 'Nombre',
                    field: 'NOMBRECOMPLETO',
                    sort: 'asc',
                    width: 150
                },
                {
                    label: 'Num Empleado',
                    field: 'NUMERO',
                    sort: 'asc',
                    width: 150
                },
                {
                    label: 'Estado',
                    field: 'ESTADO',
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