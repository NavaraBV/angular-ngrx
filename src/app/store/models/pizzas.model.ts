// Specifies the data model of a PizzaItem
export interface PizzaItem {
    id: string,
    name: string,
    description: string,
    price: number,
    likes: number
}

export const emptyPizzaItem: PizzaItem = {
    id: '',
    name: '',
    description: '',
    price: 0,
    likes: 0
};