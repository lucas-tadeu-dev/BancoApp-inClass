class Conta {
  constructor(agencia, conta, saldo){ 
  this.agencia = agencia;
  this.conta = conta;
  this.saldo = saldo;
  }
  sacar(valor){
    if(valor > this.saldo) {
      console.log(`Saldo insuficiente: ${this.saldo}`);
      return;
  }
  this.saldo -= valor;
  this.verSaldo();
}
  
  depositar(valor){
  this.saldo += valor;
  this.verSaldo();
  }

  verSaldo(){
  console.log(
    `Ag/c: ${this.agencia}/${this.conta} | ` +
    `Saldo: R$${this.saldo.toFixed(2)}`
  )
  } 
}

class ContaCorrente extends Conta{ //criando herança de conta corrente para a Conta, e adicionado o parâmetro limite
   constructor(agencia, conta, saldo, limite){
    super(agencia, conta, saldo)
    this.limite = limite;
   }
  
   sacar(valor){
    if(valor > (this.saldo + this.limite)) {
      console.log(`Saldo insuficiente: ${this.saldo}`);
      return;
    }
    this.saldo -= valor;
  this.verSaldo();
   }
}

class ContaPoupanca extends Conta{  // já herdou todos métodos necessários
  constructor(agencia, conta, saldo){
    super(agencia, conta, saldo)
  }
}


const cc = new ContaCorrente(11, 22, 0, 100);
cc.depositar(10);
cc.sacar(110);
cc.sacar(1);

console.log();

const cp = new ContaPoupanca(12, 33, 0);
cp.depositar(10);
cp.sacar(10);
cp.sacar(1);

