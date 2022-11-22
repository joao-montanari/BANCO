import Head from 'next/head';

import UserInfos from "../components/Dashboard/UserInfos";

export default function Deshboard(){
    return(
        <>
            <Head>
                <title>BooBank | Deshboard</title>
            </Head>
            <UserInfos/>
        </>
    )
}