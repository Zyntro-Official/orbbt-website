/* 
    Brand Logo for footer and navbar
*/

// Imports
import Image from "next/image"
import Link from "next/link"

const BrandLogo = () => {
  return (
    <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2.5">
            <Image
              src="/orbbt-logo.png"
              alt="orbbt logo"
              width={32}
              height={32}
              priority
              className="h-8 w-8 object-contain"
            />
            <span className="grid gap-0.5 leading-none">
              <span className="text-[18px] font-extrabold tracking-tight text-foreground">
                Orbbt
              </span>
              <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                by zyntro
              </span>
            </span>
          </Link>
        </div>
  )
}

export default BrandLogo
