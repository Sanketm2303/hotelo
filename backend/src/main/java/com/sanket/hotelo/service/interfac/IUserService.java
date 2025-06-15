package com.sanket.hotelo.service.interfac;

import com.sanket.hotelo.dto.LoginRequest;
import com.sanket.hotelo.dto.Response;
import com.sanket.hotelo.entity.User;

public interface IUserService {
    Response register(User user);

    Response login(LoginRequest loginRequest);

    Response getAllUsers();

    Response getUserBookingHistory(String userId);

    Response deleteUser(String userId);

    Response getUserById(String userId);

    Response getMyInfo(String email);

}
