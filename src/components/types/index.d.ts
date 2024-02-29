import React, { ReactNode, ForwardedRef, ReactNode } from 'react';

/**
 * @param id 当前激活节点id
 * @param rate 当前激活节点动画进度
 */
export type ExecuteAnimateFunc = (id: string | number, rate: number) => void;

export interface CollectData {
  vnodes: Array<ReactElement>;
  sections: Array<HTMLElement>;
  root: HTMLElement;
  animateMomentInfo: Map<
    string,
    { end: number; begin: number; callback: ExecuteAnimateFunc }
  > | null;
}
