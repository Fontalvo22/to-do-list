function findNextElementIndex(numero) {
    // Verificar si el número proporcionado es válido
    if (isNaN(numero)) {
        return "Por favor, ingresa un número válido.";
    }

    // Calcular cuántos números faltan para llegar a 10
    var faltantesHasta10 = 10 - numero+1;

    // Calcular cuántos números faltan para llegar a 0
    var faltantesHasta0 = numero;

    // Devolver los resultados
    return {
        faltantesHasta10: faltantesHasta10,
        faltantesHasta0: faltantesHasta0
    };
}

module.exports = findNextElementIndex