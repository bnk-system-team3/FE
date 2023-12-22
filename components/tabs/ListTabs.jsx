'use client'

import React from 'react'
import { Tabs, Tab, Card, CardBody, CardHeader } from "@nextui-org/react";
import MeetingTable from '../tables/MeetingTable';

export default function ListTabs() {
  const variants = [
    "underlined",
  ];
  return (
    <div>
      {variants.map((variant) => (
        <Tabs key={variant} variant={variant} aria-label="Tabs variants">
          <Tab key="1" title="작성 목록">
            <MeetingTable id={7} />
          </Tab>
          <Tab key="2" title="관심 목록">
            <MeetingTable id={8} />
          </Tab>
          <Tab key="3" title="참가 모임">
            <MeetingTable id={9} />
          </Tab>
        </Tabs>
      ))}
    </div>
  )
}
