import { Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import telegramIcon from "@/assets/telegram-icon.png";

export function Contact() {
  const contactMethods = [
    {
      icon: <Mail className="w-6 h-6" />,
      contact: "solutions@activ8pay.com"
    },
    {
      icon: <img src={telegramIcon} alt="Telegram" className="w-6 h-6" />,
      contact: "@activ8pay"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      contact: "Vienna, Austria"
    },
  ];

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-screen-xl mx-auto">
          <div className="max-w-lg mx-auto gap-12 justify-between lg:flex lg:max-w-none">
            <div className="max-w-lg space-y-3">
              <h3 className="text-[#0044CC] font-semibold">
                Contact
              </h3>
              <p className="text-[#0A1128] text-3xl font-semibold sm:text-4xl">
                Let us know how we can help
              </p>
              <p className="text-[#0A1128]/70">
                We're here to help and answer any question you might have. We look forward to hearing from you! Please fill out the form, or use the contact information below.
              </p>
              <div>
                <ul className="mt-6 flex flex-wrap gap-x-10 gap-y-6 items-center">
                  {contactMethods.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-x-3">
                      <div className="flex-none text-[#0A1128]/60">
                        {item.icon}
                      </div>
                      <p className="text-[#0A1128]">{item.contact}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="flex-1 mt-12 sm:max-w-lg lg:max-w-md">
              <form
                onSubmit={(e) => e.preventDefault()}
                className="space-y-5"
              >
                <div>
                  <Label htmlFor="name" className="font-medium">
                    Full name
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    required
                    className="w-full mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="font-medium">
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    className="w-full mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="company" className="font-medium">
                    Company
                  </Label>
                  <Input
                    id="company"
                    type="text"
                    required
                    className="w-full mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="message" className="font-medium">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    required
                    className="w-full mt-2 h-36 resize-none"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-[#B3CBB9] hover:bg-[#9fb8a6] text-[#0A1128]"
                  size="lg"
                >
                  Submit
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
