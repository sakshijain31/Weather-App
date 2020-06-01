const request = require('request')


const wetherstack_access_token = 'e19592d42dffe1ef48d88e4d06d67d96'
const weatherStackUrl = 'http://api.weatherstack.com/current?access_key=e19592d42dffe1ef48d88e4d06d67d96&query=37.8267,-112'

const weatherStackCode = ({latitude, longitude}, callback) => {
    const weatherStackUrl = 'http://api.weatherstack.com/current?access_key=' + wetherstack_access_token + '&query='+ latitude + ',' + longitude
    request({ uri: weatherStackUrl, json: true }, (error, response) => {
        if (error) {
            callback('Server down',undefined)
        } else if (response.body.error) {
            callback('Unable to find location',undefined)
        } else {
            callback(undefined,response.body.location.name + ' It is currently ' + response.body.current.temperature + ' degress out. There is a ' + response.body.current.feelslike + '% chance of rain.')
        }

    })
}



module.exports =  weatherStackCode
