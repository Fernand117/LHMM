import { useEffect, useRef } from 'react'
import type { ReactNode } from 'react'

export default function Dialog({ children, onClose, className = '', labelledBy }: { children: ReactNode; onClose: () => void; className?: string; labelledBy: string }) {
  const ref = useRef<HTMLDialogElement>(null)
  const onCloseRef = useRef(onClose)
  onCloseRef.current = onClose
  useEffect(() => {
    const element = ref.current!
    const previousOverflow = document.body.style.overflow
    const previousFocus = document.activeElement as HTMLElement | null
    element.showModal()
    document.body.style.overflow = 'hidden'
    return () => {
      element.close()
      document.body.style.overflow = previousOverflow
      if (previousFocus?.isConnected) previousFocus.focus({ preventScroll: true })
    }
  }, [])
  return <dialog ref={ref} className={`dialog ${className}`} aria-labelledby={labelledBy} onCancel={(event) => { event.preventDefault(); onCloseRef.current() }} onClick={(event) => { if (event.target === event.currentTarget) { const bounds = event.currentTarget.getBoundingClientRect(); if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) onCloseRef.current() } }}>{children}</dialog>
}
