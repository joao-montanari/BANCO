import axios from 'axios';

export default async (req, res) => {
    let cliente = {};
    //const accessToken = localStorage.getItem('Access');
    const accessToken = req.cookies.Access;

    if(req.method === 'GET') {
        const userConfig = {
            headers : {
              'Authorization' : 'JWT ' + accessToken
            }
        }
    
        const { data } = await axios.get('https://projeto-api-backend.azurewebsites.net/auth/users/me/', userConfig)
        const usuario = data;
        const idusuario = data.id;
    
        const { data:userData } = await axios.get('https://projeto-api-backend.azurewebsites.net/home/novocliente/', userConfig)
    
        userData.forEach(client => {
            if (client.user === idusuario){
              cliente = client;
            }
        });
    
        res.status(200).json({cliente: cliente, usuario: usuario})
    } else {
        res.setHeader('Allow', ['POST'])
        res.status(405).json({message: `Method ${req.method} is not allowed`})
    }
}