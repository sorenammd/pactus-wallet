'use client'
import Image from "next/image";
import { useTheme } from "next-themes";
import { MagicCard } from "@/components/magicui/magic-card";
import Link from "next/link";

export default function AddWallet() {
    const { theme } = useTheme();
    return (
    <div className="mt-[5rem] md:mt-[10rem] container mx-auto px-4">
      <div className="text-center justify-self-center w-full">
        <div className="block justify-self-center">
            <Image src="/images/wallet.svg" alt="Wallet" priority width={248} height={248}/>
        </div>
        <div className="block">
            <h1 className="text-4xl md:text-5xl font-bold mt-3">Add Wallet</h1>
            <p className="mt-3">Easily create a new wallet or import an existing one to manage your digital assets securely.</p>
        </div>
        <div className="mt-[2rem]">
            <div
            className={
                "grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8"
            }
            >
                <Link href={"/wizard/paper"}>
                    <MagicCard
                        className="cursor-pointer flex-col whitespace-nowrap text-4xl p-5"
                        gradientColor={theme === "dark" ? "#323232" : "#D9D9D955"}
                    >
                        <div className="flex">
                            <div className="content-center"><Image src="/icons/wallet-add.svg" alt="Wallet Add" priority width={60} height={60}/></div>
                            <div className="ml-5">
                                <p className="md:text-2xl text-xl font-bold text-left">New Wallet</p>
                                <p className="md:text-lg text-sm mt-2 text-left whitespace-break-spaces">
                                    Create a brand-new wallet and start your journey with Pactus securely.
                                </p>
                            </div>
                        </div>
                    </MagicCard>
                </Link>
                <Link href={"/wizard/seed"}>
                    <MagicCard
                        className="cursor-pointer flex-col whitespace-nowrap text-4xl p-5"
                        gradientColor={theme === "dark" ? "#323232" : "#D9D9D955"}
                    >
                        <div className="flex">
                            <div className="content-center"><Image src="/icons/.svg" alt="Wallet Add" priority width={60} height={60}/></div>
                            <div className="ml-5">
                                <p className="md:text-2xl text-xl font-bold text-left">New Wallet</p>
                                <p className="md:text-lg text-sm mt-2 text-left whitespace-break-spaces">
                                    Create a brand-new wallet and start your journey with Pactus securely.
                                </p>
                            </div>
                        </div>
                    </MagicCard>
                </Link>
            </div>
        </div>
      </div>
    </div>
    )
}
