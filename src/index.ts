export default {
  async fetch(request): Promise<Response> {
    const html = `
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Spartan Wrestling Club — Coming Soon</title>

  <!-- Basic Meta Tags -->
  <meta name="description" content="Spartan Wrestling Club in Freeport, PA — Youth, Middle School, and High School Folkstyle Wrestling. Coming Soon!">
  <meta name="author" content="Spartan Wrestling Club">
  <meta name="keywords" content="wrestling, youth wrestling, folkstyle, Freeport PA, high school wrestling, middle school wrestling">

  <!-- Open Graph / Social Media -->
  <meta property="og:title" content="Spartan Wrestling Club — Coming Soon">
  <meta property="og:description" content="Located in Freeport, PA. We offer youth, middle school, and high school folkstyle wrestling.">
  <meta property="og:type" content="website">
  <meta property="og:site_name" content="Spartan Wrestling Club">
  <meta property="og:locale" content="en_US">

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="Spartan Wrestling Club — Coming Soon">
  <meta name="twitter:description" content="Youth, Middle School, High School Folkstyle Wrestling in Freeport, PA">

  <!-- Schema.org JSON-LD -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "SportsClub",
    "name": "Spartan Wrestling Club",
    "description": "Youth, Middle School, and High School Folkstyle Wrestling",
    "url": "https://your-domain-here.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "101 5th Street",
      "addressLocality": "Freeport",
      "addressRegion": "PA",
      "postalCode": "16229",
      "addressCountry": "US"
    },
    'location': {
      "@type": "Place",
      "name": "Spartan Wrestling Club",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "101 5th Street",
        "addressLocality": "Freeport",
        "addressRegion": "PA",
        "postalCode": "16229",
        "addressCountry": "US"
      }
    },
    "memberOf": {
      "@type": "Organization",
      "name": "USA Wrestling"
    }
  }
  </script>

  <!-- Bootstrap CSS -->
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-sRIl4kxILFvY47J16cr9ZwB07vP4J8+LH7qKQnuqkuIAvNWLzeN8tE5YBujZqJLB" crossorigin="anonymous">

  <style>
    body {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
      text-align: center;
      background: #f8f9fa;
      margin: 0;
      padding: 2rem;
    }
    svg { max-width: 80%; height: auto; }
    h1 {
      margin-top: 1rem;
      font-size: 2.5rem;
      font-weight: bold;
    }
  </style>
</head>
<body>

  <!-- Inline SVG Logo (XML declaration removed for HTML compatibility) -->
  <svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 336 280">
    <!-- Generator: Adobe Illustrator 29.8.1, SVG Export Plug-In . SVG Version: 2.1.1 Build 2)  -->
    <defs>
      <style>
        .st0 {
          fill: #58595b;
        }

        .st1 {
          fill-rule: evenodd;
        }

        .st1, .st2 {
          fill: #bb2026;
        }
      </style>
    </defs>
    <g>
      <path class="st0" d="M24.18,232.59c.08,1.75.27,2.17,1.18,2.51.57.23,2.74.38,5.17.38,8.93,0,9.99-.27,9.99-2.36,0-1.03-.49-1.79-1.29-2.05q-.84-.27-4.83-.3h-6.99c-4.67,0-6.61-.27-8.25-1.1-1.82-.95-2.66-2.96-2.66-6.42,0-4.56,1.29-6.5,4.94-7.37,2.05-.53,5.02-.72,10.56-.72,8.89,0,10.94.23,12.77,1.41,1.75,1.18,2.32,2.74,2.32,6.54h-7.52c0-2.2-.76-2.51-5.74-2.51-2.47,0-5.78.08-6.99.15-2.05.15-2.74.68-2.74,2.13,0,1.06.53,1.75,1.63,2.01.46.11.61.15,3.12.19h7.18c.68,0,4.1.11,5.4.19,4.83.23,6.73,2.36,6.73,7.45,0,4.67-1.37,6.73-5.09,7.52-1.9.42-5.66.65-11.17.65-8.78,0-10.71-.19-12.96-1.33-1.56-.76-2.36-2.7-2.36-5.7,0-.23,0-.72.04-1.25h7.56Z"/>
      <path class="st0" d="M61.73,215.34h19.38c4.9,0,6.16.15,7.75.95,2.55,1.25,3.5,3.57,3.5,8.36s-.87,7.33-2.96,8.62c-1.48.91-3.19,1.18-7.6,1.18h-12.39v6.23h-7.67v-25.34ZM80.61,228.29c3.15,0,4.07-.68,4.07-3.08,0-3.04-.76-3.72-4.07-3.72h-11.21v6.8h11.21Z"/>
      <path class="st0" d="M116.6,215.34h10.33l13.87,25.34h-8.43l-2.51-4.52h-16.34l-2.43,4.52h-8.74l14.25-25.34ZM127.16,230.88l-5.47-10.11-5.4,10.11h10.87Z"/>
      <path class="st0" d="M151.94,215.34h21.85c4.48,0,6.46.38,7.9,1.6,1.48,1.18,2.17,3.34,2.17,6.76,0,4.71-1.14,6.57-4.37,7.29,3.15.53,4.1,1.86,4.03,5.7v3.99h-7.83v-3.15c-.04-2.74-.8-3.31-4.26-3.23h-11.82v6.38h-7.67v-25.34ZM171.66,228.1c3.72,0,4.45-.46,4.45-2.96,0-1.63-.15-2.32-.65-2.85-.57-.61-1.22-.72-3.53-.72h-12.31v6.54h12.04Z"/>
      <path class="st0" d="M206.81,221.61h-11.28v-6.27h30.28v6.27h-11.28v19.07h-7.71v-19.07Z"/>
      <path class="st0" d="M248.91,215.34h10.33l13.87,25.34h-8.43l-2.51-4.52h-16.34l-2.43,4.52h-8.74l14.25-25.34ZM259.47,230.88l-5.47-10.11-5.4,10.11h10.87Z"/>
      <path class="st0" d="M284.25,215.34h12.27l15.35,19.26-.19-19.26h7.29v25.34h-12.39l-15.12-19.07.19,19.07h-7.41v-25.34Z"/>
      <path class="st2" d="M17.42,245.07l7.31,15.68,7.42-15.68h2.48l7.42,15.68,7.34-15.68h2.22l-8.32,17.61h-2.59l-7.34-15.55-7.37,15.55h-2.59l-8.31-17.61h2.32Z"/>
      <path class="st2" d="M53.91,245.07h14.52c2.67,0,3.91.34,4.83,1.35.71.79,1.08,2.14,1.08,4.04,0,2.85-.66,3.85-2.82,4.36,1.79.34,2.48,1.27,2.48,3.3v4.57h-2.11v-3.35c.05-3.04-.71-3.78-3.77-3.75h-12.09v7.1h-2.11v-17.61ZM67.61,253.91c3.62,0,4.54-.71,4.54-3.56s-.95-3.51-4.67-3.51h-11.46v7.07h11.59Z"/>
      <path class="st2" d="M78.88,245.07h17.53v1.77h-15.42v5.89h14.86v1.66h-14.86v6.52h15.55v1.77h-17.66v-17.61Z"/>
      <path class="st2" d="M101.93,257.19v.48c0,1.77.37,2.48,1.5,2.85,1.03.34,2.98.5,6.15.5,6.89,0,8.13-.53,8.13-3.46,0-1.48-.45-2.14-1.64-2.48-1.16-.32-1.27-.32-9.13-.37-3.19-.03-4.57-.26-5.65-.98-1.06-.71-1.48-1.69-1.48-3.43,0-2.64.95-4.14,3.04-4.75,1.5-.45,3.83-.66,7.44-.66,4.07,0,6.15.29,7.36,1.06,1.29.79,1.69,1.72,1.77,4.17h-2.06c-.03-1.4-.26-2.03-.84-2.48-.82-.63-2.64-.9-6.2-.9-6.94,0-8.29.55-8.29,3.38,0,1.21.34,1.9,1.08,2.24.92.42,1.72.47,6.71.5,5.6.03,6.81.13,8.08.74,1.43.69,2.01,1.87,2.01,4.07,0,2.43-.82,3.88-2.56,4.54-1.29.48-3.3.66-7.37.66-4.28,0-6.28-.18-7.71-.66-1.58-.55-2.46-1.9-2.46-3.8v-1.21h2.11Z"/>
      <path class="st2" d="M130.41,246.84h-8.95v-1.77h19.98v1.77h-8.92v15.84h-2.11v-15.84Z"/>
      <path class="st2" d="M143.74,245.07h2.11v15.84h13.96v1.77h-16.08v-17.61Z"/>
      <path class="st2" d="M162.8,245.07h2.11v17.61h-2.11v-17.61Z"/>
      <path class="st2" d="M169.85,245.07h3.41l16.63,16.1v-16.1h2.11v17.61h-3.41l-16.63-16.1v16.1h-2.11v-17.61Z"/>
      <path class="st2" d="M218.56,253.99q0,2.88-.11,3.99c-.21,2.3-1,3.67-2.51,4.28-1.14.48-2.75.61-8.1.61-7.34,0-8.68-.21-10.03-1.61-1.13-1.19-1.4-2.56-1.4-7.37s.26-6.2,1.4-7.39c1.37-1.43,2.61-1.61,10.67-1.61,5.41,0,6.84.18,8.1,1.06,1.21.82,1.72,2.01,1.8,4.3h-2.09c-.05-1.66-.16-2.14-.66-2.59-.84-.82-1.61-.92-6.41-.92-6.94,0-8.45.13-9.37.79-1,.74-1.24,1.93-1.24,6.36,0,4.01.18,5.31.92,6.04.84.9,2.14,1.08,7.42,1.08,6.86,0,7.79-.11,8.68-1.11.66-.71.79-1.37.87-4.14h-9.42v-1.77h11.48Z"/>
      <path class="st2" d="M249.97,256.77v.74c0,2.11-.21,3.04-.9,3.83-.66.79-1.53,1.16-3.14,1.35-1,.08-4.01.18-6.39.18-6.36,0-7.92-.26-9.21-1.61-1.14-1.16-1.4-2.56-1.4-7.37,0-5.49.37-6.89,2.17-8.02,1.35-.84,2.8-.98,10.06-.98,4.41,0,5.94.21,7.02,1,1.19.82,1.56,1.93,1.64,4.72h-2.06v-.45c0-3.12-.74-3.43-8.13-3.43-8.45,0-8.5.03-8.5,7.15,0,4.01.18,5.28.92,6.04.84.87,2.19,1.08,7.13,1.08,7.92,0,8.74-.29,8.74-3.25v-1h2.06Z"/>
      <path class="st2" d="M254.2,245.07h2.11v15.84h13.96v1.77h-16.08v-17.61Z"/>
      <path class="st2" d="M293.85,245.07v11.96c0,1.95-.05,2.48-.26,3.12-.82,2.22-2.64,2.72-10.11,2.72-6.1,0-8.1-.32-9.27-1.43-.63-.61-.95-1.32-1.06-2.35-.05-.42-.05-.84-.05-2.06v-11.96h2.11v11.59c0,1.64,0,1.79.11,2.22.42,1.85,1.53,2.14,8.16,2.14,5.6,0,7.02-.21,7.73-1.19.47-.66.53-.95.53-3.17v-11.59h2.11Z"/>
      <path class="st2" d="M298.58,245.07h14.1c2.59,0,3.62.24,4.49,1.03.87.82,1.24,1.87,1.24,3.67s-.4,2.59-1.5,3.22c-.4.21-.58.29-.84.37,2.06.37,2.98,1.61,2.98,4.09,0,1.95-.37,3.11-1.27,3.96-.98.9-2.22,1.27-4.3,1.27h-14.89v-17.61ZM311.2,252.65c2.82,0,3.48-.08,4.09-.45.63-.4.92-1.16.92-2.4,0-2.24-.9-2.96-3.77-2.96h-11.75v5.81h10.51ZM312.52,260.91c3.48,0,4.33-.66,4.33-3.35s-.79-3.25-4.8-3.25h-11.35v6.6h11.83Z"/>
    </g>
    <text/>
    <path class="st1" d="M180.45,53.38c-3.25,5.4-4.87,8.1-4.87,8.1,2.01-8.55,3.01-12.82,3.01-12.82,11.46,3.85,19.58,9.46,24.36,16.84-6.76-5.34-14.26-9.38-22.5-12.11h0ZM194.25,107.67l2.64,5.39,11.86-6.59-3.15,3.87-.36,7.09-4.59,3.44c4.03,8.17,6.16,12.11,6.38,11.82l-1.86-8.88,6.31-4.51v-8.45c-.49.71,1.35-3.71,5.52-13.25-.07-.17-6.51,2.67-19.32,8.52l-9.56-10.96,6.13,12.52h0ZM181.97,135.13c3.18,18.51,3.46,38.57.86,60.18,12.95-3.03,22.93-9.38,29.95-19.06-6.89,4.06-12.24,6.45-16.05,7.17-2.95-23.96-5.86-39.62-8.74-47l13.04-9.53-1.
