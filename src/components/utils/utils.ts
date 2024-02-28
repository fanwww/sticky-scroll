// simple uuid
export function uuid() {
  return ((Math.random() * 1e6) >> 0).toString(36);
}

export function getHeight(height: string | number): string {
  if (typeof height === 'number') {
    return height + 'px';
  } else {
    return height;
  }
}
