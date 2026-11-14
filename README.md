# ADCC Croatia – Official Website

Designed & Developed by **Schetka Studio** for the **Croatian Submission Fighting Federation (ADCC Croatia)**.

---

## 📌 Project Overview & Context

This project replaces the legacy `adcc-croatia.com` website (previously hosted on Hostinger / LiteSpeed, currently expired/throwing HTTP 500 errors).

Based on direct correspondence with **Damir Šalina** (head of ADCC Croatia), the website is rebuilt to:
1. **Provide essential federation info**: About ADCC Croatia, tournament schedules, divisions, and rules.
2. **Prominently feature World Champion Luka Vuksan**:
   - World Champion in Bangkok (Jiu-Jitsu, under Croatian Olympic Committee / HOO recognition).
   - Best Sportsman of Zadar County (Zadarska Županija Annual Sports Awards).
   - Custom tribute section with photos requested by Damir.
3. **Integrate official ecosystem links**:
   - [ADCombat.com (Global ADCC Headquarters)](https://adcombat.com/)
   - [Smoothcomp / sub.fight.org Registration & Brackets](https://smoothcomp.com/)
   - [Facebook ADCC Croatia](https://www.facebook.com/adcccroatia)
   - [ADCC Zadar Pixieset Photo Gallery](https://rolljiujitsu.pixieset.com/adcczadar2026/)
   - [HOO Article on Luka Vuksan World Title](https://www.hoo.hr/post/etiru-odlija-jiujitsu-boraca-na-spu-u-bankoku-luka-vuksan-svjetski-prvak)
   - [Zadarska Županija Awards Announcement](https://www.zadarska-zupanija.hr/novosti-arhiva/item/3778-ponos-zadra-dodijeljene-nagrade-najboljim-sportasima-zadarske-zupanije-za-2025-godinu)

---

## 🎨 Paseo Design Canvas

The interactive design prototype is built for the **Paseo Design Canvas** plugin (`961853266hyt/design-canvas`):
- `design/canvas.json`: Workspace marker enabling Design Canvas tools.
- `design/adcc-croatia/design.json`: Artboard definitions and live CSS tweaks.
- `design/adcc-croatia/desktop-home.html`: Primary 1440px desktop experience.
- `design/adcc-croatia/mobile-home.html`: Responsive 390px mobile layout.
- `design/adcc-croatia/desktop-events.html`: Tournaments, divisions, weight categories & scoring rules.
- `design/adcc-croatia/tweaks.css`: Live-tunable CSS variables (Brand Red, Gold accent, Dark themes).

---

## 🚀 Unified Proxmox & GitHub Architecture

- **GitHub Repository**: `https://github.com/vedransetka/adcc-croatia`
- **Proxmox Sovereign Host**: LXC 121 (`ops-agent`) in `/home/ops/AI_PROJECTS/adcc-croatia`
- **Paseo Daemon**: Version 0.15.4 running on LXC 121 with `design-canvas` plugin installed and agent MCP injection enabled.
- **DNS / Edge**: Managed through Cloudflare (`adcc-croatia.com` Zone ID `2dd5080bbeb982e5432d076c7ca071df`).

---

## 🛠️ Next Steps & Deployment

1. **Visual Alignment**: Review artboards in Paseo Design Canvas (`/canvas` or Design Tab) or preview directly.
2. **DNS & Production Hosting**: Point `adcc-croatia.com` Cloudflare records away from expired Hostinger IP to Proxmox Coolify/Nginx (or Cloudflare Pages).
3. **Astro / Schetka Studio Engine**: Seamlessly compile design artboards into production Astro/Tailwind components following Schetka Studio standards.
