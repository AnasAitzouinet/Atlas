"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { AddDestinationSchema } from "@/Schemas";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState, useEffect } from "react";
import { useUploadFile } from "@/hooks/use-upload-file";
import { toast } from "sonner";
import { getErrorMessage } from "@/lib/handle-error";
import { FileUploader } from "../file-uploader";
import { UploadedFilesCard } from "../uploaded-files-card";
import { AddDestinationServer } from "@/server";

enum DestinationType {
    Trips = "Trips",
    Activities = "Activities"
}
export default function AddDestination() {
    const [loading, setLoading] = useState(false);
    const [type, setType] = useState<DestinationType>(DestinationType.Trips);
    const [formData, setFormData] = useState<z.infer<typeof AddDestinationSchema>>();

    const { uploadFiles, progresses, uploadedFiles, isUploading } = useUploadFile(
        "imageUploader",
        { defaultUploadedFiles: [] }
    );

    const form = useForm<z.infer<typeof AddDestinationSchema>>({
        resolver: zodResolver(AddDestinationSchema),
    });

    const onSubmit = (values: z.infer<typeof AddDestinationSchema>) => {
        setLoading(true);
        setFormData(values);
        toast.promise(uploadFiles(values.images!), {
            loading: "Uploading image...",
            success: () => "Images uploaded",
            error: (err) => getErrorMessage(err),
        });
    };

    useEffect(() => {
        
        if (uploadedFiles.length > 0 && formData) {
            // Perform the server request with formData here
            console.log("Form data:", formData);
            console.log("Uploaded files:", uploadedFiles);
            const data = {
                title: formData.title,
                subtitle: formData.subtitle,
                VideoUrl: formData.VideoUrl,
                pricePrivate: formData.pricePrivate,
                priceShuttle: formData.priceShuttle,
                image: uploadedFiles.map((file) => file.url)[0],
                type,
            }
            console.log("data:", data);
            AddDestinationServer(data).then(() => {
                toast.success("Destination added successfully");
            }).catch((err) => {
                toast.error(getErrorMessage(err));
            }).finally(() => {
                setLoading(false);
                form.reset();
                uploadFiles([]);
            });
        }
    }, [uploadedFiles, formData]);

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 w-full p-2">
                <Tabs defaultValue="account" className="w-full">
                    <TabsList>
                        <TabsTrigger value="general"
                            className={`
                        ${form.formState.isSubmitted &&
                                    (form.formState.errors.title ||
                                        form.formState.errors.subtitle ||
                                        form.formState.errors.type)
                                    ? "text-red-500 italic"
                                    : ""}
                            `}
                        >General</TabsTrigger>
                        <TabsTrigger value="image">Image</TabsTrigger>
                    </TabsList>

                    <TabsContent value="general" className="space-y-2">
                        <FormField
                            control={form.control}
                            name="type"
                            render={({ field }) => (
                                <div className="flex pt-5 w-full justify-start gap-5 items-center ">
                                    <Button
                                        onClick={() => {
                                            setType(DestinationType.Trips);
                                            field.onChange("Trips");
                                        }}
                                        type="button" className={`w-full
                                        ${type === "Trips" ?
                                                "hover:bg-accent hover:text-accent-foreground "
                                                :
                                                "border border-input bg-background hover:bg-accent hover:text-accent-foreground text-black"
                                            }
                                        `}>
                                        Trips
                                    </Button>
                                    <Button
                                        onClick={() => {
                                            setType(DestinationType.Activities);
                                            field.onChange("Activities");
                                        }}
                                        type="button" className={`w-full
                                        ${type === "Activities" ?
                                                "hover:bg-accent hover:text-accent-foreground "
                                                :
                                                "border border-input bg-background hover:bg-accent hover:text-accent-foreground text-black"}
                                        `}>
                                        Activities
                                    </Button>
                                </div>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="title"
                            render={({ field }) => (
                                <FormItem className="w-full">
                                    <FormLabel>Title</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Marrakech" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="subtitle"
                            render={({ field }) => (
                                <FormItem className="w-full">
                                    <FormLabel>Subtitle</FormLabel>
                                    <FormControl>
                                        <Input placeholder="endure the beauty of Something" className="w-full" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="VideoUrl"
                            render={({ field }) => (
                                <FormItem className="w-full">
                                    <FormLabel>Video Url</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Video Url" className="w-full" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <div className="flex w-full justify-start gap-5 items-center">
                            <FormField
                                control={form.control}
                                name="pricePrivate"
                                render={({ field }) => (
                                    <FormItem className="w-full">
                                        <FormLabel>Private Price</FormLabel>
                                        <FormControl>
                                            <Input placeholder="price for private" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="priceShuttle"
                                render={({ field }) => (
                                    <FormItem className="w-full">
                                        <FormLabel>Shuttle Price</FormLabel>
                                        <FormControl>
                                            <Input placeholder="price for shuttle" className="w-full" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                    </TabsContent>

                    <TabsContent value="image">
                        <FormField
                            control={form.control}
                            name="images"
                            render={({ field }) => (
                                <div className="space-y-6">
                                    <FormItem className="w-full">
                                        <FormLabel>Images</FormLabel>
                                        <FormControl>
                                            <FileUploader
                                                value={field.value}
                                                onValueChange={field.onChange}
                                                maxFiles={1}
                                                maxSize={4 * 1024 * 1024}
                                                progresses={progresses}
                                                disabled={isUploading}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                    {uploadedFiles.length > 0 ? (
                                        <UploadedFilesCard uploadedFiles={uploadedFiles} />
                                    ) : null}
                                </div>
                            )}
                        />
                    </TabsContent>
                </Tabs>
                <Button type="submit" disabled={loading || isUploading}>Submit</Button>
            </form>
        </Form>
    );
}
