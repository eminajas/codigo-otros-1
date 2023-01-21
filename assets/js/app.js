const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const $n = document.querySelector('name');
const $b = document.querySelector('#blog');
const $l = document.querySelector('.location');
let textContent = " ";

function displayUser(username) {
  
  //$n.textContent = 'cargando...';
  const response = fetch(`${usersEndpoint}/${username}`, {
    method: "GET"
  });
  response.then((response)=>{
  response.json().then((data)=>{
    console.log(data);
    $n.textContent = '${data.name}';
    $b.textContent = '${data.blog}';
    $l.textContent = '${data.location}';
  })
  .catch((error) => {
   });
}

  )//por si  esta mal677777777777777777777777777777777777777778
    //funcion tipo flecha
}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  n.textContent = `Algo salió mal: ${err}`
}

displayUser('stolinski').catch(handleError);