import AYECHAT_COLORS from './colors.js';


export const AYECHAT_LIGHT_THEME = Object.freeze({
background: AYECHAT_COLORS.ivoryMint,
surface: AYECHAT_COLORS.ivoryMint,
surfaceElevated: AYECHAT_COLORS.sage,
primary: AYECHAT_COLORS.evergreen,
primaryHover: AYECHAT_COLORS.pine,
primaryActive: AYECHAT_COLORS.forest,
textPrimary: AYECHAT_COLORS.midnight,
textSecondary: AYECHAT_COLORS.pine,
textMuted: AYECHAT_COLORS.evergreen,
border: AYECHAT_COLORS.sage,
borderStrong: AYECHAT_COLORS.evergreen,
icon: AYECHAT_COLORS.midnight,
iconMuted: AYECHAT_COLORS.evergreen,
inputBackground: AYECHAT_COLORS.ivoryMint,
inputBorder: AYECHAT_COLORS.sage,
inputFocus: AYECHAT_COLORS.evergreen,
messageOutgoing: AYECHAT_COLORS.evergreen,
messageIncoming: AYECHAT_COLORS.ivoryMint,
messageOutgoingText: AYECHAT_COLORS.ivoryMint,
messageIncomingText: AYECHAT_COLORS.midnight,
overlay: AYECHAT_COLORS.midnight
});


export const AYECHAT_DARK_THEME = Object.freeze({
background: AYECHAT_COLORS.midnight,
surface: AYECHAT_COLORS.forest,
surfaceElevated: AYECHAT_COLORS.pine,
primary: AYECHAT_COLORS.sage,
primaryHover: AYECHAT_COLORS.ivoryMint,
primaryActive: AYECHAT_COLORS.sage,
textPrimary: AYECHAT_COLORS.ivoryMint,
textSecondary: AYECHAT_COLORS.sage,
textMuted: AYECHAT_COLORS.evergreen,
border: AYECHAT_COLORS.pine,
borderStrong: AYECHAT_COLORS.evergreen,
icon: AYECHAT_COLORS.ivoryMint,
iconMuted: AYECHAT_COLORS.sage,
inputBackground: AYECHAT_COLORS.forest,
inputBorder: AYECHAT_COLORS.pine,
inputFocus: AYECHAT_COLORS.sage,
messageOutgoing: AYECHAT_COLORS.evergreen,
messageIncoming: AYECHAT_COLORS.forest,
messageOutgoingText: AYECHAT_COLORS.ivoryMint,
messageIncomingText: AYECHAT_COLORS.ivoryMint,
overlay: AYECHAT_COLORS.midnight
});


export const AYECHAT_THEMES = Object.freeze({
light: AYECHAT_LIGHT_THEME,
dark: AYECHAT_DARK_THEME
});


export default AYECHAT_THEMES;