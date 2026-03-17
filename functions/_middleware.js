export async function onRequest(context) {
  const url = new URL(context.request.url);

  if (url.hostname === "www.pinupbonuslar.com") {
    url.hostname = "pinupbonuslar.com";
    url.protocol = "https:";
    return Response.redirect(url.toString(), 301);
  }

  return context.next();
}
