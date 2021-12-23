import * as React from 'react'

import { FullScreen } from './style'

export default function FullscreenFixed({ children, setAction, ...props }) {
    return (
        <FullScreen {...props}>
            <div className='px-3' data-aos='fade'>
                {children}
                <svg
                    className='close'
                    preserveAspectRatio='xMidYMid meet'
                    data-bbox='82.189 55.096 481.811 481.808'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='82.189 55.096 481.811 481.808'
                    role='presentation'
                    aria-hidden='true'
                    width={37}
                    height={38}
                    fill='#fff'
                    onClick={() => setAction(false)}
                >
                    <g>
                        <path d='M531.936 536.904L323.094 328.063 114.253 536.904l-32.064-32.062L291.032 296 82.189 87.157l32.064-32.061 208.842 208.842L531.936 55.096 564 87.157 355.155 296 564 504.842l-32.064 32.062z' />
                    </g>
                </svg>
            </div>
        </FullScreen>
    )
}
