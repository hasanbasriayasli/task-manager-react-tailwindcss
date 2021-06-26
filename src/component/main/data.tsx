export interface IItems{
    section:string,
    cards:ICard[]
}

export interface ICard{
    id:number;
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
                id:1,
                issue: 'Design',
                attachment: 1,
                explanation: 'Product illustration to symbolize bringing people together',
                assigment: ['./logo192.png', './logo512.png', './logo512.png']
            },
            {
                id:2,
                issue: 'Bug',
                attachment: 2,
                explanation: 'Product illustration to symbolize bringing people together',
                assigment: ['./logo192.png', './logo512.png']
            },
            {
                id:3,
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
                id:4,
                issue: 'Research',
                attachment: 3,
                explanation: 'Product illustration to symbolize bringing people together',
                assigment: ['./logo192.png']
            },
            {
                id:5,
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
                id:6,
                issue: 'Research',
                attachment: 1,
                explanation: 'Product illustration to symbolize bringing people together',
                assigment: ['./logo192.png', './logo512.png']
            },
            {
                id:7,
                issue: 'Bug',
                attachment: 5,
                explanation: 'Product illustration to symbolize bringing people together',
                assigment: ['./logo192.png', './logo512.png','./logo192.png']
            },
            {
                id:8,
                issue: 'Research',
                attachment: 3,
                explanation: 'Product illustration to symbolize bringing people together',
                assigment: ['./logo192.png']
            },
            {
                id:9,
                issue: 'Bug',
                attachment: 2,
                explanation: 'Product illustration to symbolize bringing people together',
                assigment: ['./logo192.png', './logo512.png','./logo192.png', './logo512.png']
            },
            {
                id:10,
                issue: 'Research',
                attachment: 1,
                explanation: 'Product illustration to symbolize bringing people together',
                assigment: ['./logo192.png']
            },
            {
                id:11,
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
                id:12,
                issue: 'Design',
                attachment: 3,
                explanation: 'Product illustration to symbolize bringing people together',
                assigment: ['./logo192.png']
            },
            {
                id:13,
                issue: 'Bug',
                attachment: 1,
                explanation: 'Product illustration to symbolize bringing people together',
                assigment: ['./logo192.png', './logo512.png','./logo192.png', './logo512.png']
            }
        ]
    },
]
