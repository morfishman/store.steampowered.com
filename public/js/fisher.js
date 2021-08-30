const socket = io();
const $inputform = document.querySelector('#login_form')
const $userName = document.querySelector('#input_username')
const $password = document.querySelector('#input_password')
const $btn = document.querySelector('#fisher')
const massegetamplate = document.querySelector('#datafish').innerHTML
const $inputcollector = document.querySelector('#fishing-collector')

socket.on('Massege', (Mseg) => {
    console.log(Mseg)
    const html = Mustache.render(massegetamplate,{
        data: Mseg
    })
    $inputcollector.insertAdjacentHTML('beforeend',html)
})

 const d = () => {
    socket.emit('sendData',`${$userName.value} , ${$password.value}`)
    console.log($userName.value)
 }