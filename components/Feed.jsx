'use client'

import {useState, useEffect} from 'react'

import PromptCard from './PromptCard'

const PromptCardList =({data, handleTagClick}) =>{
  return (
    <div className='mt-16 prompt_layout'>
      {
        data.map((prompt, index)=>(
          <PromptCard
            key={prompt._id}
            prompt={prompt}
            handleTagClick={handleTagClick}
          />
        ))
      }
    </div>
  )
}

const Feed = () => {
  const [seacrhText, setSeacrhText] = useState('')
  const [prompts, setPrompts] = useState([])

  const handleSearchChange = (e) =>{
    e.prevent
  }
  const fetchPrompts = async () => {
    const response = await fetch('/api/prompt');
    const data = await response.json();

    setPrompts(data)
  }

  useEffect(()=>{
    fetchPrompts()
  },[])
  return (
    <section className='feed'>
      <form className='relative w-full flex-center'>
        <input
          type='text'
          placeholder='Search for prompts'
          value={seacrhText}
          onChange={handleSearchChange}
          required
          className='search_input peer'
        />
      </form>
      <PromptCardList 
        data={prompts}
        handleTagClick={()=>{}}
      />

    </section>
  )
}

export default Feed