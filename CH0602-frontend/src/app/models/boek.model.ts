export class Boek{
    _id: string;
    titel: string;
    auteur: string;
    isbn: string;
    date: Date;

    constructor(titel: string, auteur: string, isbn: string, date: Date, _id?: string){
        this.titel = titel;
        this.auteur = auteur;
        this.isbn = isbn
        this.date = date;
    }
}