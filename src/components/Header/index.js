import * as React from 'react'
import { Link } from 'gatsby'

import {
    HeaderPage,
    MenuButton,
    Menu,
    MenuOpen,
    Filter,
    MobileMenu,
} from './style'

import Button from 'components/Button'

export default function Header() {
    const [isOpen, setIsOpen] = React.useState(false)
    const [expanded, setExpanded] = React.useState(false)
    const [visible, setVisible] = React.useState(true)

    let prevScrollpos = window.pageYOffset
    window.onscroll = () => {
        window.scrollY === 0 ? setExpanded(false) : setExpanded(true)

        if (window.innerWidth > 540) return

        const currentScrollPos = window.pageYOffset
        if (prevScrollpos > currentScrollPos) setVisible(true)
        else setVisible(false)
        prevScrollpos = currentScrollPos
    }

    return (
        <>
            <MenuOpen isOpen={isOpen} />
            <MobileMenu>
                <Filter isOpen={isOpen} />
                <Menu isOpen={isOpen}>
                    <div className='position-relative w-100 h-100'>
                        <div className='menu-container w-100'>
                            <Link to='/' className='route-link active'>
                                For Shoppers
                            </Link>
                            <Link to='/for-sellers' className='route-link'>
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
                        <Link to='/' className='route-link active'>
                            For Shoppers
                        </Link>
                        <Link to='/for-sellers' className='route-link'>
                            For Sellers
                        </Link>
                        <Button to='/' isLink={false} className='ms-3'>
                            Login or Sign up
                        </Button>
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
