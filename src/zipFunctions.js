import * as path from 'path'
import * as fs from 'fs'
import { fileURLToPath } from 'url'
import zlib from 'zlib'
import showMe from './WhereAmI.js'
async function checkWTF(path1,path2){
  try{
    const files=await fs.promises.readdir(path.dirname(path1)),files1=await fs.promises.readdir(path.dirname(path2))
    console.log(files1)
    if (files1.includes(path.basename(path2))) throw new Error("File already exist")
    if (!files.includes(path.basename(path1))) throw new Error("No such file")}
    catch(err){
      console.log(`Invalid input!${err}`)
      throw new Error
    }
    return
}
export async function compress(arr){
  if(arr.length<2 || !arr || arr[1].length===0 || arr[0].length===0 ){
    console.log("Invalid input!")
    showMe()
    return
  }
  const reg=/\.([^\.]+)$/
    let curr=process.cwd()
    const p=path.resolve(curr,arr[0]),p1=path.resolve(curr,arr[1],path.basename(p)+'.br')
   try{
    await checkWTF(p,p1)}
    catch(err){
      return
    }
    let gzip=zlib.createBrotliCompress()
const input=fs.createReadStream(p),output=fs.createWriteStream(p1)
input.on('error',(err)=>{
  console.log(`Operation Failed!${err}`)
return
})
const stream=input.pipe(gzip).pipe(output)
stream.on('finish',()=>{
  showMe()
})
}
export async function decompress(arr){
  if(arr.length<2 || !arr || arr[1].length===0 || arr[0].length===0 ){
    console.log("Invalid input!")
    showMe()
    return
  }

  const reg=/\.([^\.]+)$/
    let curr=process.cwd()
    const p=path.resolve(curr,arr[0]),p1=path.resolve(curr,arr[1],path.basename(p).slice(0,-3))
    try{
      await checkWTF(p,p1)}
      catch(err){
        return
      }
    console.log(p,p1)
    let gzip=zlib.createBrotliDecompress()
const input=fs.createReadStream(p),output=fs.createWriteStream(p1)
input.on('error',(err)=>{
  console.log(`Operation Failed!${err}`)
return
})
output.on('error',(err)=>{
  console.log(`Operation Failed!${err}`)
return
})
const stream=input.pipe(gzip).pipe(output)
stream.on('finish',()=>{
  showMe()
})
}
