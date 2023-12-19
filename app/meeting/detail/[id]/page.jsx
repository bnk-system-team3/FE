import React from 'react'
import DetailForm from '@/components/meeting/detail/DetailForm.jsx'

export default function page(props) {
  
  return (
    <div>
      <DetailForm id={props.params.id}/>
    </div>
  )
}
