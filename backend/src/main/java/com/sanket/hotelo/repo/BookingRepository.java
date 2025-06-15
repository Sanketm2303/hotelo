package com.sanket.hotelo.repo;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sanket.hotelo.entity.Booking;

public interface BookingRepository extends JpaRepository<Booking, Long> { 
	
	 Optional<Booking> findByBookingConfirmationCode(String confirmationCode);

}
