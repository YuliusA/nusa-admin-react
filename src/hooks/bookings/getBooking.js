import { useEffect, useState } from 'react';
import useAxiosPrivate from '../useAxiosPrivate';

export const GetBookingbyId = (id) => {
    const [isLoading, setIsLoading] = useState(true);
    const [booking, setBooking] = useState();
    const axiosPrivate = useAxiosPrivate();

    useEffect(() => {
        let isMounted = true;

        if (!booking && isMounted) {
            const getBooking = async () => {
                try {
                    const response = await axiosPrivate.get(`/bookings/${id}`);

                    isMounted && setBooking(response.data)
                }
                catch (err) {
                    console.log(err)
                }
                finally {
                    isMounted && setIsLoading(false);
                }
            }

            getBooking();

            return () => {
                isMounted = false;
            }
        }
    }, [booking]);

    return booking;
}