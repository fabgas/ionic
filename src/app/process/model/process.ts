export class Process {
    ucProcessus : string;
    llProcessus : string;
    ucObjet     : string;
    ucSpecialisation : string;
    volume:number;
    constructor(ucProcessus:string,llProcessus:string,ucObjet:string,ucSpecialisation:string,volume:number) {
        this.ucProcessus = ucProcessus;
        this.llProcessus = llProcessus;
        this.ucObjet = ucObjet;
        this.ucSpecialisation=ucSpecialisation;
        this.volume = volume;
    }
}