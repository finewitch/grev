import React from 'react'
import { Link } from 'gatsby'
import arrow from '../../images/landing-arrow.svg'

const GoBack = () => (
    <nav class="is-fullhd nav">
        <div class='level'>
            <p class='level-item f-w arrow-back'>
                <Link to='/' className="hover-block-transition">
                    <img src={arrow} className="img-rotate-left"/>GO BACK TO HOME</Link>
            </p>
        </div>
    </nav>
)

export default GoBack