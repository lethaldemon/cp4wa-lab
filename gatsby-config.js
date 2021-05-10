module.exports = {
  siteMetadata: {
    title: "Think21 Lab 2177",
    description: "Tutorials for Tink 2021 Lab 2177 (Cloud Pak for Watson AIOps)",
    keywords: "gatsby,theme,carbon",
  },
  plugins: [
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Carbon Design Gatsby Theme",
        icon: "src/images/favicon.svg",
        short_name: "Gatsby Theme Carbon",
        start_url: "/",
        background_color: "#ffffff",
        theme_color: "#0062ff",
        display: "browser",
      },
    },
{
      resolve: 'gatsby-theme-carbon',
      options: {
        iconPath: './src/images/custom-icon-512.png',
        isSearchEnabled: true,
        repository: {
          baseUrl:
            'https://github.com/cruxdaemon/think-cp4wa-lab',
          subDirectory: '/',
          branch: 'gatsby'
        },
      },      
    }
  ],
  pathPrefix: "/think-cp4wa-lab"
};
