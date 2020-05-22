

const argv = require('yargs')
    .command('crear', 'Crea una nueva tarea por hacer', {
        descripcion: {
            demand: true,
            alias: 'd'
        }
    })
    
    .command('actualizar', 'Actualiza las tareas', {
        descripcion: {
            demand: true,
            alias: 'd',
        },
        completado: {
            alias: 'c',
            default: true
        }
    })
    .command('borrar', 'Borrar tarea de la lista', {
        descripcion: {
            demand: true,
            alias: 'd',
        }
    })
    .help()
    .argv;

module.exports = {
    argv
}