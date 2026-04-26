---
templateKey: 'portfolio-post'
title: 'HTTP File Generator'
date: 2024-01-20T09:00:00.000Z
author: Jimmy Boinembalome
authorimage: /img/jimmy.jpg
category: Development
categorycolor: bg-primary-100 text-primary-800
featuredpost: true
featuredimage: /img/http-file-generator-project.jpg
description: >-
  A privacy-first browser tool that generates ready-to-use .http files from OpenAPI specifications.
tags:
  - TypeScript
  - Next.js
  - React
  - OpenAPI
  - Tailwind CSS
link: https://github.com/Blouppy/http-file-generator
---

HTTP File Generator is a lightweight web application that generates ready-to-use `.http` files from OpenAPI specifications (JSON or YAML). Upload your spec, select the endpoints you need, preview the output, and download a ZIP archive organised by API tags — no login required, everything runs in your browser.

The project is built with **Next.js 14** (App Router), **TypeScript**, **Tailwind CSS v4**, and **shadcn/ui**. OpenAPI parsing is handled client-side using `@apidevtools/swagger-parser`, ensuring that your specification is never sent to any server.
