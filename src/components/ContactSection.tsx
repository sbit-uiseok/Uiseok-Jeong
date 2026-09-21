import React, { useState, useEffect } from 'react';
import { Language } from '../types';
import {
  Mail,
  Phone,
  Clock,
  Send,
  Copy,
  Check,
  Github,
  Globe,
  Linkedin,
  Sparkles,
  CheckCircle2,
  ExternalLink,
} from 'lucide-react';

interface ContactSectionProps {
  email: string;
  phone: string;
  github: string;
  blog: string;
  linkedin: string;
  lang: Language;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  email,
  phone,
  github,
  blog,
  linkedin,
  lang,
}) => {
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [currentTime, setCurrentTime] = useState<string>('');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);

  // Live clock for Busan, Republic of Korea (UTC+9, KST)
  useEffect(() => {
    const updateKstTime = () => {
      try {
        const now = new Date();
        const formatter = new Intl.DateTimeFormat('en-US', {
          timeZone: 'Asia/Seoul',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: true,
        });
        setCurrentTime(formatter.format(now) + ' KST');
      } catch (e) {
        setCurrentTime('KST (UTC+9)');
      }
    };

    updateKstTime();
    const interval = setInterval(updateKstTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleCopy = (text: string, fieldName: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSending(true);
    // Simulate immediate send feedback and mailto bridge
    setTimeout(() => {
      setIsSending(false);
      setIsSubmitted(true);
      // Optional: trigger mailto bridge with pre-filled content
      const subject = encodeURIComponent(`[Portfolio Inquiry] From ${formData.name}`);
      const body = encodeURIComponent(
        `Hi Uiseok,\n\n${formData.message}\n\nSender Email: ${formData.email}\nSender Name: ${formData.name}`
      );
      window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
    }, 600);
  };

  return (
    <section id="contact" className="py-10 sm:py-14 border-b border-neutral-800/60">
      <h2 className="text-base sm:text-lg font-bold text-neutral-100 tracking-tight mb-8">
        {lang === 'en' ? "Let's talk" : '연락처 및 문의 (Let\'s talk)'}
      </h2>

      {/* 2-Column Contact Layout matching the reference image */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10 items-start">
        {/* Left Column: Direct info & Local time */}
        <div className="space-y-6">
          {/* Live Local Time for Busan */}
          <div>
            <div className="text-[11px] font-mono text-neutral-500 mb-1 flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-emerald-400" />
              <span>{lang === 'en' ? 'Time for me (Busan, Korea):' : '현재 부산 현지 시각:'}</span>
            </div>
            <div className="text-xl sm:text-2xl font-bold font-mono text-neutral-100 tracking-tight flex items-center gap-2">
              <span>{currentTime || 'Loading...'}</span>
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            </div>
          </div>

          {/* Email */}
          <div>
            <div className="text-[11px] font-mono text-neutral-500 mb-1">
              {lang === 'en' ? 'Email:' : '이메일:'}
            </div>
            <div className="flex items-center gap-2 group">
              <Mail className="w-4 h-4 text-neutral-400" />
              <a
                href={`mailto:${email}`}
                className="text-xs sm:text-sm font-mono text-neutral-200 hover:text-white transition-colors"
              >
                {email}
              </a>
              <button
                onClick={() => handleCopy(email, 'email')}
                className="p-1 rounded text-neutral-500 hover:text-neutral-300 hover:bg-neutral-800 transition-colors"
                title="Copy email"
              >
                {copiedField === 'email' ? (
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                ) : (
                  <Copy className="w-3.5 h-3.5" />
                )}
              </button>
            </div>
          </div>

          {/* Phone */}
          <div>
            <div className="text-[11px] font-mono text-neutral-500 mb-1">
              {lang === 'en' ? 'Phone:' : '연락처:'}
            </div>
            <div className="flex items-center gap-2 group">
              <Phone className="w-4 h-4 text-neutral-400" />
              <a
                href={`tel:${phone}`}
                className="text-xs sm:text-sm font-mono text-neutral-200 hover:text-white transition-colors"
              >
                {phone}
              </a>
              <button
                onClick={() => handleCopy(phone, 'phone')}
                className="p-1 rounded text-neutral-500 hover:text-neutral-300 hover:bg-neutral-800 transition-colors"
                title="Copy phone"
              >
                {copiedField === 'phone' ? (
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                ) : (
                  <Copy className="w-3.5 h-3.5" />
                )}
              </button>
            </div>
          </div>

          {/* Socials matching reference image */}
          <div>
            <div className="text-[11px] font-mono text-neutral-500 mb-2">
              {lang === 'en' ? 'Socials & Links:' : '소셜 및 링크:'}
            </div>
            <div className="space-y-1.5 text-xs text-neutral-400">
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Github className="w-3.5 h-3.5 text-neutral-500" />
                <span>GitHub ({github ? github.replace(/^https?:\/\/github\.com\/?/, '').replace(/\/$/, '') : 'sbit-uiseok'})</span>
              </a>
              <a
                href={blog}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Globe className="w-3.5 h-3.5 text-neutral-500" />
                <span>Naver Tech Blog</span>
              </a>
              <a
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Linkedin className="w-3.5 h-3.5 text-neutral-500" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Contact Form matching reference image */}
        <div className="p-5 sm:p-6 rounded-2xl bg-neutral-900/40 border border-neutral-800/80">
          <div className="text-[11px] font-mono text-neutral-500 mb-3">
            {lang === 'en' ? 'Reach out:' : '직접 메시지 보내기:'}
          </div>

          {isSubmitted ? (
            <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-center space-y-3 py-6">
              <CheckCircle2 className="w-8 h-8 text-emerald-400 mx-auto" />
              <div className="text-xs sm:text-sm font-semibold text-neutral-100">
                {lang === 'en' ? 'Message Ready to Send!' : '메일 발송 준비 완료!'}
              </div>
              <p className="text-[11px] text-neutral-400 max-w-xs mx-auto">
                {lang === 'en'
                  ? `Your default mail app was opened to send this to ${email}. You can also open directly in Gmail:`
                  : `작성하신 내용이 ${email} 수신으로 연결되었습니다. 브라우저 Gmail 웹에서도 바로 발송하실 수 있습니다.`}
              </p>

              {/* Direct Gmail Web Button */}
              <div className="pt-1">
                <a
                  href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
                    email
                  )}&su=${encodeURIComponent(
                    `[Portfolio Inquiry] From ${formData.name}`
                  )}&body=${encodeURIComponent(
                    `안녕하세요 정의석 님,\n\n${formData.message}\n\n보낸 사람: ${formData.name}\n회신 이메일: ${formData.email}`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-100 text-xs font-mono border border-neutral-700 transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5 text-neutral-400" />
                  <span>{lang === 'en' ? 'Open in Gmail Web' : 'Gmail 웹에서 바로 보내기'}</span>
                </a>
              </div>

              <button
                onClick={() => {
                  setIsSubmitted(false);
                  setFormData({ name: '', email: '', message: '' });
                }}
                className="mt-2 text-[11px] font-mono text-emerald-400 underline hover:text-emerald-300 block mx-auto"
              >
                {lang === 'en' ? 'Send another message' : '새 메시지 작성'}
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3">
              <div>
                <input
                  id="contact-name"
                  type="text"
                  required
                  placeholder={lang === 'en' ? 'Your name' : '성함 / 담당자명'}
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-950/80 border border-neutral-800 focus:border-neutral-600 focus:outline-none text-xs text-neutral-200 placeholder:text-neutral-600 transition-colors"
                />
              </div>

              <div>
                <input
                  id="contact-email"
                  type="email"
                  required
                  placeholder={lang === 'en' ? 'Your email address' : '이메일 주소'}
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-950/80 border border-neutral-800 focus:border-neutral-600 focus:outline-none text-xs text-neutral-200 placeholder:text-neutral-600 transition-colors"
                />
              </div>

              <div>
                <textarea
                  id="contact-message"
                  required
                  rows={4}
                  placeholder={
                    lang === 'en'
                      ? 'Message (e.g. inquiry, collaboration, security discussion)'
                      : '메시지 (예: 프로젝트 협업, 포지션 제안, 보안 연구 질의)'
                  }
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-950/80 border border-neutral-800 focus:border-neutral-600 focus:outline-none text-xs text-neutral-200 placeholder:text-neutral-600 transition-colors resize-none"
                />
              </div>

              <div className="space-y-2">
                <button
                  id="contact-submit-btn"
                  type="submit"
                  disabled={isSending}
                  className="w-full py-2.5 px-4 rounded-xl bg-white hover:bg-neutral-200 text-neutral-950 text-xs font-semibold tracking-tight transition-all duration-200 flex items-center justify-center gap-2 shadow-sm disabled:opacity-50"
                >
                  {isSending ? (
                    <>
                      <span className="w-3.5 h-3.5 border-2 border-neutral-950 border-t-transparent rounded-full animate-spin" />
                      <span>{lang === 'en' ? 'Preparing email...' : '메일 연결 중...'}</span>
                    </>
                  ) : (
                    <>
                      <span>{lang === 'en' ? 'Send Message' : '메시지 전송'}</span>
                      <Send className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>

                <div className="flex items-center justify-center gap-1.5 text-[11px] font-mono text-neutral-400">
                  <Mail className="w-3 h-3 text-neutral-500" />
                  <span>
                    {lang === 'en'
                      ? `Sends directly to: ${email}`
                      : `수신 대상: ${email}`}
                  </span>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
