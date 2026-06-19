from django.urls import path
from . import views

urlpatterns = [
    
     
    path('products/', views.get_products, name='product_list'),
    path('products/<int:product_id>/', views.get_product, name='product_card'),
    path('category/', views.get_category, name='product_list'),
    path('cart/', views.get_cart),
    # path('cart/add/', views.add_to_cart),
    # path('cart/remove/', views.remove_from_cart)
]