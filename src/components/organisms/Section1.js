import React from 'react'
import { Link } from 'gatsby'
import SubNav from '../molecules/SubNav'


const Section1 = () => (
    <div className="container-page bg-1 bg-img-dot  container-padding">
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
           <SubNav/>
        </div>
    </div>
)

export default Section1