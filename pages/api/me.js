export default async (req, res) => {
    console.log(req.cookies.Refresh)

    res.status(200).json({mensagem: "Verificando coock do navegador"})
}