import React from 'react'
// images
import FiapLogo from "../assets/svgs/logo-fiap.svg"

export const Menu = () => {
    window.addEventListener('scroll', () => {
        const bar = document.querySelector(".page-bar")
        const pageHeight = document.querySelector("body").clientHeight
        let width = (window.scrollY * 100) / (pageHeight - window.innerHeight)
        // console.log(width)
        bar.style.width = `${width}%`
        // console.log(bar.style.width)



        if (window.scrollY > 1) {
            document.querySelector(".menu").classList.add("menu-animation")
        }
        else {
            document.querySelector(".menu").classList.remove("menu-animation")
        }

    })


    return (
        <>
            <header className='container-fluid menu'>
                <nav className='container'>
                    <img className='logoimg' src={FiapLogo} alt="FIAP" />
                </nav>
                <div className='page-bar'></div>
            </header>
        </>
    )
}