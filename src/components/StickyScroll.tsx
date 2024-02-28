import React, { ReactNode } from "react";


interface StickyItemProps{
  children:ReactNode|null
}

const StickyItem:React.ForwardRefRenderFunction<HTMLDivElement,StickyItemProps> = (props,ref)=>{
  const { children } = props
  return <div ref={ref}>
    {children}
  </div> 
}

const RefStickyItem = React.forwardRef(StickyItem)

export default RefStickyItem