var Hotel = require('../models/hotel');
var Room = require('../models/room');

var hotelController = {};

//Adding methods to the controller object
hotelController.create = (req, res) => {  //create a hotel
  var newHotel = new Hotel(req.body);

  newHotel.save()
    .then(item => res.send(`${item} created successfully`))
    .catch(err => console.log(`Couldn't create due to error ${err}.`));
}

hotelController.update = (req, res) => { //update a hotel
  Hotel.findByIdAndUpdate(
    req.params.id,
    { $set: { name: req.body.name, place: req.body.place, star: req.body.star } }
   ).then(item => res.send(`${item} updated.`))
    .catch(err => console.log(`${err} occured`));
}

hotelController.delete = (req, res) => { //delete a hotel
  Hotel.remove({_id: req.params.id})
    .then(item => res.send(`${item} deleted.`))
    .catch(err => console.log(`${err} occured`));
}

hotelController.createRooms = (req, res) => {
  var newRoom = new Room(req.body);

  newRoom.save()
    .then(item => res.send(`${item} created successfully`))
    .catch(err => console.log(`Couldn't create due to error ${err}.`));
}

hotelController.fetchRooms = (req, res) => {
  Room.find({
    max_occupancy: {$gte : req.body.max_occupancy},
    booked: {
      $not: {
        $elemMatch: {from: {$lt: req.body.to}, to: {$gt: req.body.from}}
      }
    }
  })
  .populate('Hotel')
  .exec((err, rooms) => {
    if(err)
      res.send(err);
    else {
      res.json(rooms);
    }
  })
}

hotelController.reserveRoom = (req, res) => {
  Room.findByIdAndUpdate(req.body.id, {
    $push: {booked: {from: req.body.from, to: req.body.to}}
  },
    {new : true},
    function(err, room){
      if(err)
        res.send(err);
      else {
        res.json(room);
      }
    }
  )
}

module.exports = hotelController;
