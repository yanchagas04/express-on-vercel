import type { VercelRequest, VercelResponse } from '@vercel/node' //IMPORTS PADRÃO PARA TER REQUEST/RESPONSE

function generateId() {
    return Math.floor(Math.random() * 10000)
}

function generateRandomDate() {
    return new Date(Date.now() + Math.floor(Math.random() * 1000000)).toISOString()
}

function generateRandomBoolean() {
    return Math.random() > 0.5
}

export default function handler(req: VercelRequest, res: VercelResponse) {
    const id = generateId();
    return res.json({
        id: id,
        title: 'Título da Tarefa ' + id,
        description: 'Descrição da Tarefa ' + id,
        completed: generateRandomBoolean(),
        createdAt: new Date(Date.now()).toISOString(),
        scheduledTo: generateRandomDate(),
    })
}