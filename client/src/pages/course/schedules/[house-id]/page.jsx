import { useLoaderData } from "react-router";

export function houseScheduleLoader({ params }) {
  return { houseId: params.houseId };
}

export function HouseSchedulePage() {
  const { houseId } = useLoaderData();

  return <div>House Id: {houseId}</div>;
}
