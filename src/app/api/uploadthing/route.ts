import { createRouteHandler } from "uploadthing/next";
 
import { UTApi } from "uploadthing/server";
import { ourFileRouter } from "./core";
 
// Export routes for Next App Router
export const { GET, POST } = createRouteHandler({
  router: ourFileRouter,
});

export async function DELETE(request:Request){
  const {filekey} = await request.json();
  const utApi = new UTApi();
  await utApi.deleteFiles(filekey);

  return Response.json({message:"Image Deleted"});
}