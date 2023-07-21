const empleados = [
    {
        id: 1,
        nombre: 'Samuel',
    },
    {
        id: 2,
        nombre: 'Stephanie',
    },
    {
        id: 3,
        nombre: 'Mireya',
    },
];

const salarios = [
    {
        id: 1,
        salario: 1000,
    },
    {
        id: 2,
        salario: 1500,
    },
];

const getEmpleado = (id) => {
    return new Promise((resolve, reject) => {
        const empleado = empleados.find(e => e.id === id)?.nombre;
        if (empleado) resolve(empleado);
        else reject(`No existe empleado con id ${id}`);
    });
};

const getSalario = (id) => {
    return new Promise((resolve, reject) => {
        const salario = salarios.find(s => s.id === id)?.salario;
        if (salario) resolve(salario);
        else reject(`No existe salario para el id ${id}`);
    });
};

const getInfoUser = async (id) => {
    try {
        const empleado = await getEmpleado(id);
        const salario = await getSalario(id);
        return `El empleado: ${empleado} tiene un salario de: ${salario}`;
    } catch (error) {
        throw error;      
    }
};

const id = 4;
getInfoUser(id)
    .then(value => console.log('desde then:', value))
    .catch(err => console.error('desde catch:', err));
