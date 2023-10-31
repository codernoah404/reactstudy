import React from "react";
import { useParams } from "react-router-dom";

export default function RoomDetail() {
  const { roomId } = useParams();

  return (
    <div>
      RoomDetail
      <div>{roomId}</div>
    </div>
  );
}
