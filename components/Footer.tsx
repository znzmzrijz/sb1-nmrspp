import Link from 'next/link';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="bg-secondary py-8 md:py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-8">
          <h2 className="text-xl md:text-2xl font-bold">Luunos AI</h2>
          <p className="text-sm md:text-base text-muted-foreground">Transform text into stunning visuals</p>
        </div>

        <div className="flex flex-wrap justify-center gap-8 mb-8">
          {/* Legal Section */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Legal</h3>
            <ul className="space-y-1 text-sm md:text-base">
              <li><Link href="/terms" className="hover:underline">Terms of Service</Link></li>
              <li><Link href="/privacy" className="hover:underline">Privacy Policy</Link></li>
              <li><Link href="/cookies" className="hover:underline">Cookie Policy</Link></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
            <ul className="space-y-1 text-sm md:text-base">
              <li><Link href="/pricing" className="hover:underline">Pricing</Link></li>
              <li><Link href="/features" className="hover:underline">Features</Link></li>
              <li><Link href="/blog" className="hover:underline">Blog</Link></li>
              <li><Link href="/contact" className="hover:underline">Contact</Link></li>
            </ul>
          </div>

          {/* Customer Support */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Support</h3>
            <ul className="space-y-1 text-sm md:text-base">
              <li><Link href="/help" className="hover:underline">Help Center</Link></li>
              <li><Link href="/faq" className="hover:underline">FAQs</Link></li>
              <li><Link href="/status" className="hover:underline">System Status</Link></li>
            </ul>
          </div>
        </div>

        {/* Newsletter Sign-Up */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-4 text-center">Subscribe to Our Newsletter</h3>
          <form className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
            <Input type="email" placeholder="Enter your email" className="flex-grow" />
            <Button type="submit">Subscribe</Button>
          </form>
        </div>

        {/* Copyright Notice */}
        <div className="text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Luunos AI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}