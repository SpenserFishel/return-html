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
    "location": {
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
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet">

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
    }
    .logo {
      max-width: 80%;
      height: auto;
    }
    h1 {
      margin-top: 1rem;
      font-size: 2.5rem;
      font-weight: bold;
    }
    svg {
      max-width: 80%;
      height: auto;
    }
  </style>
</head>
<body>
  <!-- Inline SVG Logo -->
  <?xml version="1.0" encoding="UTF-8"?>
  <svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 336 280">
    <!-- Generator: Adobe Illustrator 29.8.1 -->
    <defs>
      <style>
        .st0 { fill: #58595b; }
        .st1 { fill-rule: evenodd; }
        .st1, .st2 { fill: #bb2026; }
      </style>
    </defs>
    <!-- ... full SVG paths from your code ... -->
  </svg>

  <h1>Coming Soon</h1>

  <!-- Bootstrap JS Bundle -->
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>`;

    return new Response(html, {
      headers: {
        "content-type": "text/html;charset=UTF-8",
      },
    });
  },
} satisfies ExportedHandler;
