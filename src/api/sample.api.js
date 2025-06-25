import { request } from "@/libs/request";
import { useMutation, useQuery } from "@tanstack/react-query";

export const SampleApiTemplate = {
  /**
   *
   * @param {import("@tanstack/react-query").UseQueryOptions} opts
   * @returns
   */
  getSomething: (opts = {}) =>
    useQuery({
      queryKey: ["schedules"],
      mutationFn: () => request.get(""),
      ...opts,
    }),
  /**
   *
   * @param {import("@tanstack/react-query").UseMutationOptions} opts
   * @returns
   */
  doSomething: (opts = {}) =>
    useMutation({
      ...opts,
      mutationFn: () => request.post(""),
    }),
};
