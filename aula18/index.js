// Dados Primitivos e Valores pro Referencia

// let nome = 'Luiz'; nome = 'Otavio'; 
// strings são dados primitivos e portanto imutaveis
//porem não posso fazer por exemplo nome.push('dois') ou por exemplo nome[0] = R; não vai acontecer porque 'Luiz' a posicao 0 já é L; 

// Dados primitivos permitem a copia dos valores para as variáveis. Copio apenas o valor. 

//Já em valores por referencia (são mutavies) ao fazer uma atribuição eu copio o endereco e assim a alteração em um, alteraria em outro. Isso acontece por exemplo em Arrays, Listas, Objetos; 

// se fizer a=[1,2,3] e fizer b=a. Se eu fizer b.push(4). Tando a como b viraram [1,2,3,4]

// se eu quiser fazer realmente uma copia de umavalor por referencia posso fazer : 

// let a=[1,2,3]
// let b = [...a ] 
// também funciona em objeto let b= {...a} isso se chama spread. Eu espalho o valor de a em b.

// Avaliação de curto circuito 

//  valores falsos: false, '', "", ``, null, undefined, NaN

// qualquer outro é avaliado como verdadeiro. 



