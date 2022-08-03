import Button from '@mui/material/Button';
import { useLocation, useNavigate } from 'react-router-dom';
import useLocalStorageState from 'use-local-storage-state';

const HotelsHome = () => {
    const [hotelTabs, setHotelTabs] = useLocalStorageState('hotel-tabs', {
        defaultValue: [{ id: 'hotel1', label: 'Hotel Tab', path: '/hotels'}]
    });

    const addTab = () => {
        setHotelTabs((hotelTabs, index) => [...hotelTabs, {
            id: `hotel-${(index + 1)}`,
            label: `Hotel ${(index + 1)}`,
            path: `/hotels/hotel-${(index + 1)}`
        }]);

        // navigate('/hotels/hotel1', { state: { from: location }, replace: true });
    }
    return (
        <>
        <h1>This is hotels home</h1>
        <Button onClick={addTab}>Add Tab</Button>
        </>
    );
}
export default HotelsHome;