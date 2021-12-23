import * as React from 'react'

import { Title, Description } from './style'

export default function Feature({ title, description }) {
    return (
        <div>
            <Title className='poppins'>{title}</Title>
            <Description>{description}</Description>
        </div>
    )
}
