'use client'

import React from 'react'
import { Tabs, Tab, Card, CardBody, CardHeader } from "@nextui-org/react";
import MeetingTable from '@/components/tables/MeetingTable.jsx';

export default function CategoryTabs() {
  const variants = [
    "light",
  ];
  return (
    <div>
      <div className="flex flex-wrap gap-4">
        {variants.map((variant) => (
          <Tabs key={variant} variant={variant} aria-label="Tabs variants">
            <Tab key="1" title="전체">
              
                {/* <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '50px' }}>
                    {Array.from({ length: 10 }, (_, index) => (
                      <MeetingTable key={index} />
                    ))}
                  </div> */}
                  <MeetingTable />
              
            </Tab>
            <Tab key="2" title="프로젝트" />
            <Tab key="3" title="봉사" />
            <Tab key="4" title="세미나" />
            <Tab key="5" title="스터디" />
            <Tab key="5" title="취미" />
          </Tabs>
        ))}
      </div>
    </div>
  )
}
