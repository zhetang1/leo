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
              <Video id="nswyp48EScY"/>
              <Video id="hUyoah60u2w"/>
              <Video id="kzxUFQohOn0"/>
          </div>
          <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-3 lg:text-left">
              <Video id="1aeM_hnHdAk"/>
              <Video id="QccQTpafKC0"/>
              <Video id="6MUoobS5xgA"/>
          </div>
          <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-3 lg:text-left">
              <Video id="E1ShzxgNja0"/>
              <Video id="ZwTog9_67TU"/>
              <Video id="K-CPV09jQc4"/>
          </div>
          <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-3 lg:text-left">
              <Video id="ib85cLAeRpA"/>
              <Video id="VKm-RHUysMA"/>
              <Video id="Vi9r5iLH24U"/>
          </div>
          <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-3 lg:text-left">
              <Video id="NIjKGHnyhdM"/>
              <Video id="uwkUtxfdLNk"/>
              <Video id="D6PblaDXV1w"/>
          </div>
          <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-3 lg:text-left">
              <Video id="ffqKN0evIUs"/>
              <Video id="_AWlo-ikVBI"/>
              <Video id="1mVrXYB_mfo"/>
          </div>
          <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-3 lg:text-left">
              <Video id="x8XgIzrrJjo"/>
              <Video id="g1PfFEhjXlQ"/>
              <Video id="MQktKpTXwMs"/>
          </div>
          <Link href="1">More</Link>
      </main>
  );
}
