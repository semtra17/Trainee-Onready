class Concesionaria {
    constructor() {
        this.vehiculos = [];
    }


    cargarVehiculos() {
        this.vehiculos[0] = new Vehiculo("Peugeot", "206", 4, "$200.000,00");
        this.vehiculos[1] = new Vehiculo("Honda", "Titan", "125cc", "$60.000,00");
        this.vehiculos[2] = new Vehiculo("Peugeot", "208", 5, "$250.000,00");
        this.vehiculos[3] = new Vehiculo("Yamaha ", "YBR", "160cc", "$80.500,00");
    }

    imprimirVehiculos() {
        this.vehiculos.forEach(v => {
            if (Number(v.getDetalle(v))) {
                console.log(`Marca: ${v.getMarca(v)} // Modelo: ${v.getModelo(v)} // Puertas: ${v.getDetalle(v)} // Precio: ${v.getPrecio(v)}`);
            } else {
                console.log(`Marca: ${v.getMarca(v)} // Modelo: ${v.getModelo(v)} // Cilindradas: ${v.getDetalle(v)} // Precio: ${v.getPrecio(v)}`);
            }
        });
        console.log("==========================================");

    }

    mayorAmenor() {
        let aux;

        for (let i = 0; i < this.vehiculos.length; i++) {

            for (let j = 0; j < this.vehiculos.length - 1; j++) {
                let numeroAux1 = this.vehiculos[j].getPrecio(this.vehiculos[j]);
                let numeroAux2 = this.vehiculos[j + 1].getPrecio(this.vehiculos[j + 1]);


                numeroAux1 = numeroAux1.replaceAll("$", "")
                numeroAux1 = numeroAux1.replaceAll(",", "")
                numeroAux1 = numeroAux1.replaceAll(".", "");
                numeroAux2 = numeroAux2.replaceAll("$", "")
                numeroAux2 = numeroAux2.replaceAll(",", "")
                numeroAux2 = numeroAux2.replaceAll(".", "");
                if (Number(numeroAux1) < Number(numeroAux2)) {

                    aux = this.vehiculos[j];
                    this.vehiculos[j] = this.vehiculos[j + 1];
                    this.vehiculos[j + 1] = aux;

                }
            }
        }
        console.log("Vehículos ordenados por precio de mayor a menor:");
        this.vehiculos.forEach(v => {
            console.log(v.getModelo(v));
        })
        console.log("==========================================");

    }

    masCaroMasBaratoYletraY() {

        let aux;
        let posModeloConY;

        for (let i = 0; i < this.vehiculos.length; i++) {

            for (let j = 0; j < this.vehiculos.length - 1; j++) {
                let numeroAux1 = this.vehiculos[j].getPrecio(this.vehiculos[j]);
                let numeroAux2 = this.vehiculos[j + 1].getPrecio(this.vehiculos[j + 1]);


                numeroAux1 = numeroAux1.replaceAll("$", "")
                numeroAux1 = numeroAux1.replaceAll(",", "")
                numeroAux1 = numeroAux1.replaceAll(".", "");
                numeroAux2 = numeroAux2.replaceAll("$", "")
                numeroAux2 = numeroAux2.replaceAll(",", "")
                numeroAux2 = numeroAux2.replaceAll(".", "");
                if (Number(numeroAux1) < Number(numeroAux2)) {

                    aux = this.vehiculos[j];
                    this.vehiculos[j] = this.vehiculos[j + 1];
                    this.vehiculos[j + 1] = aux;

                }

            }
            if ((this.vehiculos[i].getModelo(this.vehiculos[i])).indexOf("Y") > -1)
                posModeloConY = i;


        }
        console.log(`Vehículo más caro: ${this.vehiculos[0].getMarca(this.vehiculos[0])} ${this.vehiculos[0].getModelo(this.vehiculos[0])}`);
        console.log(`Vehículo más barato: ${this.vehiculos[this.vehiculos.length - 1].getMarca(this.vehiculos[this.vehiculos.length - 1])} ${this.vehiculos[this.vehiculos.length - 1].getModelo(this.vehiculos[this.vehiculos.length - 1])}`);
        console.log(`Vehículo que contiene en el modelo la letra ‘Y’: ${this.vehiculos[posModeloConY].getMarca(this.vehiculos[posModeloConY])} ${this.vehiculos[posModeloConY].getModelo(this.vehiculos[posModeloConY])} ${this.vehiculos[posModeloConY].getPrecio(this.vehiculos[posModeloConY])} `);
        console.log("==========================================");
    }

}