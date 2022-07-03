import styled from 'styled-components'

export const GoodsWrapper = styled.div`
    padding-top: 36px;
    padding-bottom: 36px;
    text-align: center;
    display: block;
    ul {
        li :nth-child(1n + 1) {
            margin-bottom: 30px;
        }
    }
    .wrapper {
        padding-left: 16px;
        padding-right: 16px;
        box-sizing: border-box;
        margin-left: auto;
        margin-right: auto;
        width: 100%;
        display: block;
        .wrapper-mobile {
            padding-left: 24px;
            padding-right: 24px;
           
        } 
        .grid.padded-2 {
            margin: -12px;
            li {
                padding: 12px;
            }
        }
        .grid.columns-4 {
            list-style: none;
            margin: 0;
            padding: 0;
            ul {
                display: block;
                 
            }
            li:nth-child(2n + 1) {
                clear: left;
            }
            li {
                box-sizing: border-box;
                float: left;
                margin: 0;
                padding: 0;
                width: 50%;
            }
        }
        .grid {
            list-style: none;
            margin: 0;
            padding: 0;
            li {
                position: relative;
            }
        }
        ul {
            padding-top: 48px !important;
            li:nth-child(1) {
                /* margin-bottom: 48px; */
                a {
                    img {
                        
                        /* margin-bottom: -24px; */
                    }
                    p.title-1 {
                        margin-top: 26px;
                    }
                }
            } 
            li {
                padding: 12px !important;
                a {
                    box-shadow: 0 1px 1px 1px rgb(0 0 0 / 12%);
                    box-sizing: border-box;
                    background: #fff;
                    border-radius: 2px;
                    position: relative;
                    padding: 0 6px;
                    text-align: center;
                    width: 100%;
                    color: #00A862;
                    cursor: pointer;
                    text-decoration: none;
                    display: inline-block;
                    img {
                        margin-top: -36px;
                        height: 72px;
                        margin-left: auto;
                        margin-right: auto;
                    }
                    .mobile-hidden {
                        display: none !important;
                    }
                    p.title-1 {
                        font-size: 16px;
                    }
                    .title-1 {
                        color: rgba(0, 0, 0, 0.87);
                        margin-bottom: 8px;
                        line-height: 140%;
                        font-weight: 400;
                        font-size: 18px;
                        strong {
                            font-weight: 700;
                        }
                    }
                    p {
                        margin: 0 0 24 px;
                        font-size: 14px;
                    }
                    p.margin2 {
                        color: rgba(0, 0, 0, 0.56) !important;
                    }
                    .margin2 {
                        margin-bottom: 18px;
                    }
                    .caption {
                        font-size: 12px;
                        color: #C2A661;
                        font-weight: 400;
                        opacity: 0.7;
                        text-transform: none;
                    }
                }
                a: hover {
                    transform: translate3d(0, 0, 0);
                    box-shadow: 0 1px 3px 2px rgb(0 0 0 / 12%);
                }
            }
        }
        .light {
            color: rgba(0, 0, 0, 0.56);
        }
        p {
            word-wrap: break-word;
            word-break: normal;
            margin: 0 0 24px;
            display: block;
        }
        h2 {
            margin-bottom: 12px;
            line-height: 140%;
            font-size: 1.25rem;
            font-weight: 400;
            color: #000;
            margin: 0 0 24px;
            display: block;
        }
        
    }
    .grid::after {
        clear: both;
        content: '';
        display: table;
    }
`