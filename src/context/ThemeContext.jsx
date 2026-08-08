import { createContext } from 'react';
import { AYECHAT_LIGHT_THEME } from '../constants/themes.js';


export const ThemeContext = createContext({
themeMode: 'light',
currentTheme: AYECHAT_LIGHT_THEME,
setThemeMode: () => {}
});


export default ThemeContext;