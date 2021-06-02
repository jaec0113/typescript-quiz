import { createGlobalStyle } from "styled-components"
import BGImage from "./images/jason-wong-cappuccino.jpg"

export const GlobalStyles = createGlobalStyle`
    html {
        height: 100%;
    }

    body {
        background-image: url(${BGImage});
        background-size: cover;
        margin: 0;
        padding: 0 20px;
        display: flex;
        justify-content: center;
    }

    * {
        box-sizing: border-box;
        font-family: 'Catamaran', sans-serif;
        color: white;
    }
`
