import { useContext, useState, useCallback } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import useLocalStorageState from 'use-local-storage-state';
import BookingsContext from '../../../context/BookingsProvider';
import columns from './tableColumns';
import { config } from '../../../config';

// Mui Components
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import LinearProgress from '@mui/material/LinearProgress';

// Mui Icons
import LaunchOutlinedIcon from '@mui/icons-material/LaunchOutlined';

// Data Grid
import {
    DataGrid,
    GridActionsCellItem,
    GridToolbarContainer,
    GridToolbarColumnsButton,
    GridToolbarQuickFilter,
    GridToolbarFilterButton,
    GridToolbarExport,
    GridToolbarDensitySelector,
} from '@mui/x-data-grid';

const StyledDataGrid = styled(DataGrid)(({theme}) => ({
    border: 'none',
    '& .MuiDataGrid-main': {
        backgroundColor: theme.palette.background.paper,
        borderRadius: `${theme.shape.borderRadius}px ${theme.shape.borderRadius}px 0 0`,
        borderColor: theme.palette.divider,
        borderStyle: 'solid',
        borderWidth: '1px',
        minHeight: 400,
    },
    '& .MuiDataGrid-footerContainer': {
        backgroundColor: theme.palette.background.paper,
        borderRadius: `0 0 ${theme.shape.borderRadius}px ${theme.shape.borderRadius}px`,
        borderColor: theme.palette.divider,
        borderStyle: 'solid',
        borderWidth: '0 1px 1px',
    },
    '& .MuiDataGrid-toolbarContainer': {
        padding: theme.spacing(2,1),
    },
    '& .MuiChip-label': {
        lineHeight: 1.5
    },
    '& .MuiLinearProgress-root': {
        backgroundColor: theme.palette.action.selected,
        '& .MuiLinearProgress-bar': {
            backgroundColor: theme.palette.action.focus,
        },
    },
}));

const BookingsToolbar = ({ setColumnButtonEl }) => {
    return (
        <GridToolbarContainer sx={{ justifyContent: 'space-between' }}>
            <Stack direction='row' spacing={1}>
                <GridToolbarColumnsButton
                    ref={setColumnButtonEl}
                    sx={{ color: 'text.secondary'}}
                />
                <GridToolbarFilterButton sx={{ color: 'text.secondary'}} />
                <GridToolbarDensitySelector sx={{ color: 'text.secondary'}} />
                <GridToolbarExport sx={{ color: 'text.secondary'}} />
            </Stack>

            <GridToolbarQuickFilter sx={{ minWidth: '33.33%' }} />
        </GridToolbarContainer>
    );
}

const BookingList = () => {
    const [bookingTabs, setBookingTabs] = useLocalStorageState('booking-tabs', {
        defaultValue: config.bookingTabs
    });
    const { bookings, bookingsLoading } = useContext(BookingsContext);
    const [columnButtonEl, setColumnButtonEl] = useState(null);
    const [pageSize, setPageSize] = useState(20);
    const navigate = useNavigate();
    const location = useLocation();

    const viewBooking = useCallback(
        (params) => () => {
            const filteredTab = bookingTabs.find((bookingTab) => (bookingTab.id) === params.id);

            if (!filteredTab) {
                setBookingTabs((bookingTabs) => {
                    return [...bookingTabs, {
                        id: params.id,
                        icon: true,
                        label: params.row.bookingCode,
                        path: `/bookings/${params.id}`,
                        remove: true
                    }]
                });
                navigate(`/bookings/${params.id}`, { state: { from: location }, replace: true });

            } else {
                navigate(`/bookings/${params.id}`, { state: { from: location }, replace: true });
            }
        },
        [],
    );

    const tablecolumns = [...columns, {
        field: 'actions',
        type: 'actions',
        getActions: (params) => [
            <GridActionsCellItem
                icon={<LaunchOutlinedIcon />}
                label='View Detail'
                onClick={viewBooking(params)}
            />,
        ],
    }];

    return (
        <Grid container columns={1} spacing={0}>
            <Grid item xs>
                <StyledDataGrid
                    autoHeight
                    rows={
                        bookings.map((item, i) => ({
                            id: item._id,
                            prop: item.bookingItem.prop,
                            bookingDate: item.bookingDate,
                            bookingCode: item.bookingCode,
                            bookingItem: item.bookingItem.desc,
                            contact: item.contact.name,
                            bookingStatus: item.bookingStatus,
                        }))
                    }
                    columns={tablecolumns}
                    pageSize={pageSize}
                    onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
                    rowsPerPageOptions={[10, 20, 40, 80, 100]}
                    initialState={{
                        sorting: {
                            sortModel: [{ field: 'bookingDate', sort: 'desc' }],
                        }
                    }}
                    disableSelectionOnClick
                    disableColumnMenu
                    components={{
                        Toolbar: BookingsToolbar,
                        LoadingOverlay: LinearProgress,
                    }}
                    componentsProps={{
                        panel: {
                            anchorEl: columnButtonEl,
                        },
                        toolbar: {
                          showQuickFilter: true,
                          quickFilterProps: { debounceMs: 500 },
                          setColumnButtonEl,
                        },
                    }}
                    loading={bookingsLoading}
                />
            </Grid>
        </Grid>
    )
}

export default BookingList;