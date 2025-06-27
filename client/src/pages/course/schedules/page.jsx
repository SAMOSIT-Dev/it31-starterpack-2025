import { Link } from "react-router";
import HouseTicket from "@/components/schedule/HouseTicket";

const houses = [
  {
    id: 'romance',
    name: 'Romance',
    number: 'NO.01',
    mobile: '/house-ticket/mobile/romance.png',
    desktop: '/house-ticket/desktop/romance.png'
  },
  {
    id: 'action',
    name: 'Action',
    number: 'NO.02',
    mobile: '/house-ticket/mobile/action.png',
    desktop: '/house-ticket/desktop/action.png'
  },
  {
    id: 'science-fiction',
    name: 'Science Fiction',
    number: 'NO.03',
    mobile: '/house-ticket/mobile/science-fiction.png',
    desktop: '/house-ticket/desktop/science-fiction.png'
  },
  {
    id: 'horror',
    name: 'Horror',
    number: 'NO.04',
    mobile: '/house-ticket/mobile/horror.png',
    desktop: '/house-ticket/desktop/horror.png'
  },
  {
    id: 'fantasy',
    name: 'Fantasy',
    number: 'NO.05',
    mobile: '/house-ticket/mobile/fantasy.png',
    desktop: '/house-ticket/desktop/fantasy.png'
  }
];

export default function ScheduleLandingPage() {
  return (
    <div className="min-h-screen text-white relative overflow-hidden bg-gradient-custom">
      {/* Content Container */}
      <div className="container-responsive pt-20 pb-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold font-inter mb-4">
            What's your house
          </h1>
        </div>

        {/* House Cards */}
        <div className="space-y-2 max-w-2xl mx-auto">
          {houses.map((house) => (
            <HouseTicket house={house} key={house.id} />
          ))}
        </div>
      </div>
    </div>
  );
}