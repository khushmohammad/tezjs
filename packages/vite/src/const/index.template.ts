import { commonContainer } from "@tezjs/common";
import { Seo } from "../domain/seo"

export const indexTemplate = (seo:Seo)=>{
  let imageLoader:string ='';
  if(commonContainer.tezConfig?.client?.loaderImage){
    imageLoader = `<img src="${commonContainer.tezConfig?.client?.loaderImage}" style="position:absolute;top:20%;left:36%; margin:0 auto;" />`;
  }
    return `<!DOCTYPE html>
<html lang="${seo.htmlMeta.lang || 'en'}">
<head>
        ${seo.headChildElements}
</head>
      <body>
        <div id="tez_app">${imageLoader}</div>
        ${commonContainer.buildOptions.commandName === "dev"? '<script type="module" src="/tez.ts"></script>' : ""}
        ${seo.bodyChildElements}
      </body>
    </html>`
}

