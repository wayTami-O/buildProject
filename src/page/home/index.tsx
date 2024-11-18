import Image from "next/image";
import Link from "next/link";

export function HomePage() {
  return (
    <div className="">
      <Image
        src={'/logo.svg'}
        alt="Logo cat ecl"
        width={512}
        height={512}
        className=" w-64 h-64"
      />
      <Link href="/secondPage">wwwwwwwww</Link>
    </div>
  )
}
