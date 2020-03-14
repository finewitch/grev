import React from 'react'
import { Link } from 'gatsby'
import arrow from '../../images/landing-arrow.svg'
import ArrowsImg from '../atoms/ArrowsImg'


const Landing = () => (
    <div className="landing container-page bg-img-dot">
        <div className="landing__left">
            <div className="landing__left-header">
                <span>
                <h1 className="c-w">GREV</h1>
                <h3 className="c-w">
                historical based story of the greatest
                general strike in the Ottoman Empire in 1910<br/>
                by <span className="highlighted">Metin Yegin</span></h3>
                </span>
            </div>
        </div>
        <div className="landing__right border-top-right bg-landing">
            <div className="landing__right-header">
                <span>
                    {/* <img src = {arrow} /> */}
                    <h2 className="c-w">
                        USE THE REGULAR MENU TO NAVIGATE<br/>
                        OR <span className="highlighted">SCROLL</span> TO <br/>
                        FOLLOW THE DIRECTORS TALE
                    </h2>
                    <img src = {arrow} className="img-rotate-down"/>
                </span>
            </div>
            </div>
    </div>
)

export default Landing