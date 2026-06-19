from rest_framework import serializers
from  .models import Product, Category, CartItem, Cart

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'


class ProductSerializer(serializers.ModelSerializer):
    category = CategorySerializer(read_only = True)
    off = serializers.ReadOnlyField()

    class Meta:
        model = Product
        fields = '__all__'

 
class CartItemSerializer(serializers.ModelSerializer):
    product_name = serializers.CharField(source='product.brandName', read_only=True)
    product_price = serializers.DecimalField(source='product.salePrice', max_digits=10, decimal_places=2, read_only=True)
    product_image = serializers.ImageField(source='product.productImage', read_only=True)

    class Meta:
        model = CartItem
        fields = '__all__'

class CartSerializer(serializers.ModelSerializer):
    items = CartItemSerializer(many=True, read_only=True)
    total = serializers.ReadOnlyField()

    class Meta:
        model = Cart
        fields = '__all__'

     