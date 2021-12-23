import * as React from 'react'

import Button from 'components/Button'

import { CardItem } from './style'

export default function Card({ ...props }) {
    return (
        <CardItem {...props}>
            <h2 className='title'>Shoppers</h2>
            <span className='description'>
                How it works, Privacy topics, Shopper Dashboard, Troubleshooting
                etc
            </span>
            <div className='d-flex justify-content-center'>
                <Button
                    isLink={false}
                    padding='0.4rem 1.6rem'
                    className='fw-normal'
                >
                    See more
                </Button>
            </div>
        </CardItem>
    )
}
