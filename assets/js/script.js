class Multimedia {
  constructor(url) {
    this._url = url;
  }

  get url() {
    return this._url;
  }
  setInicio() {
    return "Este método es para realizar un cambio en la URL del video";
  }
}

class Reproductor extends Multimedia {
  constructor(url, id) {
    super(url);
    this._id = id;
  }
  playMultimedia() {
    agregar.videoPublico(this._url, this._id);
  }

  setInicio(tiempo) {
    let start = `${this.url}?start=${tiempo}`;
    agregar.videoPublico(start, this._id);

    //console.log(start);
  }
}

let agregar = (() => {
  let videoPrivado = (url, id) => {
    let cambio = document.getElementById(id);
    cambio.setAttribute("src", url);
  };

  return {
    videoPublico: (url, id) => {
      videoPrivado(url, id);
    },
  };
})();

let musica = new Reproductor(
  "https://www.youtube.com/embed/6tOk_HeD0AI",
  "musica"
);
musica.playMultimedia();
musica.setInicio(10);

let pelicula = new Reproductor(
  "https://www.youtube.com/embed/Y5nq2APYURE",
  "peliculas"
);
pelicula.playMultimedia();
pelicula.setInicio(82);

let serie = new Reproductor(
  "https://www.youtube.com/embed/0kQ8i2FpRDk",
  "series"
);
serie.playMultimedia();
serie.setInicio(40);
