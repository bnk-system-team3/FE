'use client'

import React, { useState } from 'react'
import { Tabs, Tab, Card, CardBody, CardHeader } from "@nextui-org/react";
import MeetingTable from '@/components/tables/MeetingTable.jsx';

export default function CategoryTabs() {

  const [active, setActive] = useState(0);

  const variants = [
    "light",
  ];

  return (
    <div>
      <div >

        {variants.map((variant) => (
          <Tabs key={variant} variant={variant} aria-label="Tabs variants">
            <Tab key="1" title="전체">
              {/* <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '50px' }}>
                    {Array.from({ length: 10 }, (_, index) => (
                      <MeetingTable key={index} />
                    ))}
                  </div> */}
              <Card>
                <CardBody>
                  <MeetingTable id={1} />
                </CardBody>
              </Card>
            </Tab>
            <Tab key="2" title="프로젝트">
              <MeetingTable id={2} />
            </Tab>
            <Tab key="3" title="봉사">
              <MeetingTable id={3} />
            </Tab>
            <Tab key="4" title="세미나">
              <MeetingTable id={4} />
            </Tab>
            <Tab key="5" title="스터디">
              <MeetingTable id={5} />
            </Tab>
            <Tab key="6" title="취미">
              <MeetingTable id={6} />
            </Tab>
          </Tabs>
        ))}
      </div>
    </div>
  )
}
