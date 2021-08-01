class ValidaCPF{
    constructor(cpfEnviado){
        Object.defineProperty(this, 'cpfLimpo', {
            writable:false,
            enumerable:true,
            configurable: false, 
            value: cpfEnviado.replace(/\D+/g,'')
        });
        // enumerable mostra esse objeto ou não 
    }

    ehSequencia(){
        return this.cpfLimpo.charAt(0).repeat(11) === this.cpfLimpo;
    }

    geraNovoCpf(){
        const cpfSemDigitos = this.cpfLimpo.slice(0,-2); // pegou o cpf menos os 2 digitos
        const digito1= this.geraDigito(cpfSemDigitos);
        const digito2= this.geraDigito(cpfSemDigitos + digito1);
        this.novoCPF = cpfSemDigitos + digito1 + digito2;
    }
    geraDigito(cpfSemDigitos){
        let total = 0;
        let reverso = cpfSemDigitos.length + 1;

        for (let stringNumerica of cpfSemDigitos){
            total += reverso * Number(stringNumerica);
            reverso--;
        }

        const digito = 11 - (total % 11);
        return digito <= 9 ? String(digito) : '0'; 
    }
    valida(){
        if(!this.cpfLimpo) return false;
        if(typeof this.cpfLimpo !== 'string') return false;
        if(this.cpfLimpo.length !== 11) return false;
        if(this.ehSequencia()) return false;
        this.geraNovoCpf()
        //console.log(this.novoCPF)

        return this.novoCPF === this.cpfLimpo;
    }
}

//let cpf = new ValidaCPF('052.291.574-45');
let cpf = new ValidaCPF('052.291.574-45');
if (cpf.valida())
{
    console.log("cpf é Válido")
}
else{
    console.log("cpf é Invalido")
}