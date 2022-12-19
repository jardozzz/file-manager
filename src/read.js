import * as path from 'path'
import * as fs from 'fs'
import showMe from './WhereAmI.js';
const read = async (str) => {
try{
  if (str.length===0 || !str) {
    console.log("Invalid input!")
    return
  }
  let curr=process.cwd()
  let p=path.resolve(curr,str)
      const input=fs.createReadStream(p)
      input.on('error',(err)=>{
        console.log(`Operation Failed!${err}`)
      })
      input.on('close',()=>`\n+${showMe()}`)
  input.pipe(process.stdout)
  showMe()
}
catch(err){
  console.log(err)
}



};
export default  read
