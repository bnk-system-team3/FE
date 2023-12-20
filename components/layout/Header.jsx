'use client'

import React from 'react'
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu, Avatar } from "@nextui-org/react";
import NewMeeting from '@/components/NewMeeting/NewMeeting.jsx'
import Link from 'next/link';

export default function Header() {
  return (
    <div>
      <Navbar>
        <NavbarBrand>
          <Link href='/'>
            <img src="/images/bnklub.png" alt="logo" className="w-30 h-10" />
          </Link>
        </NavbarBrand>

        <NavbarContent className="hidden sm:flex gap-4" justify="end">

          <NavbarItem>
            <Link color="foreground" href="#">

            </Link>
          </NavbarItem>
        </NavbarContent>

        <NavbarContent as="div" justify="end">
          {/* <Link color="foreground" href="#">
            새 글 쓰기 dasd
          </Link> */}

          <NewMeeting />
          
          <Dropdown placement="bottom-end">
            <DropdownTrigger>
              <Avatar
                isBordered
                as="button"
                className="transition-transform"
                color="secondary"
                name="Jason Hughes"
                size="sm"
                src="/images/bnk.png"
              />
            </DropdownTrigger>
            <DropdownMenu aria-label="Profile Actions" variant="flat">
              <DropdownItem key="profile" className="h-14 gap-2">
                <p className="font-semibold">GeonWoo@bnksystem.co.kr</p>
                <p className="font-semibold">님 환영합니다 !</p>
              </DropdownItem>
              <DropdownItem key="settings">
                <Link href="/profile">내 프로필</Link>
                </DropdownItem>
              <DropdownItem key="team_settings">
                <Link href="/myList">모임 목록</Link>
              </DropdownItem>
              <DropdownItem key="logout" color="danger">로그아웃</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavbarContent>
      </Navbar>
    </div>
  )
}
