import * as React from 'react'
import { BTNLink, BTN } from './style'

export default function Button({
    children,
    to,
    external = false,
    isLink = true,
    padding,
    fontSize,
    hover = true,
    ...props
}) {
    return (
        <>
            {isLink ? (
                <BTNLink
                    to={to}
                    padding={padding}
                    fontSize={fontSize}
                    hover={hover}
                    {...props}
                >
                    {children}
                </BTNLink>
            ) : (
                <BTN
                    padding={padding}
                    fontSize={fontSize}
                    hover={hover}
                    {...props}
                >
                    {children}
                </BTN>
            )}
        </>
    )
}
