import styled, { createGlobalStyle } from 'styled-components'
import { colors } from 'styles/theme'

export const HeaderPage = styled.header`
    position: fixed;
    top: ${props => (props.visible ? 0 : '-121px')};
    left: 0;
    z-index: 15;
    width: 100%;
    padding: 0 1rem;
    padding-top: 1.8rem;
    padding-bottom: 3.2rem;
    font-size: 1rem;
    box-shadow: ${props =>
        props.expanded
            ? '0 0 5px rgba(0, 0, 0, 0.5),0 0 5px rgba(0,0,0,.5)'
            : 'none'};
    background: ${colors.white};
    transition: all 0.5s ease, top 0.3s ease;
    @media (max-width: 540px) {
        padding-bottom: 2.8rem;
    }
    #logo {
        font-size: 1.688rem;
        font-weight: 700;
        @media (max-width: 540px) {
            font-size: 2rem;
        }
    }
    .contain {
        position: relative;
        display: flex;
        justify-content: space-between;
        max-width: 61rem;
        margin: 0 auto;
    }
    .content-section {
        @media (max-width: 540px) {
            display: none !important;
        }
    }
    .route-link {
        position: relative;
        padding: 0.5rem;
        color: #ababab !important;
        ::before {
            content: '';
            position: absolute;
            top: -3px;
            left: 0;
            width: 100%;
            height: 1px;
            background: ${colors.important};
        }
        :hover {
            ::before {
                height: 4px;
            }
            color: #e0e0e0 !important;
        }
    }
    .active {
        padding-top: 0.413rem;
        color: ${colors.black} !important;
        ::before {
            height: 4px;
        }
    }
`
export const MenuButton = styled.div`
    position: fixed;
    z-index: 20;
    top: ${props => (props.visible ? '2.1rem' : '-146px')};
    right: 20px;
    cursor: pointer;
    width: 40px;
    margin-right: 1.2rem;
    transition: top 0.3s ease;
    div {
        background: ${colors.black};
        height: 4px;
        width: 100%;
        border-radius: 2px;
        transition: all 0.25s ease-in-out;
        margin-bottom: 0.8rem;
    }
    #middle {
        opacity: ${props => (props.isOpen ? 0 : 1)};
    }
    div:first-child {
        transform: ${props =>
            props.isOpen
                ? 'translateY(20px) translateY(-50%) rotate(-45deg)'
                : 'none'};
    }
    div:last-child {
        transform: ${props =>
            props.isOpen
                ? 'translateY(-17px) translateY(50%) rotate(45deg)'
                : 'none'};
    }
    @media (min-width: 541px) {
        display: none;
    }
`
export const MobileMenu = styled.div`
    @media (min-width: 541px) {
        display: none;
    }
`
export const Filter = styled.div`
    opacity: ${props => (props.isOpen ? 1 : 0)};
    visibility: ${props => (props.isOpen ? 'visible' : 'hidden')};
    position: fixed;
    content: '';
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: #000000a6;
    transition: all 0.25s ease;
    z-index: 17;
`
export const Menu = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    width: 80%;
    transform: ${props =>
        props.isOpen ? 'translateX(0)' : 'translateX(100%)'};
    height: 100vh;
    background: ${colors.white};
    z-index: 18;
    transition: all 0.45s cubic-bezier(0.65, 0, 0.35, 1);
    .menu-container {
        position: absolute;
        transform: translateY(-50%);
        top: 30%;
        left: 15%;
    }
    .route-link {
        display: flex;
        align-items: center;
        text-align: center;
        justify-content: center;
        width: 70%;
        padding: calc(0.45rem + 0.6vh) 0;
        font-size: 1.4rem;
        font-weight: 300;
        :active {
            background: ${colors.important};
        }
    }
    .active {
        background: ${colors.important};
    }
`
export const Active = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 0.35rem;
    position: absolute;
    transform: translateX(-50%);
    left: 50%;
    bottom: -91px;
    color: ${colors.black};
    white-space: nowrap;
    a {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0.3rem 1.2rem;
        border: 1px solid ${colors.gray};
        font-size: 0.938rem;
        font-style: normal;
        letter-spacing: 0.05em;
        font-family: Arial, Helvetica, sans-serif;
        font-weight: 700;
        color: ${colors.black};
        border-radius: 6px;
        text-align: center;
        transition: all 0.2s ease;
        :hover {
            background: #f4f4f4;
        }
    }
`
export const MenuOpen = createGlobalStyle`
    body {
        overflow: ${props => (props.isOpen ? 'hidden' : 'auto')};
    }
`
