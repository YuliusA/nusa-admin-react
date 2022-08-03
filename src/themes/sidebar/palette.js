/**
 * This palette is to override the palette in Global Theme
 * @param {JsonObject} options Theme colors object
 */
export default function SidebarPalette(colors) {
    return {
        text: {
            primary: colors?.sidebar.text
        },
        action: {
            selectedOpacity: 0.12,
            hover: colors?.sidebar.hoverMenu.background,
        },
        ...(colors.mode === 'dark' && {
            primary: {
                main: colors?.sidebar.activeMenu.text
            },
            action: {
                selectedOpacity: 0.08,
                hover: colors?.sidebar.hoverMenu.background,
            }
        })
    };
}