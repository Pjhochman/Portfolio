require("babel-register")({
  presets: ["es2015", "react"]
});

const router = require("./src/routes").default;
const Sitemap = require("react-router-sitemap").default;

function generateSitemap() {
  return new Sitemap(router)
    .build("https://www.peterhochman.com")
    .save("./public/sitemap.xml");
}

generateSitemap();
