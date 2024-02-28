import React, { ReactNode } from "react";


interface StickyItemProps{
  height:number
  children:ReactNode|null
}

const StickyItem:React.ForwardRefRenderFunction<HTMLDivElement,StickyItemProps> = (props,ref)=>{
  const { height=500,children } = props
  return <div ref={ref} style={{height:height+'px'}}>
    {children}
  </div> 
}

const RefStickyItem = React.forwardRef(StickyItem)

export default RefStickyItem

