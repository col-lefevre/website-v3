const htmlMin = require("html-minifier");
// const cssMin = require("clean-css");
// const { minify } = require("terser");

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

    // Minify HTML
    eleventyConfig.addTransform("htmlMin", function (content, outputPath) {
        if (outputPath.endsWith(".html")) {
            return htmlMin.minify(content, {
                collapseWhitespace: true,
                removeComments: true,
                useShortDoctype: true,
            });
        }
        return content;
    });

    // Minify CSS
    // eleventyConfig.addTransform("cssMin", function (content, outputPath) {
    //     if (outputPath.endsWith(".css")) {
    //         console.log("hi");
    //         const minContent = new cssMin({
    //             level: 3, // Aggressive minification
    //             restructuring: false,
    //             semicolons: false,
    //             zeroUnits: 0,
    //             roundingPrecision: 0,
    //             properties: true,
    //             selectors: true,
    //             compatibility: false, // Ignore compatibility
    //         }).minify(content).styles;
    //         return minContent;
    //     }
    //     return content;
    // });

    // eleventyConfig.addTransform(
    //     "minifyCSS",
    //     async function (content, outputPath) {
    //         if (outputPath && outputPath.endsWith(".css")) {
    //             // Minify CSS content
    //             const minifiedCSS = new CleanCSS({}).minify(content).styles;
    //             return minifiedCSS;
    //         }

    //         return content;
    //     }
    // );

    // Minify JS
    // eleventyConfig.addNunjucksAsyncFilter(
    //     "jsmin",
    //     async function (code, callback) {
    //         try {
    //             const minified = await minify(code);
    //             callback(null, minified.code);
    //         } catch (err) {
    //             console.error("Terser error: ", err);
    //             // Fail gracefully.
    //             callback(null, code);
    //         }
    //     }
    // );

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
