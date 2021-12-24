import * as React from 'react'
import * as Yup from 'yup'
import { Link } from 'gatsby'
import { useFormik } from 'formik'

import Layout from 'components/Layout'
import SEO from 'components/SEO'
import Button from 'components/Button'

import { FormContainer } from 'styles/get'

export default function Get() {
    const formik = useFormik({
        initialValues: {
            name: '',
            'last-name': '',
            email: '',
            'store-url': '',
            platform: '',
            'annual-revenue': '',
            message: '',
        },
        validationSchema: Yup.object().shape({
            name: Yup.string().required(),
            'last-name': Yup.string().required(),
            email: Yup.string().email().required(),
            'store-url': Yup.string().required(),
            platform: Yup.string().required(),
            'annual-revenue': Yup.string().required(),
            message: Yup.string(),
        }),
        onSubmit: values => {
            console.log(values)
        },
    })

    return (
        <Layout>
            <SEO title='Get Simpler' />
            <FormContainer>
                <div className='header'>
                    <h1 className='title'>
                        Make your checkout{' '}
                        <strong className='poppins-bold'>Simpler.</strong>
                    </h1>
                    <span>
                        The <span className='important'>simplest</span> way to
                        increase your sales, within minutes. Leave us a note and
                        we'll get in touch with you.
                    </span>
                </div>
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
                                    formik.touched.name && formik.errors.name
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
                                    formik.touched.email && formik.errors.email
                                        ? 'error'
                                        : ''
                                }
                            />
                        </div>
                    </div>
                    <div className='d-flex mt-3 gap-3'>
                        <div className='col-12 form-group'>
                            <label htmlFor='store-url'>Store URL *</label>
                            <input
                                type='text'
                                id='store-url'
                                placeholder='https://'
                                onChange={formik.handleChange}
                                value={formik.values['store-url']}
                                onBlur={formik.handleBlur}
                                className={
                                    formik.touched['store-url'] &&
                                    formik.errors['store-url']
                                        ? 'error'
                                        : ''
                                }
                            />
                        </div>
                    </div>
                    <div className='d-flex mt-3 gap-3'>
                        <div className='col-12 form-group'>
                            <label htmlFor='platform'>Platform *</label>
                            <div className='select'>
                                <select
                                    id='platform'
                                    onChange={formik.handleChange}
                                    value={formik.values.platform}
                                    onBlur={formik.handleBlur}
                                    className={
                                        formik.touched.platform &&
                                        formik.errors.platform
                                            ? 'error'
                                            : ''
                                    }
                                >
                                    <option
                                        value=''
                                        disabled=''
                                        className='d-none'
                                    >
                                        Choose an option
                                    </option>
                                    <option value='3DCart'>3DCart</option>
                                    <option value='BigCommerce'>
                                        BigCommerce
                                    </option>
                                    <option value='Drupal'>Drupal</option>
                                    <option value='Magento'>Magento</option>
                                    <option value='OpenCart'>OpenCart</option>
                                    <option value='Prestashop'>
                                        Prestashop
                                    </option>
                                    <option value='Salesforce Commerce Cloud'>
                                        Salesforce Commerce Cloud
                                    </option>
                                    <option value='Shopify'>Shopify</option>
                                    <option value='Wix'>Wix</option>
                                    <option value='WooCommerce'>
                                        WooCommerce
                                    </option>
                                    <option value='Custom Solution'>
                                        Custom Solution
                                    </option>
                                    <option value='Other'>Other</option>
                                </select>
                                <svg
                                    className='_1sD6O'
                                    xmlns='http://www.w3.org/2000/svg'
                                    viewBox='0 0 9.2828 4.89817'
                                    width={14}
                                    height={7}
                                >
                                    <path d='M4.64116,4.89817a.5001.5001,0,0,1-.34277-.13574L.15727.86448A.50018.50018,0,0,1,.84282.136L4.64116,3.71165,8.44.136a.50018.50018,0,0,1,.68555.72852L4.98393,4.76243A.5001.5001,0,0,1,4.64116,4.89817Z' />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className='d-flex mt-3 gap-3'>
                        <div className='col-12 form-group'>
                            <label htmlFor='annual-revenue'>
                                Annual Revenue *
                            </label>
                            <div className='select'>
                                <select
                                    id='annual-revenue'
                                    onChange={formik.handleChange}
                                    value={formik.values['annual-revenue']}
                                    onBlur={formik.handleBlur}
                                    className={
                                        formik.touched['annual-revenue'] &&
                                        formik.errors['annual-revenue']
                                            ? 'error'
                                            : ''
                                    }
                                >
                                    <option
                                        value=''
                                        disabled=''
                                        className='d-none'
                                    >
                                        Choose an option
                                    </option>
                                    <option value='0-25K'>0-25K</option>
                                    <option value='25-100K'>25-100K</option>
                                    <option value='100-500K'>100-500K</option>
                                    <option value='500K-1M'>500K-1M</option>
                                    <option value='1M+'>1M+</option>
                                </select>
                                <svg
                                    className='_1sD6O'
                                    xmlns='http://www.w3.org/2000/svg'
                                    viewBox='0 0 9.2828 4.89817'
                                    width={14}
                                    height={7}
                                >
                                    <path d='M4.64116,4.89817a.5001.5001,0,0,1-.34277-.13574L.15727.86448A.50018.50018,0,0,1,.84282.136L4.64116,3.71165,8.44.136a.50018.50018,0,0,1,.68555.72852L4.98393,4.76243A.5001.5001,0,0,1,4.64116,4.89817Z' />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className='d-flex mt-3 gap-3'>
                        <div className='col-12 form-group'>
                            <label htmlFor='message'>
                                Do you have any questions or comments?
                            </label>
                            <textarea
                                id='message'
                                onChange={formik.handleChange}
                                value={formik.values.message}
                                onBlur={formik.handleBlur}
                                className={
                                    formik.touched.message &&
                                    formik.errors.message
                                        ? 'error'
                                        : ''
                                }
                            />
                        </div>
                    </div>
                    <span className='notice'>
                        By submitting this information, I agree to Simpler's{' '}
                        <Link
                            to='/terms-sellers'
                            className='text-decoration-underline'
                        >
                            terms
                        </Link>{' '}
                        and privacy policy.
                    </span>
                    <Button
                        padding='0.6rem 8rem'
                        fontSize='1.063rem'
                        isLink={false}
                        hover={false}
                    >
                        Submit
                    </Button>
                </form>
            </FormContainer>
        </Layout>
    )
}
