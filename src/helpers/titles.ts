export const clipTitle = (title: string, chars: number = 15) => {
  if (title.length <= chars) {
    return title;
  } else {
    return title.substring(0, chars).trim() + '...';
  }
};
