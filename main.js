
const activeAPI = new APIManager 

$("#loadbtn").on("click",function () {
    activeAPI.getKanyaAPI()
    activeAPI.getPekemonAPI()
    activeAPI.getAboutSection()
    activeAPI.getUserInfo()
    console.log(activeAPI.data);

})




