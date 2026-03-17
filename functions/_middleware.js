export async function onRequest(context) {
  const url = new URL(context.request.url);
  const legacyPathRedirects = {
    "/about/": "/pinupbonuslar-about/",
    "/about": "/pinupbonuslar-about/",
    "/privacy/": "/pinupbonuslar-privacy-policy/",
    "/privacy": "/pinupbonuslar-privacy-policy/",
    "/terms/": "/pinupbonuslar-terms-and-conditions/",
    "/terms": "/pinupbonuslar-terms-and-conditions/",
    "/contact/": "/pinupbonuslar-contact-support/",
    "/contact": "/pinupbonuslar-contact-support/",
    "/responsible-gambling/": "/pinupbonuslar-responsible-gambling-guide/",
    "/responsible-gambling": "/pinupbonuslar-responsible-gambling-guide/"
  };

  if (url.hostname === "www.pinupbonuslar.com") {
    url.hostname = "pinupbonuslar.com";
    url.protocol = "https:";
    return Response.redirect(url.toString(), 301);
  }

  const redirectTarget = legacyPathRedirects[url.pathname];
  if (redirectTarget) {
    url.pathname = redirectTarget;
    return Response.redirect(url.toString(), 301);
  }

  return context.next();
}
