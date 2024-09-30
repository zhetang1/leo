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
              <Video id="hgeLByGAGQ8"/>
              <Video id="KCG4J3VWjpA"/>
              <Video id="QN9DfyeYguQ"/>
          </div>
          <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-3 lg:text-left">
              <Video id="9Dwahk0URY0"/>
              <Video id="5Y7oC9mY6K0"/>
              <Video id="OgvYA5FQDkA"/>
          </div>
          <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-3 lg:text-left">
              <Video id="jaUwdJcFaWA"/>
              <Video id="oixcPHrj9J0"/>
              <Video id="ILPvjoGm0Q8"/>
          </div>
          <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-3 lg:text-left">
              <Video id="eKXqoUXs2H4"/>
              <Video id="zQbWDbJ2a48"/>
              <Video id="X6Eaqo-Rc3M"/>
          </div>
          <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-3 lg:text-left">
              <Video id="WPyMd5f8f5Q"/>
              <Video id="FnlC_W94mzA"/>
              <Video id="wjL2pvqifs8"/>
          </div>
          <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-3 lg:text-left">
              <Video id="YUNJPldp144"/>
              <Video id="JQGj9wpxBTM"/>
              <Video id="DE0Xk4FeJ98"/>
          </div>
          <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-3 lg:text-left">
              <Video id="1lNLLSkgW7Y"/>
              <Video id="czIyvYYlkSw"/>
              <Video id="ghXTyT5fy4U"/>
          </div>

          <Link href="1">More</Link>
      </main>
  );
}
