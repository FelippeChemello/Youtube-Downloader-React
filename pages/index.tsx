import { useState } from 'react'
import Image from 'next/image'
import axios from 'axios'
import Router from 'next/router'

import { Container, Content, VideoInfo } from '../styles/pages/index'

interface VideoData {
    fileName: string
    title: string
    description: string
    thumbnailUrl: string
}

export default function Index() {
    const [url, setUrl] = useState('')
    const [error, setError] = useState('')
    const [videoData, setVideoData] = useState<VideoData>({} as VideoData)

    async function downloadVideo() {
        try {
            const responseData = await axios.post('/api/youtubedl', { url })

            setVideoData(responseData.data)
        } catch (error) {
            setError(error.response.data)
        }
    }

    async function getFile() {
        try {
            window.location.href = `/api/files/${videoData.fileName}`
        } catch (error) {
            alert('File not found, please try again!')
            window.location.href = '/'
        }
    }

    function truncateText(text: string, maxLength: number) {
        if (text.length > maxLength) {
            text = text.substr(0, maxLength) + '...'
        }

        return text
    }

    return (
        <Container>
            {!Object.keys(videoData).length ? (
                <Content>
                    <div>
                        <h1>
                            Welcome to <span>downloader</span>
                        </h1>
                    </div>

                    <div>
                        <input onChange={event => setUrl(event.target.value)} placeholder="Enter URL's video to download" />
                        <button onClick={downloadVideo}> Download! </button>
                    </div>

                    {error && (
                        <div>
                            <p style={{ color: 'red' }}>{error}</p>
                        </div>
                    )}
                </Content>
            ) : (
                <VideoInfo>
                    <h1>{videoData.title}</h1>

                    <div>
                        <Image src={videoData.thumbnailUrl} width={480} height={270} />
                        <div>
                            <p>{truncateText(videoData.description, 160)}</p>
                            <button onClick={getFile}>Download</button>
                        </div>
                    </div>
                </VideoInfo>
            )}
        </Container>
    )
}
