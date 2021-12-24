import * as React from 'react'

import Button from 'components/Button'

import { Container } from './style'
import { colors } from '../../styles/theme'

export default function GroupCards({ title, children, button, ...props }) {
    return (
        <Container {...props}>
            <div className='card'>
                <h2>{title}</h2>
                {children}
                <div className='container-btn'>
                    <Button
                        to='/get'
                        padding='0.6rem 3.8rem'
                        fontSize='1.125rem'
                        className='button no-wrap'
                        hover={false}
                    >
                        Get Simpler
                    </Button>
                </div>
            </div>
            <div className='secondary-card'>
                <h2>Custom</h2>
                <div className='content'>
                    <span
                        style={{
                            fontSize: '0.813rem',
                            color: colors.gray,
                            letterSpacing: '0.05em',
                            fontWeight: 300,
                        }}
                    >
                        Get tailored pricing for high transaction volumes.
                    </span>
                </div>
                <div className='container-btn'>
                    <Button
                        to='/get'
                        padding='0.6rem 3.3rem'
                        fontSize='1.125rem'
                        className='button no-wrap'
                        hover={false}
                    >
                        Contact Sales
                    </Button>
                </div>
            </div>
        </Container>
    )
}
