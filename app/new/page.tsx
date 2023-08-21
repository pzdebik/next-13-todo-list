import Link from "next/link";

export default function Page(){
    return <>
    <header className="flex justify-between items-center mb-4 ">
        <h1 className="text-3xl">Dodaj zadanie</h1>
      </header>
      <form className="flex gap-2 flex-col">
        <input type="text" 
        name="title" 
        className="text-3xl border border-slate-300 bg-transparent outline-none
        rounded px-2 py-1 focus-wthin:bg-slate-100"></input>
        <div className="flex gap-1 justify-end">
            <Link href=".." className="text-3xl border border-slate-300 text-slate-300 px-2 py-1 
        rounded hover:bg-slate-700 focus-wthin:bg-slate-700 outline-none">Wyjdź</Link>
            <button type="submit" className="text-3xl border border-slate-300 text-slate-300 px-2 py-1 
        rounded hover:bg-slate-700 focus-wthin:bg-slate-700 outline-none">Utwórz</button>
        </div>
      </form>
    </>
}