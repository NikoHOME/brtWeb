
const video = document.querySelector(".title_video");



if(video)
{
    video.addEventListener("ended", (event) => {
        video.style.opacity = '0.3'
        localStorage.setItem("visited_before","true")
    }, {once: true});
}








