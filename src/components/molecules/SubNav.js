import React from 'react'
import { Link } from 'gatsby'


const SubNav = () => (
    <div className="header-nav nav-2">
        <nav class=' is-fullhd nav'>
            <div class='level'>
                
                <p class='level-item f-w'>
                    <Link to='/page-2/' className="hover-block-transition">idea</Link>
                </p>
                <p class='level-item f-w'>
                    <Link to='/page-3/' className="hover-block-transition">making-off</Link>
                </p>
                <p class='level-item f-w'>
                    <Link to='/page-4/' className="hover-block-transition">emotions</Link>
                </p>

            </div>
        </nav>
    </div>
)

export default SubNav