import FollowButton from "@/components/FollowButton/FollowButton";
import { prisma } from "@/lib/prisma";
import { Metadata } from "next";
import Following from "@/components/Friends/Following";
import UserCard from "@/components/UserCard/UserCard";

interface Props {
  params: {
    id: string;
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const user = await prisma.user.findUnique({ where: { id: params.id } });
  return { title: `User profile of ${user?.name}` };
}

export default async function UserProfile({ params }: Props) {
  const user = await prisma.user.findUnique({ where: { id: params.id } });
  const { name, bio, image, id } = user ?? {};
  const followers= await prisma.follows.findMany({where:{followingId: id}})
  const following = await prisma.follows.findMany({where: {followerId: id}})
  
  console.log(followers)
  console.log(following )
 

  return (
    <div>
      <h1>{name}</h1>

      <img
        width={300}
        src={image ?? "/mememan.webp"}
        alt={`${name}'s profile`}
      />

      <h3>Bio</h3>
      <p>{bio}</p>

      <FollowButton targetUserId={params.id} />
      
      
      <div>
      <h3>Followers</h3>
      {followers.map((follows)=>{
        return <Following key={follows.followerId} userId={follows.followerId}/>
      })}
      </div>

      <div>
      <h3>Following</h3>
      {following.map((follows)=>{
        return <Following key={follows.followingId} userId={follows.followingId}/>
      })}
      </div>

     

      
      
    </div>
  );
}
