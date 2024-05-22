function solicitarCompra(producto, precio) {
    const numeroWhatsApp = '51991186526';
    const mensaje = `Hola, estoy interesado en comprar ${producto} al precio de ${precio}.`;
    const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, '_blank');
}
