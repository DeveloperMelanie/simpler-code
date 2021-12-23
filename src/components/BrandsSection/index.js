import * as React from 'react'

import { BrandSection } from './style'

export default function BrandsSection() {
    return (
        <BrandSection className='w-100'>
            <div className='mb-6'>
                <span>Trusted by</span>
            </div>
            <div className='d-flex flex-wrap align-items-center justify-content-center gap-7'>
                <img
                    src='https://static.wixstatic.com/media/804960_65f882fcfa1647f681377129c989b8a1~mv2.png/v1/fill/w_189,h_42,al_c,q_85,usm_0.66_1.00_0.01/relevance%20logo.webp'
                    alt='relevance logo'
                />
                <img
                    src='https://static.wixstatic.com/media/804960_172555cf5e81447dba8548549d76b6b9~mv2.png/v1/fill/w_118,h_79,al_c,q_85,usm_0.66_1.00_0.01/webapp-logo-dark-300x200-001%20(1)_edited.webp'
                    alt='webapp-logo-dark-300x200-001 (1)_edited.png'
                />
                <img
                    src='https://static.wixstatic.com/media/804960_5f8a17bf2cd641a3b4b3724a55e577db~mv2.png/v1/crop/x_0,y_0,w_154,h_53/fill/w_105,h_35,al_c,q_85,usm_0.66_1.00_0.01/quest.webp'
                    alt='quest.png'
                />
                <img
                    src='https://static.wixstatic.com/media/804960_88cf3db7fa1242fb863b712835560ddf~mv2.png/v1/fill/w_149,h_71,al_c,q_85,usm_0.66_1.00_0.01/rocketpath%20logo.webp'
                    alt='rocketpath logo.png'
                />
                <img
                    src='https://static.wixstatic.com/media/804960_ddcdda7f0e5442e58b2dd982a5cc6173~mv2.png/v1/fill/w_177,h_50,al_c,lg_1,q_85/Logo-Black-350px-1-e1630481520140_edited.webp'
                    alt='Logo-Black-350px-1-e1630481520140_edited.png'
                />
            </div>
        </BrandSection>
    )
}
