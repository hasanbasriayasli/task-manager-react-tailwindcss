export interface IItems{
    section:string,
    cards:ICard[]
}

export interface ICard{
    issue: string,
    attachment: number,
    explanation: string,
    assigment: string[]
}
export const items:IItems[] = [
    {
        section: 'Todo',
        cards: [
            {
                issue: 'Design',
                attachment: 1,
                explanation: 'Product illustration to symbolize bringing people together',
                assigment: ['./logo192.png', './logo512.png', './logo512.png']
            },
            {
                issue: 'Bug',
                attachment: 2,
                explanation: 'Product illustration to symbolize bringing people together',
                assigment: ['./logo192.png', './logo512.png']
            },
            {
                issue: 'New Feature',
                attachment: 1,
                explanation: 'Product illustration to symbolize bringing people together',
                assigment: ['./logo192.png', './logo512.png','./logo192.png', './logo512.png']
            }
        ]
    },
    {
        section: 'In Progress',
        cards: [
            {
                issue: 'Research',
                attachment: 3,
                explanation: 'Product illustration to symbolize bringing people together',
                assigment: ['./logo192.png']
            },
            {
                issue: 'Bug',
                attachment: 4,
                explanation: 'Product illustration to symbolize bringing people together',
                assigment: ['./logo192.png', './logo512.png','./logo192.png', './logo512.png']
            }
        ]
    },
    {
        section: 'Testing',
        cards: [
            {
                issue: 'Research',
                attachment: 1,
                explanation: 'Product illustration to symbolize bringing people together',
                assigment: ['./logo192.png', './logo512.png']
            },
            {
                issue: 'Bug',
                attachment: 5,
                explanation: 'Product illustration to symbolize bringing people together',
                assigment: ['./logo192.png', './logo512.png','./logo192.png']
            },
            {
                issue: 'Research',
                attachment: 3,
                explanation: 'Product illustration to symbolize bringing people together',
                assigment: ['./logo192.png']
            },
            {
                issue: 'Bug',
                attachment: 2,
                explanation: 'Product illustration to symbolize bringing people together',
                assigment: ['./logo192.png', './logo512.png','./logo192.png', './logo512.png']
            },
            {
                issue: 'Research',
                attachment: 1,
                explanation: 'Product illustration to symbolize bringing people together',
                assigment: ['./logo192.png']
            },
            {
                issue: 'Bug',
                attachment: 4,
                explanation: 'Product illustration to symbolize bringing people together',
                assigment: ['./logo192.png', './logo512.png']
            }
        ]
    },
    {
        section: 'Done',
        cards: [
            {
                issue: 'Design',
                attachment: 3,
                explanation: 'Product illustration to symbolize bringing people together',
                assigment: ['./logo192.png']
            },
            {
                issue: 'Bug',
                attachment: 1,
                explanation: 'Product illustration to symbolize bringing people together',
                assigment: ['./logo192.png', './logo512.png','./logo192.png', './logo512.png']
            }
        ]
    },
]
