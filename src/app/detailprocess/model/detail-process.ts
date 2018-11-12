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
        if (heures && heures>0)
        this.prod = this.volume/this.heures;
    }
}
export class OperatorDetailProcess {
    ucOperateur : string;
    llOperateur : string;
    ucShift     : string;
    ucProcessus : string;
    volume      : number;
    heures      : number;
    prod        : number;
    constructor(ucOperateur : string,llOperateur : string,ucShift : string, ucProcessus : string, volume : number, heures : number) {
        this.ucOperateur = ucOperateur;
        this.llOperateur = llOperateur;
        this.ucShift = ucShift;
        this.ucProcessus = ucProcessus;
        this.volume = volume;
        this.heures = heures;
        if (this.heures && this.heures>0)
            this.prod = this.volume/this.heures;
 
    }
}