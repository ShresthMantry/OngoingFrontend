import React, { useState, useEffect } from "react";
import { getUserProfile, updateUserProfile } from "../services/user.service";
import CarStr from "./CarStr";

function UserProfile() {
  const [cars, setCars] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const userProfile = await getUserProfile();
        setName(userProfile.name);
        setEmail(userProfile.email);
        setPhone(userProfile.phone);
        setAddress(userProfile.address);
        setCity(userProfile.city);
        setZipCode(userProfile.zipCode);
        setCars(userProfile.cars);
      } catch (error) {
        setError(error.response.data.error);
      }
    };

    fetchUserProfile();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateUserProfile({ name, phone, address, city, zipCode });
      setError("Profile updated successfully");
    } catch (error) {
      setError(error.response.data.error);
    }
  };


  return (
    <div>
      {error && <div>{error}</div>}
    
      <h2>User Profile</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input type="email" placeholder="Email" value={email} disabled />
        <input
          type="text"
          placeholder="Phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <input
          type="text"
          placeholder="Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <input
          type="text"
          placeholder="City"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <input
          type="text"
          placeholder="Zip Code"
          value={zipCode}
          onChange={(e) => setZipCode(e.target.value)}
        />
        <button type="submit">Update Profile</button>
      </form>
      <CarStr cars={cars}></CarStr>
    </div>
  );
}

export default UserProfile;
