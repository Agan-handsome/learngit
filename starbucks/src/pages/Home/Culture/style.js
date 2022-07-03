import styled from "styled-components";

export const CultureWrapper = styled.div`
    bottom: 40px;
    display: block;
    background-color: #fff;
    padding: 36px 0 36px 0;
    margin-bottom: -24px;
    line-height: 160%;
    .center {
        text-align: center;
    }
    .wrapper {
        padding-left: 16px;
        padding-right: 16px;
        box-sizing: border-box;
        margin-left: auto;
        margin-right: auto;
        max-width: 768px;
        width: 100%;
    }
    .wrapper-mobile {
        padding-left: 24px;
        padding-right: 24px;
    }
    h2 {
        margin-bottom: 18px;
        line-height: 140%;
        font-size: 20px;
        font-weight: 400;
        color: #000;
        margin: 0 0 24px;
        display: block;
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
    a {
        cursor: pointer;
        color: #00A862;
    }
    .scroll-wrapper {
        position: relative;
        overflow: hidden;
        .scroll-arrow {
            transition: all 0.1s ease;
            border-radius: 50%;
            box-shadow: 0 1px 1px 1px rgb(0 0 0 / 12%);
            box-sizing: border-box;
            background: white;
            cursor: pointer;
            height: 28.8px;
            margin-top: -16px;
            position: absolute;
            padding: 2px 0;
            text-align: center;
            top: 50%;
            width: 28.8px;
            z-index: 1;
            img {
                margin: 3px auto;
                width: 18px;
            }
            & > * {
                margin-bottom: -24px;
                /* padding-bottom: 24px; */
            }
            .wrapper {
                position: relative;

            }
            &:hover.scroll-arrow-left {
                left: 20px;
            }
            &:hover {
                box-shadow:0 1px 3px 2px rgb(0 0 0 / 12%);
                background: white;
            }
        }
        .scroll-arrow-left {
            left: 24px;
        }
        & > * {
            margin-bottom: -24px;
        }
        .scroll-arrow-right {
            right: 24px;
        }
        & > * {
            margin-bottom: -24px;
        } 
    }
    .hidden {
        /* display: none !important; */
    }
    .scroll {
        /* margin-right: 24px; */
        overflow-x: scroll;
        overflow-y: hidden;
        white-space: nowrap;
        widows: 100%;
        & > .wrapper {
            display: table;
            padding-right: 0px;
        }
        .wrapper {
            & > div {
                display: table;
            }
        }
        & > .wrapper.thumbnail {
            margin-right: 16px;
        }
    }
    .card.thumbnail.rect {
        width: 252px;
        .preview {
            height: 144px;
            width: calc(100% + 38px);
        }
        strong {
            white-space: initial;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
            font-weight: normal;
            text-align: left;
        }
    }
    .card.thumbnail {
        box-sizing: border-box;
        display: inline-block;
        .preview {
            margin-top: -18px;
            margin-left: -19px;
            margin-right: -19px;
        }
        .tag {
            font-size: 14px;
            background: #C2A661;
            color: #FFF;
            position: absolute;
            padding: 4px 12px;
            left: 0;
            top: 6px;
        }
    }
    a.card {
        color: inherit;
        margin-top: 12px;
        margin-bottom: 26px;
    }
    .card {
        background: #FFF;
        border-radius: 2px;
        box-shadow: 0 1px 1px 1px rgb(0 0 0 / 12%);
        overflow: hidden;
        position: relative;
        padding: 18px;
        & > *:last-child {
            margin-bottom: 0;
        }
    }
    .thumbnail {
        margin-right: 16px;
        vertical-align: top;
        .preview {
            overflow: hidden;
            display: inline-block;
            margin: 0 auto 6px;
            img {
                object-fit: cover;
                background-repeat: no-repeat;
                background-position: center center;
                width: calc(100% + 38px);   
                height: 168px;
            }
        }
        strong {
            width: 100%;
            font-size: 16px;
            letter-spacing: 0.4px;
            line-height: 160%;
        }
    }
    
`