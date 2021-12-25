import * as React from 'react'
import { Link } from 'gatsby'

import Layout from 'components/Layout'
import SEO from 'components/SEO'

import { GlobalDocument, Document, Body } from 'styles/docs'

import Step2 from 'images/Step2.webp'
import Step3 from 'images/Step3.webp'
import Step35 from 'images/Step3-5.webp'
import Step5 from 'images/Step5.webp'
import Step6 from 'images/Step6.webp'
import Step7 from 'images/Step7.webp'
import Step9 from 'images/Step9.webp'

export default function Docs() {
    return (
        <Layout>
            <SEO title='Docs' />
            <GlobalDocument />
            <Document>
                <h1 className='title'>WooCommerce Installation Guide</h1>
                <Body>
                    <ol>
                        <div className='separator'>
                            <li className='section'>
                                Register with Simpler as a Seller
                            </li>
                            <span className='description'>
                                The first step is to{' '}
                                <Link to='/get'>
                                    register with Simpler as a seller
                                </Link>
                                . Once you have a seller account, your account
                                manager will then provide you with your{' '}
                                <span className='important fst-italic'>
                                    App ID
                                </span>{' '}
                                &{' '}
                                <span className='important fst-italic'>
                                    App Secret
                                </span>{' '}
                                which you will need for the WooCommerce plugin
                                installation.
                            </span>
                        </div>
                        <div className='separator'>
                            <li className='section'>
                                Login to your WooCommerce admin panel
                            </li>
                            <span className='description'>
                                Add your credentials to access your WooCommerce
                                admin panel: https://
                                <span className='important-lite'>
                                    yourstore.com
                                </span>
                                /wp-admin
                            </span>
                        </div>
                        <img src={Step2} alt />
                        <div className='separator'>
                            <li className='section minor-margin'>
                                Search and Install the Simpler Checkout plugin
                            </li>
                            <span className='description'>
                                In your Wordpress Dashboard menu on the left,
                                navigate to Plugins --> Add New
                            </span>
                        </div>
                        <img src={Step3} alt className='minor-margin' />
                        <p className='text-start pt-5'>
                            Then from the Plugins page, search for "Simpler
                            Checkout" and click on "Install Now".
                        </p>
                        <img src={Step35} alt className='minor-margin mt-2' />
                        <div className='separator pt-4'>
                            <li className='section minor-margin'>
                                Activate Simpler Plugin
                            </li>
                            <span className='description'>
                                From the Plugins page, find the Simpler Checkout
                                plugin and click on "Activate". If it is already
                                activated, skip to the next step.
                            </span>
                        </div>
                        <div className='separator'>
                            <li className='section minor-margin'>
                                Configure your Simpler Plugin
                            </li>
                            <span className='description'>
                                Once the plugin is activated, make sure
                                "Automated updates" are enabled and then click
                                on "Settings".
                            </span>
                        </div>
                        <img src={Step5} alt className='minor-margin mt-4' />
                        <div className='separator'>
                            <li className='section minor-margin'>
                                Add your Simpler credentials
                            </li>
                            <span className='description'>
                                Add the{' '}
                                <span className='important fst-italic'>
                                    App ID
                                </span>{' '}
                                and{' '}
                                <span className='important fst-italic'>
                                    App Secret
                                </span>{' '}
                                from step 1.
                            </span>
                        </div>
                        <img src={Step6} alt className='minor-margin' />
                        <div className='separator pt-4'>
                            <li className='section minor-margin'>
                                Authorise Simpler to connect with your
                                WooCommerce store
                            </li>
                            <span
                                className='description'
                                style={{
                                    display: 'inline-block',
                                    maxWidth: '45rem',
                                    lineHeight: 'normal',
                                }}
                            >
                                Go to:{' '}
                                <a
                                    href='https://merchants.simpler.so/v1/integrations/authorize/'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className='no-decoration'
                                >
                                    https://merchants.simpler.so/v1/integrations/authorize
                                </a>
                                /
                                <span className='important fst-italic'>
                                    App ID
                                </span>
                                ?return_url=simpler.so adding your App ID from
                                Step 1. Click on "Approve" to allow Simpler to
                                connect to your store.
                            </span>
                        </div>
                        <img src={Step7} alt className='minor-margin' />
                        <div className='separator pt-4'>
                            <li className='section minor-margin'>
                                Test the functionality and look & feel of the
                                button
                            </li>
                            <span
                                className='description'
                                style={{
                                    lineHeight: 'normal',
                                }}
                            >
                                When you install the button, test mode is
                                enabled by default. While in test mode, the
                                Simpler Checkout button is only visible to you
                                and not your customers. Feel free to navigate
                                around your website and play with the button
                                settings to find the variant that suits your
                                website the most.
                            </span>
                        </div>
                        <div className='separator pt-5'>
                            <li className='section minor-margin'>
                                Make the checkout button visible to everyone
                            </li>
                            <span
                                className='description'
                                style={{
                                    lineHeight: 'normal',
                                }}
                            >
                                When you make sure everything looks and works as
                                expected, uncheck the Test mode box, to make the
                                Simpler Checkout button available for your
                                customers.
                            </span>
                        </div>
                        <img src={Step9} alt className='minor-margin' />
                        <h4
                            style={{
                                fontSize: '1.563rem',
                                paddingTop: '4.3rem',
                            }}
                        >
                            That's it! Simpler Checkout is successfully
                            installed!
                        </h4>
                    </ol>
                </Body>
            </Document>
        </Layout>
    )
}
