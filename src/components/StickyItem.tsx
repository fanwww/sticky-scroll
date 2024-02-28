import React, { ReactNode } from 'react';
import { getHeight } from './utils/utils';
import { ExecuteAnimateFunc } from './types/index';

interface StickyItemProps {
  height?: number | string;
  animate: ExecuteAnimateFunc;
  children?: ReactNode | null;
}

const StickyItem: React.ForwardRefRenderFunction<
  HTMLDivElement,
  StickyItemProps
> = (props, ref) => {
  const { height = '200vh', children } = props;

  const h = getHeight(height);

  return (
    <div ref={ref} style={{ height: h, position: 'sticky', top: 0 }}>
      {children}
    </div>
  );
};

const RefStickyItem = React.forwardRef(StickyItem);

export default RefStickyItem;
