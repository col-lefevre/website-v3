module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("./src/assets/");
    eleventyConfig.addWatchTarget("./src/assets/");

    eleventyConfig.addPassthroughCopy("./src/css/");
    eleventyConfig.addWatchTarget("./src/css/");

    eleventyConfig.addPassthroughCopy("./src/js/");
    eleventyConfig.addWatchTarget("./src/js/");

    // Pass code blocks while using front matter layout
    // Source: https://github.com/11ty/eleventy/issues/853

    // Paired shortcode to capture content for a layout block
    eleventyConfig.addPairedShortcode("layoutblock", function (content, name) {
        // Store the content in a global data object with the specified name
        if (!this.layoutBlocks) {
            this.layoutBlocks = {};
        }
        this.layoutBlocks[name] = content;
        return ""; // Return empty string since we are just storing the content
    });

    // Shortcode to render the content of a layout block
    eleventyConfig.addShortcode("renderlayoutblock", function (name) {
        // Check if the layout block exists
        if (this.layoutBlocks && this.layoutBlocks[name]) {
            return this.layoutBlocks[name]; // Return the stored content
        }
        return ""; // Return empty string if the block doesn't exist
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
