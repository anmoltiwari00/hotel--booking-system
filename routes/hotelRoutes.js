var express = require('express');
var router = express.Router();

var hotel = require('../controllers/hotelController');

//create hotel
router.post('/v0/hotel', hotel.create);

//update hotel
router.put('/v0/hotel/:id', hotel.update);

//delete hotel
router.delete('/v0/hotel/:id', hotel.delete);

//create rooms
router.post('/v0/hotel/rooms', hotel.createRooms);

//fetch available rooms
router.get('/v0/hotel/rooms', hotel.fetchRooms);

//reserve hotel room
router.put('/v0/hotel/rooms', hotel.reserveRoom);

module.exports = router;
