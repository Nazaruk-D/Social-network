import React from 'react';
import stone from "../../../assets/png/stone.png";
import './Stone.css';
import {GoPrimitiveDot} from "react-icons/go";


const Stone = () => {

    document.onmousemove = (event) => {

        let eyeCoordinatesX = document.querySelector('.outs1')!.getBoundingClientRect().x
        let eyeCoordinatesY = document.querySelector('.outs1')!.getBoundingClientRect().y

        let x = event.clientX - eyeCoordinatesX;
        let y = event.clientY - eyeCoordinatesY;

        const arcctg = (x: number, y: number) => {
            if (x > 0 && y > 0) return Math.PI / 2 - Math.atan(x / y)
            if (x < 0 && y > 0) return Math.PI / 2 - Math.atan(x / y)
            if (x < 0 && y < 0) return Math.PI + Math.atan(y / x)
            if (x > 0 && y < 0) return 3 * Math.PI / 2 + Math.abs(Math.atan(x / y))
        }

        document.querySelector<HTMLElement>('.outs1')!.style.transform = 'rotate(' + 57.2958 * arcctg(x, y)! + 'deg)'
        document.querySelector<HTMLElement>('.outs2')!.style.transform = 'rotate(' + 57.2958 * arcctg(x - 45, y)! + 'deg)'
    }

    document.onclick = () => {
        const color = '#' + (Math.random().toString(16) + '000000').substring(2, 8).toUpperCase()
        document.querySelector<HTMLElement>('.eye1')!.style.color = color
        document.querySelector<HTMLElement>('.eye2')!.style.color = color
    }

    return (
        <div className="stoneBlock">
            <img src={stone} className="stone"/>
            <div className="outs1">
                <div className="eye1"><GoPrimitiveDot style={{fontSize: "12px"}}/></div>
            </div>
            <div className="outs2">
                <div className="eye2"><GoPrimitiveDot style={{fontSize: "12px"}}/></div>
            </div>
        </div>
    );
};

export default Stone;