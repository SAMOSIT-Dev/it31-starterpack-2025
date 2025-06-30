import { request } from "@/libs/utils/request";
import { useQuery } from "@tanstack/react-query";

export const Events = {
    /**
     *
     * @param {import("@tanstack/react-query").UseQueryOptions} opts
     * @returns
     */
    getSomething: (opts = {}) =>
        useQuery({
            queryKey: ["events"],
            queryFn: async () => {
                const res = await request.get("/events");
                return res.data;
            },
            ...opts,
        }),

};
