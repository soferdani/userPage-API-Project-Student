//This is the class that will manage all your APIs

class APIManager {
    constructor() {
        this.data = {}
    }

    getKanyaAPI () {
        $.ajax ({
            method: "GET",
            url:'https://api.kanye.rest',
            success: (dataa) => {
                let onlyKanyaSentence = dataa.quote
                this.data["kanya"] = onlyKanyaSentence
            },
            error: (xhr,text,error) => {errorHendler(text)}
        })
    }

    getPekemonAPI () { 
        const randomPokemonNum = function (){
            return Math.floor(Math.random() * Math.floor(555));
        }
        let randomPokeNum = randomPokemonNum()
        
        $.ajax({
            method: "GET",
            url: `https://pokeapi.co/api/v2/pokemon/${randomPokeNum}`,
            success: (dataa) => {
                let pekeName = dataa.name 
                let pekeImgUrl = dataa.sprites.front_default
                this.data["pokeName"] = pekeName
                this.data["pokeUrl"] = pekeImgUrl
            },
            error: (xhr,text,error) => {errorHendler(text)}
        })
    }

    getAboutSection () { 
        $.ajax({
            method: "GET",
            url: "https://baconipsum.com/api/?type=all-meat&paras=2&format=text",
            success: (dataa)=> {
                this.data["about"] = dataa
            },
            error: (xhr,text,error) => {errorHendler(text)}
        })
    }

    getUserInfo () {
        $.ajax({
            method: "GET",
            url: "https://randomuser.me/api/?results=7",
            success: (dataa)=> {
                const firstName = dataa.results[0].name.first
                const lastName = dataa.results[0].name.last 
                const city = dataa.results[0].location.city 
                const country = dataa.results[0].location.country 
                const photoUrl = dataa.results[0].picture.medium 
                const frindList = dataa.results.map(onePerson => {  return {
                     fisrtName: onePerson.name.first, 
                     secondName: onePerson.name.last 
                }})
                this.data["PersonInfo"] = {
                    firstName:firstName,
                    lastName:lastName,
                    city:city,
                    country:country,
                    photoUrl:photoUrl,
                    frindList:frindList
                }
            },
            error: (xhr,text,error) => {errorHendler(text)}
        })
    }

    errorHendler(text){
        alert("could not get the data from api")
        console.log(text);
    }

}
