import styled from "styled-components";

export const CardWrapper = styled.div`
   padding: 24px 0;
   /* padding-bottom: 24px; */
   display: block;
   /* height: 200vw; */
   /* line-height: 160%; */
   .wrapper {
    box-sizing: border-box;
    margin-left: auto;
    margin-right: auto;
    width: 100%;
    display: block;
   }
   .wrapper.fluid {
        max-width: 100%;
        /* display: block; */
        padding-left: 16px;
        padding-right: 16px;
        /* box-sizing: border-box; */
        margin-left: auto;
        margin-right: auto;
        width: 100%;
        .grid.padded-2.columns-3 {
            /* margin: -12px; */
            a {
                color: #00A862;
                cursor: pointer;
                text-decoration: none;
                background-color: transparent;
                img {
                    float: left;
                    box-shadow: 0 1px 1px 1px rgb(0 0 0 / 12%);
                    border-radius: 2px;
                    max-width: 100%;
                    border: 0;
                }
            }
        }
        .grid.padded-2 {
            margin: -12px;
            a {
                padding: 12px;
            }
        }
        .grid.columns-3 {
            list-style: none;
            padding: 0;
            display: block;
            a {
                box-sizing: border-box;
                clear: none;
                float: left;
                width: 100%;
            }
            a :nth-child(1n + 1) {
                clear: left;
            }
        }
        .grid{
            display: block;
            a {
                position: relative;
            }
            a :nth-child(2n + 1) {
                clear: left;
            }
            &::after {
                clear: both;
                content: '';
                display: table;
            }
        }
   }

`