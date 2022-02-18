module.exports = {
    content: ['./src/**/*.{html,js}'],
    theme: {
      extend: {
        screens: {
          phone: { max: '767px' },
          tablet: { min: '768px', max: '1023px' },
          laptop: { min: '1024px', max: '1279px' },
          desktop: { min: '1280px', max: '1535px' },
          desktopxl: { min: '1536px' },
        },
        colors: {
          csb: {
            primary: '#9DDCDC',
            secondary: '#FFF4E1',
            red: '#DE3163',
            black: '#212429',
            white: '#F5F5F5',
          },
        },
        borderRadius: {
            xl: "3rem"
        }
      },
    },
    plugins: [],
  };