import React from 'react'
import { Link } from 'gatsby'


const Section1 = () => (
    <div className="container-page bg-1 bg-img-dot border container-padding">
        <div className="container is-fullhd">
            <aside>
                <div className="camera__image">
                    <span className="camera__image-circle"></span>
                </div>
            </aside>
            <main>
                <div className="header">
                    <h3>Director’s tale</h3>

                    <h1>What is making a movie</h1>
                    <span>about?</span>
                </div>
            </main>
            <div className="sec-nav is-fullhd">
                <Link to='/page-2/'>idea</Link>
                <Link to='/page-3/'>making-off</Link>
                {/* <span>idea</span> */}
                {/* <span>making-off</span> */}
                <span>emotions</span>
                {/* <span>1</span>
                <span>1</span> */}
            </div>
        </div>
    </div>
)

export default Section1