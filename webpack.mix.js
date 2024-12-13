const mix = require('laravel-mix')
const tailwindcss = require('tailwindcss')
require('dotenv').config()

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js')
  .webpackConfig({
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'resources/js/src'),
        '@assets': path.resolve(__dirname, 'resources/assets'),
        '@sass': path.resolve(__dirname, 'resources/sass')
      }
    }
  })
  .sass('resources/sass/app.scss', 'public/css').options({
    postCss: [require('autoprefixer'), require('postcss-rtl')]
  })
  .copy('resources/assets/css/loader.css', 'public/css/loader.css')
  .postCss('resources/assets/css/main.css', 'public/css', [tailwindcss('tailwind.js'), require('postcss-rtl')()])
  .copy('node_modules/vuesax/dist/vuesax.css', 'public/css/vuesax.css') // Vuesax framework css
  .copy('node_modules/vuetify/dist/vuetify.min.css', 'public/css/vuetify.min.css') // Vuesax framework css
  .copy('node_modules/vue-select/dist/vue-select.css', 'public/css/vue-select.css') // Vue Select framework css
  .copy('node_modules/primevue/resources/primevue.min.css', 'public/css/primevue.min.css') // primevue framework css
  .copy('node_modules/primevue/resources/themes/saga-blue/theme.css', 'public/css/theme.css') // primevue framework css
  .copy('node_modules/primeicons/primeicons.css', 'public/css/primeicons.css') // primeicons framework css
  .copyDirectory('node_modules/primeicons/fonts', 'public/css/fonts') // primeicons framework css
  .copy('node_modules/primevue/resources/primevue.css', 'public/css/primevue.css') // Vuesax framework css
  .copy('resources/assets/css/iconfont.css', 'public/css/iconfont.css') // Feather Icon Font css
  .copyDirectory('resources/assets/fonts', 'public/fonts') // Feather Icon fonts
  .copyDirectory('node_modules/material-icons/iconfont', 'public/css/material-icons') // Material Icon fonts
  .copyDirectory('node_modules/material-icons/iconfont/material-icons.css', 'public/css/material-icons/material-icons.css') // Material Icon fonts css
  .copy('node_modules/prismjs/themes/prism-tomorrow.css', 'public/css/prism-tomorrow.css') // Prism Tomorrow theme css
  .copyDirectory('resources/assets/images', 'public/images') // Copy all images from resources to public folder
  .sourceMaps(false, 'source-map')

// Change below options according to your requirement
// if (mix.inProduction()) {
//     mix.version();
//     mix.webpackConfig({
//         output: {
//             publicPath: '/demo/vuexy-vuejs-laravel-admin-template/demo-1/',
//             chunkFilename: 'js/chunks/[name].[chunkhash].js',
//         }
//     });
//     mix.setResourceRoot("/demo/vuexy-vuejs-laravel-admin-template/demo-1/");
// }
// else{
//     mix.webpackConfig({
//         output: {
//             chunkFilename: 'js/chunks/[name].js',
//         }
//     });
// }

if (mix.inProduction()) {
  mix.version()

  mix.webpackConfig({
    output: {
      chunkFilename: 'js/chunks/[name].[chunkhash].js'
    }
  })
} else {
  mix.webpackConfig({
    output: {
      chunkFilename: 'js/chunks/[name].js'
    }
  })
}

