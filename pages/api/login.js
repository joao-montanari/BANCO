import axios from 'axios';
import cookie from 'cookie';
import { useState } from 'react';

export default async (req, res) => {
  let cliente = {};
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

    try {
      const { data:accessResponse } = await axios.post('http://localhost:8000/auth/jwt/create', body, config)
      accessToken = accessResponse.access
      res.setHeader(
        'Set-Cookie',
        cookie.serialize(
          'Refresh',
          accessResponse.refresh,
          { httpOnly: true, secure: false, sameSite: 'strict', maxAge: 60 * 60 * 1, path: '/' }
          )
      )

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

    console.log(accessToken)

    const userConfig = {
      headers : {
        'Authorization' : 'JWT ' + accessToken
      }
    }

    const { data } = await axios.get('http://localhost:8000/auth/users/me/', userConfig)
    console.log('Usuario especifico')
    console.log(data.id)
    let idusuario = data.id


    const { data:userData } = await axios.get('http://localhost:8000/home/novocliente/', userConfig)
    
    userData.forEach(client => {
      if (client.user === idusuario){
        cliente = client;
      }
    });

    console.log(cliente)

    res.status(200).json({user: cliente, access: accessToken})

  } else {
    res.setHeader('Allow', ['POST'])
    res.status(405).json({message: `Method ${req.method} is not allowed`})
  }
}