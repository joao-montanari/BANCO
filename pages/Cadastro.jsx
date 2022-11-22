import Head from "next/head"

import LayoutForm from "../components/Cadastro/LayoutForm"

export default function Cadastro(){
    return(
        <>
            <Head>
                <title>BooBank | Cadastro</title>
            </Head>
            <LayoutForm/>
        </>
    )
}