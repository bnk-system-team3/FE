'use client'

import React from 'react'
import {Tabs, Tab} from "@nextui-org/react"; 

export default function CategoryTabs() {
  const variants = [
    "solid",
    "underlined",
    "bordered",
    "light",
  ];
  return (
    <div>
      <div className="flex flex-wrap gap-4">
        {variants.map((variant) => (
          <Tabs key={variant} variant={variant} aria-label="Tabs variants">
            <Tab key="photos" title="Photos" />
            <Tab key="music" title="Music" />
            <Tab key="videos" title="Videos" />
          </Tabs>
        ))}
      </div>
    </div>
  )
}
