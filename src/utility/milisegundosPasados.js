function milisegundosPasados(unixTime) {
    // Convierte el unixTime en milisegundos multiplicando por 1000
    const fechaPublicacion = new Date(unixTime * 1000);
    const fechaActual = new Date();

    // Calcula la diferencia en milisegundos
    const diferenciaEnMilisegundos = fechaActual - fechaPublicacion;

    return diferenciaEnMilisegundos
};

export default milisegundosPasados;