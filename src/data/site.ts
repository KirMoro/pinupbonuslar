export const site = {
  name: "Pinupbonuslar.com",
  title: "Pin Up Casino Azərbaycan",
  description:
    "Pin Up bonus, giriş, qeydiyyat, yükləmə və ödəniş mövzularını Azərbaycan dili üçün strukturlaşdıran affiliate bələdçi.",
  url: "https://pinupbonuslar.com",
  lang: "az",
  locale: "az_AZ",
  affiliateUrl: "https://onlinepnplnk.com/lHgcD4Xg/?subId2=az_brand",
  visitPath: "/visit/",
  analyticsKey: "VuVQenak0KT6/BcHXSntwA",
  defaultImage: "/assets/banner-share.jpg",
  heroImage: "/assets/banner-hero.webp",
  modifiedDate: "2026-04-21",
  organizationDescription:
    "Pin Up ilə bağlı bonus, giriş, qeydiyyat, yükləmə və ödəniş mövzularını izah edən Azərbaycan dilli məlumat layihəsi."
};

export type BreadcrumbItem = {
  name: string;
  href: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type LinkCard = {
  title: string;
  href: string;
  description: string;
};

export type HeaderCta = {
  label: string;
  href: string;
  ariaLabel?: string;
  variant?: "primary" | "secondary";
  rel?: string;
};

export const navLinks = [
  { label: "Əsas", href: "/" },
  { label: "Giriş", href: "/pin-up-giris/" },
  { label: "Qeydiyyat", href: "/pin-up-qeydiyyat/" },
  { label: "Yüklə", href: "/pin-up-download/" },
  { label: "Bonus", href: "/pin-up-bonus/" },
  { label: "Ödəniş", href: "/pin-up-payment/" },
  { label: "Əlaqə", href: "/pinupbonuslar-contact-support/" }
];

export const guideCards: LinkCard[] = [
  {
    title: "Pin Up giriş",
    href: "/pin-up-giris/",
    description:
      "Rəsmi giriş addımları, şifrə bərpası və təhlükəsizlik qaydaları."
  },
  {
    title: "Pin Up qeydiyyat",
    href: "/pin-up-qeydiyyat/",
    description:
      "Yeni hesab açmaq, AZN seçimi, KYC məqamları və ilk depozitə hazırlıq."
  },
  {
    title: "Pin Up yüklə",
    href: "/pin-up-download/",
    description:
      "Android APK, iOS tətbiqi və mobil brauzer üçün təhlükəsiz yükləmə yolu."
  },
  {
    title: "Pin Up bonus",
    href: "/pin-up-bonus/",
    description:
      "10.000 AZN + 250 FS welcome bonusu, promo kampaniyalar və əsas şərtlər."
  },
  {
    title: "Pin Up ödəniş",
    href: "/pin-up-payment/",
    description:
      "Depozit, çıxarış, limitlər, verifikasiya və sürətli payout tövsiyələri."
  }
];

export const trustCards: LinkCard[] = [
  {
    title: "Haqqımızda",
    href: "/pinupbonuslar-about/",
    description:
      "Redaksiya prinsipləri, affiliate disclosure və fakt yoxlama yanaşması."
  },
  {
    title: "Məxfilik siyasəti",
    href: "/pinupbonuslar-privacy-policy/",
    description:
      "Analitika, loglar, xarici keçidlər və sorğular zamanı məlumat istifadəsi."
  },
  {
    title: "İstifadə şərtləri",
    href: "/pinupbonuslar-terms-and-conditions/",
    description:
      "18+ auditoriya, məsuliyyət bölgüsü və rəsmi operator sənədlərinin üstünlüyü."
  },
  {
    title: "Əlaqə və support",
    href: "/pinupbonuslar-contact-support/",
    description:
      "Operator dəstəyi ilə redaksiya düzəlişlərini düzgün ayırmaq üçün istiqamət."
  },
  {
    title: "Məsuliyyətli oyun",
    href: "/pinupbonuslar-responsible-gambling-guide/",
    description:
      "Risk siqnalları, limitlər, fasilə planı və 18+ məsuliyyətli oyun qaydaları."
  }
];

export const pagePublishedDates: Record<string, string> = {
  "/": "2026-03-05",
  "/pin-up-giris/": "2026-03-05",
  "/pin-up-qeydiyyat/": "2026-03-05",
  "/pin-up-download/": "2026-03-05",
  "/pin-up-bonus/": "2026-03-05",
  "/pin-up-payment/": "2026-03-05",
  "/pinupbonuslar-about/": "2026-03-17",
  "/pinupbonuslar-contact-support/": "2026-03-17",
  "/pinupbonuslar-privacy-policy/": "2026-03-17",
  "/pinupbonuslar-terms-and-conditions/": "2026-03-17",
  "/pinupbonuslar-responsible-gambling-guide/": "2026-03-17"
};

export const sitemapPages = [
  "/",
  "/pin-up-giris/",
  "/pin-up-qeydiyyat/",
  "/pin-up-download/",
  "/pin-up-bonus/",
  "/pin-up-payment/",
  "/pinupbonuslar-about/",
  "/pinupbonuslar-privacy-policy/",
  "/pinupbonuslar-terms-and-conditions/",
  "/pinupbonuslar-contact-support/",
  "/pinupbonuslar-responsible-gambling-guide/"
];

export function absoluteUrl(path: string) {
  return new URL(path, `${site.url}/`).toString();
}

export function isActivePath(currentPath: string, href: string) {
  return href === "/" ? currentPath === "/" : currentPath.startsWith(href);
}
