// Mui Components
import Toolbar from '@mui/material/Toolbar';
import Divider from '@mui/material/Divider';

import Logo from '../../ui-components/Logo';

const SidebarHeader = () => {
    return (
        <>
            <Toolbar>
                <Logo height='32' viewBox='0 0 580 128' />
            </Toolbar>

            <Divider />
        </>
    )
}

export default SidebarHeader;