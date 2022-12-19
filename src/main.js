import showMe from "./WhereAmI.js";
import changeDirectory from "./up.js";
import process from 'process'
import getList from './getList.js'
import read from './read.js'
import create from './create.js'
import os from 'os'
import rename from './rename.js'
import copy from "./copy.js";
import {cpus} from './osFunction.js'
import {crhash} from './createHash.js'
import { compress,decompress } from "./zipFunctions.js";
import { deleteFile } from "./delete.js";
import { moveFile } from "./moveFile.js";
let input=process.stdin
let base=os.homedir()
process.chdir(base)
let reg=/--username=(.+)$/
let args=process.argv
if(args.length!==3 || !args[2].match(reg) || !args[2].match(reg)[1])
{
  console.log('Invalid Input')
  process.exit(1)
}
else {
  let userName=args[2].match(reg)[1]
process.on('SIGINT',()=>{
  console.log(`Thanks for using File Manager,${userName},goodbye!`)
  process.exit(1)
})
console.log(`Welcome to the File Manager, ${userName}!`)
showMe()
input.on('data',(data)=>{
  const reg=/ (?<apo>['"`])?(?<arg1>.+?)\k<apo> (?<apo1>['"`])?(?<arg2>.+)\k<apo1>$/
const reg2=/ (?<apo>['"`])?(?<arg1>.+)\k<apo>$/
  let convertedData=data.toString().trim()
const oneArg=convertedData.match(reg2)?convertedData.match(reg2).groups.arg1 : ""
const twoArgs=convertedData.match(reg)?[convertedData.match(reg).groups.arg1 || "",convertedData.match(reg).groups.arg2 || ""]:["",""]
  if (convertedData==='WHERE') {showMe()}
  else if (convertedData===".exit") {
    console.log(`Thanks for using File Manager,${userName},goodbye!`)
  process.exit(1)}
    else if(convertedData==="up") changeDirectory("up")
    else if(convertedData.slice(0,2)==="cd") changeDirectory(oneArg)
    else if (convertedData==='ls') getList()
    else if(convertedData.slice(0,3)==='cat') read(oneArg)
    else if(convertedData.slice(0,3)==='add') create(oneArg)
    else if(convertedData.slice(0,2)==='rn') rename(twoArgs)
    else if(convertedData.slice(0,2)==='cp') copy(twoArgs)
    else if(convertedData==="os --EOL") console.log(JSON.stringify(os.EOL))
    else if(convertedData==="os --cpus") cpus()
    else if(convertedData==="os --homedir") console.log(os.homedir())
    else if(convertedData==="os --username") console.log(os.userInfo().username)
    else if(convertedData==="os --architecture") console.log(os.arch())
    else if(convertedData.slice(0,4)==='hash') crhash(oneArg)
    else if(convertedData.slice(0,8)==='compress') compress(twoArgs)
    else if(convertedData.slice(0,10)==='decompress') decompress(twoArgs)
    else if (convertedData.slice(0,2)==='rm') deleteFile(oneArg)
    else if(convertedData.slice(0,2)==='mv') moveFile(twoArgs)
  else console.log(123)
})
}
