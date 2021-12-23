import * as React from 'react'
import { Link } from 'gatsby'

import Layout from 'components/Layout'
import SEO from 'components/SEO'
import Button from 'components/Button'
import FeaturesCard from 'components/FeaturesCard'
import BrandsSection from 'components/BrandsSection'

import { MainSection, Advertisement } from 'styles/general'

export default function IndexPage() {
    return (
        <Layout active='for-shoppers'>
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
            <BrandsSection />
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
