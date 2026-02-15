# Security Policy

## Supported Versions

This repository represents the current production deployment 
of my personal infrastructure portfolio.

Only the latest version on the `main` branch is actively maintained.

---

## Reporting a Vulnerability

If you discover a security vulnerability within this project 
or the associated infrastructure, please report it responsibly.

Do NOT create a public GitHub issue.

Instead, please contact:

Email: farhanervs@gmail.com

Provide:
- Description of the vulnerability
- Steps to reproduce
- Potential impact
- Suggested mitigation (if available)

---

## Scope

This repository includes:

- Frontend application (React + Vite)
- CI/CD configuration
- Deployment automation logic

Infrastructure components such as:
- Proxmox
- VPN configuration
- Router configuration
- Reverse proxy internals

are intentionally excluded from public disclosure.

---

## Security Measures Implemented

- Reverse proxy with SSL (Cloudflare Full Strict & Let's Encrypt)
- Rate limiting
- Selective bot allowlisting
- VPN-only access for internal services
- Segmented network architecture
- Self-hosted CI runner inside private network

---

## Responsible Disclosure

Security reports will be reviewed and addressed 
as soon as reasonably possible.

Please allow reasonable time for investigation 
before public disclosure.
