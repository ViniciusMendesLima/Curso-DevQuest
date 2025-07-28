let nome: string = "Vinicius";
let idade: number = 34;
let mandouEmail: boolean = true;
let nomes: string[] = ['Vinicius', 'Maria', 'Alice'];
let idades: Array<number> = [12, 22, 39];
let obj: any = {x:0};
function imprimirCoordenadas(pt: { x: number; y: number }) {
 console.log("The coordinate's x value is " + pt.x);
 console.log("The coordinate's y value is " + pt.y);
}
imprimirCoordenadas({ x: 3, y: 7 });
