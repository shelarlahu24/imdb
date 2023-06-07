"use client"

import { useRouter } from 'next/navigation';
import { useState } from 'react'

export default function SearchBox() {

  const router = useRouter();
  const [search, setSearch] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!search) return
    router.push(`/search/${search}`)
  }
  return (
    <form onSubmit={handleSubmit} className='flex justify-between items-center max-w-6xl mx-auto px-2'>
      <input
        type='text'
        onChange={(e) => setSearch(e.target.value)}
        value={search}
        placeholder='Search keywords...'
        className='w-full h-14 rounded-sm placeholder-gray-500 outline-none bg-transparent flex-1'
      />
      <button disabled={!search} className=' text-amber-600 disabled:text-gray-400' type='submit'>Search</button>
    </form>
  )
}
