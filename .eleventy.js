module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("./src/assets/css");
    eleventyConfig.addWatchTarget("./src/assets/css");

    eleventyConfig.addPassthroughCopy("./src/assets/fonts");
    eleventyConfig.addWatchTarget("./src/assets/css/fonts");

    eleventyConfig.addPassthroughCopy("./src/assets/images");
    eleventyConfig.addWatchTarget("./src/assets/images");

    eleventyConfig.addPassthroughCopy("./src/assets/js");
    eleventyConfig.addWatchTarget("./src/assets/js");

    eleventyConfig.addPassthroughCopy("./src/assets/pdfs");
    eleventyConfig.addWatchTarget("./src/assets/pdfs");

    return {
        dir: {
            input: "src",
            output: "public",
            includes: "_includes",
            layouts: "_layouts",
        },
    };
};
