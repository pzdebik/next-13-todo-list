import Link from "next/link";
import { prisma } from "./db";

function getTodos(){
  return prisma.todo.findMany()
}

export default async function Home(){

  const  todos = await getTodos()

  return (
    <>
      <header className="flex justify-between items-center mb-4 ">
        <h1 className="text-2xl">Zadania</h1>
        <Link 
        className="border border-slate-300 text-slate-300 px-2 py-1 
        rounded hover:bg-slate-700 focus-wthin:bg-slate-700 outline-none" 
        href="/new">Dodaj zadanie</Link>
      </header>
      <ul className="pl-4">
        {todos.map(todo =>(
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </>
  )
}