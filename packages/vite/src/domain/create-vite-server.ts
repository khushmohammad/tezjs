import { BLANK, ENVIRONMENTS } from "../const/core.const";
import { VITE_SERVER_CONFIG } from "../const/vite-server-config.const"
import { overrideEnvVariables } from "../functions/override-env-variables"
export async function createViteServer(rootPath:string){
  await overrideEnvVariables(BLANK,ENVIRONMENTS);  
  const { createServer: createViteServer } = require('vite')
  let config = rootPath ? {...VITE_SERVER_CONFIG,...{root:rootPath}} : VITE_SERVER_CONFIG;
  return await createViteServer(config);
}