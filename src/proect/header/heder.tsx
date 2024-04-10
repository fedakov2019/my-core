import Image from "next/image";
import logoSrc from './logo.gif';
import avatarSrc from './avatar.png'
import { Button } from "@/schared/ui/button";
export function Header() {
  return  <header className="flex h-24 items-center px-8 bg-white shadow-lg">
    <Image src={logoSrc} alt="logo" width={53}></Image>
  <div className="w-px h-8 bg-slate-200 mx-6"/>
  <Button className="w-44 bg-teal-600 hover:bg-teal-500 transition-colors text-white rounded-lg py-2 px-5 text-2xl leading-tight">Начать</Button>
  <Button className="ml-auto bg-white flex items-center gap-2 text-start text-teal-600 hover:bg-white hover:text-teal-500 transition-colors">
    <Image src={avatarSrc} 
    width={48}
    height={48}
    alt="avatar"
    unoptimized/>
    <div>
    <div className="text-lg leading-tight">Alekseifap</div>
    <div className="text-slate-400 text-xs leading-tight">Рейтинг: 1230</div>
  </div>
  </Button>
  </header>
}