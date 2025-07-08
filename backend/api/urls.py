from django.urls import path
from . import views

urlpatterns = [
    # Homepage data
    path('homepage/stats/', views.HomepageStatsView.as_view(), name='homepage-stats'),
    path('homepage/initiatives/', views.InitiativesView.as_view(), name='initiatives'),
    path('homepage/campaigns/', views.CampaignsView.as_view(), name='campaigns'),
    path('homepage/testimonials/', views.TestimonialsView.as_view(), name='testimonials'),
    
    # About page data
    path('about/stats/', views.AboutStatsView.as_view(), name='about-stats'),
    path('about/initiatives/', views.AboutInitiativesView.as_view(), name='about-initiatives'),
    path('about/team/', views.TeamView.as_view(), name='team'),
    
    # Blog data
    path('blog/posts/', views.BlogPostsView.as_view(), name='blog-posts'),
    path('blog/categories/', views.BlogCategoriesView.as_view(), name='blog-categories'),
    
    # Contact
    path('contact/submit/', views.ContactSubmitView.as_view(), name='contact-submit'),
]