const post = [
    [
        {
          "title": "Carlos: The Muralist of East LA",
          "slug": "carlos-the-muralist",
          "content": "Meet Carlos, a local artist transforming the urban landscape of East LA with his vibrant murals, infusing cultural pride into every stroke..."
        },
        {
          "title": "Luisa's Urban Farm",
          "slug": "luisa-urban-farm",
          "content": "In the heart of East LA, Luisa has turned a vacant lot into a flourishing urban farm, providing fresh produce for the community..."
        },
        {
          "title": "DJ Manny: Spinning Beats in East LA",
          "slug": "dj-manny",
          "content": "DJ Manny, the heart of East LA's underground music scene, spins tracks that reflect the eclectic mix of his vibrant community..."
        },
        {
          "title": "Roberto's Youth Center",
          "slug": "roberto-youth-center",
          "content": "Roberto, a former professional skateboarder, established a youth center in East LA, offering a safe space for local kids to connect and grow..."
        },
        {
          "title": "Rosa: The Teacher Making a Difference",
          "slug": "rosa-the-teacher",
          "content": "Meet Rosa, a dedicated teacher in East LA, whose innovative teaching methods are making a difference in the lives of her students..."
        }
      ]
      
]

import { NextResponse } from "next/server"

export async function GET(){
    return NextResponse.json(post);
}