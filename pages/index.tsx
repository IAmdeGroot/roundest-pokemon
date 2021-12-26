import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
   <div className="h-screen w-screen items-center justify-center flex flex-col">
     <div className="text-2xl text-center">Which Pokémon is Rounder?</div>
     <div className="border mt-3 items-center rounded p-8 flex justify-between max-w-2xl">
       <div className="w-16 h-16 bg-red-200"></div>
       <div className="px-8">Vs</div>
       <div className="w-16 h-16 bg-red-200"></div>
     </div>
   </div>
  )
}

export default Home
