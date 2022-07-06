import React from 'react'

const Button = () => {
  return (
	<a class="relative inline-block text-sm font-medium text-white group focus:outline-none focus:ring " href="/download">
	<span class="absolute inset-0 border border-stone-600 group-active:border-stone-500"></span>
	<span class="tracking-widest text-3xl block px-12 py-4 transition-transform bg-stone-600 border border-stone-600 active:border-stone-500 active:bg-stone-500 group-hover:-translate-x-1 group-hover:-translate-y-1">
	  Let's start
	</span>
 </a>

  )
}

export default Button