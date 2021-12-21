import * as React from 'react'
import { Link } from 'gatsby'

import Layout from 'components/Layout'
import SEO from 'components/SEO'
import Button from 'components/Button'
import FeaturesCard from 'components/FeaturesCard'

import { MainSection, BrandSection, Advertisement } from 'styles/homePage'

export default function IndexPage() {
    return (
        <Layout>
            <SEO title='For Shoppers' />
            <MainSection className='text-center'>
                <div className='separator'>
                    <h1 className='m-0'>1 click to checkout.</h1>
                    <h1 className='mb-4'>All your orders in one place.</h1>
                    <span className='subtitle'>
                        The <span className='important'>simplest</span> way to
                        shop online.
                    </span>
                </div>
                <div className='d-flex justify-content-center'>
                    <Button
                        to='https://shopper.simpler.so/'
                        fontSize='1.063rem'
                        padding='0.7rem 3.6rem'
                        hover={false}
                    >
                        1-Click Sign up
                        <Link to='/' className='white btn-text'>
                            Simpler.
                        </Link>
                    </Button>
                </div>
                <div className='d-flex justify-content-center pt-7 pb-7'>
                    <Link to='/get' className='d-flex flex-column small-text'>
                        <span>Are you a seller?</span>
                        <span className='text-decoration-underline'>
                            Get Simpler for your business in minutes
                        </span>
                    </Link>
                </div>
            </MainSection>
            <FeaturesCard
                pt='13.5rem'
                pb='6rem'
                title='Skip the passwords. Forget the long forms.'
                image={{
                    img: 'https://static.wixstatic.com/media/eb8dec_259c823e6be3479e830da9a0c1b57237~mv2.gif',
                    alt: 'Traditional sellers',
                    width: '336px',
                    height: '524px',
                }}
                features={[
                    'No need to worry about lost or stolen passwords.',
                    'Skip filling complex payment & shipping forms every time you want to buy something.',
                    'Setup your profile once and buy online everywhere with <strong>1 click.</strong>',
                ]}
                className='image-decoration ml--7'
            ></FeaturesCard>
            <FeaturesCard
                background={false}
                pt='9.5rem'
                pb='6rem'
                title='All your purchases in 1 place'
                image={{
                    img: 'https://static.wixstatic.com/media/eb8dec_bda2e9b32b4b441cb40d81e8c81a450b~mv2.gif',
                    alt: 'GIF DASHBOARD',
                    width: '350px',
                    height: '601px',
                }}
                features={[
                    'Manage all your Simpler orders in your dashboard.',
                    'Track shipments, reorder, handle refunds with <strong>1 click.</strong>',
                ]}
                className='flex-row-reverse w-90 justify-content-between mx-auto'
            ></FeaturesCard>
            <FeaturesCard
                pt='11.8rem'
                pb='11.8rem'
                title='Safe, quick and simple. The future of online shopping.'
                image={{
                    img: 'https://static.wixstatic.com/media/eb8dec_bf033c67096a425096183327526e3966~mv2.png/v1/fill/w_362,h_286,al_c,q_85,usm_0.66_1.00_0.01/PCI%20FOR%20WEBSITE.webp',
                    alt: 'PCI FOR WEBSITE',
                    width: '362px',
                    height: '286px',
                }}
                features={[
                    'No need to trust every single online shop with your personal data.',
                    'We work with industry leaders in data and payment security, so you can enjoy your online shopping while your data remains safe.',
                ]}
                className='flex-row-reverse align-items-center'
            ></FeaturesCard>
            <BrandSection>
                <div className='mb-6'>
                    <span>Trusted by</span>
                </div>
                <div className='d-flex flex-wrap align-items-center justify-content-center gap-7'>
                    <img
                        src='https://static.wixstatic.com/media/804960_65f882fcfa1647f681377129c989b8a1~mv2.png/v1/fill/w_189,h_42,al_c,q_85,usm_0.66_1.00_0.01/relevance%20logo.webp'
                        alt='relevance logo'
                    />
                    <img
                        src='https://static.wixstatic.com/media/804960_172555cf5e81447dba8548549d76b6b9~mv2.png/v1/fill/w_118,h_79,al_c,q_85,usm_0.66_1.00_0.01/webapp-logo-dark-300x200-001%20(1)_edited.webp'
                        alt='webapp-logo-dark-300x200-001 (1)_edited.png'
                    />
                    <img
                        src='https://static.wixstatic.com/media/804960_5f8a17bf2cd641a3b4b3724a55e577db~mv2.png/v1/crop/x_0,y_0,w_154,h_53/fill/w_105,h_35,al_c,q_85,usm_0.66_1.00_0.01/quest.webp'
                        alt='quest.png'
                    />
                    <img
                        src='https://static.wixstatic.com/media/804960_88cf3db7fa1242fb863b712835560ddf~mv2.png/v1/fill/w_149,h_71,al_c,q_85,usm_0.66_1.00_0.01/rocketpath%20logo.webp'
                        alt='rocketpath logo.png'
                    />
                    <img
                        src='https://static.wixstatic.com/media/804960_ddcdda7f0e5442e58b2dd982a5cc6173~mv2.png/v1/fill/w_177,h_50,al_c,lg_1,q_85/Logo-Black-350px-1-e1630481520140_edited.webp'
                        alt='Logo-Black-350px-1-e1630481520140_edited.png'
                    />
                </div>
            </BrandSection>
            <Advertisement>
                <h2>
                    Make your online shopping{' '}
                    <span className='important'>Simpler.</span>
                </h2>
                <div className='d-flex justify-content-center'>
                    <Button
                        to='https://shopper.simpler.so/'
                        fontSize='1.063rem'
                        padding='0.7rem 3.6rem'
                        hover={false}
                    >
                        1-Click Sign up
                        <Link to='/' className='white btn-text'>
                            Simpler.
                        </Link>
                    </Button>
                </div>
            </Advertisement>
        </Layout>
    )
}
