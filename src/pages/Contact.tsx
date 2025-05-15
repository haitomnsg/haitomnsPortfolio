import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { Mail, Phone, Facebook, Instagram, Linkedin, Github, ArrowUpRight } from "lucide-react";
import { useForm } from "react-hook-form";
import * as z from "zod";

const introText = "Whether it's brainstorming a new project, discussing design optimizations, or just sharing creative insights, I'm always excited to collaborate. Reach out to me and let's craft something exceptional — together!";

const contactLinks = [
  {
    icon: Mail,
    text: "haitomns@gmail.com",
    href: "mailto:haitomns@gmail.com",
    bgColor: "bg-red-100",
    iconColor: "text-red-600"
  },
  {
    icon: Phone,
    text: "+977 980 920 4764",
    href: "tel:+9779809204764",
    bgColor: "bg-yellow-100",
    iconColor: "text-yellow-600"
  },
  {
    icon: Facebook,
    text: "Facebook",
    href: "https://www.facebook.com/haitomnsg",
    bgColor: "bg-blue-100",
    iconColor: "text-blue-700"
  },
  {
    icon: Instagram,
    text: "Instagram",
    href: "https://www.instagram.com/haitomnsg/",
    bgColor: "bg-pink-100",
    iconColor: "text-pink-600"
  },
  {
    icon: Linkedin,
    text: "LinkedIn",
    href: "https://www.linkedin.com/in/haitomnsg/",
    bgColor: "bg-purple-100",
    iconColor: "text-purple-600"
  },
  {
    icon: Github,
    text: "GitHub",
    href: "https://github.com/haitomnsg/",
    bgColor: "bg-neutral-200",
    iconColor: "text-neutral-700"
  },
];

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }).max(500, { message: "Message must not exceed 500 characters." }),
  agreeToPolicy: z.boolean().refine(val => val === true, { message: "You must agree to the privacy policy." }),
});

type ContactFormValues = z.infer<typeof formSchema>;

interface ContactLinkItemProps {
  icon: React.ElementType;
  text: string;
  href: string;
  bgColor: string;
  iconColor: string;
}

const ContactLinkItem: React.FC<ContactLinkItemProps> = ({ icon: Icon, text, href, bgColor, iconColor }) => (
  <a
    href={href}
    target={href.startsWith("http") || href.startsWith("#") || href.startsWith("mailto:") || href.startsWith("tel:") ? "_blank" : "_self"}
    rel="noopener noreferrer"
    className={`flex items-center justify-between p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 ${bgColor}`}
  >
    <div className="flex items-center">
      <div className={`p-2 rounded-lg mr-3 ${iconColor} bg-white/60`}>
        <Icon className="w-5 h-5" />
      </div>
      <span className="font-medium text-foreground">{text}</span>
    </div>
    <ArrowUpRight className="w-5 h-5 text-muted-foreground" />
  </a>
);

const Contact = () => {
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
      agreeToPolicy: false,
    },
  });

  function onSubmit(data: ContactFormValues) {
    console.log("Form submitted (simulated):", data);
    setSuccessMessage("Your message has been sent successfully!");
    form.reset();

    setTimeout(() => {
      setSuccessMessage(null);
    }, 5000);
  }

  return (
    <section id="contact-section" className="space-y-12"> {/* Added section with ID */}
      {/* Header Section */}
      <section>
        <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
          <h1 className="text-4xl font-semibold text-foreground">Let's Connect!</h1>
          <div className="hidden md:flex items-center space-x-2 text-sm text-green-600">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
            </span>
            <span>Available for Projects</span>
          </div>
        </div>
        <div className="flex items-center space-x-2 text-sm text-green-600 md:hidden mb-4">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
          </span>
          <span>Available for Projects</span>
        </div>
        <p className="text-lg text-muted-foreground max-w-3xl">
          {introText}
        </p>
      </section>

      {/* Contact Links Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {contactLinks.map((link) => (
          <ContactLinkItem
            key={link.text}
            icon={link.icon}
            text={link.text}
            href={link.href}
            bgColor={link.bgColor}
            iconColor={link.iconColor}
          />
        ))}
      </section>

      {/* Get in Touch Form Section */}
      <section>
        <Card className="shadow-xl">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold text-foreground">Get in touch</CardTitle>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Your Name" {...field} />
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
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input placeholder="your@email.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Your Message"
                          className="resize-none min-h-[150px]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="agreeToPolicy"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel className="text-sm font-normal text-muted-foreground">
                          I Agree with Privacy Policy and Cookie Policy
                        </FormLabel>
                        <FormMessage />
                      </div>
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 text-lg py-6">
                  Send Message
                </Button>
                {successMessage && (
                  <div className="mt-4 p-3 rounded-md bg-green-100 text-green-700 text-sm text-center">
                    {successMessage}
                  </div>
                )}
              </form>
            </Form>
          </CardContent>
        </Card>
      </section>
    </section>
  );
};

export default Contact;