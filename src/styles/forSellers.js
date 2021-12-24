import styled from 'styled-components'
import { colors } from './theme'

export const GraySection = styled.div`
    padding: 0 1rem;
    padding-top: 4.5rem;
    background: ${colors.lightgray};
    text-align: center;
    .title {
        font-size: 2.563rem;
        margin-bottom: 3.5rem;
    }
    .description {
        display: inline-block;
        letter-spacing: 0.1em;
        font-size: 1.25rem;
        color: ${colors.gray};
        max-width: 33rem;
        font-weight: 300;
        margin-bottom: 6rem;
    }
    .images-section {
        display: inline-flex;
        justify-content: center;
        align-items: flex-end;
        flex-wrap: wrap;
        row-gap: 5rem;
        .image-group {
            position: relative;
            img:first-child {
                max-width: 693px;
                max-height: 351px;
                width: 100%;
                height: auto;
                position: relative;
                z-index: 5;
            }
            img:last-child {
                max-width: 300px;
                max-height: 531px;
                width: 100%;
                height: auto;
                position: relative;
                margin-left: -1rem;
                bottom: 8rem;
                @media (max-width: 1499px) {
                    bottom: 0;
                }
                @media (max-width: 1024px) {
                    bottom: 0;
                    margin-left: 0;
                }
            }
            margin-right: 1.4rem;
            @media (max-width: 1499px) {
                margin-right: 0;
            }
            @media (max-width: 1024px) {
                display: none;
            }
        }
        .image-group-reverse {
            position: relative;
            margin-bottom: calc(10rem + 28px);
            img:first-child {
                max-width: 450px;
                max-height: 488px;
                width: 100%;
                height: auto;
            }
            img:last-child {
                max-width: 306px;
                max-height: 587px;
                width: 100%;
                height: auto;
                position: absolute;
                left: 50px;
                top: -28px;
                @media (max-width: 1499px) {
                    transform: translateX(-50%);
                    left: 50%;
                }
                @media (max-width: 1024px) {
                    display: none;
                }
            }
            @media (max-width: 1499px) {
                margin-bottom: calc(6rem + 28px);
            }
        }
        @media (max-width: 1499px) {
            flex-direction: column;
            align-items: center;
        }
    }
    .grid {
        padding-bottom: 9em;
        max-width: 75rem;
        margin: 0 auto;
        text-align: left;
        display: grid;
        justify-items: center;
        justify-content: center;
        grid-template-columns: repeat(auto-fit, minmax(5rem, 310px));
        column-gap: 4rem;
        row-gap: 6rem;
    }
`
export const InformativeSection = styled.div`
    padding: 5rem 1rem;
    text-align: center;
    .title {
        font-size: 2.563rem;
        padding-bottom: 1rem;
    }
    .description {
        font-size: 1.25rem;
        font-weight: 300;
        letter-spacing: 0.1em;
        color: ${colors.gray};
    }
    .contain-btn {
        padding-top: 3.5rem;
    }
`
