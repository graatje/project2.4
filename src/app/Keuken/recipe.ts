export interface Recipe {
    id: number;
    naam: string;
    bereidingstijd: number;
    aantalPersonen: number;
    ingredienten: string;
    bereidingswijze: string;
    thumbsUp: string[];
    thumbsDown: string[];
}