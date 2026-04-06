# Content Management Guide

This folder contains all the text content for the HealthBudi landing page. You can edit these JSON files to update the website without touching any code.

## How to Edit Content

1. **Find the file** for the page you want to edit (see file list below)
2. **Open the JSON file** in any text editor
3. **Make your changes** - just edit the text values
4. **Save the file** - the website will update automatically

## File Structure

```
/content/data/
├── home.json          # Homepage content
├── for-patients.json  # Patient landing page
├── for-doctors.json   # Doctor landing page  
├── for-hospitals.json # Hospital landing page
├── for-dispatchers.json # Emergency dispatcher page
├── features.json      # Features page
├── about.json         # About page
├── pricing.json       # Pricing page & FAQ
├── testimonials.json  # Customer testimonials
├── navigation.json    # Navigation menu links
└── footer.json        # Footer content
```

## Editing Tips

### Update Hero Section

```json
{
  "hero": {
    "badge": "Your Badge Text Here",
    "title": "Main Headline",
    "description": "Supporting text under the headline",
    "primaryCta": {
      "text": "Button Text",
      "href": "/link-here"
    }
  }
}
```

### Update Features

Each feature has:
- `icon`: Icon name (Stethoscope, Calendar, Building2, etc.)
- `title`: Feature headline
- `description`: Feature description
- `role`: Optional (patient, doctor, hospital, dispatcher)

### Update Testimonials

Add new testimonials to `testimonials.json`:
```json
{
  "id": "7",
  "quote": "Customer quote here",
  "author": "Customer Name",
  "role": "Their Title",
  "company": "Company Name",
  "rating": 5
}
```

### Update Pricing

Edit `pricing.json` to change:
- Plan names and prices
- Feature lists per plan
- FAQ questions and answers

## Icon Reference

Available icons for features (use the exact name):

| Icon Name | Use For |
|-----------|---------|
| `Stethoscope` | Medical/Symptoms |
| `Building2` | Hospitals/Facilities |
| `Calendar` | Appointments/Scheduling |
| `Ambulance` | Emergency |
| `FileText` | Records/Documents |
| `Shield` | Security/Privacy |
| `Users` | People/Teams |
| `MapPin` | Location/Maps |
| `Phone` | Contact/Communication |
| `Clock` | Time/Scheduling |
| `Heart` | Health/Care |
| `TrendingUp` | Analytics/Growth |
| `Lightbulb` | Ideas/Innovation |
| `Target` | Goals/Focus |
| `Globe` | Global/Worldwide |
| `BarChart` | Analytics |

## Need Help?

- For structural changes, contact the development team
- For new pages, create a new JSON file following the same pattern
- Always validate JSON syntax after editing (use a JSON validator online)

## Best Practices

1. **Keep titles short** - Aim for under 60 characters
2. **Write clear descriptions** - Explain value proposition
3. **Use action-oriented CTAs** - "Get Started", "Book Now", "Learn More"
4. **Maintain consistency** - Use similar language across pages
5. **Test changes** - Preview the page before going live