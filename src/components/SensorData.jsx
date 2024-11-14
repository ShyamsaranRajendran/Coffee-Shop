import React, { useState, useEffect } from "react";

const SensorData = () => {
  const [sensorData, setSensorData] = useState({
    sensor1: null,
    sensor2: null,
  });
  const [isConnected, setIsConnected] = useState(false);
  const NODEMCU_WS = "ws://192.168.82.206:81"; // Replace with your NodeMCU IP and port

  useEffect(() => {
    const socket = new WebSocket(NODEMCU_WS);

    socket.onopen = () => {
      console.log("Connected to WebSocket server");
      setIsConnected(true);
    };

    socket.onmessage = (event) => {
      console.log("Received data:", event.data);
      const data = JSON.parse(event.data);
      setSensorData(data);
    };

    socket.onerror = (error) => {
      console.error("WebSocket error:", error);
      setIsConnected(false);
    };

    socket.onclose = (event) => {
      console.log("WebSocket connection closed:", event.reason);
      setIsConnected(false);
    };

    return () => {
      socket.close();
    };
  }, []);

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h2>Car Parking Navigation</h2>
      {isConnected ? (
        <div style={styles.parkingGrid}>
          <div style={styles.parkingSpot(sensorData.sensor1)}>
            <span>Spot 1</span>
            <span>{sensorData.sensor1 ? "Available" : "Occupied"}</span>
          </div>
          <div style={styles.parkingSpot(sensorData.sensor2)}>
            <span>Spot 2</span>
            <span>{sensorData.sensor2 ? "Available" : "Occupied"}</span>
          </div>
        </div>
      ) : (
        <p>Connecting to WebSocket server...</p>
      )}
      <div style={{ marginTop: "20px" }}>
        <a
          href="https://your-link.com"
          style={styles.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn more about our parking system
        </a>
      </div>
    </div>
  );
};

const styles = {
  parkingGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: "20px",
    margin: "20px auto",
    maxWidth: "400px",
  },
  parkingSpot: (isAvailable) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px",
    borderRadius: "8px",
    backgroundColor: isAvailable ? "#4CAF50" : "#F44336",
    color: "white",
    fontWeight: "bold",
  }),
  link: {
    color: "#1E90FF",
    textDecoration: "none",
    fontSize: "16px",
    fontWeight: "bold",
  },
};

export default SensorData;
