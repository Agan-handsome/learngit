import styled from 'styled-components'

export const FooterWrapper = styled.div`
    padding-top: 5px;
    width: 100%;
    height: 50px;
    background: #fff;
    position: fixed;
    bottom: 0;
    left: 0;
    display: flex;
    color: rgba(0, 0, 0, 0.56);
    box-shadow: 0 1px 1px 1px rgb(0 0 0 / 12%);
    a {
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        font-size: 0.9em;
        color: rgba(0, 0, 0, 0.56);
        &.active {
            color: #00A862;
        }
        i{
            font-size: 1.5em;
        }
    }
`