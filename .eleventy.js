// const htmlMin = require("html-minifier");

module.exports = function (eleventyConfig) {
    // Add non-default paths
    eleventyConfig.addPassthroughCopy("./src/assets/");
    eleventyConfig.addWatchTarget("./src/assets/");

    eleventyConfig.addPassthroughCopy("./src/css/");
    eleventyConfig.addWatchTarget("./src/css/");

    eleventyConfig.addPassthroughCopy("./src/js/");
    eleventyConfig.addWatchTarget("./src/js/");

    eleventyConfig.addPassthroughCopy("./CNAME");

    // Automatically fill footer with current date on build
    eleventyConfig.addFilter("date", function () {
        const options = { month: "short", year: "numeric" };
        return new Date().toLocaleDateString(undefined, options);
    });

    // // Minify HTML - FUNCTIONAL
    // eleventyConfig.addTransform("htmlMin", function (content, outputPath) {
    //     if (outputPath.endsWith(".html")) {
    //         return htmlMin.minify(content, {
    //             collapseWhitespace: true,
    //             removeComments: true,
    //             useShortDoctype: true,
    //         });
    //     }
    //     return content;
    // });

    // Build details
    return {
        dir: {
            input: "src",
            includes: "_includes",
            layouts: "_layouts",
            output: "./_site",
        },
        templateFormats: ["md", "njk", "html"],
        markdownTemplateEngine: "njk",
        htmlTemplateEngine: "njk",
        dataTemplateEngine: "njk",
    };
};
