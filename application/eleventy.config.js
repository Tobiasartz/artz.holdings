import {HtmlBasePlugin, IdAttributePlugin, InputPathToUrlTransformPlugin} from "@11ty/eleventy";
import pluginNavigation from "@11ty/eleventy-navigation";
import faviconPlugin from "eleventy-plugin-gen-favicons";
import {eleventyImageTransformPlugin} from "@11ty/eleventy-img";

import pluginFilters from "./_config/filters.js";

/** @param {import("@11ty/eleventy").UserConfig} eleventyConfig */
export default async function (eleventyConfig) {
	// Drafts, see also _data/eleventyDataSchema.js
	eleventyConfig.addPreprocessor("drafts", "*", (data, content) => {
		if (data.draft && process.env.ELEVENTY_RUN_MODE === "build") {
			return false;
		}
	});

	// Copy the contents of the `public` folder to the output folder
	eleventyConfig
		.addPassthroughCopy({"./public/": "/"})
		.addPassthroughCopy({'./robots.txt': '/robots.txt'})
		// Originals at stable URLs for og:image and structured data (the image transform renames its outputs).
		.addPassthroughCopy({'./content/img/homes': '/img/homes'});

	// Watch images and the Tailwind output for the dev server.
	eleventyConfig.addWatchTarget("content/**/*.{svg,webp,png,jpg,jpeg,gif}");
	eleventyConfig.addWatchTarget("public/css/tailwind.css");

	// Per-page bundles, see https://github.com/11ty/eleventy-plugin-bundle
	eleventyConfig.addBundle("css", {toFileDirectory: "dist"});
	eleventyConfig.addBundle("js", {toFileDirectory: "dist"});

	// Official plugins
	eleventyConfig.addPlugin(pluginNavigation);
	eleventyConfig.addPlugin(faviconPlugin);
	eleventyConfig.addPlugin(HtmlBasePlugin);
	eleventyConfig.addPlugin(InputPathToUrlTransformPlugin);

	// Image optimization: https://www.11ty.dev/docs/plugins/image/#eleventy-transform
	// Absolute `src` paths (e.g. /img/homes/...) are read from `content/` and written once to `_site/img/`.
	eleventyConfig.addPlugin(eleventyImageTransformPlugin, {
		formats: ["avif", "webp", "jpeg"],
		widths: ["auto"],
		outputDir: "./_site/img/",
		urlPath: "/img/",
		htmlOptions: {
			imgAttributes: {
				loading: "lazy",
				decoding: "async",
			},
			pictureAttributes: {}
		},
	});

	// Filters
	eleventyConfig.addPlugin(pluginFilters);

	eleventyConfig.addPlugin(IdAttributePlugin);

	eleventyConfig.addShortcode("currentBuildDate", () => (new Date()).toISOString());
	eleventyConfig.addShortcode("currentYear", () => String(new Date().getFullYear()));
};

export const config = {
	templateFormats: ["md", "njk", "html", "liquid", "11ty.js"],
	markdownTemplateEngine: "njk",
	htmlTemplateEngine: "njk",
	dir: {
		input: "content",
		includes: "../_includes",
		data: "../_data",
		output: "_site"
	},
};
