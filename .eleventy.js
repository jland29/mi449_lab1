module.exports = function(eleventyConfig) {
    // Output directory: _site
  
    // Copy `img/` to `_site/img`
    eleventyConfig.addPassthroughCopy("images");
  
    // Copy `css/fonts/` to `_site/css/fonts`
    // Keeps the same directory structure.
    eleventyConfig.addPassthroughCopy("css");

    //eleventyConfig.addPassthroughCopy("**/*.css");

    //eleventyConfig.addPassthroughCopy("**/*.png");
  };