
const activeAPI = new APIManager 
const activeRander = new Renderer



$("#loadbtn").on("click",function () {
    activeAPI.getKanyaAPI()
    activeAPI.getPekemonAPI()
    activeAPI.getAboutSection()
    activeAPI.getUserInfo()
})

$("#displaybtn").on("click",function () {
    const theData = activeAPI.data
    activeRander.emptyPage()
    activeRander.reandFrinds(theData)
    activeRander.reandUser(theData)
    activeRander.reanderQuote(theData)
    activeRander.reanderPokemon(theData)
    activeRander.reanderMeat(theData)
})
