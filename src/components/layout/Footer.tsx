import { Mail, Github, Code2 } from "lucide-react";
import { CONTACT } from "@/lib/config";

export default function Footer() {
  return (
    <footer className="border-t border-line mt-20 bg-base">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-fg-muted">© 2026 안하은. All rights reserved.</p>

          <div className="flex gap-4">
            <a
              href={CONTACT.emailUrl}
              className="text-fg-muted hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
            <a
              href={CONTACT.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-fg-muted hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href={CONTACT.portfolioRepo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-fg-muted hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
              aria-label="Portfolio Source"
            >
              <Code2 size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
