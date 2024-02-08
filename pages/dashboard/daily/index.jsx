import DashobardLayout from '@/layouts/dashobardLayout'
import React from 'react'
import DailyViews from '@/views/dashboard/daily/daily-views'

const Daily = () => {
  return (
    <DashobardLayout pageTitle="Günlük İstatistikler">
        <DailyViews />
    </DashobardLayout>
  )
}

export default Daily