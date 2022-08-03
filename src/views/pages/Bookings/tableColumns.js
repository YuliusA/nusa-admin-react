import { Link } from 'react-router-dom';
import moment from 'moment';

// Mui Components
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Tooltip from '@mui/material/Tooltip';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import HotelOutlinedIcon from '@mui/icons-material/HotelOutlined';
import BorderClearIcon from '@mui/icons-material/BorderClear';

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
        // width: 70,
        align: 'center',
        headerAlign: 'center',
        renderHeader: () => (<BorderClearIcon />),
        sortable: false,
        disableColumnMenu: true,
        renderCell: (params) => {
            return (
                <Tooltip title={params.value} placement='left'>
                    {params.value === 'Flight'
                        ? <FlightTakeoffIcon fontSize='small' color='warning' />
                        : <HotelOutlinedIcon fontSize='small' color='primary' />
                    }
                </Tooltip>
            );
        }
    },
    {
        field: 'bookingDate',
        headerName: 'Date',
        type: 'date',
        minWidth: 120,
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
    },
    {
        field: 'contact',
        headerName: 'Contact',
        flex: 1
    },
    {
        field: 'bookingStatus',
        headerName: 'Booking Status',
        flex: 1,
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

export default columns;