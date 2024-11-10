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
              <Video id="https://youtu.be/TaRUISj49aM"/>
              <Video id="https://youtu.be/zMqxJN3WIuM"/>
              <Video id="https://youtu.be/XlruZ8BIJ-I"/>
          </div>
          <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-3 lg:text-left">
              <Video id="https://youtu.be/YGd6SKCFqxk"/>
              <Video id="https://youtu.be/KT1VsaY8QBk"/>
              <Video id="xGBN-https://youtu.be/LtQMEHp1QZM"/>
          </div>

          <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-3 lg:text-left">
              <Video id="https://youtu.be/z8ql2JZAxp8"/>
              <Video id="https://youtu.be/ByXMJtX7cas"/>
              <Video id="https://youtu.be/ClrtURIVVCU"/>
          </div>
          <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-3 lg:text-left">
              <Video id="https://youtu.be/7_zHyGCtQQY"/>
          </div>
          {/*<Link href="1">More</Link>*/}
      </main>
  );
}
