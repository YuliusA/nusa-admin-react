
export default function SidebarComp(colors) {
    return {
        MuiList: {
            styleOverrides: {
                root: {
                    paddingLeft: 12,
                    paddingRight: 12
                }
            }
        },
        MuiListItemButton: {
            styleOverrides: {
                root: {
                    borderRadius: 8,
                    marginBottom: 4,
                    paddingBottom: 4,
                    paddingTop: 4,
                    '&:hover': {
                        color: colors?.sidebar.hoverMenu.text,
                        '& .MuiListItemIcon-root': {
                            color: colors?.sidebar.hoverMenu.icon,
                        }
                    },
                    '&.active, &.Mui-selected': {
                        backgroundColor: colors?.sidebar.activeMenu.background,
                        color: colors?.sidebar.activeMenu.text,
                        '& .MuiListItemIcon-root': {
                            color: colors?.sidebar.activeMenu.icon,
                        },
                        '& .MuiListItemText-primary': {
                            fontWeight: 500
                        }
                    }
                }
            }
        },
        MuiListItemIcon: {
            styleOverrides: {
                root: {
                    color: colors?.sidebar.icon,
                    minWidth: 30,
                    '& .MuiSvgIcon-root': {
                        fontSize: '1.25rem'
                    }
                }
            }
        },
        MuiListItemText: {
            styleOverrides: {
                primary: {
                    fontSize: 15
                }
            }
        },
        MuiCollapse: {
            styleOverrides: {
                wrapperInner: {
                    '& .MuiListItemButton-root': {
                        backgroundColor: 'transparent !important',
                        paddingLeft: 40
                    },
                    '& .MuiList-root': {
                        position: 'relative',
                        paddingLeft: 0,
                        paddingRight: 0,
                        '&:after': {
                            content: '""',
                            position: 'absolute',
                            left: 26,
                            bottom: 14,
                            height: 'calc(100% - 10px)',
                            width: 1,
                            opacity: 1,
                            background: colors?.action.disabledBackground,
                            zIndex: -1
                        }
                    }
                }
            }
        }
    }
}