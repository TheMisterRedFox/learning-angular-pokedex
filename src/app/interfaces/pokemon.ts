export interface Pokemon {
    id: string;
    name: string;
    category: string;
    type: Array<string>;
    size?: string;
    weight?: string;
    sprite?: string;
}
