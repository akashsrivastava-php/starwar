import axios from 'axios'
import cookie from 'react-cookies'

const BASEURL = "https://swapi.co/api/"

export const loginUser = (dataObj) => {
    const { username, password } = dataObj
   return axios.get(`${BASEURL}people/?search=${encodeURI(username)}`)
    .then(res=>{
        if(res.data.count == 1){
            const { results } = res.data
            if(results[0].name == username && results[0].birth_year == password){
                const isLuke = results[0].name == 'Luke Skywalker' ? true : false
                cookie.save('Luke', isLuke, { path: '/' })
                cookie.save('LoggedIn', true, { path: '/' })
                return { status: true, msg: 'You are logged in Starwars!'}
            }else{
                return { status: false, msg: 'Invalid username or password!'}
            }
        }else{
            return { status: false, msg: 'User does not exists!' }
        }
    })
    .catch((err) => { 
        return { status: false, msg : 'Something went wrong!' }
    })
}

export const logoutUser = () => {
    cookie.remove('Luke', { path: '/' })
    cookie.remove('LoggedIn', { path: '/' })
    return { status: true, msg: 'User logged out!' }
}

export const searchPlanet = (val) => {
    if(val != ""){
        return axios.get(`${BASEURL}planets/?search=${encodeURI(val)}`)
                .then(res=>{
                    let msg
                    if(res.data.count > 0){
                        const sortedPlanet = res.data.results.sort((a,b)=>{
                            const popA = isNaN(parseInt(a.population)) ? 0 : parseInt(a.population)
                            const popB = isNaN(parseInt(b.population)) ? 0 : parseInt(b.population)
                            return popB - popA
                        })
                        msg = sortedPlanet
                    }else{
                        msg = []
                    }
                    return { status: true, msg }
                })
                .catch(err=>{
                    return { status: false, msg : 'Something went wrong!' } 
                })
    }else{
        return { status: true, msg: [] }
    }
}