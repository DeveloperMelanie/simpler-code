import * as React from 'react'
import * as Yup from 'yup'
import { useFormik } from 'formik'
import { scrollTo } from 'utils'
import $ from 'jquery'

import Layout from 'components/Layout'
import SEO from 'components/SEO'
import Button from 'components/Button'
import FeaturesCard from 'components/FeaturesCard'
import BrandsSection from 'components/BrandsSection'

import { MainSection, ActionSection } from 'styles/partners'

import Buy from 'images/buy.gif'

export default function Partners() {
    const formik = useFormik({
        initialValues: {
            name: '',
            'last-name': '',
            email: '',
            'company-name': '',
            'company-website': '',
        },
        validationSchema: Yup.object().shape({
            name: Yup.string().required(),
            'last-name': Yup.string().required(),
            email: Yup.string().email().required(),
            'company-name': Yup.string().required(),
            'company-website': Yup.string().required(),
        }),
        onSubmit: values => {
            console.log(values)
        },
    })

    return (
        <Layout>
            <SEO title='Partners programme' />
            <MainSection>
                <div className='contain'>
                    <h1 className='title'>Let's partner up!</h1>
                    <p>
                        Know a seller who could benefit from giving their
                        shoppers a Simpler checkout?
                    </p>
                    <p>
                        Let’s partner up to help our sellers’ businesses grow
                        and <span className='important'>be rewarded</span>.
                    </p>
                    <div className='contain-btn'>
                        <Button
                            isLink={false}
                            hover={false}
                            padding='0.8rem 1.9rem'
                            fontSize='1.063rem'
                            onClick={() => scrollTo($('#form').offset().top)}
                            className='max-width-100'
                        >
                            Become a referral partner
                        </Button>
                    </div>
                </div>
            </MainSection>
            <FeaturesCard
                background={false}
                title='Help sellers give their shoppers the ultimate checkout experience'
                image={{
                    img: Buy,
                    alt: 'traditional sellers.gif',
                    width: '320px',
                    height: '505px',
                }}
                features={[
                    `Earn revenue by referring sellers to the future of online shopping and help grow their business.`,
                    `When a seller you refer signs up with Simpler and starts to take orders, you as the referring partner will be rewarded with cash!`,
                    `<strong class='important'>Simple.</strong>`,
                ]}
                className='width-extend image-decoration'
                listStyle={false}
                style={{ paddingTop: '4rem', paddingBottom: '7rem' }}
                dataAos='fade-right'
            />
            <BrandsSection extended={true} />
            <ActionSection id='form'>
                <div className='contain-form'>
                    <h2 className='title'>Join our partner programme</h2>
                    <p className='subtitle'>
                        If you are a software developer, designer, digital
                        agency, eCommerce solution or other related services
                        provider, add your details and we'll be in touch.
                    </p>
                    <form onSubmit={formik.handleSubmit}>
                        <div className='d-flex mt-3 gap-3 row-form'>
                            <div className='col-md-6 form-group'>
                                <label htmlFor='name'>First Name *</label>
                                <input
                                    type='text'
                                    id='name'
                                    onChange={formik.handleChange}
                                    value={formik.values.name}
                                    onBlur={formik.handleBlur}
                                    className={
                                        formik.touched.name &&
                                        formik.errors.name
                                            ? 'error'
                                            : ''
                                    }
                                />
                            </div>
                            <div className='col-md-6 form-group'>
                                <label htmlFor='last-name'>Last Name *</label>
                                <input
                                    type='text'
                                    id='last-name'
                                    onChange={formik.handleChange}
                                    value={formik.values['last-name']}
                                    onBlur={formik.handleBlur}
                                    className={
                                        formik.touched['last-name'] &&
                                        formik.errors['last-name']
                                            ? 'error'
                                            : ''
                                    }
                                />
                            </div>
                        </div>
                        <div className='d-flex mt-3 gap-3'>
                            <div className='col-12 form-group'>
                                <label htmlFor='email'>Email *</label>
                                <input
                                    type='email'
                                    id='email'
                                    onChange={formik.handleChange}
                                    value={formik.values.email}
                                    onBlur={formik.handleBlur}
                                    className={
                                        formik.touched.email &&
                                        formik.errors.email
                                            ? 'error'
                                            : ''
                                    }
                                />
                            </div>
                        </div>
                        <div className='d-flex mt-3 gap-3'>
                            <div className='col-12 form-group'>
                                <label htmlFor='company-name'>
                                    Company Name *
                                </label>
                                <input
                                    type='text'
                                    id='company-name'
                                    onChange={formik.handleChange}
                                    value={formik.values['company-name']}
                                    onBlur={formik.handleBlur}
                                    className={
                                        formik.touched['company-name'] &&
                                        formik.errors['company-name']
                                            ? 'error'
                                            : ''
                                    }
                                />
                            </div>
                        </div>
                        <div className='d-flex mt-3 gap-3'>
                            <div className='col-12 form-group'>
                                <label htmlFor='company-website'>
                                    Company Website *
                                </label>
                                <input
                                    type='text'
                                    id='company-website'
                                    onChange={formik.handleChange}
                                    value={formik.values['company-website']}
                                    onBlur={formik.handleBlur}
                                    className={
                                        formik.touched['company-website'] &&
                                        formik.errors['company-website']
                                            ? 'error'
                                            : ''
                                    }
                                />
                            </div>
                        </div>
                        <Button
                            padding='0.6rem 8rem'
                            fontSize='1.063rem'
                            isLink={false}
                            hover={false}
                            className='send-btn'
                        >
                            Continue
                        </Button>
                    </form>
                </div>
            </ActionSection>
        </Layout>
    )
}
