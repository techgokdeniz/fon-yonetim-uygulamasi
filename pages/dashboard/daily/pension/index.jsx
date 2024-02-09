import DashobardLayout from '@/layouts/dashobardLayout'
import React from 'react'
import DailyPensionViews from '@/views/dashboard/daily/pension/daily-pension-wiew'

const Daily = () => {
  return (
    <DashobardLayout pageTitle="Emeklilik Fonları Günlük İstatistikler">
        <DailyPensionViews/>
    </DashobardLayout>
  )
}

export default Daily