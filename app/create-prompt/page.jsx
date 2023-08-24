"use client"

import React from 'react'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Form from '@components/Form'


const CreatePrompt = () => {

  const [submitting, setSubmitting] = useState(false)
  const [post, setPost] = useState({
    prompt: '',
    tag: '',
  })

  return (
    <Form
      type="Create"
      post={post}
      setPost={setPost}
      submitting={submitting} 
      handleset = {setSubmitting}
    
    />
  )
}

export default CreatePrompt