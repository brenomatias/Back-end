export default interface IConnection {
    execute(query: string, values: any): Promise<any>;
    // define o que esta conexão possui o metodo 'execute'
    // 'da match com o tipo 'pool' que tem a funçao execute'
    // espera essa funçao 'execute'
}