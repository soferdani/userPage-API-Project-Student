
class Renderer {
    constructor () {
    }

    emptyPage () {
        $(".user-container").empty()
        $(".quote-container").empty()
        $(".content-container").empty()
        $(".pokemon-container").empty()
        $(".meat-container").empty()
        $(".friends-container").empty()
    }
    
    reandFrinds (data) {
        const frindsToRander = data.PersonInfo.frindList
        const source = $("#frindsTempel").html()
        const template = Handlebars.compile(source)
        const frindsListHtml = template({frindsToRander})
        $(".friends-container").append(frindsListHtml)
    }

    reandUser (data) {
        const fullName = `${data.PersonInfo.firstName} ${data.PersonInfo.lastName}`
        const location = `${data.PersonInfo.city} ${data.PersonInfo.country}`
        const photoUrl = `${data.PersonInfo.photoUrl}`
        const source = $("#userTempel").html()
        const template = Handlebars.compile(source)
        const userTempHtml = template({photoUrl,location,fullName}) // hendelbars can get only one carlybrackets {}!!
        $(".user-container").append(userTempHtml)
    }

    reanderQuote (data) {
        const quote = data.kanya
        const source = $("#quoteTempel").html()
        const template = Handlebars.compile(source)
        const quoteTempHtml = template({quote})
        $(".quote-container").append(quoteTempHtml)
    }
    
    reanderPokemon (data) {
        const pokeName = data.pokeName
        const pokePicUrl = data.pokeUrl
        const source = $("#pokeTempel").html()
        const template = Handlebars.compile(source)
        const pokeTempHtml = template({pokeName,pokePicUrl})
        $(".content-container").append(pokeTempHtml)
    }

    reanderMeat (data) {
        const aboutMeat = data.about
        const source = $("#aboutTempel").html()
        const template = Handlebars.compile(source)
        const pokeTempHtml = template({aboutMeat})
        $(".content-container").append(pokeTempHtml)
    }

}