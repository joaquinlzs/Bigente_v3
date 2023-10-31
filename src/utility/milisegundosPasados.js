function milisegundosPasados(timestamp) {
    // Convierte el timestamp en milisegundos multiplicando por 1000
    const fechaPublicacion = new Date(timestamp * 1000);
    const fechaActual = new Date();

    // Calcula la diferencia en milisegundos
    const diferenciaEnMilisegundos = fechaActual - fechaPublicacion;

    return diferenciaEnMilisegundos
};

export default milisegundosPasados;