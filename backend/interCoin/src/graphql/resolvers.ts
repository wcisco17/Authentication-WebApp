import { IResolvers } from "graphql-tools";
import { User } from '../entity/User'
import * as bcrypt from 'bcryptjs'
import { sendConfirmationEmail } from "../confirmEmail";
// import { createConfirmEmailLink } from "../utils";


export const resolvers: IResolvers = {
    Query: {
        user: async (_, __, { req }) => {
            if (!req.session.userId) return null
            return await User.findOne(req.session.userId)

        }
    },

    Mutation: {
        registerUser: async (_, { username, email, phone_number , password }, { req }) => {
            const hashPassoword = await bcrypt.hash(password, 10)
            sendConfirmationEmail
            
            await User.create({
                username,
                email,
                phone_number,
                password: hashPassoword,
            }).save()
            const user = await User.findOne(req.session.userId)
            if (!user) {
                throw new Error('No User')
            }
            
            // sendConfirmationEmail(user, req)
            return true
        },

        login: async (_, { email, password }, { req })  => {
            const user = await User.findOne({ where: { email } })
            if (!user) {
                throw new Error("Invalid No User, Please Sign Up")
            }

                const valid = await bcrypt.compare(password, user.password)

                if(!valid) {
                    throw new Error("Invalid: Wrong Password")
                }

                req.session.userId = user.id

                return user
        },

        sendLinkToValidateEmail: async (_,__, { req }) => {
            const user = await User.findOne(req.session.userId)
            if (!user) {
                throw new Error('No User')
            }
            return sendConfirmationEmail(user, req)
            .then(() => {
                console.log('Success: ', user)
            })
            .catch(() => {
                throw new Error(`Cannot Send Email to: ${user.email} `)
            })
        },

        validateEmail: async (_, __, { req }) => {
            const userCheck = await User.findOne(req.session.userId)
            if (!userCheck) {
                throw new Error('No User')
            }

        },
        logout: async (_, __, { req }) => {
            const user = await User.findOne(req.session.userId)
            
            if (!user) {
                throw new Error("No User")
            }

            console.log(req.session.userId)
        },

        deleteUser: async (_,__, { req }) => {
            const user = await User.findOne(req.session.userId)
            if (!user) {
                throw new Error("No User to sign out")
            }
            if (user) {
                user.remove()
                return true
            }
            return false
        }
    }
}








