import os
from supabase import create_client, Client
from django.conf import settings

def get_supabase_client() -> Client:
    """
    Create and return a Supabase client instance
    """
    url = settings.SUPABASE_URL
    key = settings.SUPABASE_KEY
    
    if not url or not key:
        raise ValueError("Supabase URL and Key must be set in environment variables")
    
    return create_client(url, key)

# Example usage functions for Supabase operations
class SupabaseService:
    def __init__(self):
        self.client = get_supabase_client()
    
    def sync_stats_to_supabase(self, stats_data):
        """Sync stats data to Supabase"""
        try:
            result = self.client.table('stats').upsert(stats_data).execute()
            return result
        except Exception as e:
            print(f"Error syncing stats to Supabase: {e}")
            return None
    
    def sync_initiatives_to_supabase(self, initiatives_data):
        """Sync initiatives data to Supabase"""
        try:
            result = self.client.table('initiatives').upsert(initiatives_data).execute()
            return result
        except Exception as e:
            print(f"Error syncing initiatives to Supabase: {e}")
            return None
    
    def sync_campaigns_to_supabase(self, campaigns_data):
        """Sync campaigns data to Supabase"""
        try:
            result = self.client.table('campaigns').upsert(campaigns_data).execute()
            return result
        except Exception as e:
            print(f"Error syncing campaigns to Supabase: {e}")
            return None
    
    def get_data_from_supabase(self, table_name):
        """Get data from Supabase table"""
        try:
            result = self.client.table(table_name).select("*").execute()
            return result.data
        except Exception as e:
            print(f"Error fetching data from Supabase: {e}")
            return []