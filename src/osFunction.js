import os from 'os'
export function cpus(){
let arr=os.cpus()
console.log(arr.map(element=>{
  return {Model:element.model,Clock_rate:element.speed/1024}
}),`\nOverall core number:${arr.length}`)
return
}

