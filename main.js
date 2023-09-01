
const video = document.querySelector(".title_video");
const content = document.querySelector(".content")
const text_wall = document.querySelector(".text_wall")

if(video)
{
    video.addEventListener("ended", (event) => {
        // sessionStorage.setItem("visited_before","true")
        video.style.opacity = '0.3'
        content.style.opacity = "1"
        document.documentElement.style.overflow = "auto"
        
    }, {once: true});
}








