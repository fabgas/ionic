export class DetailProces {
    ucProcessus : string;
    llProcessus : string;
    ucObjet     : string;
    ucSpecialisation : string;
    volume:number;
    heures:number;
    prodcible:number;
    prod:number;

    constructor(ucProcessus:string,llProcessus:string,ucObjet:string,ucSpecialisation:string,volume:number,heures:number,prodcible:number) {
        this.ucProcessus = ucProcessus;
        this.llProcessus = llProcessus;
        this.ucObjet = ucObjet;
        this.ucSpecialisation=ucSpecialisation;
        this.volume = volume;
        this.heures = heures;
        this.prodcible = prodcible;
        this.prod = this.volume/this.heures;
    }
}