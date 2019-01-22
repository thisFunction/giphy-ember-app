import moveOver from "./move-over";
export default function() {
  const oldOffset = Number(this.oldView.version.value.query.offset);
  const newOffset = Number(this.newView.version.value.query.offset);
  
  newOffset >= oldOffset ? moveOver.call(this, 'x', -1) :  moveOver.call(this, 'x', +1)
}