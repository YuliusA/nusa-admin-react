import { useState, useEffect, useRef } from 'react';
import useAxiosPrivate from '../hooks/useAxiosPrivate';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import moment from 'moment';
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Tooltip from '@mui/material/Tooltip';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import HotelOutlinedIcon from '@mui/icons-material/HotelOutlined';
import BorderClearIcon from '@mui/icons-material/BorderClear';
import PageLoader from './PageLoader';

const columns = [
    {
        field: 'id',
        hide: true,
        hideable: false,
        sortable: false,
        disableColumnMenu: true
    },
    {
        field: 'prop',
        headerName: 'Type',
        width: 70,
        headerAlign: 'center',
        renderHeader: () => (<BorderClearIcon />),
        sortable: false,
        disableColumnMenu: true,
        renderCell: (params) => {
            return (
                <Box sx={{ mx: 'auto', color: 'grey.700' }}>
                    <Tooltip title={params.value} placement='left'>
                        {params.value === 'Flight'
                            ? <FlightTakeoffIcon />
                            : <HotelOutlinedIcon />
                        }
                    </Tooltip>
                </Box>
            );
        }
    },
    {
        field: 'bookingDate',
        headerName: 'Date',
        type: 'date',
        minWidth: 120,
        // valueGetter: ({ value }) => value && moment(new Date(value)).format('DD MMM YYYY')
        renderCell: (params) => {
            return (moment(new Date(params.value)).format('DD MMM YYYY'));
        }
    },
    {
        field: 'bookingCode',
        headerName: 'Code',
        description: 'Booking Code',
        minWidth: 120,
        renderCell: (params) => {
            return (<Typography variant='button' sx={{ color: 'info.dark' }}>{params.value}</Typography>)
        }
    },
    {
        field: 'bookingItem',
        headerName: 'Booking Item',
        flex: 1,
        renderCell: (params) => {
            return (<Link to={params.row.id} className='booking-link'>{params.value}</Link>);
        }
    },
    { field: 'contact', headerName: 'Contact', flex: 1 },
    {
        field: 'bookingStatus',
        headerName: 'Booking Status',
        minWidth: 180,
        renderCell: (params) => {
            const status = (params.value).replace(' ','_').toLowerCase();
            let statusColor = '';

            switch (status) {
                case 'success':
                    statusColor = 'success';
                    break;
                case 'failed':
                case 'payment_timeout':
                    statusColor = 'error';
                    break;
                case 'pending_issuance':
                    statusColor = 'warning';
                    break;
                default:
                    statusColor = 'info';
            }
            return (<Chip label={params.value} variant='outlined' size='small' color={statusColor} />);
        }
    },
];

const BookingItems = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [bookings, setBookings] = useState();
    const [pageSize, setPageSize] = useState(10);
    const axiosPrivate = useAxiosPrivate();
    const navigate = useNavigate();
    const location = useLocation();
    // const effectRan = useRef(false);

    useEffect(() => {
        let isMounted = true;
        const controller = new AbortController();

        // if (effectRan.current === true) {
            const getBookings = async () => {
                try {
                    const response = await axiosPrivate.get('/bookings', {
                        signal: controller.signal
                    });

                    console.log(response.data);
                    isMounted && setBookings(response.data);

                } catch(err) {
                    console.error(err);
                    navigate('/login', { state: { from: location }, replace: true });
                }
            }

            getBookings();
        // }

        return () => {
            // effectRan.current = true;
            isMounted = false;
            setIsLoading(false);
            controller.abort();
        }
    }, []);

    return (
        <>
            {!isLoading ?
                bookings?.length ?
                (
                    <Paper elevation={0}>
                        <DataGrid
                            autoHeight
                            density='comfortable'
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
                            columns={columns}
                            pageSize={pageSize}
                            onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
                            rowsPerPageOptions={[10, 20, 40, 80, 100]}
                            initialState={{
                                sorting: {
                                    sortModel: [{ field: 'bookingDate', sort: 'desc' }],
                                }
                            }}
                            sx={{ '& .booking-link': { color: 'primary.main' }}}
                            // checkboxSelection
                        />
                    </Paper>
                ) : <Typography paragraph>No Bookings Found</Typography>
            : 
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    minHeight: '60vh'
                }}>
                    <PageLoader />
                </Box>
            }
        </>
    );
}

export default BookingItems;