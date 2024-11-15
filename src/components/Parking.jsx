import React, { useState, useEffect } from "react";
import { X, Car, MapPin, Clock } from "lucide-react";

export default function ParkingModal({ onClose }) {
  const [sensorData, setSensorData] = useState({
    sensor1: null,
    sensor2: null,
  });
  const [isConnected, setIsConnected] = useState(false);
  const [spots, setSpots] = useState([
    { id: 1, sensor: null, location: "Level 1, A1" },
    { id: 2, sensor: null, location: "Level 1, A2" },
    { id: 3, sensor: true, location: "Level 1, A3" },
    { id: 4, sensor: false, location: "Level 1, A4" },
    { id: 5, sensor: true, location: "Level 1, B1" },
    { id: 6, sensor: true, location: "Level 1, B2" },
  ]);
  const NODEMCU_WS = "ws://192.168.82.206:81";

  useEffect(() => {
    const socket = new WebSocket(NODEMCU_WS);

    socket.onopen = () => {
      setIsConnected(true);
    };

    socket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      setSensorData(data);
      updateSpots(data);
    };

    socket.onerror = () => {
      setIsConnected(false);
    };

    socket.onclose = () => {
      setIsConnected(false);
    };

    return () => {
      socket.close();
    };
  }, []);

  const updateSpots = (data) => {
    setSpots((prev) =>
      prev.map((spot) => {
        if (spot.id === 1) return { ...spot, sensor: data.sensor1 };
        if (spot.id === 2) return { ...spot, sensor: data.sensor2 };
        return spot;
      })
    );
  };

  const handleBookSpot = (spotId) => {
    setSpots((prev) =>
      prev.map((spot) => {
        if (spot.id === spotId) {
          const bookingTime = new Date();
          const expiryTime = new Date(bookingTime.getTime() + 2 * 3000); // 2 minutes
          return {
            ...spot,
            isBooked: true,
            bookingTime: expiryTime.toLocaleTimeString(),
          };
        }
        return spot;
      })
    );

    // Auto-expire booking after 2 minutes
    setTimeout(() => {
      setSpots((prev) =>
        prev.map((spot) => {
          if (spot.id === spotId) {
            return { ...spot, isBooked: false, bookingTime: undefined };
          }
          return spot;
        })
      );
    }, 2 * 3000);
  };

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <div className="modal-header">
          <div className="modal-title">
            <Car className="car-icon" />
            Parking Availability
          </div>
          <button onClick={onClose} className="close-button">
            <X size={20} />
          </button>
        </div>

        <div className="modal-body">
          {!isConnected && (
            <div className="connecting-notice">
              Connecting to parking sensors...
            </div>
          )}

          <div className="spots-grid">
            {spots.map((spot) => (
              <div
                key={spot.id}
                className={`spot-card ${
                  spot.isBooked
                    ? "booked"
                    : spot.sensor
                    ? "available"
                    : "occupied"
                }`}
              >
                <div className="spot-header">
                  <span
                    className={`spot-title ${
                      spot.isBooked
                        ? "booked-text"
                        : spot.sensor
                        ? "available-text"
                        : "occupied-text"
                    }`}
                  >
                    Spot {spot.id}
                  </span>
                  <Car
                    className={
                      spot.isBooked
                        ? "booked-icon"
                        : spot.sensor
                        ? "available-icon"
                        : "occupied-icon"
                    }
                  />
                </div>
                <div className="spot-location">
                  <MapPin size={16} />
                  <span>{spot.location}</span>
                </div>
                <div className="spot-status">
                  <div
                    className={`spot-status-text ${
                      spot.isBooked
                        ? "booked-text"
                        : spot.sensor
                        ? "available-text"
                        : "occupied-text"
                    }`}
                  >
                    {spot.isBooked
                      ? `Reserved until ${spot.bookingTime}`
                      : spot.sensor
                      ? "Available"
                      : "Occupied"}
                  </div>
                  {spot.sensor && !spot.isBooked && (
                    <button
                      onClick={() => handleBookSpot(spot.id)}
                      className="book-button"
                    >
                      <Clock size={14} />
                      Book for 2 mins
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="info-section">
            <h3>Parking Information</h3>
            <ul className="info-list">
              <li>• First 2 hours free for café customers</li>
              <li>• Wheelchair accessible spots available</li>
              <li>• 24/7 security surveillance</li>
              <li>• Electric vehicle charging stations</li>
              <li>• Spot reservations valid for 2 minutes</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
