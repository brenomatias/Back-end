interface Model<T> { // generics, vai servir para qualquer objeto
    create(obj: T): Promise<T>,
    read(): Promise<T[]>,
    readOne(id_: string): Promise<T | null>,
    update(id: string, data: T): Promise<T | null>
  }

//  '<T>' -> garante que a interface deve receber um tipo(nao importa caso pq e generics)
// este tipo vai ser substituido nas requisições
// isso garante a assinatura dos models
  
  export default Model;