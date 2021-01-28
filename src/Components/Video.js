import React from 'react'
import classes from "./BackgroundVideo.module.css"
import video from "../loginBg.mp4"

const Video = () => {

    const bgVideo = video
    // https://r4---sn-5aupjx0n5-pn2l.googlevideo.com/videoplayback?expire=1611864469&ei=NcUSYLr4I4LP8wSXlqAQ&ip=174.44.59.221&id=o-AAeZvh2L7D02saG7dd-z8Y2G7EIr0_tnQeL-h4NaBOAt&itag=22&source=youtube&requiressl=yes&mh=jV&mm=31%2C29&mn=sn-5aupjx0n5-pn2l%2Csn-j5caxoxu-pn2s&ms=au%2Crdu&mv=m&mvi=4&pl=21&initcwndbps=1570000&vprv=1&mime=video%2Fmp4&ns=VwD-SBMski6o5YVVDVydym0F&cnr=14&ratebypass=yes&dur=321.015&lmt=1568439406273668&mt=1611842438&fvip=4&c=WEB&txp=5532432&n=GGjcIp8EfZEKbsuQHesU&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cns%2Ccnr%2Cratebypass%2Cdur%2Clmt&sig=AOq0QJ8wRAIgTFincsW4AGVcQdgLgDlfZYvsYLdOgh2nHGs2o0cQ_4YCIAGE7AJjIOBzAET5PdHe_SRyXkykxp8prazsauieq1SO&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=AG3C_xAwRQIgdPsrGMjeKTjyG-kPCwtludXW9_Nv_-pmlkHV12yF0IgCIQDEmuuf87le3BWA3WR-BTa98yiZ-5EuPFy_W7z-QzxAfw%3D%3D
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