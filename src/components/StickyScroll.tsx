import React, { useRef, useEffect, ReactElement } from 'react';
import { countAnimateMomentInfo } from './utils/core';

interface StickyItemProps {
  children?: Array<ReactElement>;
}

const StickyItem: React.ForwardRefRenderFunction<
  HTMLDivElement,
  StickyItemProps
> = (props, ref) => {
  const { children } = props;
  const childRefs = useRef<Array<HTMLElement>>([]);
  const myRef = useRef(null);

  useEffect(() => {
    // 在 useEffect 中访问子节点的真实 DOM 元素
    const data = {
      vnodes:children!,
      sections: Array.from(childRefs.current),
      root:myRef.current,
      ids: null,
      animateMomentInfo: null,
    };

    countAnimateMomentInfo(data);

    return ()=>{
      window.onscroll = null
    }

  }, []);


  return (
    <section ref={ref}>
      <div ref={myRef}>
        {React.Children.map(children, (child: any, index) => {
          return React.cloneElement(child, {
            ref: (node: HTMLElement) => {
              childRefs.current[index] = node;
            },
          });
        })}
      </div>
    </section>
  );
};

const RefStickyItem = React.forwardRef(StickyItem);

export default RefStickyItem;
