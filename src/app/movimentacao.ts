export class Movimentacao{

    constructor(name = "", tipo: "", dataVencimento: "", categoria: "", valor: "") {}
    
    id: number;
    name: string;
    tipo: string;
    dataLancamento: string;
    dataVencimento : string;
    categoria: any;
    valor: number; 
}
