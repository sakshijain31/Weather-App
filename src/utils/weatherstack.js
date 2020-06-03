const request = require('request')


const wetherstack_access_token = 'e19592d42dffe1ef48d88e4d06d67d96'
const weatherStackUrl = 'http://api.weatherstack.com/current?access_key=e19592d42dffe1ef48d88e4d06d67d96&query=37.8267,-112'

const weatherStackCode = ({latitude, longitude}, callback) => {
    const weatherStackUrl = 'http://api.weatherstack.com/current?access_key=' + wetherstack_access_token + '&query='+ latitude + ',' + longitude
    request({ uri: weatherStackUrl, json: true }, (error, {body}) => {
        if (error) {
            callback('Server down',undefined)
        } else if (body.error) {
            callback('Unable to find location',undefined)
        } else {
            console.log(body)
            callback(undefined, body.current.weather_descriptions[0] + ' and the observation time is ' + body.current.observation_time + ' ' + body.location.timezone_id + '. It is currently ' + body.current.temperature + " degree's out.  Humidity is "
            +  body.current.humidity + " and there is " + body.current.feelslike + "% chances of rain." + ' Is it day time there - ' + body.current.is_day + '.'
            )
        }

    })
}



module.exports =  weatherStackCode
