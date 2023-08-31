
const video = document.querySelector(".title_video");
const arrow = document.querySelector(".title_arrow");
const content = document.querySelector(".content")

if(video)
{
    video.addEventListener("ended", (event) => {
        video.style.opacity = '0.3'
        arrow.style.opacity = '0.6'
        content.style.display = "block"
        document.documentElement.style.overflow = "auto"
        localStorage.setItem("visited_before","true")
    }, {once: true});
}








