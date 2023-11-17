//script de Javascript

console.log("Hola Mundo")

let datos = [
    {
      "titulo": "Bogotá (la desmesura, a Melville)",
      "autor": "Gustavo Zalamea",
      "fecha": 1994,
      "lugar": "Monserrate",
      "lat": 4.5962015,
      "lon": -74.0640615,
      "imagen": "https://badac.uniandes.edu.co/gustavozalamea/files/original/6626c20c5dc38a9901bc8a76bd73dba7.jpg",
      "thumbnail": "https://badac.uniandes.edu.co/gustavozalamea/files/thumbnails/6626c20c5dc38a9901bc8a76bd73dba7.jpg"
    },
    {
      "titulo": "Congreso – Titanic",
      "autor": "Gustavo Zalamea",
      "fecha": 1994,
      "lugar": "Plaza de Bolivar",
      "lat": 4.5962002,
      "lon": -74.0767726,
      "imagen": "https://badac.uniandes.edu.co/gustavozalamea/files/original/09f2fd693bb9bb97fe89abf6ffd3a7d7.jpg",
      "thumbnail": "https://badac.uniandes.edu.co/gustavozalamea/files/thumbnails/09f2fd693bb9bb97fe89abf6ffd3a7d7.jpg"
    },
    {
      "titulo": "Huevo de Condor Gigante (Avenida El Dorado con Avenida Boyacá)",
      "autor": "Gustavo Zalamea",
      "fecha": 1994,
      "lugar": "Av Boyacá, Av El Dorado",
      "lat": 4.666513,
      "lon": -74.1137347,
      "imagen": "https://badac.uniandes.edu.co/gustavozalamea/files/original/2253da15c6efa488b4ee6b7c1e9cf4f9.jpg",
      "thumbnail": "https://badac.uniandes.edu.co/gustavozalamea/files/thumbnails/2253da15c6efa488b4ee6b7c1e9cf4f9.jpg"
    },
    {
      "titulo": "Río Chapinero (a la altura de la plaza de Lourdes), Gustavo Zalamea, tarjeta postal, 1994.",
      "autor": "Gustavo Zalamea",
      "fecha": 1994,
      "lugar": "Plaza de Lourdes",
      "lat": 4.6496279,
      "lon": -74.0632791,
      "imagen": "https://badac.uniandes.edu.co/gustavozalamea/files/original/754d7450932034ae98a391dd6ef16997.jpg",
      "thumbnail": "https://badac.uniandes.edu.co/gustavozalamea/files/thumbnails/754d7450932034ae98a391dd6ef16997.jpg"
    }
  ]

  let main = document.getElementById("principal")

  datos.forEach(dato => {
    let imagen = document.createElement("img")
    imagen.setAttribute("src", dato.thumbnail)
    main.append(imagen)
  });



