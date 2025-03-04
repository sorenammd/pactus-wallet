
import { notFound, permanentRedirect } from "next/navigation";
import { Metadata } from "next";
import Script from "next/script";
import { NextResponse } from "next/server";
import Wallet from "@/scens/wallet";


const WalletPage = async (props: {
    params: Promise<{ walletId: string; }>;
}) => {
    const params = await props.params;
    const { walletId } = params;
    return <Wallet walletId={walletId} />
}


export default WalletPage;
