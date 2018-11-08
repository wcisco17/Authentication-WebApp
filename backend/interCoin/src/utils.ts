import { v4 } from "uuid"
import { Redis } from "ioredis";



export const createConfirmEmailLink = async (url: string, userId: number, redis: Redis) => {
    const id = v4();
    await redis.set(id, userId, "ex", 60 * 60 * 24);
    return `${url}/confirm/${id}`
}


// app.get("/confirm/:id", { req, res } => {
//   const { id } = req.params;

//   const userId = await Redis.get(id);

//   User.update({ id: userId }, { confirmed: true })
//   res.send("ok")
// })