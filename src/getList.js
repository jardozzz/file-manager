import fs from 'fs/promises'
import path from 'path'
import process from 'process'
import showMe from './WhereAmI.js'
async function getList(){
  let curr=process.cwd()

let files=await fs.readdir(curr)
const result=await Promise.all(files.map(async element=>{
let res={}
res.name=element
res.type=await fs.stat(path.join(curr,element)).then(file=>file.isDirectory())?"Directory":"File"
return res
}))

console.table(result.sort(compare))
}

function compare(a,b){

  if (a.type.toLowerCase()>b.type.toLowerCase()) return 1
  else if (a.type.toLowerCase()<b.type.toLowerCase()) return -1
  else {
    if(a.name.toLowerCase()<b.name.toLowerCase()) return -1
    else return 1
  }
}
export default getList
