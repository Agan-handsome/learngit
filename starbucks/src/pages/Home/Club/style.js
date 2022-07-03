import styled from 'styled-components'

export const ClubWrapper = styled.div`
    padding: 20px 0;
    clear: both;
    background-color: #fff;
    display: block;
    overflow: hidden;
    position: relative;
    padding-right: 16px;
    padding-left: 16px;
    box-sizing: border-box;
    margin-left: auto;
    margin-right: auto;
    max-width: 768px;
    width: 100%;
    .wrapper {
        list-style: none;
        margin: 0;
        padding: 0;
        text-align: center;
        position: relative;
        display: block;
        h2 {
            clear: both;
            margin-bottom: 12px;
            line-height: 140%;
            font-size: 1.25rem;
            font-weight: 400;
        }
        .warpper-mobile {
            padding-left: 24px;
            padding-right: 24px;
            
        }
    }
`