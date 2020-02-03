
const main = document.getElementById('main')



function resuest(){
  fetch('https://zip-cloud.appspot.com/api/search?zipcode=1540022',{
    method: 'GET',
    credentials: "include",
    headers: {
      'X-MyRequest': 'this-is-cors-test',
      'X-MyOption': 'my-option'
    }

  })
  .then((res) => {
    debugger
    res.json()
  })
  .then((reslt) => {
    conso.log(reslt)
  })  
}



  main.addEventListener("click", () => {
    resuest()

  })