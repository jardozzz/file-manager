import fs from 'fs/promises'
import path from 'path'
import showMe from './WhereAmI.js'
async function rename(arr){
  showMe()
  if (arr.length<2 || !arr) {
    console.log('Invalid input!Some arguments are missing!')
  }
  const p=path.resolve(process.cwd(),arr[0])
  try{
  const read=await fs.readFile(p)
await fs.rename(p,path.resolve(path.dirname(p),arr[1]))
}
catch(err){
  console.log(`Operation failed!${err}`)
}
}
export default rename
