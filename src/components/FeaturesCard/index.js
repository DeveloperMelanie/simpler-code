import * as React from 'react'
import { InfoSection, Image } from './style'

export default function FeaturesCard({
    background = true,
    title,
    image,
    features,
    pt,
    pb,
    className,
}) {
    return (
        <InfoSection
            className={background ? `bg-lightgray` : null}
            paddingTop={pt}
            paddingBottom={pb}
        >
            <div
                className={`contain-card m-0 row justify-content-center ${className}`}
            >
                {image && (
                    <Image
                        className='p-0'
                        src={image.img}
                        width={image.width}
                        height={image.height}
                        alt={image.alt}
                        data-aos='fade-up'
                    />
                )}
                <div className='col-auto'>
                    <h2 className='title'>{title}</h2>
                    <ul className='content'>
                        {features &&
                            features.map((feature, i) => (
                                <li
                                    key={i}
                                    dangerouslySetInnerHTML={{
                                        __html: feature,
                                    }}
                                />
                            ))}
                    </ul>
                </div>
            </div>
        </InfoSection>
    )
}
