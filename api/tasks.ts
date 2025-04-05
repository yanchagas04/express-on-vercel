import type { VercelRequest, VercelResponse } from '@vercel/node' //IMPORTS PADRÃO PARA TER REQUEST/RESPONSE

function generateId() {
    return Math.floor(Math.random() * 10000)
}

function generateRandomDate() {
    return Date.now() + Math.floor(Math.random() * 10000)
}

export default function handler(req: VercelRequest, res: VercelResponse) {
    return res.json({
        id: generateId(),
        title: 'Título da Tarefa',
        description: 'Descrição da Tarefa',
        completed: false,
        createdAt: Date.now(),
        scheduledTo: generateRandomDate(),
    })
}