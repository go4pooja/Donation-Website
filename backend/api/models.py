from django.db import models

class Stat(models.Model):
    icon = models.CharField(max_length=50)
    value = models.CharField(max_length=20)
    label = models.CharField(max_length=100)
    page = models.CharField(max_length=20, choices=[('homepage', 'Homepage'), ('about', 'About')])
    order = models.IntegerField(default=0)
    created_at = models.DateTimeField(auto_now_add=True)
    
    class Meta:
        ordering = ['order']

class Initiative(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    impact = models.CharField(max_length=200, blank=True)
    link = models.URLField(blank=True)
    image = models.URLField(blank=True)
    page = models.CharField(max_length=20, choices=[('homepage', 'Homepage'), ('about', 'About')])
    order = models.IntegerField(default=0)
    created_at = models.DateTimeField(auto_now_add=True)
    
    class Meta:
        ordering = ['order']

class Campaign(models.Model):
    title = models.CharField(max_length=200)
    subtitle = models.CharField(max_length=200, blank=True)
    beneficiaries = models.CharField(max_length=20)
    days_left = models.IntegerField()
    raised = models.DecimalField(max_digits=10, decimal_places=2)
    goal = models.DecimalField(max_digits=10, decimal_places=2)
    image = models.URLField(blank=True)
    is_active = models.BooleanField(default=True)
    order = models.IntegerField(default=0)
    created_at = models.DateTimeField(auto_now_add=True)
    
    class Meta:
        ordering = ['order']

class Testimonial(models.Model):
    name = models.CharField(max_length=200)
    story = models.TextField()
    rating = models.IntegerField(default=5)
    is_active = models.BooleanField(default=True)
    order = models.IntegerField(default=0)
    created_at = models.DateTimeField(auto_now_add=True)
    
    class Meta:
        ordering = ['order']

class TeamMember(models.Model):
    name = models.CharField(max_length=200)
    position = models.CharField(max_length=200)
    description = models.TextField()
    image = models.URLField(blank=True)
    is_active = models.BooleanField(default=True)
    order = models.IntegerField(default=0)
    created_at = models.DateTimeField(auto_now_add=True)
    
    class Meta:
        ordering = ['order']

class BlogPost(models.Model):
    title = models.CharField(max_length=300)
    excerpt = models.TextField()
    content = models.TextField(blank=True)
    category = models.CharField(max_length=100)
    date = models.DateField()
    is_published = models.BooleanField(default=True)
    order = models.IntegerField(default=0)
    created_at = models.DateTimeField(auto_now_add=True)
    
    class Meta:
        ordering = ['-date', 'order']

class ContactSubmission(models.Model):
    name = models.CharField(max_length=200)
    email = models.EmailField()
    phone = models.CharField(max_length=20, blank=True)
    subject = models.CharField(max_length=300)
    message = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    
    class Meta:
        ordering = ['-created_at']