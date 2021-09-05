const withOptimizedImages = require('next-optimized-images')

module.exports = withOptimizedImages({
    handleImages: ['jpeg', 'png', 'svg'],
    optimizeImages: false,
    images: {
        disableStaticImages: true,
        loader: "imgix",
        path: "https://noop/",
    },
})