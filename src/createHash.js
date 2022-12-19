import * as path from 'path'
import * as fs from 'fs'
import showMe from './WhereAmI.js';
import { createHash } from 'crypto';
export const crhash = async (str) => {
try{
  if (str.length===0 || !str) {
    console.log("Invalid input!")
    return
  }
  const hash=createHash('sha256')
  let curr=process.cwd()
  let p=path.resolve(curr,str.trim())
      const input=fs.createReadStream(p)
      input.on('error',(err)=>{
        console.log(`Operation Failed!${err}`)
      })
      input.on('close',()=>`\n+${showMe()}`)
      input.on('readable',()=>{
        let chunk=input.read()
         chunk? hash.update(chunk):console.log(hash.digest('hex'))
       })
  showMe()
}
catch(err){
  console.log(err)
}



};
