from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Stat, Initiative, Campaign, Testimonial, TeamMember, BlogPost, ContactSubmission
from .serializers import (
    StatSerializer, InitiativeSerializer, CampaignSerializer, 
    TestimonialSerializer, TeamMemberSerializer, BlogPostSerializer,
    ContactSubmissionSerializer
)

class HomepageStatsView(APIView):
    def get(self, request):
        stats = Stat.objects.filter(page='homepage')
        serializer = StatSerializer(stats, many=True)
        return Response(serializer.data)

class InitiativesView(APIView):
    def get(self, request):
        initiatives = Initiative.objects.filter(page='homepage')
        serializer = InitiativeSerializer(initiatives, many=True)
        return Response(serializer.data)

class CampaignsView(APIView):
    def get(self, request):
        campaigns = Campaign.objects.filter(is_active=True)
        serializer = CampaignSerializer(campaigns, many=True)
        return Response(serializer.data)

class TestimonialsView(APIView):
    def get(self, request):
        testimonials = Testimonial.objects.filter(is_active=True)
        serializer = TestimonialSerializer(testimonials, many=True)
        return Response(serializer.data)

class AboutStatsView(APIView):
    def get(self, request):
        stats = Stat.objects.filter(page='about')
        serializer = StatSerializer(stats, many=True)
        return Response(serializer.data)

class AboutInitiativesView(APIView):
    def get(self, request):
        initiatives = Initiative.objects.filter(page='about')
        serializer = InitiativeSerializer(initiatives, many=True)
        return Response(serializer.data)

class TeamView(APIView):
    def get(self, request):
        team_members = TeamMember.objects.filter(is_active=True)
        serializer = TeamMemberSerializer(team_members, many=True)
        return Response(serializer.data)

class BlogPostsView(APIView):
    def get(self, request):
        posts = BlogPost.objects.filter(is_published=True)
        serializer = BlogPostSerializer(posts, many=True)
        return Response(serializer.data)

class BlogCategoriesView(APIView):
    def get(self, request):
        categories = BlogPost.objects.filter(is_published=True).values_list('category', flat=True).distinct()
        return Response(list(categories))

class ContactSubmitView(APIView):
    def post(self, request):
        serializer = ContactSubmissionSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({'message': 'Contact form submitted successfully'}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)