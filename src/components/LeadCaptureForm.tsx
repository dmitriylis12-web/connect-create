import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { toast } from "sonner";

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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const formSchema = z.object({
  fullName: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  revenue: z.string({
    required_error: "Please select your current monthly revenue.",
  }),
});

interface LeadCaptureFormProps {
  onSuccess?: () => void;
}

export function LeadCaptureForm({ onSuccess }: LeadCaptureFormProps) {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // In a real app, this would send data to an API (like Supabase, Zapier, etc.)
    console.log(values);
    
    // Show success toast
    toast.success("Application Submitted!", {
      description: "We've received your information and will be in touch shortly. Keep an eye on your inbox.",
      duration: 5000,
    });
    
    // Call onSuccess callback (to close the modal)
    if (onSuccess) {
      onSuccess();
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 mt-4">
        <FormField
          control={form.control}
          name="fullName"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-foreground">Full Name</FormLabel>
              <FormControl>
                <Input placeholder="John Doe" className="bg-background/50 border-white/10 text-foreground" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-foreground">Email Address</FormLabel>
              <FormControl>
                <Input placeholder="john@example.com" type="email" className="bg-background/50 border-white/10 text-foreground" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="revenue"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-foreground">Current Monthly Revenue</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="bg-background/50 border-white/10 text-foreground">
                    <SelectValue placeholder="Select revenue range" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="0-10k">$0 - $10,000</SelectItem>
                  <SelectItem value="10k-50k">$10,000 - $50,000</SelectItem>
                  <SelectItem value="50k-100k">$50,000 - $100,000</SelectItem>
                  <SelectItem value="100k+">$100,000+</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold">
          Submit Application
        </Button>
      </form>
    </Form>
  );
}
