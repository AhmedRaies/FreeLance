export interface Agent {
    email: string,
    nom: string,
    prenom: string,
    cin: number,
    etat: boolean,
    type: string
}

export class OneAgent {
    constructor(public email: string,
        public nom: string,
        public prenom: string,
        public cin: number,
        public etat: boolean){}
}