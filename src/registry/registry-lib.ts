import type { Registry } from "shadcn/schema";

export const lib: Registry["items"] = [
  {
    name: "utils",
    type: "registry:lib",
    title: "Utility Functions",
    author: "Vishwa J <anZpc2h3YS5vZmZpY2lhbEBnbWFpbC5jb20=>",
    dependencies: ["clsx", "tailwind-merge"],
    files: [
      {
        path: "src/lib/utils.ts",
        type: "registry:lib",
      },
    ],
  },
];
