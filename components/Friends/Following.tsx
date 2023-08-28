import { prisma } from "@/lib/prisma";
import { Metadata } from "next";
import UserCard from "../UserCard/UserCard";
 
 interface Props{
    userId: string;
 }
 

 export default async function Following({userId}:Props){
    const follower = await prisma.user.findUnique({where:{id:userId}})
    return (
        <div>
            <UserCard {...follower!}/>
        </div>
        

    );
 }