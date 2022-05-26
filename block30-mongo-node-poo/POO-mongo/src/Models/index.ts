// essa interface é um contrato (o que e como deve ser aplicado)

interface Model<T> { // generics, vai servir para qualquer objeto
    create(obj: T): Promise<T>,
    read(): Promise<T[]>,
    readOne(id_: string): Promise<T | null>,
    update(id: string, data: T): Promise<T | null>
  }

//  '<T>' -> garante que a interface deve receber um tipo(nao importa caso pq e generics)
// este tipo vai ser substituido nas requisições
// isso garante a assinatura dos models
// essa interface funciona como um contrato
// quem for usar essa interface, PRECISA seguir essa forma de aplicação
// certeza de implementação de métodos
// depender de interfaces, nao implementaçaoes
  
  export default Model;