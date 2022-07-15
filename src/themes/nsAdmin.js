import { createTheme } from "@mui/material/styles";
import { orange, blue, blueGrey } from "@mui/material/colors";

const Theme = createTheme({
    nsColor: {
        blue: blue[700],
        orange: orange[500],
        white: '#fff'
    },
    palette: {
        background: {
            default: '#f4f6f7'
        }
    },
    typography: {
        fontFamily: [
            'Heebo',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif'
        ].join(','),
        menuOverline: {
            color: blueGrey[800],
            lineHeight: 1.66,
            marginTop: 1.25,
            fontWeight: 500,
            fontSize: '.875rem',
            padding: 1
        },
    },
    components: {
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
                    color: blueGrey[600],
                    marginBottom: 4,
                    paddingBottom: 4,
                    paddingTop: 4,
                    '&.Mui-selected': {
                        backgroundColor: blue[50],
                        color: blue[800],
                        '&:hover': {
                            backgroundColor: blue[50]
                        },
                        '& .MuiListItemIcon-root': {
                            color: blue[800]
                        },
                        '& .MuiListItemText-primary': {
                            fontWeight: 500
                        }
                    },
                    '&:hover': {
                        color: blue[800],
                        '& .MuiListItemIcon-root': {
                            color: blue[800]
                        }
                    },
                    '&.active': {
                        backgroundColor: blue[50],
                        color: blue[800],
                        '& .MuiListItemIcon-root': {
                            color: blue[800]
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
                            bottom: 20,
                            height: 'calc(100% - 20px)',
                            width: 1,
                            opacity: 1,
                            background: blue[50],
                            zIndex: -1
                        }
                    }
                }
            }
        }
    },
});

export default Theme;