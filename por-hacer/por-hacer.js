
const fs = require('fs');

let listadoPorHacer = [];


const guardarDB = () => {
    
    let data = JSON.stringify(listadoPorHacer);
    
    fs.writeFile('data-base/data.json', data, (err) => {
      if (err) throw new Error ('No se pudo grabar', err);
    });
    
}

const cargarDB = () => {
    
    try {
        listadoPorHacer = require ('../data-base/data.json');
    }catch {
        listadoPorHacer = [];
    }
    
}


const crearListado = (descripcion) => {
    
    cargarDB();
    
    let porHacer = {
        descripcion,
        completado: false
    }
    
    listadoPorHacer.push(porHacer);
    
    guardarDB();
    
    return porHacer;
}
    
    
const getListado = () => {
    cargarDB();
    
    return listadoPorHacer;
}

const actualizar = (descripcion, completado) => {
    cargarDB();
    
    let index = listadoPorHacer.findIndex(tarea => {
        return tarea.descripcion === descripcion;
    })
    
    if (index != -1){
        listadoPorHacer[index].completado = completado;
        guardarDB();
        return true;
    }else {
        return false;
    }
}

const borrar = (descripcion) => {
    cargarDB();
    
    let nuevoListado = listadoPorHacer.filter(tarea =>{
        return tarea.descripcion !== descripcion;
    })
    if (listadoPorHacer.length === nuevoListado.length){
        return false;
    }else{
        listadoPorHacer = nuevoListado;
        guardarDB();
        return true;
    }
}

module.exports = {
    crearListado,
    getListado,
    actualizar,
    borrar
}