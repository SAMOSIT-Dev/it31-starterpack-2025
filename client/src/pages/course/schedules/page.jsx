import HouseTicket from "@/components/schedule/HouseTicket";
import { useQuery } from "@tanstack/react-query";
import houseService from "@/api/house.service";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      delay: i * 0.1,
      ease: "easeOut",
    },
  }),
};

export default function ScheduleLandingPage() {
  const { data: houses, isLoading, error } = useQuery({
    queryKey: ['houses'],
    queryFn: () => houseService.getHouses(),
    retry: 3,
    staleTime: 5 * 60 * 1000,
  });

  if (isLoading) {
    return (
      <div className="min-h-screen text-white bg-gradient-custom flex items-center justify-center">
        <div className="animate-pulse">Loading houses...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen text-white relative overflow-hidden bg-gradient-custom">
      <div className="container-responsive pt-20 pb-12">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold font-inter mb-4">
            What's your house
          </h1>
          {error && (
            <p className="text-yellow-400 text-sm">
              Using cached data - API connection issue
            </p>
          )}
        </div>

        <div className="space-y-2 max-w-2xl mx-auto">
          {houses.map((house, index) => (
            <motion.div
              key={house.id}
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              custom={index}
            >
              <HouseTicket house={house} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
