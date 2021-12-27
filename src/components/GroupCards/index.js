import * as React from 'react'

import Button from 'components/Button'

import { Container } from './style'

export default function GroupCards({
    destacatedCard,
    secondaryCard,
    ...props
}) {
    console.log(destacatedCard)
    return (
        <Container {...props}>
            <div className='card'>
                <h2>{destacatedCard.title}</h2>
                <div
                    dangerouslySetInnerHTML={{ __html: destacatedCard.content }}
                />
                <div className='container-btn'>
                    <Button
                        to={destacatedCard.button.to}
                        padding='0.6rem 3.8rem'
                        fontSize='1.125rem'
                        className='button no-wrap'
                        hover={false}
                    >
                        {destacatedCard.button.text}
                    </Button>
                </div>
            </div>
            <div className='secondary-card'>
                <h2>{secondaryCard.title}</h2>
                <div
                    className='content'
                    dangerouslySetInnerHTML={{ __html: secondaryCard.content }}
                />
                <div className='container-btn'>
                    <Button
                        to={secondaryCard.button.to}
                        padding='0.6rem 3.3rem'
                        fontSize='1.125rem'
                        className='button no-wrap'
                        hover={false}
                    >
                        {secondaryCard.button.text}
                    </Button>
                </div>
            </div>
        </Container>
    )
}
