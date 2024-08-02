"use client";
import { ReactHookFormDemo } from '@/components/UploadAvatar';
import React from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function page() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Upload An Avatar</CardTitle>
       </CardHeader>
      <CardContent>
        <ReactHookFormDemo />
      </CardContent>
    </Card>
  )
}
