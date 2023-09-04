"use client"

import React from 'react'

import { useState, useEffect } from 'react'
import { useSession } from 'next-auth/react'
import Profile from "@components/profile"

const MyProfile = () => {
    const handleEdit = () => {
        
    }

    const handleDelete = async() => {    
    }
  return (
      <Profile
          name="My"
          desc="Welcome to your personalized profile page"
          data={[]}
          handleEdit={handleEdit}
    handleDelete= {handleDelete}  />
  )
}

export default MyProfile