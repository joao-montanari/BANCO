import axios from 'axios';
import cookie from 'cookie';

export default async (req, res) => {
  let accessToken = null;

  if(req.method === 'POST') {
    const {user, senha} = req.body
    

    const config = {
      headers : {
        'Accept' : 'application/json',
        'Content-Type' : 'application/json',
      }
    }

    const body = {
      username : user,
      password : senha
    }

    const { data:accessResponse } = await axios.post('http://localhost:8000/auth/jwt/create', body, config)
    accessToken = accessResponse.access
    console.log(accessToken)

    const userConfig = {
      headers : {
        'Authorization' : 'JWT ' + accessToken
      }
    }

    const { data:userData } = await axios.get('http://localhost:8000/home/cliente/', userConfig)
    console.log(userData)

    res.status(200).json({user: userData, access: accessToken})

  } else {
    res.setHeader('Allow', ['POST'])
    res.status(405).json({message: `Method ${req.method} is not allowed`})
  }
}