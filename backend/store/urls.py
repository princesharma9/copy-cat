from django.urls import path
from . import views

urlpatterns = [
    
     
    path('products/', views.get_product, name='product_list'),
    path('category/', views.get_category, name='product_list'),
    # path('products/<int:pk>/', views.product_detail, name='product_detail'),
]