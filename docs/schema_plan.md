# Schema Plan (v1)

## 적용 대상
- Home: Organization, WebSite, WebPage
- Service: Service, WebPage
- FAQ: FAQPage (Home or Service)

---

## Organization (예시)
```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "ABEL AI",
  "url": "https://example.com",
  "logo": "https://example.com/logo.png",
  "sameAs": []
}
```

## WebSite (예시)
```json
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "ABEL AI",
  "url": "https://example.com"
}
```

## WebPage (Home)
```json
{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "ABEL AI — AEO/GEO/SEO",
  "url": "https://example.com"
}
```

## Service (AEO/GEO/SEO)
```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "AEO / GEO / SEO",
  "provider": {
    "@type": "Organization",
    "name": "ABEL AI"
  }
}
```

## FAQPage (Home or Service)
```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "AEO와 GEO는 무엇이 다른가요?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "AEO는 직접 답변, GEO는 인용될 출처를 만듭니다."
      }
    }
  ]
}
```
