import { NextApiRequest, NextApiResponse } from 'next'
import fs from 'fs'
import mime from 'mime'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const { filename } = req.query

    try {
        const path = `/tmp/eee${filename}`

        const mimetype = mime.getType(path)

        res.setHeader('Content-disposition', 'attachment; filename=' + filename)
        res.setHeader('Content-type', mimetype)
        fs.createReadStream(path)
            .on('error', () => res.redirect('/'))
            .pipe(res)
    } catch {
        res.status(404).send('File not found')
    }
}
