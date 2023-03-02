import type { NextApiRequest, NextApiResponse } from 'next'
import i18n from '@i18/index'

export default function handler (
  req: NextApiRequest,
  res: NextApiResponse
) {
  const category = req.query.category as string
  const lang = req.headers.cookie?.split('=')[1] ?? 'es'

  res.status(200).json(i18n[lang][category])
}
