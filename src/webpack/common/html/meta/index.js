const keywords = require("./keywords");

module.exports = (name, themeColor, author, description, domain, toFavicon) => {
  return {
    viewport: "width=device-width, initial-scale=1, shrink-to-fit=no",
    "theme-color": themeColor,
    author,
    description,
    keywords: keywords(),
    "og:type": "website",
    "og:url": domain,
    "od:site_name": name,
    "og:title": name,
    "og:description": description,
    "og:image": toFavicon()
    // "twitter:site": "@username"
  };
};
