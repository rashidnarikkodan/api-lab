import { randomUUID } from "crypto";
import { User, users } from "../data/users";

const uuid = randomUUID()

export const resolvers = {
  Query: {
      users:()=>{
        return users
    },
    user:(_: any, args: { id: string })=>{
        return users.find((user:User)=>user.id == args.id)
    }
},
Mutation: {
    createUser:(_:any,args:{name:string,email:string})=>{
        const uuid = randomUUID()
        console.log('user UUID - ',uuid)
        const user = {id:uuid,name:args.name,email:args.email}
        users.push(user)
        return user
    }
  },
};
