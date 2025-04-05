import type { VercelRequest, VercelResponse } from '@vercel/node' //IMPORTS PADRÃO PARA TER REQUEST/RESPONSE

export default function handler(req: VercelRequest, res: VercelResponse) {
  const { name = 'World' } = req.query
  return res.json({
    message: `Hello ${name}!`,
  })
}
