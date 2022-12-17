import path from 'path'
import process from 'process'
import showMe from './WhereAmI.js'
function changeDirectory(str){
  showMe()
  let curr=process.cwd()
  if(str.length===0){
    console.log('Invalid input!No path provided')
    return
  }
  if (str==='up'){
    process.chdir(path.join(curr,".."))
    showMe()
  }
  else{
    try{
    process.chdir(path.resolve(curr,str))
    showMe()
  }

    catch(err){
      console.log("Operation Failed!Wrong Path!!!!111")
      showMe()
    }
  }
}
export default changeDirectory
