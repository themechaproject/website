const withOptimizedImages = require('next-optimized-images')

module.exports = withOptimizedImages({
    handleImages: ['jpeg', 'png', 'svg'],
    optimizeImages: false,
    images: {
        disableStaticImages: true,
        loader: "imgix",
        path: "https://noop/",
    },
    basePath: process.env.NEXT_PUBLIC_BASE_PATH,
    assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH
})