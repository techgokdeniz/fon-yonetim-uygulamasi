import DashobardLayout from '@/layouts/dashobardLayout'
import React from 'react'
import FundsView from '@/views/dashboard/funds/funds-view'

const FundsPage = () => {
  return (
    <DashobardLayout pageTitle='Tüm Fonlar'>
      <FundsView  />
    </DashobardLayout>
  )
}

export default FundsPage