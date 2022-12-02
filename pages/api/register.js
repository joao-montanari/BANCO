import axios from 'axios';

export default async (req, res) => {
  let accessToken = null;

  if(req.method === 'POST') {
    const {email, username, senha} = req.body
    

    const config = {
      headers : {
        'Accept' : 'application/json',
        'Content-Type' : 'application/json',
      }
    }

    const body = {
      username : username,
      password : senha
    }

    try {
      await axios.post('http://localhost:8000/auth/users', body, config)
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