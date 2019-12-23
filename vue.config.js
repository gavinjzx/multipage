module.exports = {
    pages: {
        mobile: {
            // page 的入口
            entry: "src/mobile/main.js",
            // 模板来源
            template: "public/mobile.html",
            // 在 dist/index.html 的输出
            filename: "mobile/index.html",
            // 当使用 title 选项时，
            // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
            title: "Index Page",
            // 在这个页面中包含的块，默认情况下会包含
            // 提取出来的通用 chunk 和 vendor chunk。
            chunks: ["chunk-vendors", "chunk-common", "mobile"]
        },
        pc: {
            // page 的入口
            entry: "src/pc/main.js",
            // 模板来源
            template: "public/pc.html",
            // 在 dist/index.html 的输出
            filename: "pc/index.html",
            // 当使用 title 选项时，
            // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
            title: "Index Page",
            // 在这个页面中包含的块，默认情况下会包含
            // 提取出来的通用 chunk 和 vendor chunk。
            chunks: ["chunk-vendors", "chunk-common", "pc"]
        },

    }
}