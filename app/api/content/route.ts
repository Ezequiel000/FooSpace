const posts = [
  {
    title: "Carlos: The Muralist of East LA",
    slug: "carlos-the-muralist-of-east-la",
    content:
      "Meet Carlos, a local artist transforming the urban landscape of East LA with his vibrant murals, infusing cultural pride into every stroke...",
  },
  {
    title: "Luisa's Urban Farm",
    slug: "luisas-urban-farm",
    content:
      "In the heart of East LA, Luisa has turned a vacant lot into a flourishing urban farm, providing fresh produce for the community...",
  },
  {
    title: "DJ Manny: Spinning Beats in East LA",
    slug: "dj-manny-spinning-beats-in-east-la",
    content:
      "DJ Manny, the heart of East LA's underground music scene, spins tracks that reflect the eclectic mix of his vibrant community...",
  },
  {
    title: "Roberto's Youth Center",
    slug: "robertos-youth-center",
    content:
      "Roberto, a former professional skateboarder, established a youth center in East LA, offering a safe space for local kids to connect and grow...",
  },
  {
    title: "Rosa: The Teacher Making a Difference",
    slug: "rosa-the-teacher-making-a-difference",
    content:
      "Meet Rosa, a dedicated teacher in East LA, whose innovative teaching methods are making a difference in the lives of her students...",
  },
];

import { NextResponse } from "next/server";

export function GET() {
  return NextResponse.json(posts);
}
