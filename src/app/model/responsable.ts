import { Operateur } from './operateur';
export class Responsable {
    ucResponsable : string;
    llResponsable : string;
    operateurs : Operateur[];
    constructor(ucResponsable: string, llResponable: string, operateurs: Operateur[]){
        this.ucResponsable = ucResponsable;
        this.llResponsable = llResponable;
        this.operateurs = operateurs;
    }

}