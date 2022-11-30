import axios from 'axios';
import cookie from 'cookie';

export default async (req, res) => {
  let accessToken = null;

  if(req.method === 'POST') {
    const {user, senha} = req.body
    const jwt = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjY5ODIwMDU0LCJqdGkiOiI4YjY4ZTVhNDYxODk0MjY0OTYwYjk4M2I5ZGRhNjllMyIsInVzZXJfaWQiOjR9.lCKmTVP9f0G2Oj-wXa1VwzNJjtIYpvrec9OIy6LB0HY"

    const config = {
      headers : {
        'Accept' : 'application/json',
        'Content-Type' : 'application/json',
        //'Authorization': `JWT ${jwt}`
      }
    }

    const body = {
      username : user,
      password : senha
    }

    const { data } = await axios.post('http://localhost:8000/auth/jwt/create', body, config)
    console.log(data)
    res.status(200).json(data)
  } else {
    res.setHeader('Allow', ['POST'])
    res.status(405).json({message: `Method ${req.method} is not allowed`})
  }
}