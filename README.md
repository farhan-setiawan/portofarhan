# Personal Infrastructure Portfolio – Self Hosted DevOps Environment

This repository contains the source code for my personal portfolio website, 
fully self-hosted on my private home server infrastructure.

Unlike typical static portfolio hosting, this project is deployed through a 
self-managed infrastructure stack including virtualization, containerization, 
reverse proxy, DNS management, and CI/CD automation.

---

## 🧠 Project Overview

This portfolio is not only a frontend project (React + Vite + Tailwind), 
but also a real-world infrastructure implementation demonstrating:

- Virtualization with Proxmox VE
- Reverse Proxy with NGINX
- DNS & SSL management using Cloudflare
- GitHub Actions CI/CD with Self-Hosted Runner
- Dockerized services deployment
- Secure remote access via VPN (WireGuard & OpenVPN)
- Network segmentation using MikroTik Router

This project reflects hands-on DevOps, SysAdmin, and Infrastructure Engineering capabilities.

---

## 🏗 Infrastructure Architecture

### Hypervisor Layer
- Proxmox VE
- Multiple VM isolation
- Resource allocation management

### Virtual Machines
- Ubuntu Server (Docker Host)
- FreePBX Server
- Nextcloud Server
- Odoo Server
- EVE-NG Lab Environment
- VPN Server (WireGuard / OpenVPN)

### Containerization
- Docker
- Service isolation
- Persistent volume management

---

## 🚀 CI/CD Pipeline

Deployment is automated using:

- GitHub Actions
- Self-hosted Runner (inside private network)
- Auto build on push to main branch
- Automatic deployment to production server

Workflow:
1. Developer pushes code to GitHub
2. GitHub Actions triggers pipeline
3. Self-hosted runner pulls latest changes
4. Build & deploy process executed
5. NGINX serves updated production build

---

## 🌐 Networking & Security

- MikroTik Router as core gateway
- VLAN segmentation
- Reverse Proxy with SSL (Cloudflare Full Strict & Let's Encrypt)
- VPN-only access for internal services
- Rate limiting & firewall rules
- Selective bot allowlisting for recruiter visibility

---

## 📊 Infrastructure Metrics (Live Environment)

- Uptime: 99%+
- Total VMs: 7
- Total Services Running: 9
- Average CPU Usage: 20%
- Average RAM Usage: 70%

(Updated periodically)

---

## 🛠 Tech Stack (Frontend)

- React
- Vite
- TailwindCSS
- NodeJS

---

## 🎯 Purpose

This project demonstrates:

- Real infrastructure ownership
- Full deployment lifecycle control
- Secure service exposure to public internet
- Automation mindset
- Production-grade architecture thinking

---

## 📄 License

MIT License
