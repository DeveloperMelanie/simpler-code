import * as React from 'react'
import { Link } from 'gatsby'

import Layout from 'components/Layout'
import SEO from 'components/SEO'

import { GlobalDocument, Document, Body } from 'styles/docs'

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
                        <img
                            src='https://static.wixstatic.com/media/804960_ccd53018bb804692a3acd3f4495bb9ea~mv2.png/v1/fill/w_314,h_331,al_c,q_85,usm_0.66_1.00_0.01/804960_ccd53018bb804692a3acd3f4495bb9ea~mv2.webp'
                            alt
                        />
                        <div className='separator'>
                            <li className='section minor-margin'>
                                Search and Install the Simpler Checkout plugin
                            </li>
                            <span className='description'>
                                In your Wordpress Dashboard menu on the left,
                                navigate to Plugins --> Add New​
                            </span>
                        </div>
                        <img
                            src='https://static.wixstatic.com/media/804960_73fd4b78d57946699bc7dc777c8f689d~mv2.png/v1/fill/w_784,h_555,al_c,q_90,usm_0.66_1.00_0.01/804960_73fd4b78d57946699bc7dc777c8f689d~mv2.webp'
                            alt
                            className='minor-margin'
                        />
                        <p className='text-start pt-5'>
                            Then from the Plugins page, search for "Simpler
                            Checkout" and click on "Install Now".
                        </p>
                        <img
                            src='https://static.wixstatic.com/media/804960_454b78bcbd3342faa2cc8711395d590b~mv2.png/v1/crop/x_1153,y_149,w_827,h_721/fill/w_419,h_360,al_c,q_85,usm_0.66_1.00_0.01/Search%20Simpler%20Checkout%20Plugin.webp'
                            alt
                            className='minor-margin mt-2'
                        />
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
                        <img
                            src='https://static.wixstatic.com/media/804960_a7fb4bda19c44671b26aefc4bd1d3136~mv2.png/v1/crop/x_0,y_0,w_1976,h_180/fill/w_878,h_80,al_c,q_85,usm_0.66_1.00_0.01/Frame%2056.webp'
                            alt
                            className='minor-margin mt-4'
                        />
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
                        <img
                            src='https://static.wixstatic.com/media/804960_8abe40dcff644f8a821559a3bf19fffb~mv2.png/v1/fill/w_850,h_285,al_c,q_85,usm_0.66_1.00_0.01/Add%20API%20Key%20and%20Secret.webp'
                            alt
                            className='minor-margin'
                        />
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
                        <img
                            src='https://static.wixstatic.com/media/804960_22f70639ebec4a2aa838c6993cc77f9f~mv2.png/v1/fill/w_357,h_300,al_c,q_85,usm_0.66_1.00_0.01/auth.webp'
                            alt
                            className='minor-margin'
                        />
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
                        <img
                            src='https://static.wixstatic.com/media/804960_4c3c8b9bde0f444fa6a3da760cad24b3~mv2.png/v1/fill/w_808,h_186,al_c,q_85,usm_0.66_1.00_0.01/test%20mode.webp'
                            alt
                            className='minor-margin'
                        />
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
