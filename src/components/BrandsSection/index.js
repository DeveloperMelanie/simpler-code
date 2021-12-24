import * as React from 'react'

import { BrandSection } from './style'

import Relevance from 'images/relevance-logo.webp'
import Webapp from 'images/webapp-logo.webp'
import Quest from 'images/quest-logo.webp'
import Rocketpath from 'images/rocketpath-logo.webp'
import Webnestors from 'images/webnestors-logo.webp'

import RelevanceLarge from 'images/relevance-logo-large.webp'
import WebappLarge from 'images/webapp-logo-large.webp'
import QuestLarge from 'images/quest-logo-large.webp'
import RocketpathLarge from 'images/rocketpath-logo-large.webp'
import RedMonkey from 'images/redmonkey-logo.webp'
import Webminds from 'images/webminds-logo.webp'
import Webmate from 'images/webmate-logo.webp'

export default function BrandsSection({ extended }) {
    return (
        <>
            {!extended ? (
                <BrandSection className='w-100' extended={extended}>
                    <div className='mb-6'>
                        <span>Trusted by</span>
                    </div>
                    <div className='d-flex flex-wrap align-items-center justify-content-center gap-7'>
                        <img src={Relevance} alt='relevance logo' />
                        <img
                            src={Webapp}
                            alt='webapp-logo-dark-300x200-001 (1)_edited.png'
                        />
                        <img src={Quest} alt='quest.png' />
                        <img src={Rocketpath} alt='rocketpath logo.png' />
                        <img
                            src={Webnestors}
                            alt='Logo-Black-350px-1-e1630481520140_edited.png'
                        />
                    </div>
                </BrandSection>
            ) : (
                <BrandSection className='w-100' extended={extended}>
                    <div className='mb-6'>
                        <span>Trusted by</span>
                    </div>
                    <div className='d-flex flex-wrap align-items-center justify-content-center gap-7'>
                        <a
                            href='https://relevancedigital.com/'
                            target='_blank'
                            rel='noopener noreferrer'
                            className='d-flex'
                        >
                            <img
                                src={RelevanceLarge}
                                alt='Relevance Digital Agency'
                            />
                        </a>
                        <a
                            href='https://webappdesign.gr/'
                            target='_blank'
                            rel='noopener noreferrer'
                            className='d-flex'
                        >
                            <img src={WebappLarge} alt='Webapp Design' />
                        </a>
                        <a
                            href='https://www.quest.gr/'
                            target='_blank'
                            rel='noopener noreferrer'
                            className='d-flex'
                        >
                            <img src={QuestLarge} alt='Quest' />
                        </a>
                        <a
                            href='https://rocket-path.com/'
                            target='_blank'
                            rel='noopener noreferrer'
                            className='d-flex'
                        >
                            <img src={RocketpathLarge} alt='Rocket Path' />
                        </a>
                        <a
                            href='https://redmonkey.gr/'
                            target='_blank'
                            rel='noopener noreferrer'
                            className='d-flex'
                        >
                            <img
                                src={RedMonkey}
                                alt='Red Monkey Digital Marketing'
                            />
                        </a>
                        <a
                            href='https://webminds.gr/'
                            target='_blank'
                            rel='noopener noreferrer'
                            className='d-flex'
                        >
                            <img src={Webminds} alt='Web Minds' />
                        </a>
                        <a
                            href='https://webnestors.com/'
                            target='_blank'
                            rel='noopener noreferrer'
                            className='d-flex'
                        >
                            <img src={Webnestors} alt='Web Nestors' />
                        </a>
                        <a
                            href='https://web-mate.gr/'
                            target='_blank'
                            rel='noopener noreferrer'
                            className='d-flex'
                        >
                            <img src={Webmate} alt='Web Mate' />
                        </a>
                    </div>
                </BrandSection>
            )}
        </>
    )
}
