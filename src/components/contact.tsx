'use client';

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import Link from "next/link";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export default function Contacto() {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL || "https://calendly.com";

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (loading) return;

    const form = e.currentTarget;
    const formData = new FormData(form);
    const payload = {
      nombre: String(formData.get("name") || ""),
      email: String(formData.get("email") || ""),
      mensaje: String(formData.get("message") || ""),
      empresa: String(formData.get("company") || ""),
    };

    try {
      setLoading(true);
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: payload.nombre,
          email: payload.email,
          message: payload.mensaje,
          company: payload.empresa,
        }),
      });

      const json = await res.json();
      if (!res.ok || !json.ok) throw new Error(json.error || "No se pudo enviar");

      toast({
        title: "✅ Mensaje enviado",
        description: "Gracias por contactarme, te responderé pronto.",
      });
      form.reset();
    } catch {
      toast({
        title: "❌ Error al enviar",
        description: "Por favor intenta de nuevo en unos minutos.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="contact" className="py-20 sm:py-28">
      <div className="container max-w-4xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="font-headline text-2xl md:text-4xl uppercase text-white">Contacto</h2>
          <p className="text-xs text-muted-foreground mt-2 max-w-2xl mx-auto">
            ¿Tienes un proyecto, una idea o simplemente quieres saludar? Escríbeme un mensaje.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-start bg-card p-8 md:p-10 border border-border/50">
          <form className="space-y-5" onSubmit={handleSubmit}>
            <div className="hidden" aria-hidden="true">
              <Label htmlFor="company">Empresa</Label>
              <Input id="company" name="company" type="text" tabIndex={-1} autoComplete="off" />
            </div>

            <div>
              <Label htmlFor="name" className="font-bold uppercase text-xs tracking-wider">Nombre</Label>
              <Input id="name" name="name" type="text" placeholder="Tu nombre" className="mt-2 bg-background rounded-none h-8 text-xs" required />
            </div>

            <div>
              <Label htmlFor="email" className="font-bold uppercase text-xs tracking-wider">Correo electrónico</Label>
              <Input id="email" name="email" type="email" placeholder="tucorreo@ejemplo.com" className="mt-2 bg-background rounded-none h-8 text-xs" required />
            </div>

            <div>
              <Label htmlFor="message" className="font-bold uppercase text-xs tracking-wider">Mensaje</Label>
              <Textarea id="message" name="message" placeholder="Escribe tu mensaje..." rows={5} className="mt-2 bg-background rounded-none text-xs py-2" required />
            </div>

            <Button
              type="submit"
              className="w-full font-bold uppercase tracking-wider text-xs rounded-none"
              size="sm"
              disabled={loading}
            >
              {loading ? "Enviando..." : "Enviar mensaje"}
            </Button>
          </form>

          <div className="text-center md:text-left mt-8 md:mt-0">
            <h3 className="font-headline text-lg uppercase text-white mb-3">O agenda una llamada</h3>
            <p className="text-xs text-muted-foreground mb-5">
              Programa una llamada introductoria de 30 minutos para hablar de tu proyecto en detalle.
            </p>

            <div className="flex flex-col sm:flex-row gap-2.5">
              <Button
                className="font-bold uppercase tracking-wider text-xs rounded-none border-2"
                variant="outline"
                size="sm"
                onClick={() => setOpen(true)}
              >
                Agendar aquí (recomendado)
              </Button>

              <Button asChild size="sm" className="font-bold uppercase tracking-wider text-xs rounded-none">
                <Link href={calendlyUrl} target="_blank" rel="noopener noreferrer">
                  Abrir en Calendly
                </Link>
              </Button>
            </div>

            <Dialog open={open} onOpenChange={setOpen}>
              <DialogContent className="max-w-2xl w-full p-0 overflow-hidden">
                <DialogHeader className="px-6 pt-6">
                <DialogTitle className="text-sm">Agenda tu llamada</DialogTitle>
                </DialogHeader>
                <div className="px-6 pb-6">
                  <div className="aspect-video w-full border border-border/50">
                    <iframe
                      src={calendlyUrl}
                      className="w-full h-full"
                      loading="lazy"
                      title="Calendly"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                  <p className="text-[11px] text-muted-foreground mt-3">
                    Si no puedes ver el calendario, usa el botón “Abrir en Calendly”.
                  </p>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </section>
  );
}