console.log('Client side server is running')

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const msgOne = document.querySelector('#msg-1')
const msgTwo = document.querySelector('#msg-2')

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()
    
    msgOne.textContent = 'Loading.....'
    fetch('http://localhost:3000/weather?address='+ search.value).then((resp) =>{
        resp.json().then((data=>{
            if(data.error){
                msgOne.textContent = data.error
            }
            console.log(data)
            msgOne.textContent = data.location
            msgTwo.textContent = data.forecast
        }))
    })
})