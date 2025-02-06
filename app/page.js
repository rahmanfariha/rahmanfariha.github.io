import Image from "next/image";
import Link from "next/link";
import carbonCode from '../public/carbon.svg'
import curveLine from '../public/curve_line.svg'
import hexagon from '../public/hexagon.svg'

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Image src={curveLine} alt={'background'} className="absolute right-0 bottom-0 -z-10" />
      <main className="flex row-start-2 gap-16">
        <div className="flex flex-col row-start-2 items-center sm:items-start">
          <p className="text-purple-700">Hi, my name is</p>
          <h3 className="text-7xl">Fariha Rahman.</h3>
          <p className="text-xl mt-4">Student 👩‍🎓 | Software Engineer 👩‍💻</p>
          <Link href={"https://www.github.com/rahmanfariha"} className="flex items-center gap-2 bg-black text-white px-3 py-2 mt-4">
            <Image src={'/github-mark-white.svg'} alt="github mark" width={16} height={16} />
            View Profile
          </Link>
        </div>
        <Image src={carbonCode} alt="carbon" width={700} height={700} className="rounded-lg" />
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
      </footer>
    </div>
  );
}
