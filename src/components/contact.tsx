'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { useToast } from "@/hooks/use-toast"
import Link from "next/link"

export default function Contact() {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thanks for reaching out. I'll get back to you soon.",
    });
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="contact" className="py-24 sm:py-32">
      <div className="container max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-headline text-5xl md:text-7xl uppercase text-white">Get In Touch</h2>
          <p className="text-lg text-muted-foreground mt-2 max-w-2xl mx-auto">Have a project, an idea, or just want to say hi? Drop me a line.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-start bg-card p-8 md:p-12 border border-border/50">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <Label htmlFor="name" className="font-bold uppercase text-sm tracking-wider">Name</Label>
              <Input id="name" name="name" type="text" placeholder="Your Name" className="mt-2 bg-background rounded-none" required />
            </div>
            <div>
              <Label htmlFor="email" className="font-bold uppercase text-sm tracking-wider">Email</Label>
              <Input id="email" name="email" type="email" placeholder="you@example.com" className="mt-2 bg-background rounded-none" required />
            </div>
            <div>
              <Label htmlFor="message" className="font-bold uppercase text-sm tracking-wider">Message</Label>
              <Textarea id="message" name="message" placeholder="Your message..." rows={5} className="mt-2 bg-background rounded-none" required />
            </div>
            <Button type="submit" className="w-full font-bold uppercase tracking-wider text-lg rounded-none" size="lg">Send Message</Button>
          </form>
          <div className="text-center md:text-left mt-8 md:mt-0">
            <h3 className="font-headline text-3xl uppercase text-white mb-4">Or Book A Call</h3>
            <p className="text-muted-foreground mb-6">Schedule a 30-minute introductory call to discuss your project in detail.</p>
            <Button asChild variant="outline" className="w-full md:w-auto font-bold uppercase tracking-wider text-lg rounded-none border-2" size="lg">
              <Link href="https://calendly.com" target="_blank" rel="noopener noreferrer">
                Book with Calendly
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
