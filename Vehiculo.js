class Vehiculo {
    constructor(marca, modelo, detalle, precio) {
        this.marca = marca;
        this.modelo = modelo;
        this.detalle = detalle;
        this.precio = precio;
    }
    getMarca(vehiculo) {
        return vehiculo.marca;
    }
    getModelo(vehiculo) {
        return vehiculo.modelo;
    }
    getDetalle(vehiculo) {
        return vehiculo.detalle;
    }
    getPrecio(vehiculo) {
        return vehiculo.precio;
    }

}