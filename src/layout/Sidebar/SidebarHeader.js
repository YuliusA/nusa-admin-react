import { blueGrey } from '@mui/material/colors';

// Mui Components
import Toolbar from '@mui/material/Toolbar';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';

// Mui Icons
import FingerPrint from '@mui/icons-material/Fingerprint';

import LogoBrand from '../../ui-components/LogoBrand';
import AccountMenu from '../../ui-components/ext/AccountMenu';
import Fingerprint from '@mui/icons-material/Fingerprint';

const SidebarHeader = () => {
    return (
        <>
            <Toolbar sx={{ pr: [1], justifyContent: 'space-between' }}>
                <LogoBrand height='32' viewBox='0 0 580 128' />
            </Toolbar>

            <Divider />

            <ListItem
                component='div'
                sx={{
                    background: `linear-gradient(-20deg, ${blueGrey[800]}, ${blueGrey[600]})`,
                    pl: 2.5,
                    pr: 0,
                    py: 1,
                    overflow: 'hidden'
                    }}
            >
                <Fingerprint
                    sx={{
                        color: 'rgba(255, 255, 255, 0.08)',
                        fontSize: 128,
                        position: 'absolute',
                        left: -30,
                        top: -45,
                        transform: 'rotateZ(90deg)'
                    }}
                />
                <FingerPrint
                    sx={{
                        color: 'rgba(255, 255, 255, 0.08)',
                        fontSize: 90,
                        position: 'absolute',
                        right: 80,
                        top: -25,
                        transform: 'rotate(135deg)'
                    }}
                />
                <Fingerprint
                    sx={{
                        color: 'rgba(255, 255, 255, 0.08)',
                        fontSize: 128,
                        position: 'absolute',
                        right: -30,
                        top: -45
                    }}
                />
                <AccountMenu />
            </ListItem>
        </>
    )
}

export default SidebarHeader;