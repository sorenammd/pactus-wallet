import Wallet from "@/scens/wallet";


const WalletPage = async (props: {
    params: Promise<{ walletId: string; }>;
}) => {
    const params = await props.params;
    const { walletId } = params;
    console.log("🚀 ~ walletId:", walletId)
    return <Wallet walletId={walletId} />
}


export default WalletPage;
