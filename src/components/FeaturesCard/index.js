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
    featuresClassName,
    listStyle = true,
    dataAos,
    ...props
}) {
    return (
        <InfoSection
            className={background ? `bg-lightgray` : null}
            listStyle={listStyle}
            paddingTop={pt}
            paddingBottom={pb}
            {...props}
        >
            <div
                className={`contain-card m-0 row justify-content-center ${className}`}
            >
                {image && (
                    <Image
                        className='p-0'
                        src={image.img}
                        width={image.width || '560px'}
                        height={image.height}
                        alt={image.alt}
                        data-aos={dataAos || 'fade-up'}
                    />
                )}
                <div className='col-auto'>
                    {title && <h2 className='title'>{title}</h2>}
                    <ul
                        className={`content ${featuresClassName} ${
                            !title ? 'pt-5-responsive' : null
                        }`}
                    >
                        {features &&
                            features.map((feature, i) => (
                                <React.Fragment key={i}>
                                    {feature.title ? (
                                        <>
                                            <div>
                                                <h3
                                                    className={
                                                        i === 0 ? 'mt-0' : null
                                                    }
                                                >
                                                    {feature.title}
                                                </h3>
                                            </div>
                                            <li
                                                dangerouslySetInnerHTML={{
                                                    __html: feature.feature,
                                                }}
                                            />
                                        </>
                                    ) : (
                                        <li
                                            dangerouslySetInnerHTML={{
                                                __html: feature,
                                            }}
                                        />
                                    )}
                                </React.Fragment>
                            ))}
                    </ul>
                </div>
            </div>
        </InfoSection>
    )
}
