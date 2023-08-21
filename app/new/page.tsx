import Link from "next/link";
import { prisma } from "../db";
import { redirect } from "next/navigation";

async function createTodo(data: FormData) {
    "use server"

    const title = data.get("title")?.valueOf()
    if(typeof title !== "string" || title.length === 0){
        throw new Error("Invalid title")
    }

    await prisma.todo.create({data: {title, complete: false}})
    redirect("/")
}

export default function Page(){
    return <>
    <header className="flex justify-between items-center mb-4 ">
        <h1 className="text-3xl">Dodaj zadanie</h1>
      </header>
      <form action={createTodo} className="flex gap-2 flex-col">
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