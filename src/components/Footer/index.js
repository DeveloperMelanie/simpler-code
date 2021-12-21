import * as React from 'react'
import { Link } from 'gatsby'

import { FooterPage } from './style'

export default function Footer() {
    return (
        <FooterPage>
            <div className='d-flex m-0 justify-content-center footer-container'>
                <div className='col-auto us'>
                    <h3 className='title logo poppins'>Simpler.</h3>
                    <div className='d-flex social-media'>
                        <a
                            href='https://www.linkedin.com/company/simplerso'
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            <img
                                src='https://static.wixstatic.com/media/8efda6398c724b5ea342287bfe3f5ed0.png/v1/fill/w_39,h_39,al_c,q_85,usm_0.66_1.00_0.01/8efda6398c724b5ea342287bfe3f5ed0.webp'
                                alt='LinkedIn'
                            />
                        </a>
                        <a
                            href='https://www.facebook.com/simpler.so'
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            <img
                                src='https://static.wixstatic.com/media/ce6ec7c11b174c0581e20f42bb865ce3.png/v1/fill/w_39,h_39,al_c,q_85,usm_0.66_1.00_0.01/ce6ec7c11b174c0581e20f42bb865ce3.webp'
                                alt='Facebook'
                            />
                        </a>
                        <a
                            href='https://twitter.com/SimplerSo'
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            <img
                                src='https://static.wixstatic.com/media/444f49eac2e348f89128293b0c6432fd.png/v1/fill/w_39,h_39,al_c,q_85,usm_0.66_1.00_0.01/444f49eac2e348f89128293b0c6432fd.webp'
                                alt='Twitter'
                            />
                        </a>
                        <a
                            href='https://www.instagram.com/simpler.so/'
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            <img
                                src='https://static.wixstatic.com/media/fdcfaba150fc427da298a00cb09d91c1.png/v1/fill/w_39,h_39,al_c,q_85,usm_0.66_1.00_0.01/fdcfaba150fc427da298a00cb09d91c1.webp'
                                alt='Instagram'
                            />
                        </a>
                    </div>
                </div>
                <div className='d-flex flex-wrap links'>
                    <div className='col-auto'>
                        <h3 className='title'>Shopping</h3>
                        <Link to='/' className='sublink'>
                            How it works
                        </Link>
                        <Link to='/buyers-privacy-policy' className='sublink'>
                            Privacy Policy
                        </Link>
                        <Link to='/terms-buyers' className='sublink'>
                            T&C Shoppers
                        </Link>
                    </div>
                    <div className='col-auto'>
                        <h3 className='title'>Selling</h3>
                        <Link to='/get' className='sublink'>
                            Get Simpler
                        </Link>
                        <Link to='/pricing' className='sublink'>
                            Pricing
                        </Link>
                        <Link to='/terms-sellers' className='sublink'>
                            T&C Sellers
                        </Link>
                    </div>
                    <div className='col-auto'>
                        <h3 className='title'>Company</h3>
                        <Link to='/partners' className='sublink'>
                            Become a Partner
                        </Link>
                        <Link to='/blog' className='sublink'>
                            Blog
                        </Link>
                        <Link to='/faq' className='sublink'>
                            FAQ
                        </Link>
                    </div>
                </div>
            </div>
        </FooterPage>
    )
}
