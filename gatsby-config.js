module.exports = {
    siteMetadata:{
        title: 'Front End Masters',
        description: "Site built with love"
    },
  plugins: ['gatsby-plugin-emotion', 
    'gatsby-plugin-react-helmet',
    {
        resolve: 'gatsby-plugin-mdx',
        options: {
            defaultLayouts: {
                default: require.resolve('./src/components/layout.js')
            }
        }
    },
    {
        resolve: 'gatsby-source-filesystem',
        options: {
            name: 'posts',  
            path: 'posts'
        }
    }


],
};
