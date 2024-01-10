module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("./src/assets/");
    eleventyConfig.addWatchTarget("./src/assets/");

    eleventyConfig.addPassthroughCopy("./src/css/");
    eleventyConfig.addWatchTarget("./src/css/");

    eleventyConfig.addPassthroughCopy("./src/js/");
    eleventyConfig.addWatchTarget("./src/js/");

    // Pass code blocks while using front matter layout
    // Source: https://github.com/11ty/eleventy/issues/853
    eleventyConfig.addShortcode("renderlayoutblock", function (name) {
        return (this.page.layoutblock || {})[name];
    });

    eleventyConfig.addPairedShortcode("layoutblock", function (content, name) {
        if (!this.page.layoutblock) this.page.layoutblock = {};
        this.page.layoutblock[name] = content;
        return "";
    });

    return {
        dir: {
            input: "src",
            includes: "_includes",
            layouts: "_layouts",
            output: "_site",
        },
        templateFormats: ["md", "njk", "html"],
        markdownTemplateEngine: "njk",
        htmlTemplateEngine: "njk",
        dataTemplateEngine: "njk",
    };
};
