const params = new URLSearchParams(window.location.search);
const idDestinos = params.get('id');

desenharCardDetalhe('cardDetalhe', meusDestinos, idDestinos);