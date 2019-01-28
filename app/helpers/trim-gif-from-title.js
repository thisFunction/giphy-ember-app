import { helper } from '@ember/component/helper';

export function trimGifFromTitle([title]) {
  return title.replace(" GIF","")
}

export default helper(trimGifFromTitle);