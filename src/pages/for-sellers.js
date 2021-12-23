import * as React from 'react'
import { Link } from 'gatsby'

import Layout from 'components/Layout'
import SEO from 'components/SEO'
import Button from 'components/Button'
import FeaturesCard from 'components/FeaturesCard'
import Feature from 'components/Feature'
import FullscreenFixed from 'components/FullscreenFixed'
import BrandsSection from 'components/BrandsSection'

import { MainSection, Advertisement } from 'styles/general'
import { GraySection, InformativeSection } from 'styles/forSellers'
import { colors } from 'styles/theme'

export default function ForSellers() {
    const [videoVisible, setVideoVisible] = React.useState(false)

    return (
        <Layout active='for-sellers'>
            <SEO title='For Sellers' />
            {videoVisible && (
                <FullscreenFixed setAction={setVideoVisible}>
                    <video
                        preload='none'
                        autoPlay
                        loop
                        playsInline={true}
                        controls
                        controlsList='nodownload'
                        src='https://video.wixstatic.com/video/804960_a24dbd5f6a4c46a38d890ca134327f97/1080p/mp4/file.mp4'
                    >
                        Your browser does not support the video player.
                    </video>
                </FullscreenFixed>
            )}
            <MainSection className='text-center mt--2'>
                <div style={{ paddingBottom: '8rem' }}>
                    <h1 className='m-0'>1-Click purchase</h1>
                    <h1 className='mb-4'>for your customers.</h1>
                    <span className='subtitle mt-4'>
                        Checkout made to convert shoppers. The{' '}
                        <strong className='important'>simplest</strong> way to
                        increase your sales.
                    </span>
                </div>
                <div className='d-flex justify-content-center'>
                    <Button
                        isLink={false}
                        fontSize='1.063rem'
                        padding='0.65rem 3.3rem'
                        hover={false}
                        onClick={() => setVideoVisible(prev => !prev)}
                    >
                        See how it works
                        <svg
                            preserveAspectRatio='none'
                            data-bbox='20.5 20 159 160'
                            viewBox='20.5 20 159 160'
                            height={25}
                            width={22}
                            fill='#fff'
                            xmlns='http://www.w3.org/2000/svg'
                            data-type='shape'
                            role='presentation'
                            aria-hidden='true'
                            style={{
                                transform: 'rotate(90deg)',
                                right: '18px',
                            }}
                            className='position-absolute'
                        >
                            <g>
                                <path d='M100 20c-43.906 0-79.5 35.817-79.5 80s35.594 80 79.5 80c43.908 0 79.5-35.817 79.5-80S143.908 20 100 20zm0 141.177c-33.523 0-60.794-27.444-60.794-61.177S66.477 38.823 100 38.823 160.794 66.267 160.794 100 133.523 161.177 100 161.177z' />
                                <path d='M103.32 82.526c-1.786-2.127-4.852-2.127-6.639 0l-19.061 22.72c-2.648 3.155-.599 8.243 3.32 8.243h38.121c3.919 0 5.967-5.087 3.32-8.243l-19.061-22.72z' />
                            </g>
                        </svg>
                    </Button>
                </div>
                <div className='d-flex justify-content-center flex-column pt-7 pb-7'>
                    <Link
                        to='/get'
                        target='_blank'
                        rel='noopener noreferrer'
                        className='d-flex flex-column small-text'
                    >
                        <span>Are you a shopper?</span>
                    </Link>
                    <a
                        href='https://shopper.simpler.so/'
                        target='_blank'
                        rel='noopener noreferrer'
                        className='d-flex flex-column small-text'
                    >
                        <span className='text-decoration-underline'>
                            Sign up in minutes
                        </span>
                    </a>
                </div>
            </MainSection>
            <GraySection>
                <h2 className='title'>
                    The absolute checkout experience, anywhere
                </h2>
                <span className='description'>
                    Let shoppers checkout from all your channels. Headless
                    checkout links for ads, static websites, social media &
                    more.
                </span>
                <div>
                    <div className='images-section image-decoration'>
                        <div className='image-group'>
                            <img src='https://static.wixstatic.com/media/eb8dec_dd733521c05e492597b7f5f6b04886f0~mv2.png/v1/fill/w_689,h_347,al_c,q_85,usm_0.66_1.00_0.01/Landing%20page%20checkout%20link.webp' />
                            <img src='https://static.wixstatic.com/media/eb8dec_38b518105ca944e7a86bc6962b929c7f~mv2.png/v1/crop/x_0,y_8,w_375,h_664/fill/w_296,h_527,al_c,q_85,usm_0.66_1.00_0.01/website%20traditional%20checkout.webp' />
                        </div>
                        <div className='image-group-reverse'>
                            <img src='https://static.wixstatic.com/media/eb8dec_54f0b8965db945a2a60151d958e5022a~mv2.png/v1/crop/x_0,y_5,w_750,h_823/fill/w_446,h_484,al_c,q_85,usm_0.66_1.00_0.01/shoppable%20ad%20static.webp' />
                            <img src='https://static.wixstatic.com/media/eb8dec_7fd56f131e48487eaf0a57b47a3ba3ce~mv2.png/v1/fill/w_306,h_587,al_c,q_85,usm_0.66_1.00_0.01/EMAIL%20OFFER%20CHECKOUT%20LINK.webp' />
                        </div>
                    </div>
                </div>
                <div className='grid pt-3'>
                    <Feature
                        title='Traditional e-Commerce'
                        description='Add the Simpler Checkout button anywhere in your site, skipping
                        the cart. Simplify the customer journey, reduce your cart
                        abandonment rates and offer a delightful checkout experience.'
                    />
                    <Feature
                        title='Landing Pages'
                        description='Simpler allows you to add a checkout button on any site even if it is not directly connected to your storefront. Add a checkout button to your static website, web application or anywhere you might imagine with just a link.'
                    />
                    <Feature
                        title='Email Marketing'
                        description='Allow your customers to go directly to purchase from your email campaign. Just add the Simpler Checkout button in your email template and lead your customers directly to checkout.'
                    />
                    <Feature
                        title='Digital Content'
                        description={`Add a link to checkout to your social media posts, comments or even direct messages. No need to send your customers through your storefront when they've already seen the product in your post.`}
                    />
                    <Feature
                        title='Shoppable Ads'
                        description='Embed the checkout in your ad and reduce the time to purchase. Allow your customers to directly purchase any product you promote in your ad with 1 click.'
                    />
                    <Feature
                        title='Brick & Mortar'
                        description='Turn your checkout links to QR codes and add them to your store, your magazine ad or a billboard. Just scan and buy!'
                    />
                </div>
            </GraySection>
            <InformativeSection>
                <h2 className='title'>Plug & Play Installation</h2>
                <span className='description'>
                    Add Simpler Checkout to your website in minutes.
                </span>
                <div className='d-flex justify-content-center contain-btn'>
                    <Button
                        to='/get'
                        fontSize='1.063rem'
                        padding='0.6rem 5.5rem'
                        hover={false}
                    >
                        Get Simpler
                    </Button>
                </div>
            </InformativeSection>
            <GraySection className='pb-6'>
                <h2 className='title'>The shortest path to purchase.</h2>
                <FeaturesCard
                    background={false}
                    listStyle={false}
                    image={{
                        img: 'https://static.wixstatic.com/media/eb8dec_259c823e6be3479e830da9a0c1b57237~mv2.gif',
                        width: '320px',
                        height: '569px',
                        alt: 'traditional sellers.gif',
                    }}
                    features={[
                        {
                            title: 'Simple.',
                            feature: `We remove your customers’ pain of creating accounts, remembering passwords and filling out long forms.<br/><br/>No usernames. No passwords. Simpler.`,
                        },
                        {
                            title: 'Frictionless.',
                            feature: `Make it extremely easy for your customers to buy.<br/><br/>Checkout info is saved during their first purchase from any merchant partnered with Simpler, so even your first time customers can checkout with 1 click. `,
                        },
                        {
                            title: 'Seamless.',
                            feature: `Plug & Play, no code installation in minutes.<br/><br/>Simpler integrates with your existing processes and database without any configuration.<br/><br/>No more guest accounts, every customer is now logged in at your store.`,
                        },
                    ]}
                    className='text-start image-decoration'
                    featuresClassName='gap-0 line-height-normal ms-6'
                    dataAos='fade-right'
                ></FeaturesCard>
            </GraySection>
            <InformativeSection>
                <h2 className='title'>All-in-one solution</h2>
                <span
                    className='description d-inline-block'
                    style={{
                        fontSize: '1.125rem',
                        maxWidth: '35rem',
                        color: colors.black,
                        letterSpacing: 'normal',
                    }}
                >
                    Simpler processes payments using best-in-class processing
                    services. Never worry about 3DS, Fraud & PCI Compliance
                    again.
                </span>
                <div className='d-flex justify-content-center contain-btn'>
                    <Button
                        to='/pricing'
                        fontSize='1.063rem'
                        padding='0.6rem 5.5rem'
                        hover={false}
                    >
                        See Pricing
                    </Button>
                </div>
            </InformativeSection>
            <GraySection className='pb-5'>
                <FeaturesCard
                    background={false}
                    listStyle={false}
                    image={{
                        img: 'https://static.wixstatic.com/media/eb8dec_31342c57213844799b8e3e0fc91aecbf~mv2.png/v1/crop/x_0,y_0,w_363,h_745/fill/w_334,h_677,al_c,q_85,usm_0.66_1.00_0.01/Seller%20dashboard%20reporting.webp',
                        width: '334px',
                        height: '677px',
                        alt: 'traditional sellers.gif',
                    }}
                    title='Safer, faster, Simpler. '
                    features={[
                        `Simpler is designed based on conversion & usability best practices, reducing friction and increasing sales.`,
                        `It takes an average of 22 clicks to checkout online. Shoppers are asked to enter the same details again and again. Once a customer meets their friction threshold, they will take their business elsewhere.`,
                        `Simpler offers a best-in-class checkout flow, relentlessly optimised for mobile and usability.`,
                        `On top of that, you benefit from the Simpler customer network. Treat every customer as a returning customer, and allow them to checkout with just 1 click.`,
                    ]}
                    className='text-start flex-row-reverse image-decoration'
                    featuresClassName='line-height-normal p-0'
                    dataAos='fade'
                ></FeaturesCard>
            </GraySection>
            <BrandsSection />
            <Advertisement
                style={{ paddingTop: '6.5rem', paddingBottom: '6rem' }}
            >
                <h2 style={{ fontSize: '1.875rem', marginBottom: '2.5rem' }}>
                    Make your customers' shopping{' '}
                    <span className='important'>simpler.</span>
                </h2>
                <div className='d-flex justify-content-center'>
                    <Button
                        to='/get'
                        fontSize='1.063rem'
                        padding='0.65rem 2.8rem'
                        hover={false}
                    >
                        Get Simpler Checkout
                    </Button>
                </div>
            </Advertisement>
        </Layout>
    )
}
