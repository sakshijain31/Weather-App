const request = require("request")

const mapbox_default_access_token = 'pk.eyJ1Ijoic2Frc2hpMzEwNyIsImEiOiJja2E4NWN1bDcwYnR4MnhwbXZhNTVza3JpIn0.-kBHJSG8BAqSh3TGERimmw'
const mapbox_access_token = 'pk.eyJ1Ijoic2Frc2hpMzEwNyIsImEiOiJja2E4N2ZsdzcwYTh3MzBta2twbzFzZGQ1In0.Cap6xBxJbEkWsGqtPkOKVw'


// const geoCodeData = request({uri:geoCodeUrl,json:true},(error,resp)=>{
//     if(error){
//          console.log('Unable to connect')
//     }else if(resp.body.features.length ==0){
//         console.log('Unable to find location. Try another search.')
//     } else{
//         const latitude = resp.body.features[0].center[0]
//         const longitude = resp.body.features[0].center[1]
//         console.log(latitude,longitude)
//     }
// })

const geoCode = (locationName, callback) => {
    const geoCodeUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + locationName + '.json?access_token=' + mapbox_access_token + '&limit=1'
    request({ uri: geoCodeUrl, json: true }, (error, resp) => {
        if (error) {
            callback('Unable to connect. Try after sometime', undefined)
        } else if (resp.body.features.length == 0) {
            callback('Unable to find location. Try another search.',undefined)
        } else {
            const data = {
                longitude : resp.body.features[0].center[0],
                latitude: resp.body.features[0].center[1],
                location: resp.body.features[0].place_name
            }
            callback(undefined,data)
        }
    })

}

module.exports = geoCode

