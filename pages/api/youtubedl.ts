import { NextApiRequest, NextApiResponse } from 'next'
import { v4 } from 'uuid'
import ytdl from 'ytdl-core'
import fs from 'fs'

export default async function (req: NextApiRequest, res: NextApiResponse) {
    try {
        const { url } = req.body

        if (url.match(new RegExp('list', 'gi'))) {
            throw 'Playlist not allowed'
        }

        if (!ytdl.validateURL(url)) {
            throw 'Invalid URL'
        }

        const videoId = ytdl.getVideoID(url)

        const videoInfo = await ytdl.getBasicInfo(videoId)

        const fileName = `${v4()}.mp4`

        ytdl(url)
            .pipe(fs.createWriteStream(`/tmp/${fileName}`))
            .on('open', () => console.log(`Initializing download of  -> ${fileName}`))
            .on('ready', () => {
                console.log('Starting...')
            })
            .on('error', () => res.status(500).send({ error: 'An error has occured during video download, please try again later.' }))
            .on('drain', () => {
                console.log('Downloading...')
            })
            .on('close', () => {
                console.log('Finished!')
                res.send({
                    fileName,
                    title: videoInfo.videoDetails.title,
                    description: videoInfo.videoDetails.description,
                    thumbnailUrl: videoInfo.videoDetails.thumbnails[videoInfo.videoDetails.thumbnails.length - 1].url,
                })
            })
    } catch (error) {
        console.log('catch')
        res.status(500).send(error)
    }
}
