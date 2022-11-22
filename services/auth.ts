import { v4 as uuid } from 'uuid';

type SingInRequestData = {
    cpf : string;
    password : string;
}

const delay = (amount = 750) => new Promise(resolve => setTimeout(resolve, amount))

export async function singInRequest(data: SingInRequestData) {
    await delay()
    
    return{
        token : uuid(),
        user : {
            cpf : '65478912354',
            name : 'Joao Montanari',
            email : 'joao@gmail.com',
            foto_url : 'https://github.com/joao-montanari.png'
        }
    }
}