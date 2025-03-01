'use client'
import Image from "next/image";
import Link from "next/link";
import { lazy, Suspense } from "react";
import { motion } from "framer-motion";

const LazySpline = lazy(() => import("@splinetool/react-spline"));

export default function Home() {
  return (
    <div className="mt-[5rem] md:mt-[10rem] container mx-auto px-4">
      <div className="grid md:grid-cols-2 grid-cols-1">
        <div>
          <h1 className="text-white font-bold md:text-5xl text-4xl">Hello!</h1>
          <div className="block">
            <span className="text-white font-bold md:text-5xl text-4xl">Welocme to</span>
            <span className="font-bold md:text-5xl text-4xl bg-gradient-to-l to-[#0FEF9E] from-[#064560] inline-block text-transparent bg-clip-text ml-3">
              Pactus Wallet
            </span>
          </div>
          <div className="block mt-[5rem]">
            <div className="flex">
              <div className="w-[40px] h-[40px] relative"><Image src="/icons/thunderbolt.svg" alt="Thunderbolt" priority fill/></div>
              <div className="ml-[2rem] mt-1">
                <p className="text-white text-xl font-bold">Lightning-fast Transactions</p>
                <p className="text-white mt-3 text-lg">
                  Thanks to the unique architecture of the Pactus blockchain, your transactions are processed and confirmed in no time.
                </p>
              </div>
            </div>
            <div className="flex mt-[3rem]">
            <div className="w-[55px] h-[39px] relative"><Image src="/icons/secure.svg" alt="Secure" priority fill/></div>
              <div className="ml-[2rem] mt-1">
                <p className="text-white text-xl font-bold">Unmatched Security</p>
                <p className="text-white mt-3 text-lg">
                  Pactus Wallet securely stores your private keys on your device. All transactions are executed through decentralized protocols, ensuring your assets never fall into the hands of centralized exchanges.
                </p>
              </div>
            </div>
            <div className="mt-[3rem] block">
              <Link href="/add-wallet" className="block text-center bg-gradient-to-r from-[#7E46EF] to-[#40A9FF] hover:opacity-90 text-white font-bold py-2 px-4 rounded">Get Started</Link>
            </div>
          </div>
        </div>
        <div>
        <div className="relative lg:h-full lg:col-span-1 md:block hidden">
            <Suspense>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 1 }}
                >
                  <LazySpline
                    scene="https://prod.spline.design/mZBrYNcnoESGlTUG/scene.splinecode"
                    className="absolute inset-0 w-full h-full origin-top-left flex items-center justify-center"
                  />
                  <div className="absolute bottom-0 right-0 bg-[#232323] w-[130px] h-[26px]" />
                </motion.div>
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
}
