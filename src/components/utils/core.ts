import type { CollectData } from '../types/index';
import { uuid } from './utils';

/**
 * @param data CollectData
 */
export function countAnimateMomentInfo(data: CollectData) {
  const collects = new Map();
  data.sections.forEach((node, index) => {
    collects.set(uuid(), {
      ...blockAnimateStart(node, data),
      callback: data.vnodes[index]?.props?.animate || [],
    });
  });
  // 计算起点终点结束后在设置sticky样式
  setTimeout(()=>{
    data.sections.forEach(node=>{
      node.style.position = 'sticky'
    })
  })

  data.animateMomentInfo = collects;
  window.onscroll = (e) => {
    let top = document.documentElement.scrollTop;
    activateAnimate(countScrollRatio(top,data.root), data);
  };
}

/**
 * 根据section的高度，计算它在页面的位置，得出一个section的动画在什么滚动比例触发
 * @param node 节点
 * @param root 根节点
 * @returns {{end: number, begin: number}} 开始滚动比例，结束滚动比例
 */
export function blockAnimateStart(node: HTMLElement, data: CollectData) {
  console.log('node:',node.offsetTop);
  
  let begin = countScrollRatio(
    Math.max(node.offsetTop - window.innerHeight, 0),
    data.root
  ); // 节点头部距离页面顶部距离，占页面比例，例如xx节点头部在页面20%高度位置
  let end = countScrollRatio(
    Math.max(node.offsetTop + node.clientHeight - window.innerHeight, 0),
    data.root
  ); // 节点底部距离页面顶部距离
  return { begin, end };
}

/**
 * 计算当前位置距离顶部高度占整个页面的百分比,即当前滚动进度/比例
 * @param scrollTop 当前位置
 * @param root 根节点
 * @returns {number} 滚动进度0.0000-1.0000
 */
export function countScrollRatio(scrollTop: number, root: any) {
  return Number(
    (
      scrollTop /
      root?.clientHeight
    ).toFixed(4)
  );
}

/**
 *
 * @param rate 当前滚动进度
 * @param executeAnimate:执行方法
 */
export function activateAnimate(rate: number, data: CollectData) {
  if(rate>1) return
  for (let key of data.animateMomentInfo!.keys()) {
    let { begin, end, callback } = data.animateMomentInfo!.get(key)!;
    if (rate > begin && rate < end) {
      callback(key, Number(((rate - begin) / (end - begin)).toFixed(3)));
    }
  }
}
