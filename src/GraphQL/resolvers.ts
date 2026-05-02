import { randomUUID } from "crypto";

const uuid = randomUUID()
const users = [
    { id: uuid, name: "Rashid Narikkodan", email: "rashidnarikkodan20@gmail.com" },
];


export const resolvers = {
  Query: {
      users:()=>{
        return users
    },
    user:(_: any, args: { id: string })=>{
        return users.find((user)=>user.id == args.id)
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
