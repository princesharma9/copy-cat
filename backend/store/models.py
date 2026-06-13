from os import name

from django.db import models

# Create your models here.
class Product(models.Model):
    name = models.CharField(max_length=100)
    details = models.TextField()
    price = models.DecimalField(max_digits=10, decimal_places=2)
    image = models.ImageField(upload_to='product_images/', null=True, blank=True)
    offer = models.DecimalField(max_digits=5, decimal_places=2, null=True, blank=True)
    discount = models.DecimalField(max_digits=5, decimal_places=2, null=True, blank=True)

     

    def __str__(self):
        return self.name