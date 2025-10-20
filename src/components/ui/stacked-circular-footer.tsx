import { Button } from "@/components/ui/button"
import { Linkedin, Mail } from "lucide-react"
import logo from '@/assets/activ8pay-logo-main.png'
import telegramIcon from '@/assets/telegram-icon.png'

function StackedCircularFooter() {
  return (
    <footer className="bg-background py-12 border-t">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center">
          <div className="mb-8">
            <img src={logo} alt="Activ8Pay" className="h-32 w-auto" />
          </div>
          <nav className="mb-8 flex flex-wrap justify-center gap-6">
            <a href="#hero" className="hover:text-primary transition-colors">Home</a>
            <a href="#about" className="hover:text-primary transition-colors">About</a>
            <a href="#services" className="hover:text-primary transition-colors">Services</a>
            <a href="#faq" className="hover:text-primary transition-colors">FAQ</a>
            <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
          </nav>
          <div className="mb-8 flex space-x-4">
            <Button variant="outline" size="icon" className="rounded-full" asChild>
              <a href="https://www.linkedin.com/company/activ8pay/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-4 w-4" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </Button>
            <Button variant="outline" size="icon" className="rounded-full" asChild>
              <a href="mailto:solutions@activ8pay.com">
                <Mail className="h-4 w-4" />
                <span className="sr-only">Email</span>
              </a>
            </Button>
            <Button variant="outline" size="icon" className="rounded-full" asChild>
              <a href="https://t.me/activ8pay" target="_blank" rel="noopener noreferrer">
                <img src={telegramIcon} alt="Telegram" className="h-4 w-4" />
                <span className="sr-only">Telegram</span>
              </a>
            </Button>
          </div>
          <div className="text-center">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Activ8Pay. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export { StackedCircularFooter }
