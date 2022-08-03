import { useState } from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import Dialog from '@mui/material/Dialog';
import InputBase from '@mui/material/InputBase';
import Chip from '@mui/material/Chip';

const ModalHeader = styled('header')(({ theme }) => ({
    borderBottom: '1px solid rgb(224, 227, 231)',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
    '& .DocSearch-Form': {
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        height: theme.mixins.toolbar.minHeight,
        paddingLeft: 8,
        paddingRight: 8,
        '& .MuiInputBase-root': {
            flexGrow: 1,
            padding: 8
        }
    }
}));

const Search = () => {
    const [dialogOpen, setDialogOpen] = useState(false);

    const handleDialog = () => {
        setDialogOpen(!dialogOpen);
    }

    return (
        <>
            <Button
                variant='outlined'
                size='small'
                startIcon={<SearchIcon />}
                onClick={handleDialog}
                sx={{
                    backgroundColor: 'rgba(255,255,255,0.5)',
                    color: 'grey.600',
                    fontWeight: '400',
                    minWidth: 128,
                    height: 34,
                    textTransform: 'capitalize',
                    justifyContent: 'flex-start'
                }}
            >
                Searh...
            </Button>

            <Dialog open={dialogOpen} onClose={handleDialog} fullWidth>
                <ModalHeader>
                    <form className='DocSearch-Form'>
                        <label className='DocSearch-MagnifierLabel' htmlFor='docsearch-input'><SearchIcon /></label>
                        <InputBase
                            autoFocus
                            id='docsearch-input'
                            placeholder='Search...'
                            inputProps={{ 'arial-label': 'Search Document' }}
                        />
                    </form>
                    <Chip variant='outlined' size='small' label='Esc' />
                </ModalHeader>

                {/* 
                <DialogActions>
                    <Button onClick={handleDialogClose}>Cancel</Button>
                    <Button onClick={handleDialogClose}>Subscribe</Button>
                </DialogActions> */}
            </Dialog>
        </>
    )
}

export default Search;