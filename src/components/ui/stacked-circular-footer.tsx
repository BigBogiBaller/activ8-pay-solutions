import { Button } from "@/components/ui/button"
import logo from '@/assets/activ8pay-logo-white.png'
import telegramIcon from '@/assets/telegram-icon.png'
import gmailIcon from '@/assets/gmail-icon.png'
import linkedinIcon from '@/assets/linkedin-icon.png'

function StackedCircularFooter() {
  return (
    <footer className="bg-[#0A1128] py-12 border-t border-white/10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center">
          <div className="mb-8">
            <img src={logo} alt="Activ8Pay" className="h-32 w-auto" />
          </div>
          <nav className="mb-8 flex flex-wrap justify-center gap-6">
            <a href="#hero" className="text-white/80 hover:text-white transition-colors">Home</a>
            <a href="#about" className="text-white/80 hover:text-white transition-colors">About</a>
            <a href="#services" className="text-white/80 hover:text-white transition-colors">Services</a>
            <a href="#faq" className="text-white/80 hover:text-white transition-colors">FAQ</a>
            <a href="#contact" className="text-white/80 hover:text-white transition-colors">Contact</a>
          </nav>
          <div className="mb-8 flex space-x-4">
            <Button variant="outline" size="icon" className="rounded-full border-white/20 text-white hover:bg-white/10 hover:text-white" asChild>
              <a href="https://www.linkedin.com/company/activ8pay/" target="_blank" rel="noopener noreferrer">
                <img src={linkedinIcon} alt="LinkedIn" className="h-4 w-4" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </Button>
            <Button variant="outline" size="icon" className="rounded-full border-white/20 text-white hover:bg-white/10 hover:text-white" asChild>
              <a href="mailto:solutions@activ8pay.com">
                <img src={gmailIcon} alt="Email" className="h-4 w-4" />
                <span className="sr-only">Email</span>
              </a>
            </Button>
            <Button variant="outline" size="icon" className="rounded-full border-white/20 text-white hover:bg-white/10 hover:text-white" asChild>
              <a href="https://t.me/activ8pay" target="_blank" rel="noopener noreferrer">
                <img src={telegramIcon} alt="Telegram" className="h-4 w-4" />
                <span className="sr-only">Telegram</span>
              </a>
            </Button>
          </div>
          <div className="text-center">
            <p className="text-sm text-white/60">
              © {new Date().getFullYear()} Activ8Pay. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export { StackedCircularFooter }
