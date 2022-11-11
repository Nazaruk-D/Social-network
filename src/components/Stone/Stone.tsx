import React from 'react';
import stone from "../../assets/png/stone.png";
import './Stone.css';
import {GoPrimitiveDot} from "react-icons/go";

const Stone = () => {


    document.onmousemove =  (event) => {
        let x = event.x - 290;
        let y = event.y - 745;
        // console.log("x " + x)
        // console.log("y " + y)

        const arcctg = (x: number, y: number) => {
            if (x > 0 && y > 0) return Math.PI / 2 - Math.atan(x / y)
            if (x < 0 && y > 0) return Math.PI / 2 - Math.atan(x / y)
            if (x < 0 && y < 0) return Math.PI + Math.atan(y / x)
            if (x > 0 && y < 0) return 3 * Math.PI / 2 + Math.abs(Math.atan(x / y))
        }

        // @ts-ignore
        document.querySelector('.outs1').style.transform = 'rotate(' + 57.2958 * arcctg(x, y) + 'deg)'
        // @ts-ignore
        document.querySelector('.outs2').style.transform = 'rotate(' + 57.2958 * arcctg(x - 45, y) + 'deg)'

    }

    document.onclick = () => {
        const color = '#' + (Math.random().toString(16) + '000000').substring(2,8).toUpperCase()
        // @ts-ignore
        document.querySelector('.eye1').style.color = color
        // @ts-ignore
        document.querySelector('.eye2').style.color = color
    }

    return (
        <div className="stoneBlock">
            <img src={stone} className="stone"/>
            <div className="outs1">
                <div className="eye1"><GoPrimitiveDot style={{fontSize: "12px"}}/></div>
            </div>
            <div className="outs2">
                <div className="eye2"> <GoPrimitiveDot style={{fontSize: "12px"}}/> </div>
            </div>
        </div>
    );
};

export default Stone;