module.exports = function ({addUtilities, theme}) {
  const gridStriped = {};
  const gridTheme = theme('gridStriped');

  gridStriped['.striped'] = {
    display: 'contents'
  }

  for (let i = 1; i <= 12; i++) {
    gridStriped[`.striped-${i}`] = {
      display: 'contents'
    }

    gridStriped[`.striped-${i} > div:nth-child(${i * 2}n+1)`] = {
      backgroundColor: theme(`colors.${gridTheme['color']}.${gridTheme['variant']}`),
    }

    gridStriped[`.grid-cols-${i} .striped > div:nth-child(${i * 2}n+1)`] = {
      backgroundColor: theme(`colors.${gridTheme['color']}.${gridTheme['variant']}`),
    };

    for (let j = 2; j <= i; j++) {
      gridStriped[`.striped-${i} > div:nth-child(${i * 2}n+${j})`] = {
        backgroundColor: theme(`colors.${gridTheme['color']}.${gridTheme['variant']}`),
      }

      gridStriped[`.grid-cols-${i} .striped > div:nth-child(${i * 2}n+${j})`] = {
        backgroundColor: theme(`colors.${gridTheme['color']}.${gridTheme['variant']}`),
      };
    }
  }

  addUtilities(gridStriped)
}
