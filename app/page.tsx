import Video from "@/app/video";
import Link from "next/link";

export default function Home() {
  return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
          <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
              <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
                  This is the homepage of&nbsp;
                  <code className="font-mono font-bold">Natalie Tang</code>
              </p>
          </div>
          <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-3 lg:text-left">
              <Video id="25kuLqbKAoE"/>
              <Video id="zM5vmeTpglY"/>
              <Video id="g5IgT8LPbq8"/>
          </div>
          <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-3 lg:text-left">
              <Video id="D26VdCUF5Oc"/>
              <Video id="xYNPi9jXnmY"/>
              <Video id="xGBN-VAd9Lo"/>
          </div>
          <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-3 lg:text-left">
              <Video id="rwwlOYuaY_A"/>
              <Video id="27YK3FhEnzk"/>
              <Video id="FKUc_Xc16VA"/>
          </div>
          <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-3 lg:text-left">
              <Video id="spLJR7ZAjr4"/>
              <Video id="7szUJjjECmE"/>
              <Video id="1z6XYYNweDs"/>
          </div>
          <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-3 lg:text-left">
              <Video id="ZwlFjj9ouC4"/>
              <Video id="i4tpQB3iAl4"/>
              <Video id="VrheEEPGk-c"/>
          </div>
          <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-3 lg:text-left">
              <Video id="KrWVkwuv6Bw"/>
              <Video id="mTsKs9ANpcA"/>
              <Video id="6S1stB_loEs"/>
          </div>
          <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-3 lg:text-left">
              <Video id="Z_MtysBGmPs"/>
              <Video id="SRlull_g64c"/>
              <Video id="dAe5vsegFB4"/>
          </div>
          <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-3 lg:text-left">
              <Video id="GF5cxpfXC5s"/>
              <Video id="GFWZYzyWlXQ"/>
              <Video id="zE2LZIYcK48"/>
          </div>
          <Link href="1">More</Link>
      </main>
  );
}
