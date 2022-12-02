import axios from 'axios';

export default async (req, res) => {
  let accessToken = null;

  if(req.method === 'POST') {
    const { email, username, password, nome_completo, data_nascimento, empregado, sexo } = req.body

    try {
      const config = {
        headers : {
          'Accept' : 'application/json',
          'Content-Type' : 'application/json',
        }
      }
  
      const bodyUser = {
        "email" : email,
        "username" : username,
        "password" : password
      }
  
      const response = await axios.post('http://projeto-api-backend.azurewebsites.net/auth/users/', bodyUser, config)
  
      const bodyToken = {
        "username" : username,
        "password" : password
      }
  
      const { data:accessResponse } = await axios.post('http://projeto-api-backend.azurewebsites.net/auth/jwt/create/', bodyToken, config)
      accessToken = accessResponse.access
  
      const userConfig = {
        ...config,
        headers : {
          'Authorization' : 'JWT ' + accessToken
        }
      }
  
      const { data } = await axios.get('http://projeto-api-backend.azurewebsites.net/auth/users/me/', userConfig)
  
      const bodyCliente = {
        "nome_completo" : nome_completo,
        "data_nacimento": data_nascimento,
        "empregado": empregado,
        "sexo": sexo,
        "user": data.id
      }
  
      const {data: clientData} = await axios.post('http://projeto-api-backend.azurewebsites.net/home/novocliente/', bodyCliente, userConfig)
      console.log(clientData)

      

    } catch (error) {
      if (error.reponse) {
        console.error(error.response.data);
        console.error(error.response.status);
        console.error(error.response.headers);
        return res.status(401).json({message: error.response.data.detail})
      } else if (error.request) {
        console.error(error.request);
      } else {
        console.error('Error', error.message);
      }
      console.error(error.config);
      return res.status(500).json({message : 'Algo deu errado'})
    }

    res.status(200).json({message : 'Usuario foi criado'})

  } else {
    res.setHeader('Allow', ['POST'])
    res.status(405).json({message: `Method ${req.method} is not allowed`})
  }
}