import React from 'react'
//import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import './header.style.scss'

const Header = ({ hidden, showMenu }) => (
    <div className='header'>
        <div className= 'options'>
            <div className='option-user'>
                <button>USER MENU</button>
                <Link to='/'>
                </Link>
            </div>
            <div className='option-dev'>
                <Link to='/blog'>Blog</Link>
            </div>
            <div className='option-misc'>
                <button>Product Page</button>
                <Link to='/products'>
                </Link>
            </div>
            <div className='option-misc'>
                <button>Who I am</button>
                <Link to='/aboutme'>
                </Link>
            </div>
        </div>
    </div>
)

// const mapDispatchToProps = dispatch => ({
//     toggleUserDropdown: () => dispatch(toggleUserDropdown())
//   });

// export default connect(
//     mapStateToProps, 
//     mapDispatchToProps)(Header)
export default Header