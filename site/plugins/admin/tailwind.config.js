module.exports = {
  separator: ':',
  theme: {
      colors: {
          black: '#000000',
          white: '#ffffff',
          dark: "#16171a",
          "dark-muted": "#292b30",
          gray: {
              '000': '#f9f9f9',
              '100': '#ededed',
              '200': '#e1e1e1',
              '300': '#d3d3d3',
              '400': '#c4c4c4',
              '500': '#b3b3b3',
              '600': '#a0a0a0',
              '700': '#898989',
              '800': '#6c6c6c',
              '900': '#3f3f3f',
          },
      },
      opacity: {
       '0': '0',
       '25': '.25',
       '50': '.5',
       '75': '.75',
       '10': '.1',
       '20': '.2',
       '30': '.3',
       '40': '.4',
       '50': '.5',
       '60': '.6',
       '70': '.7',
       '80': '.8',
       '90': '.9',
       '100': '1'
      },
      borderColor: theme => ({
        ...theme('colors'),
        default: theme('colors.black', 'currentColor'),
    }),
  },
  variants: {},
  plugins: [],
}
