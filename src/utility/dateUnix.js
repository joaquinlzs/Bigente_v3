function tiempoPasadoHastaHoy(timestamp) {
    // Convierte el timestamp en milisegundos multiplicando por 1000
    const fechaPublicacion = new Date(timestamp * 1000);
    const fechaActual = new Date();

    // Calcula la diferencia en milisegundos
    const diferenciaEnMilisegundos = fechaActual - fechaPublicacion;

    // Convierte la diferencia en milisegundos a un objeto de duración (días, horas, minutos, segundos)
    const duracion = new Date(diferenciaEnMilisegundos);

    // Obtén los componentes de tiempo individuales
    const años = duracion.getUTCFullYear() - 1970; // Resta 1970 ya que es el año de referencia Unix
    const meses = duracion.getUTCMonth();
    const días = duracion.getUTCDate() - 1; // Resta 1 porque la fecha de referencia Unix es 1 de enero de 1970
    const horas = duracion.getUTCHours();
    const minutos = duracion.getUTCMinutes();
    const segundos = duracion.getUTCSeconds();

    if (años !== 0) {
        return `${años} años`;
    } else if (meses !== 0) {
        return `${meses} meses`;
    } else if (días !== 0) {
        if (días === 1) {
            return `1 día`;
        } else {
            return `${días} días`;
        }
    } else if (horas !== 0) {
        if (horas === 1) {
            return `1 hora`;
        } else {
            return `${horas} horas`;
        }
    } else if (minutos !== 0) {
        if (minutos === 1) {
            return `1 minuto`;
        } else {
            return `${minutos} minutos`;
        }
    } else {
        return `${segundos} segundos`;
    }
}

export default tiempoPasadoHastaHoy;