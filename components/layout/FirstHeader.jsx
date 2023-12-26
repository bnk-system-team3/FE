'use client'

import React from 'react'
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu, Avatar, Button } from "@nextui-org/react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure, Checkbox, Input, Link} from "@nextui-org/react";
import NewMeeting from '@/components/NewMeeting/NewMeeting.jsx'
import Link from 'next/link';

export default function FirstHeader() {
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

          
          <Button as={Link} color="primary" href="#" variant="flat">
            로그인
          </Button>
          <Button as={Link} color="primary" href="#" variant="flat">
            회원가입
          </Button>
        </NavbarContent>
      </Navbar>
    </div>
  )
}
