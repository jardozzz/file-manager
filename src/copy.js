import fs from 'fs'
import showMe from './WhereAmI.js'
import path from 'path'
async function copy(arr){
  if(arr.length<2 || !arr || arr[1].length===0 || arr[0].length===0 ){
    console.log("Invalid input!")
    showMe()
    return
  }
  const curr=process.cwd()
  const p=path.resolve(curr,arr[0]),p1=path.resolve(curr,arr[1])
  try{
    const files=await fs.promises.readdir(p1),files1=await fs.promises.readdir(path.dirname(p))
    if (files.includes(path.basename(p))) throw new Error("File already exist")
    if (!files1.includes(path.basename(p))) throw new Error("No such file")
  const input=fs.createReadStream(p)
  input.on('error',(err)=>{
    console.log(`Operation Failed!${err}`)
return
  })
  const output=fs.createWriteStream(path.resolve(p1,path.basename(p)))
  input.pipe(output)

 input.on('end',()=>{
  showMe()
 })
}
catch(err){
  console.log(`Operation Failed!${err}`)
  showMe()
}
}
export default copy
