import * as React from 'react'

import Button from 'components/Button'

import { CardItem } from './style'

export default function Card({
    title,
    description,
    btnText,
    onClick,
    ...props
}) {
    return (
        <CardItem {...props}>
            <h2 className='title'>{title}</h2>
            <span className='description'>{description}</span>
            <div className='d-flex justify-content-center'>
                <Button
                    isLink={false}
                    padding='0.4rem 1.6rem'
                    className='fw-normal'
                    onClick={onClick}
                >
                    {btnText}
                </Button>
            </div>
        </CardItem>
    )
}
