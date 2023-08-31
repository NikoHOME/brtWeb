// const title_video = document.querySelector(".title_video");

// console.log(title_video)

// if(localStorage.getItem("visited_before") == "true")
// {
//     if(title_video)
//     {
//         title_video.addEventListener("loadeddata", (event) => {
//             title_video.play();
//             title_video.pause();
//             console.log(title_video.duration)
//             title_video.currentTime = title_video.duration;
//             title_video.play()
//         });
//     }
//     // var video_duration = Math.floor(title_video.duration-1);
    

//     // const image_box = document.querySelector(".image_box");
//     // image_box.style.visibility = "visible"
// }

function on_video_load()
{
    if(sessionStorage.getItem("visited_before") == "true")
    {
        title_video.addEventListener("loadeddata", (event) => {
            console.log("??")
            title_video.play();
            title_video.pause();
            console.log(title_video.duration)
            title_video.currentTime = title_video.duration;
            title_video.play()
        });
    }
    // var video_duration = Math.floor(title_video.duration-1);
    

    // const image_box = document.querySelector(".image_box");
    // image_box.style.visibility = "visible"
}