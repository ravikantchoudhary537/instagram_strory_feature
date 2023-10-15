let arr = [
    {
        dp:"alexander-shatov-71Qk8ODIBko-unsplash.jpg",
        story :"adler-2386314_1280.jpg"
     },
    {
        dp:"alexander-shatov-I4p0FcjDBJI-unsplash.jpg",
        story :"african-lion-2888519_1280.jpg"
     },
    {
        dp:"cat-551554_1280.jpg",
        story :"cat-551554_1280.jpg"
     },
    {
        dp:"owl-50267_1280.jpg",
        story :"HD-wallpaper-cricket-match-indian-cricketers-indian-team-hardik-pandya-virat-kohli.jpg"
     },
    {
        dp:"alexander-shatov-k1xf2D7jWUs-unsplash.jpg",
        story :"desktop-wallpaper-virat-kohli-top-best-virat-kohli-ultra-background-rcb-logo.jpg"
     },
    {
        dp:"desktop-wallpaper-virat-kohli-top-best-virat-kohli-ultra-background-rcb-logo.jpg",
        story :"desktop-wallpaper-virat-kohli-top-best-virat-kohli-ultra-background-rcb-logo.jpg"
     },
    {
        dp:"adler-2386314_1280.jpg",
        story :"adler-2386314_1280.jpg"
     },
    {
        dp:"owl-50267_1280.jpg",
        story :"desktop-wallpaper-virat-kohli-by-pro-uploader-king-virat-kohli.jpg"
     }
];

let storyString = "";
arr.forEach(function(e,i){
    storyString += `<div class="story" id="${i+500}">
    <img id="${i}" src="${e.dp}">
    </div>`;
})
// let storiyan = document.getElementsByClassName("storiyan");
let storiyan = document.getElementById('storiyan');
// console.log(storiyan)
storiyan.innerHTML = storyString;

storiyan.addEventListener('click',(e)=>{
    document.getElementById("full-screen").style.display = "block";
    document.getElementById("full-screen").style.backgroundImage = `url('${arr[e.target.id].story}')`;
    // let line = document.getElementById("line");
    // line.style.backgroundColor= "red";
    // line.style.width= "15%";
    // line.style.transition = " all 4s linear 2s";
    let cancel = document.getElementById('cancel');
    cancel.addEventListener('click',()=>{
        document.getElementById("full-screen").style.display = "none";
    })

        let storyid= `${Number(e.target.id)+500}`;
        
        document.getElementById(`${storyid}`).style.border = "none";
        setTimeout(function(){
            document.getElementById("full-screen").style.display = "none";
        },5000)
})
