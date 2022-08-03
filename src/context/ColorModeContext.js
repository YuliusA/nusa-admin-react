import { createContext } from 'react';

const ColorModeContext = createContext({
    toggleDarkMode: () => {},
});

export default ColorModeContext;