import fs from 'fs/promises'
import showMe from './WhereAmI.js'
import path from 'path'
async function create(str){
const files=await fs.readdir(process.cwd())
if (files.includes(str)) console.log("\nOperation Failed!File already exist!")
else await fs.writeFile(str,"")
showMe()
}
export default create
