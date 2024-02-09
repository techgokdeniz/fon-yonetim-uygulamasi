import DashobardLayout from '@/layouts/dashobardLayout'
import React from 'react'
import DailyFundsView from '@/views/dashboard/daily/funds/daily-funds-view'

const Daily = () => {
  return (
    <DashobardLayout pageTitle="Günlük İstatistikler">
        <DailyFundsView />
    </DashobardLayout>
  )
}

export default Daily