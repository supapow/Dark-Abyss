import * as path from 'path';
import { generateTheme, IColorSet } from 'vscode-theme-generator';

const themeName = 'Dark Abyss';
const colors = { 
  abyss: '#0d0e14',
  black: '#111111',
  green: '#30fd8b',/*#b2cffd*/
  purpleLight: '#955bc7',/*#290A8D */
  purpleDark: '#561c99',
  blue: '#3600ff', /*#30b6ff*/
  cyan: '#30ddff',
  yellow: '#e8c77b',
  purple: '#9000ff',/*#9000ff*/
  blueLight: '#b2cffd',
  blueDark: '#2928b0',
  coral: '#ec715d',
  pink: '#b32ebb',
  pinkLight:'#ff68ff'
}

const colorSet: IColorSet = {
  base: {
    background: colors.abyss,
    foreground: colors.purpleLight,
    color1: colors.pink,
    color2: colors.blueDark,
    color3: colors.purple,
    color4: colors.blue,
  },
  syntax: {
    identifier: colors.cyan,
    string: colors.pinkLight
  },
  ui: {
    cursor: '#FFFFFF',
    lineHighlight: '#0d0e14',
    selection: '#000000',
    guide: '#3b405b',

  },
};

generateTheme(themeName, colorSet, path.join(__dirname, 'theme.json'));
