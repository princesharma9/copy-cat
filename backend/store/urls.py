from django.urls import path
from . import views

urlpatterns = [
    
     
    path('Allproducts/', views.product_list, name='product_list'),
    # path('products/<int:pk>/', views.product_detail, name='product_detail'),
]