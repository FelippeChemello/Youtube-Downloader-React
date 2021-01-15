import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
 *{
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }
    body {
        /* background: #F0F2F5; */
        /* color: #969CB2; */
        -webkit-font-smoothing: antialiased;
    }
    body, input, button {
        font: 16px 'Poppins', serif;
    }
    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 500;
        color: #363F5F;
    }
    button {
        cursor: pointer
    }
`
