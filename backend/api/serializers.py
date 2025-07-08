from rest_framework import serializers
from .models import Stat, Initiative, Campaign, Testimonial, TeamMember, BlogPost, ContactSubmission

class StatSerializer(serializers.ModelSerializer):
    class Meta:
        model = Stat
        fields = ['icon', 'value', 'label']

class InitiativeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Initiative
        fields = ['title', 'description', 'impact', 'link', 'image']

class CampaignSerializer(serializers.ModelSerializer):
    class Meta:
        model = Campaign
        fields = ['title', 'subtitle', 'beneficiaries', 'days_left', 'raised', 'goal', 'image']

class TestimonialSerializer(serializers.ModelSerializer):
    class Meta:
        model = Testimonial
        fields = ['name', 'story', 'rating']

class TeamMemberSerializer(serializers.ModelSerializer):
    class Meta:
        model = TeamMember
        fields = ['name', 'position', 'description', 'image']

class BlogPostSerializer(serializers.ModelSerializer):
    class Meta:
        model = BlogPost
        fields = ['title', 'excerpt', 'category', 'date']

class ContactSubmissionSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContactSubmission
        fields = ['name', 'email', 'phone', 'subject', 'message']