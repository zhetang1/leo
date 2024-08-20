import Video from "@/app/video";

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
              <Video id="D26VdCUF5Oc"/>
              <Video id="xYNPi9jXnmY"/>
              <Video id="xGBN-VAd9Lo"/>
          </div>
          <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-3 lg:text-left">
              <Video id="30VAWKaDkgk"/>
              <Video id="wlxeicX7Mi4"/>
              <Video id="w02ni2itqFM"/>
          </div>
          <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-3 lg:text-left">
              <Video id="kiGzix-Mcis"/>
              <Video id="Ih2ewxH1B_g"/>
              <Video id="KqTmmOemz3A"/>
          </div>
          <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-3 lg:text-left">
              <Video id="Ryw5QiJBGjg"/>
              <Video id="B5U4GeqwYT0"/>
              <Video id="UwbaszIrYhs"/>
          </div>
          <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-3 lg:text-left">
              <Video id="ygmz06CooZ8"/>
              <Video id="OYMzoEMLj0Q"/>
              <Video id="r4GhNhzYOD4"/>
          </div>
          <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-3 lg:text-left">
              <Video id="wNAMWpvJNu8"/>
              <Video id="shnEbKnOevo"/>
              <Video id="qxxItz3R80Y"/>
          </div>

          <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-3 lg:text-left">
              <Video id="6jDPBCSsaFE"/>
              <Video id="38Lu5WgrhKg"/>
              <Video id="bJDvbPsezac"/>
          </div>
          <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-3 lg:text-left">
              <Video id="WS_O5vZRqVw"/>
              <Video id="0Y2tW8_cUyI"/>
              <Video id="_9b8VyNFWI8"/>
          </div>
      </main>
  );
}
