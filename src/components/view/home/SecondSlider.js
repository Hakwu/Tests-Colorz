import { useState, useRef, useEffect } from "react";


export default function SecondSlider(props)
{
    const component = useRef(null);
    const [count, setCount] = useState(0);
    const SliderImages = [
        {
            image:"/images/Product_2.jpg",
            text1: "The funny filter kit (D’jeuns friendly)",
            prix: "199,00 €",
        },
        {
            image:"/images/Product_1.jpg",
            text1: "Screen camera off",
            prix: "229,00 €",
        },
        {
            image:"/images/Product_3.jpg",
            text1:"The Charentaiz (Yeuv Friendly)",
            prix:"349,95 €",
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
        <div className="slider2">
            <div ref={component} className="slides2">
                {SliderImages.map((slide, index) => {
                    return (
                        <div className={`slide2`} key={index}>
                            <img src={slide.image}></img>
                            <div style={{fontWeight:500, textAlign: 'center', fontSize:22, marginBottom:4.87}}>{slide.text1}</div>
                            <div style={{fontWeight: 400, textAlign: 'center', fontSize:16}}>{slide.prix}</div>
                            </div>
                    )
                })}
            </div>
        </div>
    );
}