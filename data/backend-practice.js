//HTTP = HyperText Transfer Protocol
//API = Application Programming Interface
const xhr = new XMLHttpRequest();

xhr.addEventListener('load', () => {
  console.log(xhr.response)
})

xhr.open('GET', 'https://supersimplebackend.dev'); //URL = Uniform Resource Locator
xhr.send();
