'use client'

import React from 'react'
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu, Avatar} from "@nextui-org/react";

export default function Header() {
  return (
    <div>
      <Navbar>
      <NavbarBrand>
        <Link href='/'>
        <img src="/images/bnk.png" alt="logo" className="w-10 h-10" />
        </Link>
      </NavbarBrand>

      <NavbarContent className="hidden sm:flex gap-4" justify="end">
        
        <NavbarItem>
          <Link color="foreground" href="#">
            
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent as="div" justify="end">
      <Link color="foreground" href="#">
            새 글 쓰기
          </Link>
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
              <p className="font-semibold">Signed in as</p>
              <p className="font-semibold">abc@bnksystem.com</p>
            </DropdownItem>
            <DropdownItem key="settings">내 프로필</DropdownItem>
            <DropdownItem key="team_settings">모임 목록</DropdownItem>
            <DropdownItem key="analytics">설정</DropdownItem>
            <DropdownItem key="logout" color="danger">로그아웃</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>
    </Navbar>
    </div>
  )
}
