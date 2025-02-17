'use client'
import { FC, PropsWithChildren, useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'

interface ModalProps extends PropsWithChildren {
  selector: string
}

const Modal: FC<ModalProps> = ({ children, selector }) => {

  const ref = useRef<any>(null)
  const [mounted, setMounted] = useState<boolean>()

  useEffect(() => {
    ref.current = document.querySelector(selector)
    setMounted(true)
  },[selector])

  return (
    <>
      {
        mounted ? createPortal(children, ref.current) : null
      }
    </>
  )}

export default Modal