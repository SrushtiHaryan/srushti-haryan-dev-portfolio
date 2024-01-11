import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import './QuoteComponent.css';

function QuoteComponent(props) {
    const [lettersRef, setlettersRef] = useArrayRef();
    const triggerRef = useRef(null)


    function useArrayRef() {
        const lettersRef = useRef([]);
        lettersRef.current = [];
        return [lettersRef, (ref) => ref && lettersRef.current.push(ref)];
    }

    gsap.registerPlugin(ScrollTrigger);
    // const text = `"Success is not about your resources, it's about how resourceful you are with what you have."`
    const text = props.text;

    useEffect(() => {
        const anim = gsap.to(
            lettersRef.current,
            {
                scrollTrigger: {
                    trigger: triggerRef.current,
                    scrub: true,
                    start: "top 50%",
                    end: "bottom 50%"

                },
                color: "#FFF",
                duration: 10,
                stagger: 1,
            }
        );
        return (() => {
            anim.kill()
        })
    }, []);


    const revealStyle = {
      background: "transparent",
      transform: `rotate(${props.rotation}deg)`, // Apply rotation based on props
      color: "#fff",
      fontSize: "1.5rem",
  };

    return (
        <>
            
            <div className="reveal" style={revealStyle}>
                <div ref={triggerRef}>
                    {text.split("").map((letter, index) => (
                        <span className="reveal-text" key={index} ref={setlettersRef}>
                            {letter}
                        </span>
                    ))}
                </div>
                    {props.author}
            </div>
            
        </>
    )
}

export default QuoteComponent