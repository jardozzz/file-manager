import fs from 'fs/promises'
import showMe from './WhereAmI.js'
import path from 'path'
export async function deleteFile(str){
if(!str) {
  console.log("Invalid Input")
  return
}
const p=path.resolve(process.cwd(),str)
try{
const read=await fs.readFile(p)
await fs.unlink(p)
showMe()
}
catch(err){
  console.log('Operation failed')
  showMe()
  return
}
}
