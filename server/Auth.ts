"use server"
import { SignUpSchemaType, SignUpSchema, LoginSchemaType, LoginSchema } from "@/Schemas/index"
import { createSession, getSession } from "@/lib/session";
import { redirect } from "next/navigation";
import db from "@/lib/prisma";
import bcrypt from 'bcryptjs'

export async function SignInAction(values: LoginSchemaType): Promise<void | Error> {
    try {
        // Validate and parse input data
        const validatedData = LoginSchema.parse(values);

        if (!validatedData) {
            return new Error('error occured')
        }

        const { email, password } = validatedData;

        // Check if a user session already exists
        const session = await getSession();

        if (session && session.userId) {
            redirect('/Profile');
            return; // Ensure the function exits after redirect
        }

        // Retrieve user from the database
        const user = await db.user.findUnique({ where: { email } });

        if (!user) {
            return new Error('Invalid email or password');
        }

        // Verify password
        const validPass = await bcrypt.compare(password, user.password);

        if (!validPass) {
            return new Error('Invalid email or password');
        }

        // Create a new session for the user
        await createSession(user.id, user.role);

        // Redirect to the profile page
        redirect('/Profile');

    } catch (error) {
        // Handle unexpected errors
        return new Error(error instanceof Error ? error.message : 'An unexpected error occurred');
    }
}

export async function SignUpAction(values: SignUpSchemaType): Promise<void | Error>  {
    try {
        const validatedData = SignUpSchema.parse(values);

        if (!validatedData) {
            return new Error('error occured')
        }

        const {
            firstName,
            lastName,
            email,
            password,
            phone
        } = validatedData

        // Check if a user session already exists
        const session = await getSession();

        if (session && session.userId) {
            redirect('/Profile');
            return; // Ensure the function exits after redirect
        }

        const hashedPass = await bcrypt.hash(password, 10)

        const newUser = await db.user.create({
            data: {
                firstName,
                lastName,
                email,
                password: hashedPass,
                phone
            }
        })

        if (!newUser) {
            return new Error('error occured')
        }
        // Create a new session for the user
        await createSession(newUser.id, newUser.role);

        // Redirect to the profile page
        redirect('/Profile');

    } catch (error) {
        return new Error(error instanceof Error ? error.message : 'An unexpected error occurred');
    }
}