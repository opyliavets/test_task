import React from 'react'
import { useDob } from '../DobContext/DobContext'
import { useUser } from '../UserContext/UserContext'

export default function DateOfBirth() {

  const checked = useDob()
  const {id} = useUser()
  
  if(!checked.show) return null

  return (
      <div className="DateOfBirth">
        <h1>
            {id}
        </h1>
      </div>
  );
}