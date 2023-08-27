package com.hotel.cloud.repository;

import com.hotel.cloud.entity.RoomEntity;
import org.springframework.data.repository.CrudRepository;


public interface RoomRepository extends CrudRepository<RoomEntity, Long> {

    //RoomEntity findById(Long id);
}
