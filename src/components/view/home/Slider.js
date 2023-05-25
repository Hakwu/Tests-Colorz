import { useState, useRef, useEffect } from "react";
// import Image from 

export default function Slider(props)
{
    const component = useRef(null);
    const [count, setCount] = useState(0);
    const SliderImages = [
        {
            image:"/images/slider_3.jpg"
        },
        {
            image:"/images/slider_2.jpg"
        },
        {
            image:"/images/slider_1.jpg"
        },
    ];
    useEffect(() => {
        const myDiv = component.current;

        const interval = setInterval(() => {
            myDiv.append(myDiv.children[0])
            if (count < 2) {
                setCount(count + 1)
            }
            else
                setCount(0)
                console.log(count);
            }, 3000)
        return () => {
            clearInterval(interval);
            };
      }, [count]);

    return (
        <div className="slider">
            <div ref={component} className="slides">
                {SliderImages.map((slide, index) => {
                    return (
                        <div className={`slide`} key={index}>
                            <img src={slide.image}></img>
                            </div>
                    )
                })}
            </div>
            <div className="dot">
                    <div style={{height:8, width:8, borderRadius:50, backgroundColor: count == 0 ? '#18181B':'white'}}></div>
                    <div style={{height:8, width:8, borderRadius:50, backgroundColor: count == 1 ? '#18181B':'white'}}></div>
                    <div style={{height:8, width:8, borderRadius:50, backgroundColor: count == 2 ? '#18181B':'white'}}></div>
            </div>
        </div>
    );
}