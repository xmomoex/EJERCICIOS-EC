function obtenerCandidatos() {
  fetch("https://randomuser.me/api/?results=3")
    .then((res) => res.json())
    .then((data) => {
      console.log(data.results["0"]);
      nombre1 = data.results["0"].name.first;
      nombre2 = data.results["1"].name.first;
      nombre3 = data.results["2"].name.first;
      apellido1 = data.results["0"].name.last;
      apellido2 = data.results["0"].name.last;
      apellido3 = data.results["0"].name.last;
      edad1 = data.results["0"].dob.age;
      edad2 = data.results["1"].dob.age;
      edad3 = data.results["2"].dob.age;
      genero1 = data.results["0"].gender;
      genero2 = data.results["1"].gender;
      genero3 = data.results["2"].gender;
      email1 = data.results["0"].email;
      email2 = data.results["1"].email;
      email3 = data.results["2"].email;
      telefono1 = data.results["0"].phone;
      telefono2 = data.results["1"].phone;
      telefono3 = data.results["2"].phone;
      ciudad1 = data.results["0"].location.city;
      ciudad2 = data.results["1"].location.city;
      ciudad3 = data.results["2"].location.city;
      foto1 = data.results["0"].picture.large;
      foto2 = data.results["1"].picture.large;
      foto3 = data.results["2"].picture.large;
    });
}

var contenido1 = document.querySelector("#contenido1");
function traer1() {
  contenido1.innerHTML = `
                <img src="${foto1}" width="100px" class="img-fluid rounded-circle"> 
                <p>Nombre: ${nombre1}</p>
                <p>Apellido: ${apellido1}</p>
                <p>Edad: ${edad1}</p>
                <p>Género: ${genero1}</p>
                <p>Email: ${email1}</p>
                <p>Teléfono: ${telefono1}</p>
                <p>Ciudad: ${ciudad1}</p>
                `;
}

var contenido2 = document.querySelector("#contenido2");
function traer2() {
  contenido2.innerHTML = `
                <img src="${foto2}" width="100px" class="img-fluid rounded-circle"> 
                <p>Nombre: ${nombre2}</p>
                <p>Apellido: ${apellido2}</p>
                <p>Edad: ${edad2}</p>
                <p>Género: ${genero2}</p>
                <p>Email: ${email2}</p>
                <p>Teléfono: ${telefono2}</p>
                <p>Ciudad: ${ciudad2}</p>
                `;
}

var contenido3 = document.querySelector("#contenido3");
function traer3() {
  contenido3.innerHTML = `
                <img src="${foto3}" width="100px" class="img-fluid rounded-circle"> 
                <p>Nombre: ${nombre3}</p>
                <p>Apellido: ${apellido3}</p>
                <p>Edad: ${edad3}</p>
                <p>Género: ${genero3}</p>
                <p>Email: ${email3}</p>
                <p>Teléfono: ${telefono3}</p>
                <p>Ciudad: ${ciudad3}</p>
                `;
}
obtenerCandidatos();
