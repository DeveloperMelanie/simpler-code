import * as React from 'react'
import { Link } from 'gatsby'

import {
    HeaderPage,
    MenuButton,
    Menu,
    MenuOpen,
    Filter,
    MobileMenu,
    Active,
} from './style'

import Button from 'components/Button'

export default function Header({ active }) {
    const [isActive, setIsActive] = React.useState(false)
    const [isOpen, setIsOpen] = React.useState(false)
    const [expanded, setExpanded] = React.useState(false)
    const [visible, setVisible] = React.useState(true)

    if (typeof window !== 'undefined') {
        let prevScrollpos = window.pageYOffset
        window.onscroll = () => {
            window.scrollY === 0 ? setExpanded(false) : setExpanded(true)

            if (window.innerWidth > 540) return

            const currentScrollPos = window.pageYOffset
            if (prevScrollpos > currentScrollPos) setVisible(true)
            else setVisible(false)
            prevScrollpos = currentScrollPos
        }
    }

    return (
        <>
            <MenuOpen isOpen={isOpen} />
            <MobileMenu>
                <Filter isOpen={isOpen} />
                <Menu isOpen={isOpen}>
                    <div className='position-relative w-100 h-100'>
                        <div className='menu-container w-100'>
                            <Link
                                to='/'
                                className={`route-link ${
                                    active === 'for-shoppers' ? 'active' : null
                                }`}
                            >
                                For Shoppers
                            </Link>
                            <Link
                                to='/for-sellers'
                                className={`route-link ${
                                    active === 'for-sellers' ? 'active' : null
                                }`}
                            >
                                For Sellers
                            </Link>
                        </div>
                    </div>
                </Menu>
            </MobileMenu>
            <HeaderPage isOpen={isOpen} expanded={expanded} visible={visible}>
                <div className='contain'>
                    <Link to='/' id='logo' className='poppins'>
                        Simpler.
                    </Link>
                    <div className='d-flex gap-2 arial content-section'>
                        <Link
                            to='/'
                            className={`route-link ${
                                active === 'for-shoppers' ? 'active' : null
                            }`}
                        >
                            For Shoppers
                        </Link>
                        <Link
                            to='/for-sellers'
                            className={`route-link ${
                                active === 'for-sellers' ? 'active' : null
                            }`}
                        >
                            For Sellers
                        </Link>
                        <div className='position-relative ms-3'>
                            <Button
                                to='/'
                                isLink={false}
                                onClick={() => setIsActive(prev => !prev)}
                            >
                                Login or Sign up
                            </Button>
                            {isActive && (
                                <Active>
                                    <a href='https://shopper.simpler.so/'>
                                        I'm a shopper
                                    </a>
                                    <Link to='/get'>I'm a seller</Link>
                                </Active>
                            )}
                        </div>
                    </div>
                </div>
            </HeaderPage>
            <MenuButton
                visible={visible}
                isOpen={isOpen}
                onClick={() => setIsOpen(prev => !prev)}
            >
                <div></div>
                <div id='middle'></div>
                <div></div>
            </MenuButton>
        </>
    )
}
