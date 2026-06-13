from django.http import JsonResponse
from .models import Product
# Create your views here.
def product_list(request):
    
    products = list(Product.objects.all().values())
    return JsonResponse(products, safe=False)