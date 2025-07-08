from django.core.management.base import BaseCommand
from api.models import Stat, Initiative, Campaign, Testimonial, TeamMember, BlogPost

class Command(BaseCommand):
    help = 'Populate database with initial data'

    def handle(self, *args, **options):
        # Homepage Stats
        homepage_stats = [
            {"icon": "Users", "value": "13.0M+", "label": "Meals Served", "page": "homepage", "order": 1},
            {"icon": "Users", "value": "15.0M+", "label": "Beneficiaries Served", "page": "homepage", "order": 2},
            {"icon": "School", "value": "1052+", "label": "Municipal Schools", "page": "homepage", "order": 3},
            {"icon": "Hospital", "value": "507+", "label": "Govt Hospitals", "page": "homepage", "order": 4},
        ]
        
        for stat_data in homepage_stats:
            Stat.objects.get_or_create(**stat_data)

        # About Stats
        about_stats = [
            {"icon": "Users", "value": "13.0M+", "label": "Meals Served", "page": "about", "order": 1},
            {"icon": "Users", "value": "15.0M+", "label": "Beneficiaries Served", "page": "about", "order": 2},
            {"icon": "School", "value": "1052+", "label": "Municipal Schools", "page": "about", "order": 3},
            {"icon": "Hospital", "value": "507+", "label": "Govt Hospitals", "page": "about", "order": 4},
        ]
        
        for stat_data in about_stats:
            Stat.objects.get_or_create(**stat_data)

        # Homepage Initiatives
        homepage_initiatives = [
            {
                "title": "Swasthya Ahara",
                "description": "Govt. Hospital feeding program in Mumbai to ease food cost and enable better care for patient.",
                "link": "#",
                "page": "homepage",
                "order": 1
            },
            {
                "title": "Bal Shiksha Ahara",
                "description": "Municipal School feeding program to support zero-classroom hunger for better attendance & learning outcome.",
                "link": "#",
                "page": "homepage",
                "order": 2
            },
            {
                "title": "Paushtik Ahara",
                "description": "Meals on wheels to nourish the underprivileged and enable informal education.",
                "link": "#",
                "page": "homepage",
                "order": 3
            }
        ]
        
        for initiative_data in homepage_initiatives:
            Initiative.objects.get_or_create(**initiative_data)

        # About Initiatives
        about_initiatives = [
            {
                "title": "Swasthya Ahara",
                "description": "Our government hospital feeding program in Mumbai aims to ease food costs and enable better care for patients. We understand that when families are dealing with medical expenses, providing nutritious meals becomes a challenge. Our program ensures that patients and their families receive hot, nutritious meals during their hospital stay.",
                "impact": "Serving 32+ government hospitals across Mumbai",
                "page": "about",
                "order": 1
            },
            {
                "title": "Bal Shiksha Ahara",
                "description": "Our municipal school feeding program supports zero-classroom hunger for better attendance and learning outcomes. We believe that no child should study on an empty stomach. By providing nutritious mid-day meals, we help improve school attendance and concentration levels.",
                "impact": "Supporting 1052+ municipal schools",
                "page": "about",
                "order": 2
            },
            {
                "title": "Paushtik Ahara",
                "description": "Our meals on wheels program nourishes the underprivileged and enables informal education. We reach out to communities that may not have access to regular meals, providing both nutrition and a platform for community engagement and education.",
                "impact": "Reaching underserved communities across Mumbai",
                "page": "about",
                "order": 3
            }
        ]
        
        for initiative_data in about_initiatives:
            Initiative.objects.get_or_create(**initiative_data)

        # Campaigns
        campaigns = [
            {
                "title": "Donate on Rath Yatra",
                "subtitle": "Share the Gift of Nourishment",
                "beneficiaries": "14,949",
                "days_left": 12,
                "raised": 373728,
                "goal": 1400000,
                "order": 1
            },
            {
                "title": "Tata Cancer Care Centre",
                "subtitle": "Help Families Endure Their Toughest Battle",
                "beneficiaries": "25,267",
                "days_left": 3,
                "raised": 631682,
                "goal": 2000000,
                "order": 2
            }
        ]
        
        for campaign_data in campaigns:
            Campaign.objects.get_or_create(**campaign_data)

        # Testimonials
        testimonials = [
            {
                "name": "Parent of Kidney Stone Patient",
                "story": "My son is admitted here for kidney stone treatment costing around ₹15,000, which I can't afford. I borrowed money for treatment, but daily travel from Mankhurd to the hospital is expensive. I can't travel by train, so I take a bus or autorickshaw, which adds to the cost. I can't afford restaurant food or go home for lunch, so I skip meals, making me weak.",
                "rating": 5,
                "order": 1
            },
            {
                "name": "Father of Yash",
                "story": "When my wife was admitted to the hospital for the delivery of our second child, I didn't know what to feed our 9-year-old son, Yash. I can't cook and can't afford restaurant food, so we depended on street food like vada pav. I was happy about our second child but worried about Yash's health due to the unhealthy diet. When I heard about Akshaya Chaitanya's free lunch service, I was relieved to feed him a good, nutritious lunch.",
                "rating": 5,
                "order": 2
            }
        ]
        
        for testimonial_data in testimonials:
            Testimonial.objects.get_or_create(**testimonial_data)

        # Team Members
        team_members = [
            {
                "name": "Dr. Rajesh Kumar",
                "position": "Founder & CEO",
                "description": "Leading our mission to eradicate hunger and empower communities through sustainable food programs.",
                "order": 1
            },
            {
                "name": "Priya Sharma",
                "position": "Operations Director",
                "description": "Overseeing our kitchen operations and ensuring the highest standards of food safety and quality.",
                "order": 2
            },
            {
                "name": "Amit Patel",
                "position": "Program Manager",
                "description": "Managing our feeding initiatives and coordinating with government departments and schools.",
                "order": 3
            }
        ]
        
        for member_data in team_members:
            TeamMember.objects.get_or_create(**member_data)

        # Blog Posts
        blog_posts = [
            {
                "title": "This Shravan Maas, Let's Serve with Love — Donate Food, Feed Hope",
                "excerpt": "As Shravan Maas approaches, we invite you to transform your devotion into action. This sacred month is a time for spiritual reflection, fasting, and rituals, but it's also an opportunity to serve the needy.",
                "category": "Employee Volunteering",
                "date": "2025-06-30",
                "order": 1
            },
            {
                "title": "What Is Pitru Paksha? Meaning, Rituals, and Significance of Shradh (2025)",
                "excerpt": "Have you ever lit a diya in memory of a loved one and felt their quiet presence surrounding you? In Indian culture, remembering our ancestors isn't just a tradition – it's a sacred expression of love, gratitude, and spiritual connection.",
                "category": "Donation & Charity",
                "date": "2025-05-31",
                "order": 2
            },
            {
                "title": "Understanding the Meaning of Pind Daan and Why You Should Donate on Pitru Paksha",
                "excerpt": "Pitru Paksha is a revered 16-day period in the Hindu calendar, dedicated to honoring our ancestors through rituals, prayers, and offerings. Daan (donation) holds a special place during this time.",
                "category": "Donation & Charity",
                "date": "2025-05-28",
                "order": 3
            },
            {
                "title": "Kids Birthday Party Celebration Idea more Than Cake and Candles",
                "excerpt": "What if, alongside the party hats and presents, your child could also experience the joy of giving? Discover how to add a deeper layer of meaning to your child's birthday celebration.",
                "category": "Donation & Charity",
                "date": "2025-05-28",
                "order": 4
            }
        ]
        
        for post_data in blog_posts:
            BlogPost.objects.get_or_create(**post_data)

        self.stdout.write(self.style.SUCCESS('Successfully populated database with initial data'))