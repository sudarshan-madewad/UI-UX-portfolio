import { Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-muted py-10">
      <div className="mx-auto flex w-[min(1120px,92%)] flex-col items-center justify-between gap-6 text-sm text-subtle md:flex-row">
        <p>Crafted by Sudarshan Madewad</p>
        <div className="flex items-center gap-4">
          <a
            href="mailto:sudarshanmadewad1@gmail.com"
            className="inline-flex items-center gap-2 transition hover:text-text"
          >
            <Mail className="h-4 w-4" />
            Email
          </a>
          <a
            href="https://www.linkedin.com/in/sudarshan-madewad-425148239/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 transition hover:text-text"
          >
            <Linkedin className="h-4 w-4" />
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
