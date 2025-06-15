package com.sanket.hotelo.service.interfac;

import com.sanket.hotelo.dto.Response;
import com.sanket.hotelo.entity.Booking;

public interface IBookingService {

    Response saveBooking(Long roomId, Long userId, Booking bookingRequest);

    Response findBookingByConfirmationCode(String confirmationCode);

    Response getAllBookings();

    Response cancelBooking(Long bookingId);

}
