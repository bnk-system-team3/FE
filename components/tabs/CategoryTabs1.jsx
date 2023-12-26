'use client'

import React, { useState } from 'react'
import { Tabs, Tab, Card, CardBody, CardHeader } from "@nextui-org/react";
import MeetingTableNew from '@/components/tables/MeetingTableNew.jsx';
import MeetingTable1 from '@/components/tables/MeetingTable1.jsx';
import MeetingTable2 from '@/components/tables/MeetingTable2.jsx';
import MeetingTable3 from '@/components/tables/MeetingTable3.jsx';
import MeetingTable4 from '@/components/tables/MeetingTable4.jsx';
import MeetingTable5 from '@/components/tables/MeetingTable5.jsx';

export default function CategoryTabs1() {

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
              <Card>
                <CardBody>
                  <MeetingTableNew id={1} />
                </CardBody>
              </Card>
            </Tab>
            <Tab key="2" title="프로젝트">
              <Card>
                <CardBody>
                  <MeetingTable1 id={1} />
                </CardBody>
              </Card>
            </Tab>
            <Tab key="3" title="봉사">
              <Card>
                <CardBody>
                  <MeetingTable2 id={1} />
                </CardBody>
              </Card>
            </Tab>
            <Tab key="4" title="세미나">
              <Card>
                <CardBody>
                <MeetingTable3 id={1} />
              </CardBody>
              </Card>
            </Tab>
            <Tab key="5" title="스터디">
              <Card>
                <CardBody>
                <MeetingTable4 id={1} />
              </CardBody>
              </Card>
            </Tab>
            <Tab key="6" title="취미">
              <Card>
                <CardBody>
                <MeetingTable5 id={1} />
              </CardBody>
              </Card>
            </Tab>
          </Tabs>
        ))}
      </div>
    </div>
  )
}
