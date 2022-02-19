import * as path from 'path';
import { generateTheme, IColorSet } from 'vscode-theme-generator';

const themeName = 'Dark Abyss';
const colors = { 
  abyss: '#0d0e14',
  black: '#111111',
  white: '#96d4ff',
  blue: '#2faad4',
  red: '#30b6ff',
  green: '#e8c77b',
  yellow: '#dd398d'
}

const colorSet: IColorSet = {
  base: {
    background: colors.abyss,
    foreground: colors.white,
    color1: colors.blue,
    color2: colors.red,
    color3: colors.green,
    color4: colors.yellow
  }
};

generateTheme(themeName, colorSet, path.join(__dirname, 'theme.json'));
