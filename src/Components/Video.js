import React from 'react'
import classes from "./BackgroundVideo.module.css"

const Video = () => {

    const bgVideo = "https://r4---sn-j5caxoxu-pn2s.googlevideo.com/videoplayback?expire=1611808383&ei=H-oRYI6jC5SDhgbFwY6gCg&ip=174.44.59.221&id=o-ADy0MsCFa9hvMDPKRRZbm6G5A4Mp__jWpMIF8sZPLAmU&itag=22&source=youtube&requiressl=yes&vprv=1&mime=video%2Fmp4&ns=b3LlTRf5ltKynuJ5SAdRUB0F&cnr=14&ratebypass=yes&dur=321.015&lmt=1568439406273668&fvip=4&c=WEB&txp=5532432&n=NepRS96tR9NTZbdjEK24&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cns%2Ccnr%2Cratebypass%2Cdur%2Clmt&sig=AOq0QJ8wRQIhAN5pzPLB4eGbwVQUYzzZoJM2fQtsBKdeZjd3KAiy3ORhAiAGQqGjHKwFskDOPGQPmga9MF7W3q5USSeUHR91eoVgXw%3D%3D&redirect_counter=1&cm2rm=sn-5aupjx0n5-pn2l7z&req_id=f22347d5b947a3ee&cms_redirect=yes&mh=jV&mm=29&mn=sn-j5caxoxu-pn2s&ms=rdu&mt=1611786768&mv=m&mvi=4&pcm2cms=yes&pl=21&lsparams=mh,mm,mn,ms,mv,mvi,pcm2cms,pl&lsig=AG3C_xAwRgIhAMOe1aJkyPKUtqmHUU5qFtVbt3KuAaOoEFCa-vc8dk7OAiEA5vOKovRSoPk0MbuPh17T1ZsmpFBHd-HGY6DpNZeOIU0%3D"
    
    return(
        <div className={classes.Container}>
            <video autoPlay="autoplay" loop="loop" muted className={classes.Video} >
                <source src={bgVideo} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    );
}

export default Video



// const BackgroundVideo = () => {
//     const videoSource = "https://www.w3schools.com/tags/movie.mp4"
//     return (
//         <div className={classes.Container} >
//             <video autoPlay="autoplay" loop="loop" muted className={classes.Video} >
//                 <source src={videoSource} type="video/mp4" />
//                 Your browser does not support the video tag.
//             </video>

//             <div className={classes.Content}>
//                 <div className={classes.SubContent} >
//                     <h1>Reactjs Course</h1>
//                     <p>Learn how to develope React projects</p>
//                     <button type="button" className="btn btn-outline-dark">View the course</button>
//                     <img
//                         src="https://images.unsplash.com/photo-1518806118471-f28b20a1d79d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
//                         alt="profile" />
//                 </div>
//             </div>
//         </div>
//     )
// };