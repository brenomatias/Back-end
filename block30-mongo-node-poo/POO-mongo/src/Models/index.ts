interface Model<T> {
    create(obj: T): Promise<T>,
    read(): Promise<T[]>,
    readOne(id_: string): Promise<T | null>,
    update(id: string, data: T): Promise<T | null>
  }
  
  export default Model;