import React from 'react'
import { twMerge } from 'tailwind-merge';

interface Props {
    children: React.ReactNode;
    className?: String;
}

const Container = ({children, className}: Props) => {
  const newClassName= twMerge("max-w-screen-xl mx-auto px-4 py-10 lg:px-0 ",
    )
  return (
    <div className={newClassName}>{children}</div>
  )
}

export default Container