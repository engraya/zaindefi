import React from 'react'

function PagesWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col w-full h-full gap-4 pt-16">
      {children}
    </div>
  )
}

export default PagesWrapper