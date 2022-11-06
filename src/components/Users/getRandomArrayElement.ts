import a1 from "../../assets/png/randomAvatars/1.webp";
import a2 from "../../assets/png/randomAvatars/2.webp";
import a3 from "../../assets/png/randomAvatars/3.webp";
import a4 from "../../assets/png/randomAvatars/4.webp";
import a5 from "../../assets/png/randomAvatars/5.webp";
import a6 from "../../assets/png/randomAvatars/6.webp";
import a7 from "../../assets/png/randomAvatars/7.webp";
import a8 from "../../assets/png/randomAvatars/8.webp";
import a9 from "../../assets/png/randomAvatars/9.webp";
import a10 from "../../assets/png/randomAvatars/10.webp";
import a11 from "../../assets/png/randomAvatars/11.webp";
import a12 from "../../assets/png/randomAvatars/12.png";
import a13 from "../../assets/png/randomAvatars/13.webp";
import a14 from "../../assets/png/randomAvatars/14.webp";
import a15 from "../../assets/png/randomAvatars/15.webp";
import a16 from "../../assets/png/randomAvatars/16.webp";
import a17 from "../../assets/png/randomAvatars/17.webp";
import a18 from "../../assets/png/randomAvatars/18.webp";
import a19 from "../../assets/png/randomAvatars/19.webp";
import a20 from "../../assets/png/randomAvatars/20.webp";
import a21 from "../../assets/png/randomAvatars/21.webp";
import a22 from "../../assets/png/randomAvatars/22.webp";
import a23 from "../../assets/png/randomAvatars/23.webp";
import a24 from "../../assets/png/randomAvatars/24.webp";
import a25 from "../../assets/png/randomAvatars/25.png";
import a26 from "../../assets/png/randomAvatars/26.png";
import a27 from "../../assets/png/randomAvatars/27.webp";
import a28 from "../../assets/png/randomAvatars/28.webp";
import a29 from "../../assets/png/randomAvatars/29.png";
import a30 from "../../assets/png/randomAvatars/30.png";
import a31 from "../../assets/png/randomAvatars/31.webp";
import a32 from "../../assets/png/randomAvatars/32.webp";
import a33 from "../../assets/png/randomAvatars/33.webp";
import a34 from "../../assets/png/randomAvatars/34.webp";
import a35 from "../../assets/png/randomAvatars/35.webp";


const avatarsArray = [a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15, a16, a17, a18, a19, a20, a21, a22, a23, a24, a25, a26, a27, a28, a29, a30, a31, a32, a33, a34, a35]

export function getRandomArrayElement() {
    return avatarsArray[Math.floor(Math.random() * avatarsArray.length)]
}

