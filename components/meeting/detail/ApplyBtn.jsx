'use client'

import React from 'react'
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";
import { useRouter } from 'next/navigation'


export default function ApplyBtn() {

    const { isOpen, onOpen, onClose } = useDisclosure();
    const [size, setSize] = React.useState('sm')
    const router = useRouter();

    const handleOpen = (size) => {
        setSize(size)
        onOpen();
    }

    return (
        <>
            {/* <div className="flex flex-wrap gap-3">
                {sizes.map((size) => (
                    <Button key={size} onPress={() => handleOpen(size)}>Open {size}</Button>
                ))}
            </div> */}

            <div className="sc-fnVZcZ hmqpxx">
                <button className="sc-fFSPTT eEJWPz" onClick={() =>  handleOpen(size) }>바로지원</button>
                <div className="sc-iemWCZ hKymwP">
                    <img src="/images/bookmark.png" className="sc-dIvrsQ biCrYn" />
                </div>
            </div>


            <Modal
                size={size}
                isOpen={isOpen}
                onClose={onClose}
            >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">지원 완료</ModalHeader>

                            <ModalFooter>
                                <Button color="danger" variant="light" onPress={onClose}>
                                    닫기
                                </Button>
                                <Button color="primary" onPress={() => { onClose; router.push('/two'); }} >
                                    홈으로
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    )
}
