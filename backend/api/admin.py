from django.contrib import admin
from .models import Stat, Initiative, Campaign, Testimonial, TeamMember, BlogPost, ContactSubmission

@admin.register(Stat)
class StatAdmin(admin.ModelAdmin):
    list_display = ['label', 'value', 'page', 'order']
    list_filter = ['page']
    ordering = ['page', 'order']

@admin.register(Initiative)
class InitiativeAdmin(admin.ModelAdmin):
    list_display = ['title', 'page', 'order']
    list_filter = ['page']
    ordering = ['page', 'order']

@admin.register(Campaign)
class CampaignAdmin(admin.ModelAdmin):
    list_display = ['title', 'raised', 'goal', 'days_left', 'is_active', 'order']
    list_filter = ['is_active']
    ordering = ['order']

@admin.register(Testimonial)
class TestimonialAdmin(admin.ModelAdmin):
    list_display = ['name', 'rating', 'is_active', 'order']
    list_filter = ['is_active', 'rating']
    ordering = ['order']

@admin.register(TeamMember)
class TeamMemberAdmin(admin.ModelAdmin):
    list_display = ['name', 'position', 'is_active', 'order']
    list_filter = ['is_active']
    ordering = ['order']

@admin.register(BlogPost)
class BlogPostAdmin(admin.ModelAdmin):
    list_display = ['title', 'category', 'date', 'is_published']
    list_filter = ['category', 'is_published', 'date']
    ordering = ['-date']

@admin.register(ContactSubmission)
class ContactSubmissionAdmin(admin.ModelAdmin):
    list_display = ['name', 'email', 'subject', 'created_at']
    readonly_fields = ['created_at']
    ordering = ['-created_at']