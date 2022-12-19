
import { deleteFile } from "./delete.js";
import copy from "./copy.js";
import showMe from "./WhereAmI.js";

export async function moveFile(arr){
  await copy(arr)
  await deleteFile(arr[0])
  showMe()
}
