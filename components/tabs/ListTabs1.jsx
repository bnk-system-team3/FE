'use client'

import React from 'react'
import { Tabs, Tab, Card, CardBody, CardHeader } from "@nextui-org/react";
import MeetingTable9 from '../tables/MeetingTable9.jsx';
import MeetingTable7 from '../tables/MeetingTable7.jsx';
import MeetingTable8 from '../tables/MeetingTable8.jsx';

export default function ListTabs1() {
  const [selected, setSelected] = React.useState("1");

  const variants = [
    "underlined",
  ];
  return (
    <div>
      {variants.map((variant) => (
        <Tabs key={variant} variant={variant} aria-label="Tabs variants" selectedKey={selected}
        onSelectionChange={setSelected}>
          <Tab key="1" title="작성 목록">
            <Card>
              <CardBody>
                <MeetingTable9 id={7} />
              </CardBody>
            </Card>
          </Tab>
          <Tab key="2" title="관심 목록">
            <Card>
              <CardBody>
                <MeetingTable7 id={1} />
              </CardBody>
            </Card>
          </Tab>
          <Tab key="3" title="참가 모임">
            <Card>
              <CardBody>
                <MeetingTable8 id={9} />
              </CardBody>
            </Card>
          </Tab>
        </Tabs>
      ))}
    </div>
  )
}
