from enum import unique
from os import name

from django.db import models
from django.contrib.auth.models import User

class Category(models.Model):
    name = models.CharField(max_length=100, unique=True)
    # slug = models.SlugField(unique=True)

    def __str__(self):
        return self.name
    
class Product(models.Model):
    category = models.ForeignKey(Category,on_delete=models.CASCADE, related_name='products')
    productImage = models.ImageField(upload_to='product_images')
    brandName = models.CharField(max_length=50)
    description = models.TextField(blank=True)
    created_at = models.DateTimeField( auto_now_add=True)
    rating = models.DecimalField(max_digits=5, decimal_places=1, default=4.5, blank=True, null=True)
    size_choice = [
        ('S', 'Small Size'),
        ('M', 'Medium Size'),
        ('L', 'Large Size'),
        ('XL', 'Extra Large Size'),
    ]
    size = models.CharField(max_length=5, choices=size_choice)
    salePrice = models.IntegerField()
    originalPrice = models.IntegerField()

    # @property
    # def off(self):
    #     return round((self.total_price - self.price/self.total_price) * 100)

    @property
    def off(self):
        return round(((self.originalPrice - self.salePrice) / self.originalPrice) * 100)

    class Meta:
        constraints = [
            models.UniqueConstraint(
                fields = ['brandName', 'size', 'category'],
                name = 'no product size same'
            )
        ]

    def __str__(self):
        return f'{self.brandName} - {self.category} - {self.id}'
    


class UserProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    phone = models.CharField(blank=True, max_length=50)
    address = models.TextField()

    def __str__(self):
        return self.user.username


class Order(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    total_amount = models.DecimalField(max_digits=10, decimal_places=2)

    def __str__(self):
        return f'Order {self.id}'

class OrderItem(models.Model):
    order = models.ForeignKey(Order, related_name='items', on_delete=models.CASCADE)
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    quantity = models.PositiveIntegerField(default=1)
    price = models.DecimalField(max_digits=5, decimal_places=2)

    def __str__(self):
        return f'{self.quantity} X {self.product.brandName}'





    




