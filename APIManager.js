//This is the class that will manage all your APIs

class APIManager {
    constructor() {
        this.data = {}
    }

    getKanyaAPI () { //this info should go inside fivorete quota section  //DONE
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

    getPekemonAPI () { //DONE
        const randomPokemonNum = function (){
            return Math.floor(Math.random() * Math.floor(555));
        }
        let randomPokeNum = randomPokemonNum()
        
        $.ajax({
            method: "GET",
            url: `https://pokeapi.co/api/v2/pokemon/${randomPokeNum}`,
            success: (dataa) => {
                let pekeName = dataa.name 
                let pekeImgUrl = dataa.sprites.other.dream_world.front_default
                this.data["pokeName"] = pekeName
                this.data["pokeUrl"] = pekeImgUrl
            },
            error: (xhr,text,error) => {errorHendler(text)}
        })

    }

    getAboutSection () { //DONE
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
            success: (dataa)=> { ////---------- q1 - do i need to use let here or const ?! what will be better and why
                let firstName = dataa.results[0].name.first //good
                let lastName = dataa.results[0].name.last //good
                let city = dataa.results[0].location.city //good
                let country = dataa.results[0].location.country //good
                let photoUrl = dataa.results[0].picture.medium // good
                let frindList = dataa.results.map(onePerson => {  return {
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
