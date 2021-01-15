import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100vh;
`

export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    max-width: 1200px;
    margin: 16px;
    padding: 16px;
    text-align: center;

    div {
        flex: 1;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
    }

    h1 {
        font-size: 48px;
        margin-bottom: 64px;
    }

    span {
        background-image: linear-gradient(90deg, #007cf0, #00dfd8);
        color: transparent;
        background-clip: text;
        -webkit-background-clip: text;
        font-weight: bold;
    }

    input {
        font-size: 20px;
        height: 64px;
        margin: 16px;
        padding: 16px;
        border-radius: 32px;
        border: 2px solid #007cf0;
    }

    button {
        font-size: 20px;
        height: 64px;
        outline: none;
        background: #00dfd8;
        color: #fff;
        padding: 16px;
        border-radius: 32px;
        border: 2px solid #00dfd8;
    }
`

export const VideoInfo = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;

    > h1 {
        text-align: center;
    }

    > div {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-items: flex-end;
        padding: 10px;

        > div {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            height: 100%;
            margin: 0 32px;
            padding: 10px;
            max-width: 240px;

            button {
                font-size: 20px;
                height: 64px;
                outline: none;
                background: #00dfd8;
                color: #fff;
                padding: 16px;
                border-radius: 32px;
                border: 2px solid #00dfd8;
            }
        }
    }
`
